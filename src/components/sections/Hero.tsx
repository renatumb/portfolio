import image from "./../../assets/images/robot.png"

export default function Hero() {
    return (
        <section className="bg-colorPrimary" id="home">
            <article className="container">
                <div className=" py-10 flex flex-col-reverse justify-center items-center
                                sm:flex-row sm:justify-around sm:py-14
                                md:py-24">
                    <div className="    px-3 py-7
                                        lg:py-24">
                        <h1 className=" text-colorAccent1 tracking-wide text-center font-medium text-base
                                        sm:text-left
                                        md:text-xl
                                        lg:text-2xl lg:font-normal
                                        xl:text-3xl">
                            Hey, what's up, Im <span className="font-bold text-colorAccent3">Renato!</span> I'm a native troubleshooter <br className='hidden sm:inline'/>
                            who transformed into a <span className="font-bold text-colorAccent3">Full Stack Developer</span>
                        </h1>
                        {/** **/}
                        <h2 className='text-colorAccent1 tracking-wide text-center font-medium text-base text-nowrap
                                        sm:text-left
                                        md:text-xl
                                        lg:text-2xl lg:font-normal
                                        xl:text-3xl'>
                            and
                            <div className='inline text-colorAccent3 ml-2 relative font-medium'>
                                <span className='opacity-0 absolute left-0 text-nowrap origin-top-left animate-pushEffect1 '>Motorcyclist 🏍️</span>
                                <span className='opacity-0 absolute left-0 text-nowrap origin-top-left animate-pushEffect2'>Coding Caffeinator 👨🏽‍💻</span>
                                <span className='opacity-0 absolute left-0 text-nowrap origin-top-left animate-pushEffect3'>Rollerblader 🛼</span>
                                <span className='opacity-0 absolute left-0 text-nowrap origin-top-left animate-pushEffect4'>Adrenaline Junkie ⛰️</span>
                                <span className='opacity-0 absolute left-0 text-nowrap origin-top-left animate-pushEffect5'>Home Cooking Hero 🧑🏽‍🍳</span>
                                <span className='opacity-0 relative left-0 text-nowrap origin-top-left animate-pushEffect6'>Tail-Wagging Enthusiast 🐶</span>
                                <span className='opacity-0 absolute left-0 text-nowrap origin-top-left animate-pushEffect7'>Tequila Taster 🍹</span>
                                <span className='opacity-0 absolute left-0 text-nowrap origin-top-left animate-pushEffect8'>Tech Whisperer 📟</span>
                                <span className='opacity-0 absolute left-0 text-nowrap origin-top-left animate-pushEffect9'>Volcano Voyager 🌋</span>
                                <span className='opacity-0 absolute left-0 text-nowrap origin-top-left animate-pushEffect10'>Passport Prodigy 🗺️</span>
                            </div>
                        </h2>
                    </div>
                    <img src={image} className=" size-36
                                                 sm:translate-y-10
                                                 lg:size-52 lg:translate-y-24
                                                 xl:size-96"/>
                </div>
            </article>
        </section>
    )
}
