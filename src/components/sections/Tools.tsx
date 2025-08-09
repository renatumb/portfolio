import i1java from './../../assets/images/tools/1java.svg'
import i2aem from './../../assets/images/tools/2aem.png'
import i3spring_boot from './../../assets/images/tools/3spring_boot.svg'
import i4angular from './../../assets/images/tools/4angular.svg'
import i5react from './../../assets/images/tools/5react.png'
import i6typescript from './../../assets/images/tools/6typescript.svg'
import i7html5 from './../../assets/images/tools/7html5.png'
import i8CSS3 from './../../assets/images/tools/8CSS3.png'
import i9intelij from './../../assets/images/tools/9intelij.svg'
import i10tailwind from './../../assets/images/tools/10tailwind.svg'
import i11vite from './../../assets/images/tools/11vite.svg'
import i12git from './../../assets/images/tools/12git.png'
import i13maven from './../../assets/images/tools/13maven.svg'
//import i14node from './../../assets/images/tools/14node.png'
import i15sling from './../../assets/images/tools/15sling.svg'
import i16jackrabbit from './../../assets/images/tools/16jackrabbit.svg'
import i17npm from './../../assets/images/tools/17npm.svg'

export default function Tools() {
    const tools: { logo: string, caption: string }[] = [
        {logo: i1java, caption: 'Java'},
        {logo: i2aem, caption: 'AEM'},
        {logo: i3spring_boot, caption: 'Spring Boot'},
        {logo: i6typescript, caption: 'Typescript'},
        {logo: i4angular, caption: 'Angular'},
        {logo: i12git, caption: 'Git'},
        {logo: i5react, caption: 'React'},
        {logo: i7html5, caption: 'HTML5'},
        {logo: i8CSS3, caption: 'CSS3'},
        {logo: i9intelij, caption: 'IntelliJ IDEA '},
        {logo: i11vite, caption: 'vite'},
        {logo: i10tailwind, caption: 'tailwind css'},
        {logo: i17npm, caption: 'NPM'},
        //{logo: i14node, caption: 'Node.js'},
        {logo: i13maven, caption: 'Apache Maven'},
        {logo: i15sling, caption: 'Apache Sling'},
        {logo: i16jackrabbit, caption: 'Apache Jackrabbit'},
    ]

    return (
        <section className="bg-colorPrimary  overflow-clip  py-20 " id="tools">
            <article className="container">
                <div className="px-8  ">
                    <h2 className="text-left text-lg font-bold uppercase text-colorAccent1 py-3
                            md:text-xl lg:text-2xl
                    ">My Tech Tools</h2>
                    <p className="paragraph md:text-lg xl:text-2xl">I employ cutting-edge tools and technologies to enhance my work, continuously seeking to master new instruments.<br/> These are the resources I prefer for bringing your products to completion</p>
                    <div className=" grid grid-cols-4  gap-4 justify-between justify-items-center  px-3 py-5 my-7 mx-auto rounded-lg bg-colorSecondary/20  shadow-sm shadow-colorAccent1
                                            md:max-w-[768px] md:mt-16
                    ">
                        {tools.map((item, index) => (
                            <div key={index} className="  flex flex-col justify-around  items-center  max-w-9
                                    md:max-w-14 lg:max-w-20
                             ">
                                <figure className="">
                                    <img src={item.logo} alt={item.caption} className="object-scale-down object-center size-full"/>
                                </figure>
                                <p className="  text-center text-sm font-oswald font-normal  text-colorAccent2 mt-3
                                md:text-base ">{item.caption}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </article>
        </section>
    )
}
