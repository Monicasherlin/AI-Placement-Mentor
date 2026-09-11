import { ArrowRight, CheckCircle2, AlertTriangle, Sparkles } from "lucide-react";
export default function Dashboard({profile,gap,setPage}) {
  const readiness = gap?.readiness ?? 0;
  return <div className="min-h-screen p-6 md:p-10">
    <div className="mx-auto max-w-6xl">
      <div className="mb-10"><p className="text-sm text-blue-400">AI PLACEMENT MENTOR</p><h1 className="mt-2 text-4xl font-bold md:text-5xl">Know your gap. <span className="gradient-text">Prepare smarter.</span></h1><p className="mt-4 max-w-2xl text-slate-400">A personalized placement coach that connects your resume, target role and company-specific preparation.</p></div>
      {!profile.name ? <div className="glass rounded-3xl p-8"><Sparkles className="text-blue-400"/><h2 className="mt-4 text-2xl font-semibold">Start with your student profile</h2><p className="mt-2 text-slate-400">Add your target company, role, skills and study time.</p><button onClick={()=>setPage("profile")} className="mt-6 rounded-xl bg-blue-500 px-5 py-3 font-semibold">Create profile <ArrowRight className="inline ml-2" size={17}/></button></div> :
      <><div className="grid gap-5 md:grid-cols-3">
        <div className="glass rounded-3xl p-6 md:col-span-1"><p className="text-sm text-slate-400">Placement Readiness</p><div className="mt-5 text-6xl font-bold">{readiness}%</div><div className="mt-5 h-2 rounded-full bg-slate-800"><div className="h-2 rounded-full bg-blue-400" style={{width:`${readiness}%`}}/></div><p className="mt-4 text-sm text-slate-500">{profile.targetCompany} · {profile.targetRole}</p></div>
        <div className="glass rounded-3xl p-6"><p className="text-sm text-slate-400">Strong Areas</p>{(gap?.matched||[]).slice(0,5).map(x=><div className="mt-4 flex gap-2" key={x}><CheckCircle2 size={18} className="text-emerald-400"/>{x}</div>)}{!gap && <p className="mt-4 text-slate-500">Run gap analysis.</p>}</div>
        <div className="glass rounded-3xl p-6"><p className="text-sm text-slate-400">Needs Improvement</p>{(gap?.missing||[]).slice(0,5).map(x=><div className="mt-4 flex gap-2" key={x}><AlertTriangle size={18} className="text-amber-400"/>{x}</div>)}{!gap && <p className="mt-4 text-slate-500">Run gap analysis.</p>}</div>
      </div>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <button onClick={()=>setPage("interview")} className="glass rounded-3xl p-7 text-left hover:border-blue-400/30"><p className="text-blue-400 text-sm">HERO FEATURE</p><h2 className="mt-2 text-2xl font-semibold">Start Shadow Interview</h2><p className="mt-2 text-slate-400">Adaptive company + role questions with actionable evaluation.</p></button>
        <button onClick={()=>setPage("roadmap")} className="glass rounded-3xl p-7 text-left hover:border-blue-400/30"><p className="text-violet-400 text-sm">PERSONALIZED</p><h2 className="mt-2 text-2xl font-semibold">Build My Roadmap</h2><p className="mt-2 text-slate-400">Turn your actual gaps into a focused preparation plan.</p></button>
      </div></>}
    </div>
  </div>
}
