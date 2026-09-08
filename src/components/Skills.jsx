const skills = [['HTML', '90%'], ['CSS', '85%'], ['JavaScript', '70%'], ['React', '75%'], ['Photoshop', '88%'], ['SEO', '75%']]

export default function Skills() {
    return <div className="mb-[30px]">
        <h3 className="mb-[15px] border-b-2 border-white/30 pb-1.5 text-lg">Skills</h3>
        {skills.map(([name, width]) => <div className="mb-2.5" key={name}><span className="text-[13px]">{name}</span><div className="mt-1.5 h-1.5 rounded-full bg-white/30"><div className="h-full rounded-full bg-white" style={{ width }} /></div></div>)}
    </div>
}
