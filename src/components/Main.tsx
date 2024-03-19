import Hero from "./sections/Hero.tsx";
import About from "./sections/About.tsx";
import Tools from "./sections/Tools.tsx";
import Work from "./sections/Work.tsx";
import SideBar from "./SideBar.tsx";

export default function Main() {
    return (
        <main className="">
            <Hero/>
            <SideBar />
            <About/>
            <Work/>
            <Tools/>
        </main>
    )
}
