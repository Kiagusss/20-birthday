"use client";
import AutoPlayAudio from "../../components/autoplayaudio";
import { FAQ } from "../../components/faq";

import LayoutTextFlipDemo from "../../components/layout-text-flip-demo";
import TimelineDemo from "../../components/timeline-demo";

import { VideoReferencesSection } from "../../components/video-refrensi";


export default function Home() {
  return (
      <div>
     
      {/* <TextGenerateEffectDemo /> */}
      <LayoutTextFlipDemo/>
      <VideoReferencesSection/>
      <TimelineDemo/>
      <FAQ/>
      <AutoPlayAudio/>
      </div>
  

    
  );
}
