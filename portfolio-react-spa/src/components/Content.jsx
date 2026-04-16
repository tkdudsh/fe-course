import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Skills from "./pages/Skills.jsx"
import Work from "./pages/Work.jsx"
import Testimonials from "./content/TestiMonials.jsx"
import ArrowTop from "./content/ArrowTop.jsx"


export default function Content({ data }) {
    // console.log('Content :: data :: ', data);    
    return(
        <>
            <Home data={data?.home}/>
            <About data={data?.about}/> 
            <Skills data={data?.skills}/>
            <Work data={data?.work}/>
            <Testimonials />
            <ArrowTop></ArrowTop>
        </>
    )
}