import Image from './Image'

const tools = [
    ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', '98%', 'Angular'],
    ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', '92%', 'Figma'],
    ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', '90%', 'HTML5'],
    ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', '85%', 'CSS3'],
    ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', '90%', 'GitHub'],
    ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', '95%', 'JS'],
    ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg', '95%', 'Photoshop'],
    ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', '95%', 'SQL'],
    ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', '95%', 'TypeScript'],
]

function ToolCard({ image, level, name }) {
    return <div className="group relative flex h-[130px] w-[120px] cursor-pointer flex-col items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-red-500/10 max-md:h-[115px] max-md:w-[100px]"><Image className="mb-2 w-[38px]" src={image} alt="" width="38" height="38" /><h3 className="mb-0.5 text-base">{level}</h3><p className="text-xs text-[var(--muted)]">{name}</p><span className="absolute bottom-0 left-0 h-1 w-0 rounded-b-xl bg-red-500 transition-all duration-200 group-hover:h-3 group-hover:w-full" /></div>
}

export default function DesignTools() {
    return <section className="bg-[var(--section-bg)] px-4 py-[120px] text-center text-[var(--text)] transition-colors duration-300"><p className="mb-2.5 text-[13px] tracking-[2px] text-red-500">My Favorite Tools</p><h2 className="mb-[60px] text-4xl max-md:text-[28px]">Design Tools That Power My Work</h2><div className="mx-auto flex max-w-[1600px] flex-wrap justify-center gap-[25px]"><div className="flex flex-wrap justify-center gap-[25px]">{tools.slice(0, 6).map(([image, level, name]) => <ToolCard key={name} image={image} level={level} name={name} />)}</div><div className="flex w-full flex-wrap justify-center gap-[25px]">{tools.slice(6).map(([image, level, name]) => <ToolCard key={name} image={image} level={level} name={name} />)}</div></div></section>
}
