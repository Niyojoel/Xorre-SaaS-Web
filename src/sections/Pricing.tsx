import { useState } from 'react';
import {Element} from 'react-scroll';
import clsx from 'clsx';
import CountUp from 'react-countup';
import { plans } from '../constants';
import { Button } from '../components';
import { CheckCircle } from 'lucide-react';

type PricingProps = {
  themeStyle: (dark: string, light: string) => string,
  theme: string
}

const Pricing = ({themeStyle, theme}: PricingProps) => {
  const [monthly, setMonthly] = useState(true)
  return (
    <section>
      <Element name='pricing'>
        <div className="container relative z-2">
          <div className={clsx("max-w-960 pricing-head_before relative mx-auto border-l border-r bg-s1/0 py-32 max-xl:max-w-4xl max-lg:border-none max-md:py-22 flex flex-col items-center", themeStyle("border-s2","border-s2 border-opacity-20"))}>
            <h3 className='h3 max-lg:h4 max-md:h5 z-10 relative mx-auto mb-16 xl:max-w-[650px] max-w-lg text-center text-[var(--p4)] max-md:mb-11 max-sm:max-w-sm'>
              Flexible Pricing for teams of all sizes
            </h3>
            <div className={clsx("relative z-4 mx-auto flex w-[375px] max-md:w-[300px] max-sm:w-[80%] rounded-3xl border-[3px] border-s4/25 p-2 max-md:p-1 backdrop-blur-[6px] max-md:mb-11 max-sm:max-w-sm", themeStyle("bg-s1/50", "bg-s1/20"))}>
                <button className={clsx("pricing-head_btn", monthly && 'text-[var(--p4)]')} onClick={() => setMonthly(true)}>Monthly</button>
                <button  className={clsx("pricing-head_btn", !monthly && 'text-[var(--p4)]')} onClick={() => setMonthly(false)}>Annual</button>
                <div className={clsx('g4 rounded-14 before:h-100 pricing-head_btn_before absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(50%-8px)] overflow-hidden shadow-400 transition-transform duration-500', !monthly && 'translate-x-full')}/>
            </div>
              <div className="pricing-bg">
                  <img src="/images/bg-outlines.svg" width={960} height={380} alt="outline"  className='relative z-2'/>
                  <img src="/images/bg-outlines-fill.png" width={960} height={380} alt="outline-fill"  className='absolute inset-0 opacity-5 mix-blend-soft-light'/>
              </div>
          </div>
          
          {/* pricing-section */} 
          <div className="scroll-hide relative z-2 -mt-12 flex items-start max-xl:gap-5 max-xl:overflow-auto max-xl:pt-6">
            {plans.map((plan, index)=> {
              const isPrimaryPlan = index === 1;
              return (
                <div key={plan.id} className="pricing-plan_first pricing-plan_last pricing-plan_odd pricing-plan_even relative border-2 py-7 max-md:p-5 max-xl:min-w-80 max-md:min-w-72 max-lg:rounded-3xl xl:w-[calc(33.33%+2px)]">
                    {isPrimaryPlan && (
                        <div className="g4 absolute h-[330px] left-0 right-0 top-0 z-1 rounded-tl-3xl rounded-tr-3xl"/>
                    )}
                    <div className={clsx("absolute right-0 left-0 z-2 flex items-center justify-center", isPrimaryPlan ? '-top-6' : "-top-6 xl:-top-11")}>
                        <img src={plan.logo} alt={plan.title} className={clsx('object-contain drop-shadow-2xl', isPrimaryPlan ? 'size-[120px] max-md:size-[110px]': 'size-[88px] max-md:size-[78px]')} />
                    </div>
                    <div className={clsx("relative flex flex-col items-center", isPrimaryPlan ? 'pt-24' : 'pt-12')}>
                        <div className={clsx("small-2 rounded-20 relative z-2 mx-auto mb-6 border-2 px-4 py-1.5 uppercase", isPrimaryPlan ? themeStyle("border-p3 text-p", "border-p3 text-p4") : themeStyle("border-p1 text-p1", "border-p4  text-p1") )}>
                            {plan.title}
                        </div>
                        <div className="relative z-2 flex items-center justify-center">
                            <div className={clsx("h-num flex items-start", isPrimaryPlan ? 'text-p3' : "text--p4)]")}>
                            $ <CountUp 
                                start={plan.priceMonthly} 
                                end={monthly ? plan.priceMonthly : plan.priceYearly}
                                duration={0.4}
                                useEasing={false}
                                preserveValue  
                              />
                            </div>
                            <div className={clsx("small-1 relative top-3 ml-1 uppercase", isPrimaryPlan && themeStyle("text-[var(--p4)]" ,"text-p4"))}>
                                / mo
                            </div>
                        </div>
                    </div>
                    <div className={clsx('body-1 relative z-2 mb-10 w-full border-b-s2 pb-9 text-center text-[var(--p4)]', isPrimaryPlan && `border-b ${themeStyle("text-[var(--p4)]", "text-p4")}`)}>
                        {plan.caption}
                    </div>
                    <ul className='mx-auto space-y-4 max-md:space-y-2 xl:px-14 px-7'>
                        {plan.features.map(feature => (
                            <li key={feature} className={clsx('relative flex items-center', themeStyle("gap-5", "gap-4"))}>
                                {theme === "dark" ? (<img src="/images/check.png" alt="check" className='size-10 object-contain'/>) :
                                (<CheckCircle fill='transparent' stroke='white' size={18} className={themeStyle("0", "-mt-1")}/>)}
                                <p className='flex-1'>{feature}</p>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-10 flex w-full justify-center">
                      <Button icon={plan.icon} theme={themeStyle}>Get Started</Button>
                    </div>
                    {isPrimaryPlan && (
                      <p className='small-compact mt-9 max-lg:mt-6 max-lg:-mb-2 max-md:mb-1.5 text-center text-p3 before:content-["-"] after:content-["-"] before:mx-2.5 after:mx-2.5'>Limited time offer</p>
                    )}
                </div>
              )
            })}
          </div>
        </div>
      </Element>
    </section>
  )
}

export default Pricing