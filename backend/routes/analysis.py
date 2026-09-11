from flask import Blueprint, request, jsonify
from services.company_engine import load_company, load_role
from services.skill_gap import calculate_gap

analysis_bp = Blueprint("analysis", __name__)

@analysis_bp.post("/gap")
def gap():
    data = request.get_json(force=True)
    company = load_company(data.get("company", "generic"))
    role = load_role(data.get("role", "sde"))
    result = calculate_gap(data.get("skills", []), company, role, data.get("cgpa", 0))
    return jsonify({"company": company, "role": role, **result})
