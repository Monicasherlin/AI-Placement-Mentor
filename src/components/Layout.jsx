import { BrainCircuit, LayoutDashboard, UserRound, FileText, Target, Route, Mic2 } from "lucide-react";

const items = [
  ["dashboard","Dashboard",LayoutDashboard],["profile","Profile",UserRound],["resume","Resume",FileText],
  ["gap","Gap Analysis",Target],["roadmap","Roadmap",Route],["interview","Shadow Interview",Mic2]
];

export default function Layout({page,setPage,children}) {
  return <div className="min-h-screen bg-slate-950">
    <aside className="fixed left-0 top-0 bottom-0 hidden w-64 border-r border-slate-800 bg-slate-950/95 p-5 lg:block">
      <div className="flex items-center gap-3 mb-10"><div className="rounded-xl bg-blue-500/15 p-2"><BrainCircuit className="text-blue-400"/></div><div><b>AI Placement</b><div className="text-xs text-slate-500">MENTOR</div></div></div>
      <nav className="space-y-2">{items.map(([id,label,Icon])=><button key={id} onClick={()=>setPage(id)} className={`w-full flex items-center gap-3 rounded-xl px-4 py-3 text-sm ${page===id?"bg-blue-500/15 text-blue-300":"text-slate-400 hover:bg-slate-900"}`}><Icon size={18}/>{label}</button>)}</nav>
      <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-slate-900 p-4 text-xs text-slate-400">Build your profile → analyze the gap → practice the target interview.</div>
    </aside>
    <main className="lg:ml-64">{children}</main>
  </div>
}
