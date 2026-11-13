"use client";
import {useState} from "react";
import Link from "next/link";
import st from "./studio.module.css";
type Shot={label:string;role:string;prompt:string;requestId?:string;status?:string;video?:string;error?:string};
const initial:Shot[]=[
 {label:"01 / THE FRICTION",role:"Hook · 0–8s",prompt:"Vertical 9:16 cinematic live-action advertisement, ultra realistic. A small business owner in a modern European studio office at dawn, overwhelmed with dozens of loose paper forms and incoming email notifications on a laptop. The camera executes a dynamic handheld push-in toward their face, then a close macro shot of the messy desk. Natural skin, believable fingers, real physics, cinematic soft window light and contrast. Subtle diegetic typing and notification sounds. NO on-screen text, NO logos, NO captions. Original commercial footage."},
 {label:"02 / THE SHIFT",role:"Solution · 8–16s",prompt:"Vertical 9:16 cinematic commercial, ultra realistic. Same modern European studio office, same small business owner in casual charcoal shirt. A paper form is placed on a desk, then the camera makes a smooth match-cut to a clean laptop screen where a neat structured workflow appears (no readable screen text). The owner becomes relaxed as the desk clears, realistic motion, subtle camera orbit, softly illuminated green accents, 35mm cinema lens, intricate reflections and genuine human movement. Natural ambient sound. NO logos, NO overlaid text, NO captions."},
 {label:"03 / THE RESULT",role:"Payoff · 16–24s",prompt:"Vertical 9:16 cinematic live-action ad, ultra realistic. Same small business owner from the previous shots, now talking confidently to a real customer inside a welcoming bright modern European workspace. The owner closes a laptop, stands and shakes hands naturally, authentic candid smiles, warm afternoon sun through windows, smooth tracking camera movement ending on a satisfying medium-wide shot. Immersive room tone, believable human gestures and hands. Premium commercial lighting, tasteful color grading. NO watermarks added by instruction, NO logos, NO text overlays."}
];
export default function VideoStudio(){
 const [shots,setShots]=useState<Shot[]>(initial);
 const [password,setPassword]=useState("");
 const [busy,setBusy]=useState(-1);
 const [message,setMessage]=useState("");
 const [aspectRatio,setAspectRatio]=useState<"9:16"|"16:9">("9:16");
 const [title,setTitle]=useState("Your work. Less busywork. More possibility.");
 const [caption,setCaption]=useState("Still managing requests by hand? YY Builds helps small businesses design smarter websites and workflows. Explore a working demo: yybuilds.com/business-website-demo #YYBuilds #SmallBusiness #Automation");
 const request=async(method:"POST"|"GET",i:number,result=false)=>{
  const shot=shots[i];setBusy(i);setMessage("");
  try{
   const query=method==="GET"?"?id="+encodeURIComponent(shot.requestId||"")+(result?"&result=1":""):"";
   const r=await fetch("/api/video-studio"+query,{method,headers:{"x-studio-password":password,...(method==="POST"?{"Content-Type":"application/json"}:{})},...(method==="POST"?{body:JSON.stringify({prompt:shot.prompt,aspectRatio})}:{})});
   const data=await r.json();if(!r.ok)throw new Error(typeof data.error==="string"?data.error:JSON.stringify(data.detail||data));
   setShots(prev=>prev.map((s,j)=>j===i?{...s,requestId:data.request_id||s.requestId,status:data.status||s.status,video:data.video?.url||s.video,error:undefined}:s));
   if(method==="GET"&&!result&&data.status==="COMPLETED")setMessage("Shot complete. Press Retrieve video to load the result.");
   else if(method==="POST")setMessage("Generation request accepted. Check status in a moment; paid provider credits may apply.");
  }catch(e){const error=e instanceof Error?e.message:"An error occurred";setShots(prev=>prev.map((s,j)=>j===i?{...s,error}:s));setMessage(error);}finally{setBusy(-1);}
 };
 const update=(i:number,text:string)=>setShots(x=>x.map((s,j)=>i===j?{...s,prompt:text}:s));
 const downloadBrief=()=>{
  const data={project:title,format:aspectRatio,provider:"fal-ai/veo3.1/fast",durationPerScene:"8s",caption,shots:shots.map(({label,role,prompt,video})=>({label,role,prompt,video}))};
  const blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"});const url=URL.createObjectURL(blob);const el=document.createElement("a");el.href=url;el.download="yy-builds-video-production.json";el.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
 };
 return <div className={st.root}>
 <header className={st.header}><div className={st.wrap}><div className={st.top}><div><Link href="/" className={st.logo}>YY<span>·</span> MOTION</Link><small>PRIVATE PRODUCTION WORKSPACE · BETA</small></div><Link className={st.back} href="/business-website-demo">Business website ↗</Link></div></div></header>
 <main className={st.wrap}>
 <section className={st.hero}><div><p className={st.eyebrow}>DIRECTOR'S DESK / 001</p><h1>Stories worth <em>watching.</em></h1><p>Production brief, cinematic scene prompts, real motion video generation and a preview desk. No animated slideshow pretending to be a film.</p></div><div className={st.heroInfo}><strong>3 × 8s</strong><span>24s creative concept · vertical by default</span><strong>Veo 3.1 Fast</strong><span>Third-party video model · paid API credits required</span></div></section>
 <section className={st.toolbar}><div><label htmlFor="proj">Campaign name</label><input id="proj" value={title} onChange={e=>setTitle(e.target.value)}/></div><div><label htmlFor="aspect">Format</label><select id="aspect" value={aspectRatio} onChange={e=>setAspectRatio(e.target.value as "9:16"|"16:9")}><option value="9:16">9:16 · TikTok / Reels</option><option value="16:9">16:9 · YouTube / website</option></select></div><div><label htmlFor="pass">Studio password</label><input id="pass" type="password" autoComplete="off" placeholder="Required for API actions" value={password} onChange={e=>setPassword(e.target.value)}/></div></section>
 <section className={st.section}><div className={st.sectionTitle}><div><p className={st.eyebrow}>01 / THE FILM</p><h2>Shot-by-shot direction.</h2></div><span className={st.muted}>Each request renders one cinematic clip, not a still image.</span></div>
 <div className={st.shots}>{shots.map((x,i)=><article className={st.shot} key={i}><div className={st.shotTop}><span>{x.label}</span><small>{x.role}</small></div><div className={st.frame} style={{aspectRatio:aspectRatio==="9:16"?"9 / 11":"16 / 9"}}>{x.video?<video src={x.video} controls playsInline preload="metadata"/>:<div className={st.empty}><span>{("0"+(i+1)).slice(-2)}</span><p>{i===0?"THE PROBLEM":i===1?"THE TRANSITION":"THE REWARD"}</p><small>Generated video appears here</small></div>}</div><label htmlFor={"shot"+i}>Camera + action + environment + audio</label><textarea id={"shot"+i} value={x.prompt} onChange={e=>update(i,e.target.value)} rows={10}/><div className={st.shotButtons}><button disabled={busy!==-1||!password} onClick={()=>request("POST",i)}>{busy===i?"Working…":"Generate video ↗"}</button><button disabled={busy!==-1||!password||!x.requestId} onClick={()=>request("GET",i)}>Check status</button><button disabled={busy!==-1||!password||!x.requestId} onClick={()=>request("GET",i,true)}>Retrieve video</button></div>{x.status&&<p className={st.status}>Status: {x.status} · Request {x.requestId}</p>}{x.error&&<p className={st.error} role="alert">{x.error}</p>}{x.video&&<a className={st.download} href={x.video} target="_blank" rel="noopener noreferrer">Open generated MP4 ↗</a>}</article>)}</div>
 </section>
 <section className={st.lower}><div><p className={st.eyebrow}>02 / RELEASE COPY</p><h2>Give the film a purpose.</h2><label htmlFor="caption">TikTok / Reels caption</label><textarea id="caption" value={caption} rows={5} onChange={e=>setCaption(e.target.value)}/><div className={st.actions}><button onClick={()=>navigator.clipboard.writeText(caption)}>Copy caption</button><button onClick={downloadBrief}>Export production brief ↓</button></div></div><aside><p className={st.eyebrow}>BEFORE GENERATION</p><h3>Production controls</h3><p>Generated clips can be downloaded individually. Joining clips, subtitles, audio mix and a final 24-second MP4 still require a video editor. This is a production desk, not a finished editing suite.</p><p>The provider charges per generated second. API generation is locked unless the studio password, FAL_KEY and YY_VIDEO_STUDIO_ALLOW_GENERATION=true are configured on the server. Nothing in this page can silently charge your account.</p><p>Check rights, consent and AI content labeling before any public post. No published posts are implied here.</p></aside></section>
 {message&&<p role="status" className={st.message}>{message}</p>}
 </main><footer className={st.footer}>YY BUILDS / MOTION STUDIO · CREATIVE WORKSPACE · NO AUTOMATIC PUBLICATION</footer></div>;
}
