import {Element} from 'react-scroll';
import {details, features} from "../constants"
import { Button } from '../components';
import clsx from 'clsx';

type FeaturesProps = {
    themeStyle: (dark: string, light: string) => string,
    setDisplayVideo: (displayVideo: boolean) => void
}

const Features = ({setDisplayVideo, themeStyle}: FeaturesProps) => {
  return (
    <Element name="features">
        <section className="container pt-36 max-md:pt-32">
            <div className="relative z-20 flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-7xl md:overflow-hidden max-md:flex-col feature-after md:g7 max-md:border-none max-md:rounded-none max-md:gap-5">
                {features.map(({id, icon, title, caption, text, button})=> (
                    <div key={id} className='relative z-2 md:px-10 px-5 pb-10 flex-50 max-md:g7 max-md:border-2 max-md:border-s3 max-md:rounded-3xl max-md:flex-320'>
                        <div className="w-full flex justify-start items-start">
                            <div className="-ml-3 mb-12 max-md:mb-7 flex flex-col items-center justify-center">
                                <div className="w-0.5 h-16 max-md:h-12 bg-s3"/>
                                <img src={icon as string} alt={title} className='size-28 max-sm:size-24 object-contain'/>
                            </div>
                        </div>
                        <p className='caption mb-5 max-md:mb-6'>
                            {caption}
                        </p>
                        <h2 className='max-w-400 mb-7 h3 text-[var(--p4w)] max-md:mb-6 max-md:h5'>
                            {title}
                        </h2>
                        <p className="mb-11 body-1 max-md:mb-8 max-md:body-3">
                            {text}
                        </p>
                        <Button icon={button.icon} theme={themeStyle} onclick={()=> setDisplayVideo(true)}>{button.title}</Button>
                    </div>
                ))}

                <ul className="relative flex justify-around flex-grow px-auto border-2 border-s3 rounded-7xl max-md:flex-wrap max-md:py-8 max-md:justify-start max-sm:hidden">
                    <div className="absolute bg-s3/20 top-[38%] left-0 right-0 w-full h-[1px] z-10"/>
                    {details.map(({id, icon, title}) => (
                        <li key={id} className='relative pt-16 px-4 pb-14 max-md:py-5 max-md:flex-1'>
                            <div className="absolute top-0 bottom-0 left-1/2 bg-s3/20 w-[1px] h-full z-10"/>
                            <div className={clsx("flex items-center justify-center mx-auto mb-3 border-2 border-p4 rounded-full hover:border-s4 transition-all duration-500 size-20", themeStyle("shadow-500", "shadow-0"))}>
                                <img src={icon as string} alt={title} className='size-17/20 object-contain z-20'/>
                            </div>
                            <h3 className='relative z-2 max-w-36 mx-auto my-0 base-small text-center uppercase'>
                                {title}
                            </h3>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    </Element>
  )
}

export default Features