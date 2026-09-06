import ThemeToggle from './components/ThemeToggle'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import DesignTools from './components/DesignTools'
import Skills from './components/Skills'
import Process from './components/Process'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollAnimations from './components/ScrollAnimations'

export default function App() {
    return <>
        <ThemeToggle />
        <Header />
        <Hero />
        <About />
        <DesignTools />
        <Services process={<Process />} />
        <Portfolio />
        <Resume skills={<Skills />} />
        <Contact />
        <Footer />
        <ScrollAnimations />
    </>
}
