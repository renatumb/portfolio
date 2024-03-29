import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectCoverflow, Navigation, Pagination} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
//

import WorkSample from "./WorkSample.tsx";
import i1java from './../../assets/images/tools/1java.svg'

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

import burguerImage from './../../assets/images/work/burguer.png'
import cafeImage from './../../assets/images/work/cafe.png'
import managerImage from './../../assets/images/work/management.png'
import recipesImage from './../../assets/images/work/recipes.png'
import contactImage from './../../assets/images/work/contact.png'
import rocketsImage from './../../assets/images/work/rockets.png'
import {RiSparkling2Line} from "@remixicon/react";

export default function Work() {

    const projects = [
        {title: 'Burger Haven: Savor Every Bite', image: burguerImage, icons: [i5react, i10tailwind, i6typescript, i7html5, i11vite, i8CSS3, i12git, i9intelij,], link: 'https://burguers.renatobonfim.com/', description: 'Welcome to Burger Haven! React and Tailwind-powered landing page that offers a visual feast with vibrant themes and seamless responsiveness. Explore our menu, enjoy interactive features, and stay connected. Experience burger perfection at Burger Haven!'},
        {title: 'Java-Powered Cafe Management System', image: cafeImage, icons: [i4angular, i1java, i3spring_boot, i9intelij, i7html5, i8CSS3], link: 'https://cafe.renatobonfim.com', description: 'With Angular, Angular Material, Java 17 and Spring Boot, offers seamless product registration, order placement, and PDF generation. Utilizing PostgreSQL for robust data management, alongside secure authentication via JWT token for data integrity.'},
        {title: 'Financial Consultancy Landing Page', image: managerImage, icons: [i4angular, i10tailwind, i9intelij, i12git], link: 'https://finance.renatobonfim.com/', description: 'Angular and Tailwind CSS-crafted landing page, seamlessly adapting to any device. Immerse yourself in its fluid layout, ensuring optimal viewing experiences across all screens.'},
        {title: 'Recipe Sharing: Culinary Creations at Your Fingertips', image: recipesImage, icons: [i4angular, i1java, i3spring_boot, i6typescript, i7html5, i8CSS3, i12git, i9intelij], link: 'https://recipe.renatobonfim.com', description: 'RecipeShare, with Java backend and Angular frontend, facilitates recipe management through REST API ( Spring Boot). Angular Material ensures responsiveness. Secure user registration and authentication are powered by JWT, supported by PostgreSQL. Join now for culinary inspiration'},
        {title: 'Contact Keeper', image: contactImage, icons: [i5react, i3spring_boot, i1java, i7html5, i6typescript, i8CSS3], link: 'https://contactmanager.renatobonfim.com', description: 'ContactKeeper simplifies contact management with React frontend and Java with Spring Boot backend. Add contacts with image uploads and delete effortlessly. Utilizing PostgreSQL for data storage and Spring Data JPA for pagination, it ensures smooth operation.'},
        {title: 'Acme Rockets ', image: rocketsImage, icons: [i5react, i10tailwind, i6typescript, i7html5, i8CSS3, i9intelij], link: 'https://rockets.renatobonfim.com', description: 'A captivating landing page meticulously crafted with React and TailwindCSS, ensuring seamless responsiveness across all devices. With Tailwind\'s inherent theme functionality, effortlessly switch between captivating themes'}
    ]

    return (
        <section className="bg-colorPrimary h-fit  py-20" id="work">
            <article className="container ">
                <div className="px-8  ">
                    <h2 className="text-left text-lg font-bold uppercase text-colorAccent1 py-3 md:text-xl lg:text-2xl ">Work</h2>
                    <p className="paragraph md:text-lg xl:text-2xl">
                        These projects hold a special place in my preferences. I continuously seek enjoyable challenges as opportunities for learning.<br/>
                        Any feedback is welcomed with gratitude! <RiSparkling2Line className="inline text-colorAccent3"/></p>
                    <div className="lg:max-w-screen-xl relative m-auto">

                        <Swiper navigation={true} pagination={true} loop={true} grabCursor={true} modules={[Navigation, Pagination, EffectCoverflow]} autoplay={true} speed={100}
                                coverflowEffect={{
                                    depth: 100,
                                    modifier: 1,
                                    rotate: 50,
                                    scale: 1,
                                    stretch: 10,
                                    slideShadows: true,
                                }}
                                effect={'coverflow'} centeredSlides={true}
                        >
                            {
                                projects.map((element, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <WorkSample title={element.title} description={element.description} image={element.image} icons={element.icons} link={element.link}/>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                </div>
            </article>
        </section>
    )
}
