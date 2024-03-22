import {RiCloseLine, RiDropFill, RiLeafFill, RiMenuLine, RiMoonFill, RiSunFill, RiTerminalBoxLine} from "@remixicon/react";
import {useEffect, useState} from "react";
import SideButton from "./SideButton.tsx";

interface HeaderProps {
    toggleContactModal: () => void
}

export default function Header({toggleContactModal}: HeaderProps) {

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
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => {
        const mobileMenu = document.getElementById('mobile-menu')
        if (!mobileMenu) return

        mobileMenu.classList.toggle('hidden')
        setMenuOpen( previous => !previous )
    }

    useEffect(() => {
        let timer = 0;
        window.addEventListener('scroll', () => {
            clearTimeout(timer)

            timer = setTimeout(() => {

                const mainNav = document.getElementById('mainNav')
                const mainHeader = document.getElementById('header')

                const sideButton = document.getElementById('sideButton')

                if (mainNav && mainHeader) {
                    if (window.scrollY > 50) {
                        mainNav.classList.add('scale-90')
                        mainHeader.classList.add('bg-colorSecondary')
                        mainHeader.classList.remove('bg-colorPrimary')
                    } else {
                        mainNav.classList.remove('scale-90')
                        mainHeader.classList.add('bg-colorPrimary')
                        mainHeader.classList.remove('bg-colorSecondary')
                    }

                }

                if (sideButton) {
                    if (window.scrollY > 1000) {
                        sideButton.classList.remove('hidden')
                    } else {
                        sideButton.classList.add('hidden')
                    }
                }
            }, 200)
        })
    }, []);


    return (
        <>
        <header id='header' className="sticky top-0   w-screen z-30 transition-all  bg-colorPrimary">
            <section className="container ">
                <nav id="mainNav" className="flex justify-between items-center py-1  flex-1  transition-all  ">

                    <a href="#"><RiTerminalBoxLine className="size-14 text-colorAccent3 hover:text-colorAccent1 hover:scale-110 transition-all"/></a>

                    <div></div>
                    <div></div>

                    <div className=" flex lg:flex-row lg:justify-end md:gap-5 lg:gap-10 ">
                        <ul className=" hidden md:flex text-colorAccent1 font-bold font-oswald  tracking-wider  capitalize text-base gap-0 lg:text-2xl xl:text-3xl">
                            <li className=" hover:text-colorAccent3 hover:scale-110 transition-all p-3.5"><a href="#about">About</a></li>
                            <li className=" hover:text-colorAccent3 hover:scale-110 transition-all p-3.5"><a href="#work">Work</a></li>
                            <li className=" hover:text-colorAccent3 hover:scale-110 transition-all p-3.5"><a href="#tools">Skills</a></li>
                            <li className=" hover:text-colorAccent3 hover:scale-110 transition-all p-3.5"><a href="#testimonials">Testimonials</a></li>
                            <li className=" hover:text-colorAccent3 hover:scale-110 transition-all p-3.5"><a href='#' onClick={toggleContactModal}>Contact</a></li>
                        </ul>
                    </div>

                    <div className="flex flex-row justify-around items-center gap-5  px-3  ">
                        <RiDropFill className="hover:scale-125 hover:cursor-pointer transition-all text-blue-600" onClick={() => selectTheme(availableThemes[0])}/>
                        <RiMoonFill className="hover:scale-125 hover:cursor-pointer transition-all text-purple-900" onClick={() => selectTheme(availableThemes[1])}/>
                        <RiLeafFill className="hover:scale-125 hover:cursor-pointer transition-all text-green-700" onClick={() => selectTheme(availableThemes[2])}/>
                        <RiSunFill className=" hover:scale-125 hover:cursor-pointer transition-all text-yellow-600" onClick={() => selectTheme(availableThemes[3])}/>

                        {
                            menuOpen?
                                <RiCloseLine className="hover:scale-125 hover:cursor-pointer transition-all text-colorAccent1 md:hidden" onClick={toggleMenu}/>:
                                <RiMenuLine className="hover:scale-125 hover:cursor-pointer transition-all text-colorAccent1 md:hidden" onClick={toggleMenu}/>
                        }
                    </div>

                    <div id="mobile-menu" className=" hidden md:hidden fixed top-16 left-0 w-screen h-screen border border-colorAccent1 bg-colorPrimary/60 backdrop-blur animate-openMenu" onClick={toggleMenu}>
                        <ul className=" flex-col items-center w-full text-center  text-colorAccent1 text-3xl font-bold font-oswald lowercase tracking-wider"  >
                            <li className="hover:bg-colorSecondary hover:text-colorAccent3 w-full p-3.5"><a href="#about">About</a></li>
                            <li className="hover:bg-colorSecondary hover:text-colorAccent3 w-full p-3.5"><a href="#work">Work</a></li>
                            <li className="hover:bg-colorSecondary hover:text-colorAccent3 w-full p-3.5"><a href="#tools">Skills</a></li>
                            <li className="hover:bg-colorSecondary hover:text-colorAccent3 w-full p-3.5"><a href="#testimonials">Testimonials</a></li>
                            <li className="hover:bg-colorSecondary hover:text-colorAccent3 w-full p-3.5"><a href='#' onClick={toggleContactModal}>Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </section>
        </header>
            <SideButton/>
        </>
    )
}




