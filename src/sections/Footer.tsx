import clsx from "clsx"
import { socials } from "../constants"

const Footer = ({themeStyle}: {themeStyle: (dark:string, light:string)=> string}) => {
  return (
    <footer className={clsx("py-5", themeStyle("bg-none", "bg-[var(--p4)]"))}>
        <div className="container">
            <div className="w-full flex max-md:flex-col">
                <div className="small-compact flex flex-1 flex-wrap items-center justify-between gap-5">
                    <p className={clsx("text-center", themeStyle("", "text-[var(--p5s)]"))}>Copyright &copy; Xorre </p>
                    <div className="flex items-center justify-center flex-wrap sm:ml-auto">
                        <p className="legal-after relative mr-9 text-p5 transition-all duration-500 hover:text-p1 cursor-pointer">
                            Privacy Policy
                        </p>
                        <p className="text-p5 transition-all duration-500 hover:text-p1 cursor-pointer">
                            Terms of Use
                        </p>
                    </div>
                </div>
                <ul className="flex flex-1 justify-center gap-3 max-md:mt-10 md:justify-end">
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