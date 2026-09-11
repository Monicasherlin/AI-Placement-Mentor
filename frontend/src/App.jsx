import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Resume from "./pages/Resume";
import Gap from "./pages/Gap";
import Roadmap from "./pages/Roadmap";
import Interview from "./pages/Interview";

const initial = {name:"",college:"",year:"",cgpa:"",targetCompany:"",targetRole:"",skillsText:"",studyHours:"2"};

export default function App(){
 const [page,setPage]=useState("dashboard");
 const [profile,setProfile]=useState(()=>JSON.parse(localStorage.getItem("apm_profile")||"null")||initial);
 const [resume,setResume]=useState(()=>JSON.parse(localStorage.getItem("apm_resume")||"null"));
 const [gap,setGap]=useState(()=>JSON.parse(localStorage.getItem("apm_gap")||"null"));
 useEffect(()=>localStorage.setItem("apm_profile",JSON.stringify(profile)),[profile]);
 useEffect(()=>localStorage.setItem("apm_resume",JSON.stringify(resume)),[resume]);
 useEffect(()=>localStorage.setItem("apm_gap",JSON.stringify(gap)),[gap]);

 const props={profile,setProfile,resume,setResume,gap,setGap,setPage};
 let content = page==="profile"?<Profile {...props}/>:page==="resume"?<Resume {...props}/>:page==="gap"?<Gap {...props}/>:page==="roadmap"?<Roadmap {...props}/>:page==="interview"?<Interview {...props}/>:<Dashboard {...props}/>;
 return <Layout page={page} setPage={setPage}>{content}</Layout>
}
