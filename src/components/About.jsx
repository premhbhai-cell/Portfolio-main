import Image from './Image'

export default function About() {
    return <section className="bg-[var(--page-bg)] px-4 py-[120px] text-[var(--text)] transition-colors duration-300">
        <div className="mx-auto grid w-full max-w-[1600px] grid-cols-2 items-center gap-20 max-lg:grid-cols-1 max-lg:gap-[60px]">
            <div className="grid grid-cols-2 items-center gap-[25px] max-md:gap-[15px]">
                <div className="scroll-animate translate-y-15 overflow-hidden rounded-xl opacity-0 transition duration-500"><Image className="block h-full w-full object-cover transition duration-500 hover:scale-105" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=70" alt="" width="800" height="533" /></div>
                <div className="scroll-animate translate-y-15 rounded-xl bg-[var(--surface)] p-10 text-center opacity-0 shadow-2xl transition duration-500 hover:-translate-y-2 max-md:p-6"><h2 className="text-4xl text-red-500">14+</h2><p className="mt-2.5 text-[13px] text-[var(--muted)]">PROJECT COMPLETED</p></div>
                <div className="scroll-animate translate-y-15 rounded-xl bg-[var(--surface)] p-10 text-center opacity-0 shadow-2xl transition duration-500 hover:-translate-y-2 max-md:p-6"><h2 className="text-4xl text-red-500">14+</h2><p className="mt-2.5 text-[13px] text-[var(--muted)]">OUR HAPPY CLIENTS</p></div>
                <div className="scroll-animate translate-y-15 overflow-hidden rounded-xl opacity-0 transition duration-500"><Image className="block h-full w-full object-cover transition duration-500 hover:scale-105" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=70" alt="" width="800" height="533" /></div>
            </div>
            <div className="scroll-animate translate-y-15 max-md:mx-auto max-md:text-center" id="about-text">
                <p className="mb-2.5 text-[13px] tracking-[2px] text-red-500">ABOUT US</p>
                <h2 className="mb-5 text-[42px] max-md:text-[32px]">WHO AM I ?</h2>
                <p className="mb-6 max-w-[500px] leading-[1.6] text-[var(--muted)] max-md:mx-auto">I'm Prem jha, a creative web developer driven by design and inspired by technology. I specialize in building modern responsive websites that tell stories and connect with people.</p>
                <ul className="mb-6 list-none text-left text-sm text-[var(--muted)] max-md:mx-auto max-md:inline-block">
                    <li className="mb-2.5"><span className="mr-1.5 text-red-500">Name:</span> Prem Jha</li><li className="mb-2.5"><span className="mr-1.5 text-red-500">Date of birth:</span> June 28, 2000</li><li className="mb-2.5"><span className="mr-1.5 text-red-500">Address:</span> faridabad,Haryana</li><li className="mb-2.5"><span className="mr-1.5 text-red-500">Zip code:</span> 121004</li><li className="mb-2.5"><span className="mr-1.5 text-red-500">Email:</span> premhbhai@gmail.com</li><li className="mb-2.5"><span className="mr-1.5 text-red-500">Phone:</span> +91 8130112531</li><li className="mb-2.5"><span className="mr-1.5 text-red-500">Language:</span> English,hindi</li><li className="mb-2.5"><span className="mr-1.5 text-red-500">Freelance:</span> Available</li>
                </ul>
                <div className="flex items-center gap-[15px] max-md:justify-center"><a href={`${import.meta.env.BASE_URL}Prem_Kumar- resume_.pdf`} download className="rounded-full bg-red-500 px-8 py-3.5 text-sm text-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/50">Download CV</a><a href="https://wa.me/918130112531?text=Hello%20I%20want%20to%20hire%20you" target="_blank" className="rounded-full border border-red-500 px-8 py-3.5 text-sm text-[var(--text)] transition hover:bg-red-500 hover:text-white">Chat</a></div>
            </div>
        </div>
    </section>
}
