from flask import Blueprint, request, jsonify
profile_bp = Blueprint("profile", __name__)

@profile_bp.post("")
def save_profile():
    data = request.get_json(force=True)
    return jsonify({"message": "Profile saved", "profile": data})
