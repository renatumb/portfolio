import photo1 from './../assets/images/people/a.jpg'
import photo2 from './../assets/images/people/b.jpg'
import photo3 from './../assets/images/people/c.jpg'
import photo4 from './../assets/images/people/d.jpg'
import photo5 from './../assets/images/people/e.jpg'
import photo6 from './../assets/images/people/f.jpg'
import photo7 from './../assets/images/people/g.jpg'
import photo8 from './../assets/images/people/h.jpg'
import photo9 from './../assets/images/people/i.jpg'

export default function Testimonials() {

    const testimonials1 = [
        {photo: photo1, name: 'Isabela Johnson', position: 'Software Engineer', feedback: "His expertise in Java and Angular has greatly contributed to the success of our projects and  dedication to software development shines through in his meticulous attention to detail and consistent delivery of high-quality code."},
        {photo: photo2, name: 'Lucas Smith', position: 'Systems Analyst', feedback: "The success of our projects has been significantly propelled by his profound proficiency in AEM development."},
        {photo: photo3, name: 'Juliana Santos', position: 'Backend Developer', feedback: "In every project, Renato demonstrates a remarkable ability to adapt to new challenges and technologies. His commitment to continuous learning and improvement not only benefits our team but also inspires others to strive for greatness in their work."},
    ]

    const testimonials2 = [
        {photo: photo4, name: 'Emily Silva', position: 'Systems Analyst', feedback: "Renato's proactive approach to software development, coupled with his deep technical knowledge, make him an invaluable member of our team. His dedication to staying at the forefront of industry trends ensures that our Java projects are always innovative and cutting-edge."},
        {photo: photo5, name: 'Mateus Thompson', position: 'Technical Lead', feedback: "He excels in Angular, driving success in our frontend projects."},
        {photo: photo6, name: 'Rafael Davis', position: 'DevOps Engineer', feedback: "Renato's hard work and commitment to excellence in AEM development have truly impressed the team. His ability to tackle complex challenges with creativity and precision reflects his strong dedication to his work."},
    ]

    const testimonials3 = [

        {photo: photo7, name: 'Larissa Williams', position: 'UI/UX Designer', feedback: "His proactive approach and deep understanding of software development make him an invaluable asset."},
        {photo: photo8, name: 'Gabriel Pereira', position: 'Software Engineer', feedback: "He is passionate about software development. His contributions to our Java projects have been invaluable, consistently exceeding expectations."},
        {photo: photo9, name: 'Camila Rodriguez', position: 'Technical Lead', feedback: "In every project, Renato demonstrates a remarkable ability to adapt to new challenges and technologies. His commitment to continuous learning and improvement not only benefits our team but also inspires others to strive for greatness in their work."},

    ]

    return (
        <section className="bg-colorPrimary  overflow-clip  py-20 " id="testimonials">
            <article className="container font-oswald bg-colorSecondary/30 rounded-xl pb-10">
                <h2 className='text-left text-lg font-bold uppercase text-colorAccent1 p-8   md:text-xl lg:text-2xl'>Testimonials</h2>
                <p className='paragraph md:text-lg xl:text-2xl px-8 pb-6'>Nice Things People Have Said</p>
                <div className="px-8  ">

                    {/** **/}
                    <div className='grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 text-sm lg:text-base'>
                        <ul className="space-y-8">
                            {
                                testimonials1.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <figure className="relative flex flex-col-reverse bg-colorSecondary rounded-lg p-5 ">
                                                <blockquote className="mt-6 text-colorAccent2 "><p>{item.feedback}</p></blockquote>
                                                <figcaption className="flex items-center space-x-4">
                                                    <img src={item.photo} alt="" className="flex-none w-16 h-16 rounded-full object-cover"/>
                                                    <div className="flex-auto">
                                                        <div className="text-base text-colorAccent1 font-semibold ">
                                                            <span className="absolute inset-0"></span>{item.name}
                                                        </div>
                                                        <div className="text-colorAccent1/60 mt-0.5">{item.position}</div>
                                                    </div>
                                                </figcaption>
                                            </figure>
                                        </li>
                                    )
                                })

                            }
                        </ul>
                        {/** **/}
                        <ul className="space-y-8 hidden sm:block">
                            {
                                testimonials2.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <figure className="relative flex flex-col-reverse bg-colorSecondary rounded-lg p-5 ">
                                                <blockquote className="mt-6 text-colorAccent2 "><p>{item.feedback}</p></blockquote>
                                                <figcaption className="flex items-center space-x-4">
                                                    <img src={item.photo} alt="" className="flex-none w-16 h-16 rounded-full object-cover"/>
                                                    <div className="flex-auto">
                                                        <div className="text-base text-colorAccent1 font-semibold ">
                                                            <span className="absolute inset-0"></span>{item.name}
                                                        </div>
                                                        <div className="text-colorAccent1/60 mt-0.5">{item.position}</div>
                                                    </div>
                                                </figcaption>
                                            </figure>
                                        </li>
                                    )
                                })

                            }
                        </ul>
                        {/** **/}
                        <ul className="space-y-8 hidden lg:block">
                            {
                                testimonials3.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <figure className="relative flex flex-col-reverse bg-colorSecondary rounded-lg p-5 ">
                                                <blockquote className="mt-6 text-colorAccent2 "><p>{item.feedback}</p></blockquote>
                                                <figcaption className="flex items-center space-x-4">
                                                    <img src={item.photo} alt="" className="flex-none w-16 h-16 rounded-full object-cover"/>
                                                    <div className="flex-auto">
                                                        <div className="text-base text-colorAccent1 font-semibold ">
                                                            <span className="absolute inset-0"></span>{item.name}
                                                        </div>
                                                        <div className="text-colorAccent1/60 mt-0.5">{item.position}</div>
                                                    </div>
                                                </figcaption>
                                            </figure>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </article>
        </section>

    )
}
