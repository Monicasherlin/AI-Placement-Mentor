import { useState } from "react";
import { UploadCloud, FileCheck } from "lucide-react";
import { analyzeResume } from "../services/api";
export default function Resume({setResume,setPage}) {
 const [file,setFile]=useState(null),[data,setData]=useState(null),[loading,setLoading]=useState(false),[error,setError]=useState("");
 const go=async()=>{if(!file)return;setLoading(true);setError("");try{const d=await analyzeResume(file);setData(d);setResume(d)}catch(e){setError(e.message)}finally{setLoading(false)}};
 return <Page title="Resume Intelligence" sub="Upload a PDF and extract evidence before measuring your placement gap.">
  <div className="glass rounded-3xl p-8">
   <label className="flex min-h-64 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-700 hover:border-blue-400">
    <UploadCloud size={42} className="text-blue-400"/><p className="mt-4 font-semibold">{file?file.name:"Drop your PDF resume here"}</p><p className="mt-2 text-sm text-slate-500">PDF only · up to 10 MB</p><input type="file" accept=".pdf" className="hidden" onChange={e=>setFile(e.target.files[0])}/>
   </label>
   <button onClick={go} disabled={!file||loading} className="mt-5 w-full rounded-xl bg-blue-500 px-5 py-3 font-semibold disabled:opacity-40">{loading?"Analyzing...":"Analyze Resume"}</button>
   {error&&<p className="mt-4 text-red-400">{error}</p>}
  </div>
  {data&&<div className="mt-6 grid gap-5 md:grid-cols-2"><div className="glass rounded-3xl p-6"><FileCheck className="text-emerald-400"/><h2 className="mt-4 text-xl font-semibold">Detected Skills</h2><div className="mt-4 flex flex-wrap gap-2">{data.skills.map(s=><span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-300" key={s}>{s}</span>)}</div></div><div className="glass rounded-3xl p-6"><h2 className="text-xl font-semibold">Evidence</h2><p className="mt-3 text-sm text-slate-400">Sections detected from the PDF</p><div className="mt-4 grid grid-cols-2 gap-2">{Object.entries(data.sections_detected).map(([k,v])=><div className="rounded-xl bg-slate-900 p-3 text-sm" key={k}>{v?"✓":"—"} {k}</div>)}</div></div><button onClick={()=>setPage("gap")} className="md:col-span-2 rounded-xl bg-violet-500 px-5 py-3 font-semibold">Continue to Gap Analysis</button></div>}
 </Page>
}
function Page({title,sub,children}){return <div className="min-h-screen p-6 md:p-10"><div className="mx-auto max-w-5xl"><p className="text-sm text-blue-400">RESUME PROCESSING</p><h1 className="mt-2 text-4xl font-bold">{title}</h1><p className="mt-2 mb-8 text-slate-400">{sub}</p>{children}</div></div>}
