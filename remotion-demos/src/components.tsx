import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Manrope';

const {fontFamily} = loadFont('normal', {weights: ['400', '500', '600', '700', '800'], subsets: ['latin']});
export const C = {bg: '#07090f', ink: '#f7f7fb', muted: '#969baa', lime: '#b6ff5c', violet: '#7357ff', cyan: '#52e5ff', card: '#11141d'};

export const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;
export const enter = (frame: number, fps: number, delay = 0) => spring({frame: frame - delay, fps, config: {damping: 18, stiffness: 120, mass: .85}});
export const fadeRange = (frame: number, start: number, end: number) => interpolate(frame, [start, start + 12, end - 12, end], [0, 1, 1, 0], clamp);

export const Scene: React.FC<React.PropsWithChildren<{accent?: string}>> = ({children, accent = C.violet}) => {
  const frame = useCurrentFrame();
  return <AbsoluteFill style={{fontFamily, color: C.ink, background: C.bg, overflow: 'hidden'}}>
    <div style={{position:'absolute', inset:-300, background:`radial-gradient(circle at ${40 + Math.sin(frame/55)*8}% ${25 + Math.cos(frame/70)*8}%, ${accent}2b, transparent 34%), radial-gradient(circle at 90% 75%, #52e5ff14, transparent 28%)`}} />
    <div style={{position:'absolute', inset:0, opacity:.17, backgroundImage:'linear-gradient(#ffffff0b 1px, transparent 1px),linear-gradient(90deg,#ffffff0b 1px,transparent 1px)', backgroundSize:'72px 72px', transform:`translateY(${frame%72}px)`}} />
    <div style={{position:'absolute', inset:0, boxShadow:'inset 0 0 240px #000'}} />{children}
  </AbsoluteFill>;
};

export const Brand: React.FC<{dark?: boolean}> = () => <div style={{position:'absolute', top:72, left:70, right:70, display:'flex', justifyContent:'space-between', alignItems:'center', zIndex:20}}>
  <div style={{fontWeight:800, fontSize:29, letterSpacing:-1}}>YY<span style={{color:C.lime}}>.</span> BUILDS</div>
  <div style={{fontSize:18, letterSpacing:3, color:C.muted}}>BUILD WHAT'S NEXT</div>
</div>;

export const Eyebrow: React.FC<React.PropsWithChildren<{color?: string}>> = ({children, color=C.lime}) => <div style={{fontSize:20,fontWeight:700,letterSpacing:4,textTransform:'uppercase',color,marginBottom:28}}>{children}</div>;

export const BigText: React.FC<{children: React.ReactNode; size?: number; align?: 'left'|'center'; accent?: string}> = ({children,size=94,align='left',accent=C.lime}) => <div style={{fontSize:size,lineHeight:.98,fontWeight:800,letterSpacing:-5,textAlign:align}}><span style={{background:`linear-gradient(135deg, #fff 30%, ${accent})`,WebkitBackgroundClip:'text',color:'transparent'}}>{children}</span></div>;

export const Pill: React.FC<React.PropsWithChildren<{active?: boolean}>> = ({children,active}) => <div style={{padding:'14px 20px',borderRadius:999,fontWeight:700,fontSize:18,background:active?C.lime:'#ffffff0b',color:active?'#081006':C.muted,border:`1px solid ${active?C.lime:'#ffffff18'}`}}>{children}</div>;

export const Icon: React.FC<{name:'mail'|'brain'|'flow'|'send'|'check'|'web'|'spark'|'play'; size?:number;color?:string}> = ({name,size=34,color='currentColor'}) => {
 const paths={mail:'M3 6h18v12H3V6Zm0 1 9 7 9-7',brain:'M9 5a3 3 0 0 0-5 2 3 3 0 0 0 0 5 3 3 0 0 0 3 5h2m6-12a3 3 0 0 1 5 2 3 3 0 0 1 0 5 3 3 0 0 1-3 5h-2M9 3v18m6-18v18M9 9H6m9 2h3M9 15H6m9 2h2',flow:'M5 4h6v5H5V4Zm8 11h6v5h-6v-5ZM8 9v4a4 4 0 0 0 4 4h1m3-2V9a3 3 0 0 0-3-3h-2',send:'m3 11 18-8-7 18-3-7-8-3Zm8 3 10-11',check:'m4 12 5 5L20 6',web:'M3 5h18v14H3V5Zm0 4h18M6 7h.01M9 7h.01',spark:'m12 2 2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2L12 2Z',play:'m8 5 11 7-11 7V5Z'};
 return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={paths[name]}/></svg>;
};

export const FinalCard: React.FC<{title:string; subtitle:string; accent?:string}> = ({title,subtitle,accent=C.lime}) => {const f=useCurrentFrame(),{fps}=useVideoConfig();const s=enter(f,fps,0);return <AbsoluteFill style={{alignItems:'center',justifyContent:'center',textAlign:'center',opacity:interpolate(f,[0,12],[0,1],clamp)}}>
 <div style={{transform:`scale(${.8+.2*s})`,width:850}}><div style={{width:90,height:90,borderRadius:26,margin:'0 auto 38px',display:'grid',placeItems:'center',fontWeight:800,fontSize:38,color:'#060908',background:accent,boxShadow:`0 0 80px ${accent}66`}}>YY</div><BigText size={92} align="center" accent={accent}>{title}</BigText><div style={{fontSize:28,color:C.muted,marginTop:35,letterSpacing:1}}>{subtitle}</div><div style={{height:1,background:'linear-gradient(90deg,transparent,#ffffff40,transparent)',margin:'58px 0'}}/><div style={{fontSize:32,fontWeight:700}}>yybuilds.com <span style={{color:accent}}>↗</span></div></div>
 </AbsoluteFill>};

export const Progress: React.FC<{color?:string}> = ({color=C.lime}) => {const f=useCurrentFrame(),{durationInFrames}=useVideoConfig();return <div style={{position:'absolute',left:0,bottom:0,height:7,width:`${f/durationInFrames*100}%`,background:color,boxShadow:`0 0 24px ${color}`}}/>};
