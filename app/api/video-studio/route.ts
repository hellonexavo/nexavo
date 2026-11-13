import { NextRequest, NextResponse } from "next/server";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const endpoint = "fal-ai/veo3.1/fast";
const urlBase = "https://queue.fal.run/fal-ai/veo3.1";
const auth = (req: NextRequest) => {
 const secret=process.env.YY_VIDEO_STUDIO_PASSWORD;
 const provided=req.headers.get("x-studio-password")||"";
 return Boolean(secret && provided && secret.length>=16 && provided.length===secret.length && (()=>{let n=0;for(let i=0;i<provided.length;i++)n|=provided.charCodeAt(i)^secret.charCodeAt(i);return n===0;})());
};
function reject(){return NextResponse.json({error:"Studio is locked. Set YY_VIDEO_STUDIO_PASSWORD (16+ characters) and enter it in the studio."},{status:401,headers:{"Cache-Control":"no-store"}});}
export async function GET(req: NextRequest){
 if(!auth(req))return reject();
 const id=req.nextUrl.searchParams.get("id")||"";
 if(!/^[a-zA-Z0-9-]{12,90}$/.test(id))return NextResponse.json({error:"Invalid request ID"},{status:400});
 const key=process.env.FAL_KEY;
 if(!key)return NextResponse.json({error:"FAL_KEY is not configured. No generation charges have been made."},{status:503});
 const result=req.nextUrl.searchParams.get("result")==="1";
 const u=urlBase+"/requests/"+encodeURIComponent(id)+(result?"":"/status");
 const response=await fetch(u,{headers:{Authorization:"Key "+key},cache:"no-store",signal:AbortSignal.timeout(12000)});
 const data=await response.json().catch(()=>({error:"Provider returned invalid JSON"}));
 return NextResponse.json(data,{status:response.status,headers:{"Cache-Control":"no-store"}});
}
export async function POST(req: NextRequest){
 if(!auth(req))return reject();
 const key=process.env.FAL_KEY;
 if(!key)return NextResponse.json({error:"FAL_KEY is not configured. Generation disabled; nothing has been charged."},{status:503});
 if(process.env.YY_VIDEO_STUDIO_ALLOW_GENERATION!=="true")return NextResponse.json({error:"Paid generation is switched off. Explicitly set YY_VIDEO_STUDIO_ALLOW_GENERATION=true after setting a spending limit in fal."},{status:403});
 const body=await req.json().catch(()=>null);
 const prompt=typeof body?.prompt==="string"?body.prompt.trim():"";
 if(prompt.length<30||prompt.length>3500)return NextResponse.json({error:"Prompt must contain 30–3500 characters."},{status:400});
 const aspectRatio=body?.aspectRatio==="16:9"?"16:9":"9:16";
 // Fixed model and duration: prevent a public client choosing unknown or expensive endpoints.
 const response=await fetch("https://queue.fal.run/"+endpoint,{method:"POST",headers:{Authorization:"Key "+key,"Content-Type":"application/json","X-Fal-Queue-Priority":"low"},body:JSON.stringify({prompt,aspect_ratio:aspectRatio,duration:"8s",resolution:"720p",generate_audio:true}),signal:AbortSignal.timeout(15000),cache:"no-store"});
 const data=await response.json().catch(()=>({error:"Provider returned invalid JSON"}));
 return NextResponse.json(data,{status:response.status,headers:{"Cache-Control":"no-store"}});
}
