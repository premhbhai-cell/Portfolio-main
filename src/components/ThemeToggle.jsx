import { useLayoutEffect, useState } from 'react'

function getInitialTheme() {
    const savedTheme = window.localStorage.getItem('portfolio-theme')
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme
    return 'light'
}

function ThemeButton({ theme, onToggle }) {
    const isLight = theme === 'light'

    return <button
        type="button"
        className={`group relative flex h-8 w-16 items-center justify-between rounded-full border p-1 text-white shadow-lg backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:shadow-red-500/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 ${isLight ? 'border-zinc-300 bg-white/90 text-zinc-900' : 'border-white/20 bg-[#120404]/90'}`}
        onClick={onToggle}
        aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
        aria-pressed={isLight}
        title={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
    >
        <span className={`grid h-6 w-6 place-items-center rounded-full transition duration-500 ${isLight ? 'scale-100 bg-red-500 opacity-100' : 'scale-75 -rotate-30 opacity-40'}`} aria-hidden="true">
            <svg className="h-4 w-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" focusable="false"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" /></svg>
        </span>
        <span className={`grid h-6 w-6 place-items-center rounded-full transition duration-500 ${isLight ? 'scale-75 rotate-30 opacity-40' : 'scale-100 bg-red-500 opacity-100'}`} aria-hidden="true">
            <svg className="h-4 w-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" focusable="false"><path d="M20.7 15.3A8.5 8.5 0 0 1 8.7 3.3 8.5 8.5 0 1 0 20.7 15.3Z" /></svg>
        </span>
    </button>
}

export default function ThemeToggle() {
    const [theme, setTheme] = useState(getInitialTheme)

    useLayoutEffect(() => {
        document.documentElement.dataset.theme = theme
    }, [theme])

    const toggleTheme = () => {
        setTheme((currentTheme) => {
            const nextTheme = currentTheme === 'light' ? 'dark' : 'light'
            window.localStorage.setItem('portfolio-theme', nextTheme)
            return nextTheme
        })
    }

    return <div className="fixed inset-x-0 top-0 z-[1200] h-10"><div className="mx-auto flex h-10 w-full items-center justify-center px-4"><ThemeButton theme={theme} onToggle={toggleTheme} /></div></div>
}
