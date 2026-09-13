import Image from './Image'

const navItems = [
    ['Home', '#hero'],
    ['About', '#about-text'],
    ['Services', '#service-section'],
    ['Portfolio', '#featured'],
    ['Resume', '#resume-section'],
    ['Contact', '#contact-section'],
]

function Navigation() {
    return <nav className="flex flex-col gap-3">{navItems.map(([label, href]) => <a className="text-[15px] text-[var(--muted)] no-underline transition hover:translate-x-1 hover:text-pink-500" key={href} href={href}>{label}</a>)}</nav>
}

export default function Footer() {
    return <><a href="https://wa.me/918130112531" target="_blank" className="fixed bottom-6 right-6 z-[999] flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#25d366] shadow-xl transition hover:scale-110" aria-label="Contact on WhatsApp"><Image src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" width="32" height="32" loading="eager" /></a><footer className="border-t border-black/10 bg-[var(--page-bg)] px-4 pt-20 text-[var(--text)] transition-colors duration-300"><div className="mx-auto grid w-[90%] max-w-[1400px] grid-cols-3 gap-[60px] max-lg:grid-cols-2 max-md:grid-cols-1 max-md:text-center"><div><h2 className="mb-[15px] text-[28px]">Prem Kumar</h2><p className="max-w-[320px] leading-[1.7] text-[var(--muted)] max-md:mx-auto">Frontend Developer creating modern responsive websites, portfolio designs and business websites with clean UI and smooth animations.</p><div className="mt-[25px] flex gap-[15px] max-md:justify-center"><a className="grid h-10 w-10 place-items-center rounded-full bg-[var(--surface)] text-[var(--text)] transition hover:-translate-y-1 hover:bg-pink-500 hover:text-white" href="#">f</a><a className="grid h-10 w-10 place-items-center rounded-full bg-[var(--surface)] text-[var(--text)] transition hover:-translate-y-1 hover:bg-pink-500 hover:text-white" href="#">◎</a><a className="grid h-10 w-10 place-items-center rounded-full bg-[var(--surface)] text-[var(--text)] transition hover:-translate-y-1 hover:bg-pink-500 hover:text-white" href="#">in</a><a className="grid h-10 w-10 place-items-center rounded-full bg-[var(--surface)] text-[var(--text)] transition hover:-translate-y-1 hover:bg-pink-500 hover:text-white" href="#">⌘</a></div></div><div><h3 className="mb-5">Quick Links</h3><Navigation /></div><div><h3 className="mb-5">Contact</h3><p className="mb-2.5 text-[var(--muted)]">📍 Faridabad, Haryana</p><p className="mb-2.5 text-[var(--muted)]">📞 +91 8130112531</p><p className="mb-2.5 text-[var(--muted)]">📧 premhbhai@gmail.com</p><a href="https://wa.me/918130112531" target="_blank" className="mt-5 inline-block rounded-full bg-gradient-to-r from-orange-500 to-pink-500 px-[22px] py-2.5 text-white">Hire me</a></div></div><div className="mx-[-16px] mt-[60px] border-t border-black/10 p-5 text-center text-sm text-[var(--muted)]"><p>© 2026 Prem Kumar | All Rights Reserved</p></div></footer></>
}
