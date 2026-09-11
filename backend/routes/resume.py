from flask import Blueprint, request, jsonify
from pathlib import Path
from werkzeug.utils import secure_filename
from services.resume_parser import extract_pdf_text
from services.resume_analyzer import analyze_resume

resume_bp = Blueprint("resume", __name__)
UPLOADS = Path(__file__).resolve().parent.parent / "uploads"
UPLOADS.mkdir(exist_ok=True)

@resume_bp.post("/analyze")
def analyze():
    file = request.files.get("resume")
    if not file or not file.filename.lower().endswith(".pdf"):
        return jsonify({"error": "Please upload a PDF resume."}), 400

    name = secure_filename(file.filename)
    path = UPLOADS / name
    file.save(path)

    try:
        text = extract_pdf_text(path)
        result = analyze_resume(text)
        return jsonify(result)
    except Exception as exc:
        return jsonify({"error": f"Could not analyze resume: {exc}"}), 500
