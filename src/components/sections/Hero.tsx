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
                                        md:text-xl
                                        lg:text-2xl lg:font-normal
                                        xl:text-3xl">
                            Hey, what's up, Im <span className="font-extrabold">Renato!</span> I'm a native troubleshooter <br/>
                            who transformed into a <span className="font-extrabold">Full Stack Developer</span><br/>
                            <span>and Motocyclist</span>
                        </h1>
                    </div>
                    <img src={image} className=" size-36
                                                 md:size-36
                                                 lg:size-52
                                                 xl:size-96"/>
                </div>
            </article>
        </section>
    )
}
