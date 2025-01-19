import {Element} from 'react-scroll';
import { links, logos } from '../constants';
import { Button, Marker } from '../components';
import { PlayIcon} from 'lucide-react';
import clsx from 'clsx';

type DownloadProps = {
  setDisplayVideo: (displayVideo: boolean) => void,
  theme: string,
  themeStyle: (dark:string, light:string) => string
}

const Download = ({setDisplayVideo, theme, themeStyle}: DownloadProps) => {

  return (
    <section>
      <Element name="download" className={clsx("g7 relative", themeStyle("pb-28 max-lg:pb-24 max-md:pt-0 max-md:pb-0", "pb-0"))}>
        <div className={clsx("h-[110vh] max-xl:h-[85vh] max-md:h-[80vh]", themeStyle("max-xl:h-[85vh] max-md:h-[65vh]", "max-xl:h-[85vh] max-md:h-[80vh]"))}>
          <div className="container flex items-center h-[100%] max-lg:md:pt-28">
            <div className="mr-6 flex-540 max-xl:flex-200 max-lg:flex-256 max-md:flex-100">
              <div className="relative flex items-center mb-10">
                {theme === "dark" ? (<img src="/images/xorre.svg" alt="logo" width={160} height={55}/>
                ) : (
                <div className="flex gap-3 items-center pointer-events-none">
                  <div className={clsx("rounded-full flex size-14 items-center justify-center border-2", themeStyle("bg-s2 border-s2", "bg-[var(--p4)] border-[var(--p4)]"))}>
                    <img src="/images/faq-logo.svg" alt="logo" className='size-3/4'/>
                  </div>
                  <p className='text-[2.1rem] tracking-tighter font-bold text-[var(--p4h)]'>XORA</p>
                </div>
                )}
              </div>
              <p className={clsx('body-1 mb-10 max-w-md', themeStyle("", "text-p4"))}>
                Try it now for free on IOS, Andriod, PC, Web -whatever your flavour, we've got you covered. 
              </p>
              <ul className="flex flex-wrap items-center gap-6 max-md:gap-4">
                {links.map(({id, url, icon})=> (
                  <li key={id} className='download_tech-link download_tech-link_last-before download_tech-link_last-after'>
                    <a href={url} download="favicon.ico" className='size-22 max-lg:size-20 download_tech-icon_before relative flex items-center justify-center rounded-half border-2 border-s3 bg-s1 transition-borderColor duration-500 '>
                      <span className='absolute -top-2 rotate-90 max-sm:hidden'>
                        <Marker />
                      </span>
                      <img src="/images/lines.svg" alt="lines" className='absolute size-13/20 object-contain'/>
                      <span className="download_tech-icon">{icon}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <p className={clsx('py-10 text-base tracking-wide', themeStyle("", "text-p4"))}>
                Choose your System OS to Begin Download. <br/> You can also watch the Software Demo.
              </p>
              <Button icon="/images/magictouch.svg" onclick={()=> setDisplayVideo(true)} additionalClassName='hidden max-md:flex'>
                Watch Demo
              </Button>
            </div>
            <div className="bg_container h-[100%] max-md:hidden">
              <div className="absolute w-[920px] mb-10 left-[45%] max-xl:left-[55%] max-lg:left-[50%] top-[6%]">
                <div className="download_preview-before download_preview-after rounded-40 relative w-[100%]  max-xl:w-[800px] border-2 border-s5 p-6">
                  <div className="relative rounded-3xl bg-s1 px-4 pb-6 pt-14">
                    <span className="download_preview-dot left-6 bg-p2"></span>
                    <span className="download_preview-dot left-11 bg-s3"></span>
                    <span className="download_preview-dot left-16 bg-p1/15"></span>
                    <img src="/images/screen.jpg" alt="screen" width={855} height={655} className='rounded-xl pointer-events-none'/>
                    <button type="button" className={clsx("absolute z-20 cursor-pointer download_play-button top-[calc(50%-28px)] right-[calc(50%-28px)] max-xl:right-[calc(70%-28px)] w-14 h-14 p-2 g5 rounded-full place-items-center border-2 border-p4")} onClick={()=> setDisplayVideo(true)}>
                      <PlayIcon fill='#eaedff' size="70%" stroke="#eaedff"/>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={clsx("overflow-auto z-20 max-md:py-12 relative scroll-hide", themeStyle("bg-none max-xl:pt-24 max-md:pt-0 max-md:pb-22", "bg-s2 py-20 max-xl:mt-24 max-md:mt-0"))}>
          <ul className='min-w-[1100px] w-full overflow-auto flex justify-center'>
            {logos.map(({id, url, width, height, title})=> (
              <li key={id} className='mx-10'>
                <img src={url} alt={title} width={width} height={height}/>
              </li>
            ))}
          </ul>
        </div>
      </Element>
    </section>
  )
}

export default Download