from flask import Blueprint, request, jsonify
from services.interview_engine import next_question, evaluate_answer

interview_bp = Blueprint("interview", __name__)

@interview_bp.post("/question")
def question():
    data = request.get_json(force=True)
    return jsonify(next_question(
        data.get("mode", "mixed"),
        data.get("difficulty", "adaptive"),
        data.get("company", "Amazon"),
        data.get("role", "SDE"),
        data.get("previous", [])
    ))

@interview_bp.post("/evaluate")
def evaluate():
    data = request.get_json(force=True)
    return jsonify(evaluate_answer(
        data.get("answer", ""),
        data.get("question", ""),
        data.get("focus", "")
    ))
