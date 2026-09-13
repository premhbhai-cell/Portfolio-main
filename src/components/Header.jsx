import { useState } from 'react'

const navItems = [
    ['Home', '#hero'],
    ['About', '#about-text'],
    ['Services', '#service-section'],
    ['Portfolio', '#featured'],
    ['Resume', '#resume-section'],
    ['Contact', '#contact-section'],
]

function Navigation({ onNavigate, active = false }) {
    return <nav className={`${active ? 'left-0' : '-left-full'} absolute top-[73px] flex w-full flex-col items-center gap-5 bg-[var(--surface-strong)] p-7 transition-all duration-300 md:static md:w-auto md:flex-row md:gap-9 md:bg-transparent md:p-0`} id="nav">
        {navItems.map(([label, href]) => <a className="relative text-[15px] text-[var(--text)] no-underline transition hover:text-red-500 after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-red-500 after:transition-all hover:after:w-full" key={href} href={href} onClick={onNavigate}>{label}</a>)}
    </nav>
}

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    return <header className="fixed left-1/2 top-10 z-[1000] w-[70%] -translate-x-1/2 rounded-b-xl bg-[var(--surface-strong)]/75 text-[var(--text)] backdrop-blur transition-colors duration-300 max-md:w-[90%]">
        <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-2 py-[18px]">
            <div className="text-[22px] font-bold text-[var(--text)]">Port<span className="text-red-500">folio</span></div>
            <Navigation onNavigate={() => setMenuOpen(false)} active={menuOpen} />
            <a href="https://wa.me/918130112531?text=Hello%20I%20want%20to%20hire%20you%20for%20a%20project" target="_blank" className="rounded-full bg-red-500 px-6 py-2 text-sm text-white transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-red-500/50 max-md:hidden">Hire Me</a>
            <button type="button" aria-label="Toggle navigation" className="hidden cursor-pointer text-[28px] text-[var(--text)] max-md:block" id="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </div>
    </header>
}
