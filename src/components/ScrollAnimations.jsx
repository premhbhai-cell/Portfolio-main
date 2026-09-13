import { useEffect } from 'react'

export default function ScrollAnimations() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add('opacity-100', 'translate-y-0')
        }), { threshold: 0.5 })
        const elements = document.querySelectorAll('.scroll-animate')
        elements.forEach((element) => observer.observe(element))
        return () => observer.disconnect()
    }, [])

    return null
}
