import {Element} from 'react-scroll'
import { faq } from '../constants'
import {FaqItem} from '../components'
import clsx from 'clsx'

const Faq = ({themeStyle}: {themeStyle: (dark: string, light:string)=> string}) => {
  const halfLength= Math.floor(faq.length/2)
  return (
    <section>
        <Element name="faq" className="relative">
            <div className="container relative z-2 pt-32 pb-20">
                <div className="">
                    <h3 className='h3 max-md:h5 md:w-640 text-wrap max-lg:max-w-md mb-7 text-[var(--p4)] '>Curiosity didn't kill the cat, it gave it answers.</h3>
                    <p className='body-1 max-lg:max-w-sm'>You've got questions, we've got answers.</p>
                </div>
                <div className={clsx('faq-line_after w-0.5 h-full absolute left-[calc(50%-1px)] top-2 -z-1', themeStyle("bg-s2", "bg-s2 bg-opacity-20"))}/>
            </div>
            <div className={clsx("faq-glow_before relative z-2 border-2  bg-[var(--s1)]", themeStyle("border-s2 border-opacity-100", "border-p4 border-opacity-80"))}>
                <div className="container flex gap-10 max-lg:block">
                    <div className={clsx("rounded-half absolute -top-10 left-[calc(50%-40px)] z-4 flex size-20 items-center justify-center border-2",themeStyle("bg-s2 border-s2", "bg-[var(--p4)] border-[var(--p4)]"))}>
                        <img src="/images/faq-logo.svg" alt="logo" className='size-1/2'/>
                    </div>
                    <div className="relative flex-1 pt-24">
                        {faq.slice(0, halfLength).map((item, index)=> (
                            <FaqItem key={item.id} item={item} index={index} theme={themeStyle}/>
                        ))}
                    </div>
                    <div className="relative flex-1 lg:pt-24">
                        {faq.slice(halfLength).map((item, index)=> (
                            <FaqItem key={item.id} item={item} index={halfLength+index} theme={themeStyle}/>
                        ))}
                    </div>
                </div>
                <div className='faq-line_after absolute left-[calc(50%-1px)] top-0 -z-1 h-full w-0.5 bg-s2 max-lg:hidden'/>
            </div>
        </Element>
    </section>
  )
}

export default Faq