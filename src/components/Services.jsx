const services = [
    ['🎨', 'UI/UX Design', 'I design modern and user-friendly mobile app interfaces that deliver seamless experiences'],
    ['📦', 'Brand Identity Design', 'I craft unique brand identities that capture your vision and connect with your audience.'],
    ['📱', 'Mobile App Design', 'I design modern and user-friendly mobile app interfaces that deliver seamless experiences'],
    ['💻', 'Web Design', 'I build modern websites that capture attention and improve business engagement.'],
    ['🧰', 'Digital Product', 'I design modern digital products with focus on usability and user experience.'],
    ['✎', 'Content Writing', 'I create engaging and SEO friendly content for websites and businesses.'],
]

function ServiceCard({ icon, title, text }) {
    return <div className="group relative rounded-[10px] bg-[var(--surface)] p-[50px_30px] text-[var(--text)] shadow-lg shadow-black/20 transition duration-300 hover:translate-y-2 hover:border-b-[10px] hover:border-b-pink-500 hover:shadow-2xl"><div className="mx-auto -mt-20 mb-5 flex h-[65px] w-[65px] items-center justify-center rounded-full bg-[var(--surface)] text-[22px] shadow-xl">{icon}</div><h3 className="mb-2.5 text-xl">{title}</h3><p className="mb-6 text-sm leading-[1.6] text-[var(--muted)]">{text}</p><a href="#" className="relative inline-block overflow-hidden rounded-full bg-red-500 px-[26px] py-2.5 text-sm text-white transition hover:-translate-y-0.5">View Services</a></div>
}

export default function Services({ process }) {
    return <section className="bg-[var(--page-bg)] px-4 py-[120px] text-center text-[var(--text)] transition-colors duration-300" id="service-section"><div className="mx-auto w-[90%] max-w-[1200px]">{process}<div className="grid grid-cols-3 gap-10 max-lg:grid-cols-2 max-md:grid-cols-1">{services.map(([icon, title, text]) => <ServiceCard key={title} icon={icon} title={title} text={text} />)}</div></div></section>
}
