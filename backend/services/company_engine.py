import json
from pathlib import Path

BASE = Path(__file__).resolve().parent.parent / "data"

def load_company(name):
    safe = name.lower().replace(" ", "_")
    path = BASE / "companies" / f"{safe}.json"
    if not path.exists():
        path = BASE / "companies" / "generic.json"
    return json.loads(path.read_text(encoding="utf-8"))

def load_role(name):
    safe = name.lower().replace(" ", "_")
    path = BASE / "roles" / f"{safe}.json"
    if not path.exists():
        path = BASE / "roles" / "sde.json"
    return json.loads(path.read_text(encoding="utf-8"))
