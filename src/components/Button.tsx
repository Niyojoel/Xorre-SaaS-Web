import clsx from "clsx"
import { ReactElement, ReactNode} from "react"
import { Marker } from "./"

type ButtonProps = {
    children: ReactNode,
    icon?: string | ReactElement,
    href?: string,
    theme?: (dark: string, light: string) => string,
    additionalClassName?: string,
    markerFill?: string,
    onclick?: () => void
}

const Button = ({icon, href, theme, onclick, children, additionalClassName, markerFill}: ButtonProps) => {

  const Inner = ()=> (
    <>
        <span className={clsx("relative flex items-center min-h-[60px] max-md:min-h-[55px] max-sm:min-h-[50px] px-4 max-sm:px-3 g4 rounded-2xl inner-before overflow-hidden", theme && theme("group-hover:before:opacity-100", "group-hover:before:opacity-0 group-hover:g7"))}>
            <span className="absolute -left-[1px] max-sm:hidden"><Marker fill={markerFill}/></span>
            {icon && (
                <img src={icon as string} alt="button-icon" className="size-10 max-sm:size-7 mr-5 max-lg:mr-3 max-sm:mr-2 object-contain z-10 "/>
            )}
            <span className="relative z-2 flex gap-[0.75rem] font-poppins base-bold text-p1 uppercase transition-text duration-500 group-hover:text-p4">{children}</span>
        </span>
        <span className="glow-before glow-after"/>
    </>
  )

  return href ? (
    <a className={clsx("relative p-0.5 max-md:py-0 g5 rounded-2xl group", additionalClassName, theme && theme("shadow-500","shadow-100"))} href={href}> 
        <Inner/>
    </a>
  ) : (
    <button className={clsx("relative p-0.5 max-md:p-0 g5 rounded-2xl group", additionalClassName, theme && theme("shadow-500","shadow-100"))} onClick={onclick}>
        <Inner/>
    </button>
  )
}

export default Button