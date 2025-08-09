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
                        <button  onClick={toggleContactModal} aria-label={"Open contact Modal"}><RiContactsBookLine/></button>
                    </li>
                    <li className="hover:scale-125 hover:cursor-pointer">
                        <a target='_blank' href={myLinks.linkedin} aria-label={"Linkedin"}><RiLinkedinFill/></a>
                    </li>
                    <li className="hover:scale-150 hover:cursor-pointer">
                        <a target='_blank' href={myLinks.whatsapp} aria-label={"WhatsApp"}><RiWhatsappLine/></a>
                    </li>
                    <li className="hover:scale-125 hover:cursor-pointer">
                        <a target='_blank' href={myLinks.gitHub} aria-label={"Github"}><RiGithubFill/></a>
                    </li>
                    <li className="hover:scale-125 hover:cursor-pointer mono-color-filter">
                        <a target='_blank' href={myLinks.aemBlog} aria-label={"Aem Secret's"}><img src={i2aem} className="size-6" alt={"aem blog"}/></a>
                    </li>
                    <li className="hover:scale-125 hover:cursor-pointer">
                        <a target='_blank' href={myLinks.instagram} aria-label={"Instagram"}><RiInstagramLine/></a>
                    </li>
                </ul>
            </section>
        </aside>
    )
}
