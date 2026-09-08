import Image from './Image'
import quizAppImage from '../../Quiz app.png'

const projects = [
    { image: `${import.meta.env.BASE_URL}assets/bussines1.webp`, alt: 'business', title: 'Business Website', description: 'Real estate business website with property listings and responsive UI.', tags: ['HTML', 'CSS', 'JavaScript'], links: [['Project 1', 'https://premhbhai-cell.github.io/Real-state-Bussiness-Website/'], ['Project 2', 'https://premhbhai-cell.github.io/Golden-color-theme-real-state-website/']] },
    { image: `${import.meta.env.BASE_URL}assets/portfolio.webp`, alt: 'portfolio', title: 'Portfolio Website', description: 'Modern developer portfolio website to showcase projects and skills.', tags: ['HTML', 'CSS', 'Responsive'], links: [['Project 1', 'https://premhbhai-cell.github.io/Portfolio/']] },
    { image: quizAppImage, alt: 'quiz app', title: 'Quiz App', description: 'Interactive quiz application with a focused, responsive user experience.', tags: ['React', 'JavaScript', 'Responsive'], links: [['Live Project', 'https://premhbhai-cell.github.io/Quiz-app/']] },
    { image: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=1200&q=70', alt: 'ecommerce', title: 'Ecommerce Website', description: 'Online store design with product showcase and shopping UI.', tags: ['HTML', 'CSS', 'Bootstrap'], links: [['Project 1', '#']] },
    { image: `${import.meta.env.BASE_URL}assets/digital-marketing.webp`, alt: 'marketing', title: 'Digital Marketing Website', description: 'SEO and digital marketing agency website with lead generation layout.', tags: ['SEO', 'Marketing', 'Landing Page'], links: [['Project 1', 'https://optirank.in/']] },
    { image: `${import.meta.env.BASE_URL}assets/coaching-web.webp`, alt: 'coaching website', title: 'Coaching Website', description: 'Professional coaching website with course sections, responsive layout and user-friendly interface.', tags: ['HTML', 'CSS', 'Responsive'], links: [['Live Project', 'https://coachinga.netlify.app/']] },
]

function ProjectCard({ project }) {
    return <div className="flex flex-col overflow-hidden rounded-[15px] bg-[var(--surface)] text-[var(--text)] shadow-2xl shadow-black/30 transition duration-300 hover:translate-y-2 hover:border-b-[10px] hover:border-b-pink-500"><Image className="h-[220px] w-full object-cover" src={project.image} alt={project.alt} width="1200" height="575" /><div className="flex-1 p-[25px]"><h3 className="mb-2.5 text-xl">{project.title}</h3><p className="mb-[15px] text-sm text-[var(--muted)]">{project.description}</p><div className="mb-5 flex flex-wrap gap-1.5">{project.tags.map((tag) => <span className="rounded-full bg-black/10 px-2.5 py-1.5 text-[11px]" key={tag}>{tag}</span>)}</div><div className="flex flex-wrap gap-2.5">{project.links.map(([label, href]) => <a href={href} target={href !== '#' ? '_blank' : undefined} className="relative inline-block overflow-hidden rounded-full bg-gradient-to-r from-orange-500 to-pink-500 px-5 py-2.5 text-[13px] text-white" key={label}>{label}</a>)}</div></div></div>
}

export default function Portfolio() {
    return <section className="bg-[var(--page-bg)] px-[8%] py-[100px] text-[var(--text)] transition-colors duration-300" id="featured"><h2 className="mb-[60px] text-center text-[40px] max-md:text-[30px]">Featured Work</h2><div className="mx-auto grid max-w-[1400px] grid-cols-4 gap-[30px] max-[1100px]:grid-cols-2 max-md:grid-cols-1">{projects.map((project) => <ProjectCard key={project.title} project={project} />)}</div></section>
}
