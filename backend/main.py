from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def read_state():
    with open("venue_state.json", "r") as f:
        return json.load(f)

def write_state(data):
    with open("venue_state.json", "w") as f:
        json.dump(data, f, indent=2)

@app.get("/venue-status")
def get_status():
    return read_state()

@app.post("/update-status")
def update_status(data: dict):
    write_state(data)
    return {"message": "Venue status updated"}

@app.get("/alerts")
def get_alert():
    state = read_state()
    return {"alert": state["alert"]}

@app.post("/ask")
def ask_question(payload: dict):
    question = payload.get("question", "")

    responses = {
        "best exit route": "Exit A is crowded. Please use Exit B.",
        "food near gate 3": "Gate 3 food queue is low right now.",
        "restroom": "Restroom B is moderately busy."
    }

    for key in responses:
        if key in question.lower():
            return {"response": responses[key]}

    return {"response": "Please follow the venue alerts for best routing."}