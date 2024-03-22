import {RiArrowUpDoubleLine} from "@remixicon/react";

export default function SideButton(){
    return (
        <a id='sideButton' className="hidden fixed rounded-full  bg-colorAccent1 text-colorAccent3 animate-bounceUp z-40 bottom-7 right-4 transition-all duration-1000" href="#">
            <RiArrowUpDoubleLine className='inline size-10 sm:size-14' />
        </a>
    )
}
