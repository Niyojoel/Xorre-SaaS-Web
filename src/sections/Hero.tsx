import {Element, Link as LinkScroll} from "react-scroll"
import {Button} from "../components"

const Hero = ({themeStyle}: {themeStyle:(dark: string, light: string) => string}) => {
  return (
    <section className="pt-60 pb-40 max-lg:pb-36 max-md:pt-20 max-md:pb-30">
      <Element name="hero">
        <div className="container">
            <div className="relative z-20 max-w-512 max-lg:max-w-388 max-md:pt-10">
                <div className="caption small-2 uppercase">
                    Video Editing
                </div>
                <h1 className="mb-6 h1 text-[var(--p4w)] uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">Amazingly Simple</h1>
                <p className="max-w-440 mb-14 body-1 max-md:mb-10">
                    We designed XORRE AI Video Editor to be easy to use, quick to learn and surprisingly powerful.
                </p>
                <LinkScroll to='features' offset={0} spy smooth>
                    <Button icon="/images/zap.svg" theme={themeStyle}>Try it now </Button>
                </LinkScroll>
            </div>
            <div className="bg_container pointer-events-none h-[150vh]">
              <div className="relative h-[100vh] pointer-events-none hero-img_res">
                  <img src="/images/hero.png" alt="hero-image" className="w-[1230px] max-xl:w-[1100px] max-lg:size-[1000px] max-sm:size-[900px] max-lg:h-auto"/>
              </div>
            </div>
        </div>
      </Element>
    </section>
  )
}

export default Hero