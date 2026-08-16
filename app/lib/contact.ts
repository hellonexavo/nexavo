export const contactDetails = {
  email: "yybuilds.contact@gmail.com",
  telegram: "@yybuilds",
  website: "yybuilds.com",
} as const;

export const formSubmitEndpoint = `https://formsubmit.co/ajax/${contactDetails.email}`;
