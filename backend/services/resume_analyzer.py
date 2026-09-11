import re

SKILL_ALIASES = {
    "Python": ["python"],
    "Java": ["java"],
    "C++": ["c++", "cpp"],
    "C": [r"\bc\b", " c "],
    "JavaScript": ["javascript", "js"],
    "React": ["react", "reactjs"],
    "Node.js": ["node.js", "nodejs"],
    "SQL": ["sql", "mysql", "postgresql"],
    "Flask": ["flask"],
    "Django": ["django"],
    "Git": ["git", "github"],
    "Docker": ["docker"],
    "AWS": ["aws", "amazon web services"],
    "Data Structures": ["data structures", "dsa"],
    "Algorithms": ["algorithms", "algorithm"],
    "Machine Learning": ["machine learning", "ml"],
    "Firebase": ["firebase"],
}

def _contains(text, pattern):
    return re.search(pattern, text, re.I) is not None

def analyze_resume(text):
    lower = text.lower()
    skills = []
    for display, aliases in SKILL_ALIASES.items():
        if any(_contains(lower, a) for a in aliases):
            skills.append(display)

    sections = {}
    headings = ["education", "experience", "internship", "projects",
                "certifications", "achievements", "skills"]
    for heading in headings:
        sections[heading] = bool(re.search(rf"\b{heading}\b", lower))

    projects = re.findall(
        r"(?:project|projects)\s*[:\-]?\s*(.{0,500})", text, re.I
    )
    internships = re.findall(
        r"(?:internship|intern)\s*[:\-]?\s*(.{0,300})", text, re.I
    )

    return {
        "skills": skills,
        "sections_detected": sections,
        "project_evidence": [p.strip() for p in projects[:5] if p.strip()],
        "internship_evidence": [i.strip() for i in internships[:5] if i.strip()],
        "text_preview": text[:1200],
    }
