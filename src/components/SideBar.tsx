import {RiContactsBookLine, RiGithubFill, RiInstagramLine, RiLinkedinFill, RiWhatsappLine} from "@remixicon/react";

import {myLinks} from "../Constants.tsx";

import i2aem from './../assets/images/tools/2aem.png'

interface SideBarProps {
    toggleContactModal: () => void
}

export default function SideBar({toggleContactModal}: SideBarProps) {



    return (
        <aside className="fixed left-1 top-1/2 z-40">
            <section>
                <ul className="flex flex-col items-center gap-4 bg-colorSecondary/50 rounded p-1 text-colorAccent1">
                    <li className="hover:scale-125 hover:cursor-pointer">
                        <a target='_blank' onClick={toggleContactModal}><RiContactsBookLine/></a>
                    </li>
                    <li className="hover:scale-125 hover:cursor-pointer">
                        <a target='_blank' href={myLinks.linkedin}><RiLinkedinFill/></a>
                    </li>
                    <li className="hover:scale-150 hover:cursor-pointer">
                        <a target='_blank' href={myLinks.whatsapp}><RiWhatsappLine/></a>
                    </li>
                    <li className="hover:scale-125 hover:cursor-pointer">
                        <a target='_blank' href={myLinks.gitHub}><RiGithubFill/></a>
                    </li>
                    <li className="hover:scale-125 hover:cursor-pointer mono-color-filter">
                        <a target='_blank' href={myLinks.aemBlog}><img src={i2aem} className="size-6"/></a>
                    </li>
                    <li className="hover:scale-125 hover:cursor-pointer">
                        <a target='_blank' href={myLinks.instagram}><RiInstagramLine/></a>
                    </li>
                </ul>
            </section>
        </aside>
    )
}
