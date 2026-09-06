import { useEffect, useState } from 'react'
import Image from './Image'

const words = ['Developer', 'Designer', 'Freelancer']

export default function Hero() {
    const [wordIndex, setWordIndex] = useState(0)
    const [text, setText] = useState('')
    const [deleting, setDeleting] = useState(false)

    useEffect(() => {
        const word = words[wordIndex]
        const delay = !deleting && text === word ? 1000 : 120
        const timer = setTimeout(() => {
            if (deleting) {
                const nextText = word.substring(0, text.length - 1)
                setText(nextText)
                if (nextText === '') {
                    setDeleting(false)
                    setWordIndex((index) => (index + 1) % words.length)
                }
            } else {
                const nextText = word.substring(0, text.length + 1)
                setText(nextText)
                if (nextText === word) setDeleting(true)
            }
        }, delay)
        return () => clearTimeout(timer)
    }, [deleting, text, wordIndex])

    return <section className="flex min-h-screen items-center bg-[var(--page-bg)] px-4 pt-[130px] text-[var(--text)] transition-colors duration-300 max-md:pt-40" id="hero">
        <div className="mx-auto grid w-full max-w-[1600px] grid-cols-[1.1fr_0.9fr] items-center gap-10 max-lg:grid-cols-1 max-lg:gap-[60px] max-lg:text-center">
            <div>
                <p className="mb-[15px] text-[15px] text-red-500">Hello I Am Prem Jha</p>
                <h1 className="text-[85px] font-bold leading-[1.1] max-lg:text-[55px] max-md:text-[42px]">Front-End <span className="border-r-2 border-red-500 pr-1 text-red-500 animate-[blink_0.7s_infinite]">{text}</span></h1>
                <p className="mt-6 max-w-[520px] text-base leading-[1.6] text-[var(--muted)] max-lg:mx-auto">Creative Front-End Developer focused on building modern responsive websites with clean UI and smooth experience.</p>
                <div className="mt-9 flex gap-5 max-md:flex-col max-md:items-center">
                    <a href={`${import.meta.env.BASE_URL}Prem_Kumar- resume_.pdf`} download className="rounded-full bg-red-500 px-8 py-3.5 text-sm text-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/60">Download CV</a>
                    <a href="https://wa.me/918130112531?text=Hello%20I%20want%20to%20hire%20you" target="_blank" className="rounded-full border border-red-500 px-8 py-3.5 text-sm text-[var(--text)] transition duration-300 hover:-translate-y-1 hover:bg-red-500 hover:text-white hover:shadow-xl hover:shadow-red-500/50">Contact Me</a>
                </div>
            </div>
            <div className="relative flex justify-center">
                <Image className="w-[560px] max-w-full rounded-[20px] opacity-0 animate-[hero-img_1s_ease_0.5s_forwards]" src={`${import.meta.env.BASE_URL}assets/myprofile.webp`} alt="Prem Jha" width="1120" height="720" loading="eager" fetchPriority="high" style={{ height: 'auto' }} />
            </div>
        </div>
    </section>
}
