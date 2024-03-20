import { RiContactsBook2Line, RiEmotionHappyFill, RiExternalLinkLine, RiFileCloudLine, RiHeart2Fill, RiMessage2Line} from "@remixicon/react";
import {myLinks} from "../Constants.tsx";

interface FooterProps {
    toggleContactModal: () => void
}

export default function Footer({toggleContactModal}: FooterProps) {
    return (
        <footer className="bg-colorSecondary py-4">
            <section className="container">
                <article className="text-base text-colorAccent2 font-bold text-center m-auto">
                    Thanks for visiting <RiEmotionHappyFill className="inline text-yellow-500 "/>
                </article>
                <article className="m-auto">
                    <ul className=" m-auto text-colorAccent1 grid grid-cols-2 justify-items-center p-3 sm:max-w-screen-sm">
                        <li className='hover:scale-110 hover:text-colorAccent3 transition-all '><a target='_blank' href={myLinks.resume}><RiFileCloudLine className={'inline m-1'}/>Resume</a></li>
                        <li className='hover:scale-110 hover:text-colorAccent3 transition-all '><a  href='#' onClick={toggleContactModal}><RiContactsBook2Line className={'inline m-1'}/>Contact Info</a></li>
                        <li className='hover:scale-110 hover:text-colorAccent3 transition-all '><a target='_blank' href={myLinks.aemBlog}><RiExternalLinkLine className={'inline m-1'}/>AEM blog</a></li>
                        <li className='hover:scale-110 hover:text-colorAccent3 transition-all '><a target='_blank' href={myLinks.whatsapp}><RiMessage2Line className={'inline m-1'}/>Message</a></li>
                    </ul>
                </article>
                <article className="text-sm text-colorAccent2 font-normal text-center py-1 m-auto">
                    Crafted with <RiHeart2Fill className="inline text-red-700"/> by Rex
                </article>
            </section>
        </footer>
    )
}
