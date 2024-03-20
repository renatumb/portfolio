import {myLinks} from "./Constants.tsx";
import {RiCloseLine,  RiFileCloudLine, RiGithubLine, RiInstagramLine, RiLinkedinFill, RiMailSendLine, RiPhoneLine, RiWhatsappLine} from "@remixicon/react";
import i2aem from "./assets/images/tools/2aem.png";

interface ContactModalProps {
    toggleContactModal: () => void,
    modalId: string
}

export default function ContactModal({toggleContactModal, modalId}: ContactModalProps) {

    return (
        <section className="hidden fixed top-0 left-0 h-screen w-screen backdrop-blur bg-colorSecondary/60 z-50 " id={modalId} onClick={toggleContactModal}>
            <article className="container max-w-screen-sm  border border-colorAccent1 mt-16 ">
                <div className="p-5 bg-colorPrimary relative">
                    <button className="absolute right-5 border border-colorAccent1 text-red-700 font-extrabold hover:scale-110 transition-all"><RiCloseLine className="size-8"/></button>
                    <h2 className="text-base text-colorAccent3 text-left font-bold my-1 sm:text-2xl">Hi, Renato here! </h2>
                    <p className="text-base text-colorAccent1  text-left my-2 sm:text-lg">These are the ways you can contact me:</p>

                    {/** **/}
                    <a target='_blank' href={'mailto:' + myLinks.email}>
                        <div className="p-2 border border-colorSecondary my-3 rounded bg-colorSecondary/30 hover:scale-105 hover:bg-colorAccent1/5 transition-all">
                            <div className="flex flex-row items-center gap-3 text-sm text-nowrap text-colorAccent2 sm:text-lg">
                                <RiMailSendLine className=' justify-self-end sm:size-10'/>
                                <div>
                                    <p>Email Address (Preferred):</p>
                                    <p>{myLinks.email}</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    {/** **/}
                    <a href=''>
                        <div className="p-2 border border-colorSecondary my-3 rounded bg-colorSecondary/30 hover:scale-105 hover:bg-colorAccent1/5 transition-all">
                            <div className="flex flex-row items-center gap-3 text-sm text-nowrap text-colorAccent2 sm:text-lg">
                                <RiPhoneLine className=' justify-self-end sm:size-10'/>
                                <div>
                                    <p>Mobile</p>
                                    <p>{myLinks.phoneCA}</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    {/** **/}
                    <a target='_blank' href={myLinks.resume}>
                        <div className="p-2 border border-colorSecondary my-3 rounded bg-colorSecondary/30 hover:scale-105 hover:bg-colorAccent1/5 transition-all">
                            <div className="flex flex-row items-center gap-3 text-sm text-nowrap text-colorAccent2 sm:text-lg">
                                <RiFileCloudLine className=' justify-self-end sm:size-10'/>
                                <div>
                                    <p>Resume</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    {/** **/}
                    <a target='_blank' href={myLinks.linkedin}>
                        <div className="p-2 border border-colorSecondary my-3 rounded bg-colorSecondary/30 hover:scale-105 hover:bg-colorAccent1/5 transition-all">
                            <div className="flex flex-row items-center gap-3 text-sm text-nowrap text-colorAccent2 sm:text-lg">
                                <RiLinkedinFill className=' justify-self-end sm:size-10'/>
                                <div>
                                    <p>Linkedin</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    {/** **/}
                    <a target='_blank' href={myLinks.aemBlog}>
                        <div className="p-2 border border-colorSecondary my-3 rounded bg-colorSecondary/30 hover:scale-105 hover:bg-colorAccent1/5 transition-all">
                            <div className="flex flex-row items-center gap-3 text-sm text-nowrap text-colorAccent2 sm:text-lg">
                                <div className='justify-self-end size-6 sm:size-10 mono-color-filter'>
                                    <img src={i2aem} className=""/>
                                </div>
                                <div>
                                    <p>My AEM Blog</p>
                                    <p>{myLinks.aemBlog}</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    {/** **/}
                    <a target='_blank' href={myLinks.whatsapp}>
                        <div className="p-2 border border-colorSecondary my-3 rounded bg-colorSecondary/30 hover:scale-105 hover:bg-colorAccent1/5 transition-all">
                            <div className="flex flex-row items-center gap-3 text-sm text-nowrap text-colorAccent2 sm:text-lg">
                                <RiWhatsappLine className=' justify-self-end sm:size-10'/>
                                <div>
                                    <p>WhatsApp</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    {/** **/}
                    <a target='_blank' href={myLinks.gitHub}>
                        <div className="p-2 border border-colorSecondary my-3 rounded bg-colorSecondary/30 hover:scale-105 hover:bg-colorAccent1/5 transition-all">
                            <div className="flex flex-row items-center gap-3 text-sm text-nowrap text-colorAccent2 sm:text-lg">
                                <RiGithubLine className=' justify-self-end sm:size-10'/>
                                <div>
                                    <p>Github</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    {/** **/}
                    <a target='_blank' href={myLinks.instagram}>
                        <div className="p-2 border border-colorSecondary my-3 rounded bg-colorSecondary/30 hover:scale-105 hover:bg-colorAccent1/5 transition-all">
                            <div className="flex flex-row items-center gap-3 text-sm text-nowrap text-colorAccent2 sm:text-lg">
                                <RiInstagramLine className=' justify-self-end sm:size-10'/>
                                <div>
                                    <p>Instagram</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    {/** **/}
                </div>
            </article>
        </section>
    )
}
