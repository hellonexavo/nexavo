const PAYPAL_SANDBOX_BASE = "https://api-m.sandbox.paypal.com";

type PayPalErrorBody = {
  message?: string;
  details?: Array<{ issue?: string; description?: string }>;
};

function getCredentials() {
  if (process.env.PAYPAL_ENV !== "sandbox") {
    throw new Error("PayPal checkout is configured for sandbox only.");
  }

  const clientId = process.env.PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;
  if (!clientId || !clientSecret) throw new Error("PayPal sandbox credentials are not configured.");

  return { clientId, clientSecret };
}

async function getAccessToken() {
  const { clientId, clientSecret } = getCredentials();
  const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
  const response = await fetch(`${PAYPAL_SANDBOX_BASE}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
    cache: "no-store",
  });

  const data = await response.json() as { access_token?: string } & PayPalErrorBody;
  if (!response.ok || !data.access_token) throw new Error(paypalError(data, "PayPal authentication failed."));
  return data.access_token;
}

export async function paypalRequest<T>(path: string, init: RequestInit = {}) {
  const accessToken = await getAccessToken();
  const response = await fetch(`${PAYPAL_SANDBOX_BASE}${path}`, {
    ...init,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      ...init.headers,
    },
    cache: "no-store",
  });

  const data = await response.json() as T & PayPalErrorBody;
  if (!response.ok) throw new Error(paypalError(data, "PayPal could not process this request."));
  return data;
}

function paypalError(data: PayPalErrorBody, fallback: string) {
  return data.details?.[0]?.description || data.details?.[0]?.issue || data.message || fallback;
}

export function publicPaymentError(error: unknown) {
  const message = error instanceof Error ? error.message : "";
  if (message.includes("configured")) return message;
  if (message.includes("INSTRUMENT_DECLINED")) return "INSTRUMENT_DECLINED";
  return "The sandbox payment could not be processed. Please try again.";
}
