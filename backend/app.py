from flask import Flask, jsonify
from flask_cors import CORS
from routes.profile import profile_bp
from routes.resume import resume_bp
from routes.analysis import analysis_bp
from routes.roadmap import roadmap_bp
from routes.interview import interview_bp

app = Flask(__name__)
app.config["MAX_CONTENT_LENGTH"] = 10 * 1024 * 1024
CORS(app)

app.register_blueprint(profile_bp, url_prefix="/api/profile")
app.register_blueprint(resume_bp, url_prefix="/api/resume")
app.register_blueprint(analysis_bp, url_prefix="/api/analysis")
app.register_blueprint(roadmap_bp, url_prefix="/api/roadmap")
app.register_blueprint(interview_bp, url_prefix="/api/interview")

@app.get("/api/health")
def health():
    return jsonify({"status": "ok", "service": "AI Placement Mentor"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
