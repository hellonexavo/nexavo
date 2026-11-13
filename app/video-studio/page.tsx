import type { Metadata } from "next";
import VideoStudio from "./VideoStudio";
export const metadata: Metadata = { title:"YY Motion Studio | Private Production Workspace",description:"Private studio for planning and generating original cinematic marketing videos for YY Builds.",robots:{index:false,follow:false}};
export default function VideoStudioPage(){return <VideoStudio/>;}
