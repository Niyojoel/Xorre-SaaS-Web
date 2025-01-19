import { X } from "lucide-react"
import clsx from "clsx"
import { useEffect, useRef, useState } from "react";

export type displayVideoProps = {
  displayVideo: boolean, 
  setDisplayVideo: (displayVideo: boolean) => void
}

const DemoVideo = ({displayVideo, setDisplayVideo}: displayVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(()=> {
    if(videoRef.current == null) return;

    if(displayVideo) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }else {
      videoRef.current.pause();
    }
  }, [displayVideo])

  return (
    <div className={clsx("video_container w-[100%] flex items-center justify-center p-10 video_backdrop transition-all duration-300", displayVideo ? "opacity-100 left-0 z-50" : "opacity-0 left-[100%] z-0")}>
        <video src="/videoSample.mp4" controls ref={videoRef} muted={false} className={clsx('relative w-[1100px] max-xl:w-[980px] max-lg:w-[900px] max-md:[800px] transition-opacity duration-200 delay-300')}/>
        {/* , displayVideo ? "opacity-100 mt-0" : "opacity-0 -mt-5" */}
        <button className='absolute top-[3%] max-xl:top-[5%] max-md:top-[6%] right-[4%]' onClick={()=> setDisplayVideo(false)}>
        <X stroke="#2EF2FF"/>
        </button>
    </div>
  )
}

export default DemoVideo