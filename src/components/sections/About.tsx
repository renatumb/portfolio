import me from "./../../assets/images/renatu6.jpg"

export default function About() {
    return (
        <section className="bg-colorPrimary  overflow-clip pt-20 min-h-fit " id="about">
            <div className=" relative before:block before:z-0 before:absolute  before:inset-x-0  before:bg-colorSecondary/30
                                    before:inset-y-52 before:skew-y-[25deg]
                                    sm:before:inset-y-32 sm:before:skew-y-[10deg]
                                    md:before:inset-y-28 md:before:skew-y-[7deg]
                                    lg:before:inset-y-20
                                    xl:before:skew-y-[5deg]
                                    ">
                <article className="container pb-12">
                    <div className="    flex flex-col justify-center items-center pb-12
                                        md:flex-row md:relative px-1 sm:px-10 md:px-16 ">

                        <div className=" size-36 relative overflow-clip rounded-2xl z-20  -bottom-12
                                         md:size-56 md:absolute md:top-8 md:left-12
                                        lg:size-64 lg:left-16
                                        xl:left-28">
                            <img src={me} className="object-cover object-center size-full"/>
                        </div>
                        <div className=" rounded-2xl bg-colorSecondary mx-5  z-10     px-8
                                           md:text-lg  md:w-fit md:pl-40 md:pt-5 md:mt-16 md:ml-20
                                           lg:ml-32
                                           xl:text-2xl xl:ml-44">

                            <h2 className=" text-left text-lg font-bold uppercase mt-16 mb-5 text-colorAccent1
                                            md:text-xl  md:mt-0
                                            lg:text-2xl">
                                About me
                            </h2>

                            <p className="paragraph">I possess over a decade of experience in Software Development, specializing in
                                fullstack development, support, and troubleshooting.</p><br/>

                            <p className="paragraph">With a strong problem-solving acumen and extensive knowledge of CS fundamentals,
                                including data structures, algorithms, and complexity analysis, I excel in designing
                                and developing scalable solutions. My expertise extends to AEM, Java, SQL (MySQL, PostgreSQL, MSSQL)
                                , Angular, Spring Boot, Microservices, and RestFul technologies; I am also ready to learn any new technologies essential for future roles.</p><br/>

                            <p className="paragraph mb-5 ">I am currently focusing on Adobe Experience Manager (AEM) and have completed multiple
                                trainings from Adobe. My educational background includes a Bachelor's degree in
                                Computer Information Systems and a Diploma in Graphic and Web Development</p>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}
