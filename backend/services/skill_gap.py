def calculate_gap(student_skills, company, role, cgpa=0):
    have = {s.lower() for s in student_skills}
    required = list(dict.fromkeys(company.get("technical_focus", []) + role.get("core_skills", [])))
    matched = [s for s in required if s.lower() in have]
    missing = [s for s in required if s.lower() not in have]

    base = 45 + min(len(matched) * 7, 35)
    if float(cgpa or 0) >= 8:
        base += 5
    readiness = min(100, base)

    reasons = []
    if missing:
        reasons.append(
            f"Your profile shows evidence for {len(matched)} of {len(required)} "
            f"target areas, so the missing areas are lowering readiness."
        )
    if float(cgpa or 0) and float(cgpa) < 7.5:
        reasons.append("Your CGPA is below the common 7.5+ screening benchmark used by some campus processes.")

    return {
        "readiness": readiness,
        "matched": matched,
        "missing": missing,
        "reasons": reasons or ["Your current profile covers the main target areas."]
    }
