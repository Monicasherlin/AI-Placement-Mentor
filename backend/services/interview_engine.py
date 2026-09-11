import random

QUESTION_BANK = {
    "technical": [
        ("Explain the difference between an array and a linked list. When would you choose each?", "Data Structures"),
        ("How would you find the first non-repeating character in a string?", "Problem Solving"),
        ("What is the time complexity of binary search and why?", "Algorithms"),
        ("Explain a REST API you have built or used and how you would make it reliable.", "Technical Design"),
        ("Tell me how you would debug a program that works locally but fails in production.", "Problem Solving"),
    ],
    "behavioral": [
        ("Tell me about a time you took ownership of a difficult task.", "Ownership"),
        ("Tell me about a disagreement in a team and how you handled it.", "Teamwork"),
        ("Describe a time you had to learn something quickly to finish a project.", "Learning Agility"),
        ("Tell me about a mistake you made and what you changed afterward.", "Growth Mindset"),
    ],
}

def next_question(mode="mixed", difficulty="adaptive", company="Amazon", role="SDE", previous=[]):
    if mode == "technical":
        pool = QUESTION_BANK["technical"]
    elif mode == "behavioral":
        pool = QUESTION_BANK["behavioral"]
    else:
        pool = QUESTION_BANK["technical"] + QUESTION_BANK["behavioral"]

    used = {q.get("question") for q in previous}
    candidates = [x for x in pool if x[0] not in used] or pool
    q, focus = random.choice(candidates)
    return {
        "question": q,
        "focus": focus,
        "difficulty": difficulty if difficulty != "adaptive" else "medium",
        "company": company,
        "role": role,
    }

def evaluate_answer(answer, question, focus):
    words = len(answer.split())
    has_action = any(x in answer.lower() for x in ["i ", "my ", "implemented", "built", "decided", "created"])
    has_result = any(x in answer.lower() for x in ["result", "improved", "reduced", "increased", "learned", "%"])
    communication = min(10, max(3, 4 + words // 35))
    problem = min(10, max(3, 5 + int(has_action)))
    behavioral = min(10, max(3, 5 + int(has_action) + int(has_result)))
    technical = min(10, max(3, 5 + int(words > 45) + int(has_result)))
    overall = round((communication + problem + behavioral + technical) / 4, 1)

    return {
        "overall": overall,
        "communication": communication,
        "problem_solving": problem,
        "behavioral": behavioral,
        "technical": technical,
        "focus": focus,
        "strength": "You provided a concrete explanation and kept the answer focused." if words >= 35 else "You identified the main idea clearly.",
        "weakness": "Add more specific actions and measurable outcomes." if not has_result else "Make your personal contribution even more explicit.",
        "improve": "Use a simple Situation → Task → Action → Result structure and emphasize what YOU did.",
    }
