const API = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

async function request(path, options = {}) {
  const res = await fetch(`${API}${path}`, options);
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Request failed");
  return data;
}
export const saveProfile = (profile) => request("/profile", {
  method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(profile)
});
export const analyzeResume = (file) => {
  const form = new FormData(); form.append("resume", file);
  return request("/resume/analyze", {method:"POST", body:form});
};
export const analyzeGap = (data) => request("/analysis/gap", {
  method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(data)
});
export const generateRoadmap = (data) => request("/roadmap/generate", {
  method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(data)
});
export const getQuestion = (data) => request("/interview/question", {
  method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(data)
});
export const evaluateAnswer = (data) => request("/interview/evaluate", {
  method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(data)
});
