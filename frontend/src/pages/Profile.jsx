import { useState } from "react";
import { saveProfile } from "../services/api";
export default function Profile({profile,setProfile,setPage}) {
  const [form,setForm]=useState(profile);
  const update=(k,v)=>setForm({...form,[k]:v});
  const submit=async(e)=>{e.preventDefault(); await saveProfile(form); setProfile(form); setPage("resume");};
  return <Page title="Student Profile" sub="Tell the mentor who you are and what you are targeting."><form onSubmit={submit} className="glass rounded-3xl p-7 grid gap-5 md:grid-cols-2">
    {[["name","Name","Monica"],["college","College","VIT Chennai"],["year","Year","2"],["cgpa","CGPA","7.5"],["targetCompany","Target Company","Amazon"],["targetRole","Target Role","Software Development Engineer"],["studyHours","Study Hours / Day","2"]].map(([k,l,p])=><label key={k} className="block"><span className="text-sm text-slate-400">{l}</span><input value={form[k]||""} onChange={e=>update(k,e.target.value)} placeholder={p} className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 outline-none focus:border-blue-400"/></label>)}
    <label className="md:col-span-2"><span className="text-sm text-slate-400">Current Skills (comma separated)</span><input value={form.skillsText||""} onChange={e=>update("skillsText",e.target.value)} placeholder="Python, Java, SQL, React, Data Structures" className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 outline-none focus:border-blue-400"/></label>
    <button className="md:col-span-2 rounded-xl bg-blue-500 px-5 py-3 font-semibold">Save & Continue</button>
  </form></Page>
}
function Page({title,sub,children}){return <div className="min-h-screen p-6 md:p-10"><div className="mx-auto max-w-5xl"><p className="text-sm text-blue-400">PROFILE SETUP</p><h1 className="mt-2 text-4xl font-bold">{title}</h1><p className="mt-2 mb-8 text-slate-400">{sub}</p>{children}</div></div>}
