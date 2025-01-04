import clsx from "clsx"
import { ReactElement, ReactNode } from "react"
import { Marker } from "./"

type ButtonProps = {
    children: ReactNode,
    icon: string | ReactElement,
    href?: string,
    additionalClassName?: string,
    markerFill?: string,
    onclick?: () => void
}

const Button = ({icon, href, onclick, children, additionalClassName, markerFill}: ButtonProps) => {

  const Inner = ()=> (
    <>
        <span className="relative flex items-center min-h-[60px] px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
            <span className="absolute -left-[1px]"><Marker fill={markerFill}/></span>
            {icon && (
                <img src={icon as string} alt="button-icon" className="size-10 mr-5 object-contain z-10"/>
            )}
            <span className="relative z-2 font-poppins base-bold text-p1 uppercase">{children}</span>
        </span>
        <span className="glow-before glow-after"/>
    </>
  )

  return href ? (
    <a className={clsx("relative p-0.5 g5 rounded-2xl shadow-500 group", additionalClassName)} href={href}> 
        <Inner/>
    </a>
  ) : (
    <button className={clsx("relative p-0.5 g5 rounded-2xl shadow-500 group")} onClick={onclick}>
        <Inner/>
    </button>
  )
}

export default Button