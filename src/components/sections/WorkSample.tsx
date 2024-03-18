import {JSX} from "react";

interface WorkSampleProps {
    title: string,
    description: string,
    image: string,
    icons: string[],
    link: string
}

export default function WorkSample({title, description, image, icons, link}: WorkSampleProps): JSX.Element {

    return (
        <div className="flex flex-col-reverse items-center px-3 py-5 my-5 bg-colorSecondary/30 rounded md:p-7 lg:flex-row lg:justify-end lg:relative ">
            <div className=" md:max-w-[500px] lg:bg-colorSecondary/60 lg:border lg:rounded-lg lg:px-4 lg:absolute lg:inset-y-auto lg:left-0 xl:left-[11%] ">
                <h2 className="text-colorAccent3 font-oswald font-bold tracking-normal uppercase my-2 sm:text-lg sm:mt-5

                ">{title}</h2>
                <p className="paragraph text-sm  my-3 sm:text-base  ">{description}</p>
                <div className="flex flex-row justify-between items-center gap-3 my-2  md:justify-start">
                    <a target='_blank' className="text-center text-xs border border-colorAccent3 rounded p-2 text-colorAccent3 font-medium bg-colorSecondary/30 hover:scale-105 hover:bg-colorAccent1/40 transition-all
                         sm:text-base
                    " href={link}>Give it a Look</a>
                    <div className="flex flex-row justify-start items-center gap-2 mx-2 flex-wrap ">
                        {
                            icons.map((item, index) => {
                                return (
                                    <div key={index} className="size-5 md:size-7">
                                        <img className="object-scale-down object-center size-full  mono-color-filter hover:scale-110" src={item}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <img className=" object-scale-down object-center md:max-w-[500px]" src={image}/>
        </div>
    )
}
