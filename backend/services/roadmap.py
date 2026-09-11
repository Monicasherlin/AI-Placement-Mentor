def build_roadmap(gaps, company, role, study_hours=2):
    missing = gaps.get("missing", [])
    days = []
    if "Data Structures" in missing or "Algorithms" in missing:
        days.append(("Day 1–3", "DSA foundations", "Arrays, strings, hashing, complexity and timed practice."))
    if "Problem Solving" in missing:
        days.append(("Day 4–6", "Problem solving", "Solve progressively harder problems and explain your approach aloud."))
    if "System Design" in missing:
        days.append(("Day 7–8", "Technical design", "Practice APIs, databases, scalability basics and trade-offs."))
    days.append(("Day 9–10", "Interview communication", "Practice STAR answers and technical project explanations."))
    days.append(("Day 11–14", f"{company} + {role} simulation", "Run shadow interviews, review weak areas and repeat targeted questions."))

    return {
        "study_hours_per_day": study_hours,
        "items": days,
        "principle": "The roadmap prioritizes the student's missing target skills instead of giving every student the same plan."
    }
