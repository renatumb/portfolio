import {RiDropFill, RiLeafFill, RiMenuLine, RiMoonFill, RiSunFill, RiTerminalBoxLine} from "@remixicon/react";
import {useEffect, useState} from "react";

export default function Header() {

    const availableThemes : string [] =  ['blue', 'dark', 'green', 'light']
    const [theme, setTheme] = useState( localStorage.getItem('themeSet') ? localStorage.getItem('themeSet') : availableThemes[1] )
    useEffect(() => {
        const root = document.getElementById('root')
        if (root) {
            root.setAttribute('data-theme', theme+'')
        }
        localStorage.clear()
        localStorage.setItem('themeSet', theme+'')
    }, [theme]);

    const selectTheme = (selectedTheme: string) => {
        setTheme(selectedTheme )
    }
    /*** ***/
    const toggleMenu = () => {
        const mobileMenu = document.getElementById('mobile-menu')
        if (!mobileMenu) return
        mobileMenu.classList.toggle('hidden')
    }

    return (
        <header className="sticky top-0 bg-colorSecondary  w-screen ">
            <section className="container  ">
                <nav className="flex justify-between items-center py-1  flex-1  ">

                    <a href="#"><RiTerminalBoxLine className="size-14 text-colorAccent3 hover:text-colorAccent1 hover:scale-110 transition-all"/></a>

                    <div></div>
                    <div></div>

                    <div className=" flex lg:flex-row lg:justify-end md:gap-5 lg:gap-10 ">
                        <ul id="mobile-menu" className=" hidden md:hidden
                                                    absolute top-16 left-0  flex-col items-center w-full text-center border-t-[1px] border-t-colorAccent1
                                                    bg-colorPrimary text-colorAccent1 text-3xl font-bold font-oswald lowercase tracking-wider
                                                     " onClick={toggleMenu}>
                            <li className="hover:bg-colorSecondary hover:text-colorAccent3 w-full p-3.5"><a href="#about">About</a></li>
                            <li className="hover:bg-colorSecondary hover:text-colorAccent3 w-full p-3.5"><a href="#work">Work</a></li>
                            <li className="hover:bg-colorSecondary hover:text-colorAccent3 w-full p-3.5"><a href="#tools">Tools</a></li>
                            <li className="hover:bg-colorSecondary hover:text-colorAccent3 w-full p-3.5"><a href="#testimonials">Testimonials</a></li>
                            <li className="hover:bg-colorSecondary hover:text-colorAccent3 w-full p-3.5"><a href="#contact">Contact</a></li>
                        </ul>

                        <ul className=" hidden md:flex text-colorAccent1 font-bold font-oswald  tracking-wider bg-colorSecondary capitalize text-base gap-0 lg:text-2xl xl:text-3xl">
                            <li className="hover:bg-colorSecondary hover:text-colorAccent3 hover:scale-110 transition-all p-3.5"><a href="#about">About</a></li>
                            <li className="hover:bg-colorSecondary hover:text-colorAccent3 hover:scale-110 transition-all p-3.5"><a href="#work">Work</a></li>
                            <li className="hover:bg-colorSecondary hover:text-colorAccent3 hover:scale-110 transition-all p-3.5"><a href="#tools">Tools</a></li>
                            <li className="hover:bg-colorSecondary hover:text-colorAccent3 hover:scale-110 transition-all p-3.5"><a href="#testimonials">Testimonials</a></li>
                            <li className="hover:bg-colorSecondary hover:text-colorAccent3 hover:scale-110 transition-all p-3.5"><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="flex flex-row justify-around items-center gap-5  px-3  ">
                        <RiDropFill className="hover:scale-125 hover:cursor-pointer transition-all text-blue-600" onClick={() => selectTheme(  availableThemes[0] )}/>
                        <RiMoonFill className="hover:scale-125 hover:cursor-pointer transition-all text-purple-900" onClick={() => selectTheme(availableThemes[1] )}/>
                        <RiLeafFill className="hover:scale-125 hover:cursor-pointer transition-all text-green-700" onClick={() => selectTheme( availableThemes[2] )}/>
                        <RiSunFill className=" hover:scale-125 hover:cursor-pointer transition-all text-yellow-600" onClick={() => selectTheme(availableThemes[3] )}/>
                        <RiMenuLine className="hover:scale-125 hover:cursor-pointer transition-all text-colorAccent1 md:hidden" onClick={toggleMenu}/>
                    </div>
                </nav>
            </section>
        </header>
    )
}




