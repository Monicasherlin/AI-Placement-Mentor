from flask import Blueprint, request, jsonify
from services.company_engine import load_company, load_role
from services.skill_gap import calculate_gap
from services.roadmap import build_roadmap

roadmap_bp = Blueprint("roadmap", __name__)

@roadmap_bp.post("/generate")
def generate():
    data = request.get_json(force=True)
    company = load_company(data.get("company", "generic"))
    role = load_role(data.get("role", "sde"))
    gaps = calculate_gap(data.get("skills", []), company, role, data.get("cgpa", 0))
    return jsonify(build_roadmap(gaps, company["company"], role["role"], data.get("study_hours", 2)))
