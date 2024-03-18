import Hero from "./sections/Hero.tsx";
import About from "./sections/About.tsx";
import Tools from "./sections/Tools.tsx";
import Work from "./sections/Work.tsx";

export default function Main() {
    return (
        <main className="">
            <Hero/>
            <About/>
            <Work/>
            <Tools/>
        </main>
    )
}
