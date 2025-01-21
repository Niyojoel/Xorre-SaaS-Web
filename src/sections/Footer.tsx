import clsx from "clsx"
import { socials } from "../constants"

const Footer = ({themeStyle}: {themeStyle: (dark:string, light:string)=> string}) => {
  return (
    <footer className={clsx("py-5", themeStyle("bg-none", "bg-[var(--p4)]"))}>
        <div className="container">
            <div className="w-full flex flex-wrap max-md:flex-col max-md:gap-7 max-[sm]:items-center">
                <div className="small-compact flex flex-1 max-[770px]:flex-col items-center max-md:order-2 justify-between max-[sm]:justify-center max-[sm]:gap-0 gap-5">
                    <p className={clsx("text-center max-md:order-2 text-nowrap", themeStyle("", "text-[var(--p5s)]"))}>Copyright &copy; Xorre </p>
                    <div className="flex items-center max-[770px]:justify-center max-md:justify-between sm:ml-auto max-[770px]:gap-5">
                        <p className="legal-after relative mr-9 text-p5 transition-all duration-500 hover:text-p1 cursor-pointer">
                            Privacy Policy
                        </p>
                        <p className="text-p5 transition-all duration-500 hover:text-p1 cursor-pointer">
                            Terms of Use
                        </p>
                    </div>
                </div>
                <ul className="flex flex-1 justify-center max-md:order-1 gap-3 md:justify-end">
                    {socials.map(({id, url, icon, title})=>(
                        <li key={id} className="">
                            <a href={url} className="social-icon">
                                <img src={icon as string} alt={title} className="size-1/3 object-contain" />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer