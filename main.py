# app.py
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app) 

questionList = [
      {
        "id": 1,
        "question": '''Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.''',
        "options": [
          {
            "id": 1,
            "value": "Sed ut perspiciatis unde omnis iste natus error sit",
          },
          {
            "id": 2,
            "value": " quaerat voluptatem. Ut enim ad minima",
          },
          {
            "id": 3,
            "value":
              "ure and praising pain was born and I will give you a complete account of the system, and expound",
          },
          {
            "id": 4,
            "value":
              "hich of us ever undertakes laborious physical exercise, except to obtain some a find fault with a man wh",
          },
        ],
        "answer": 1,
      },
      {
        "id": 2,
        "question": '''fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.''',
        "options": [
          {
            "id": 1,
            "value": "Sed ut perspiciatis unde omnis iste natus error sit",
          },
          {
            "id": 2,
            "value": " quaerat voluptatem. Ut enim ad minima",
          },
          {
            "id": 3,
            "value":
              "ure and praising pain was born and I will give you a complete account of the system, and expound",
          },
          {
            "id": 4,
            "value":
              "hich of us ever undertakes laborious physical exercise, except to obtain some a find fault with a man wh",
          },
        ],
        "answer": 4,
      },
      {
        "id": 3,
        "question": '''Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. ''',
        "options": [
          {
            "id": 1,
            "value": "Sed ut perspiciatis unde omnis iste natus error sit",
          },
          {
            "id": 2,
            "value": " quaerat voluptatem. Ut enim ad minima",
          },
          {
            "id": 3,
            "value":
              "ure and praising pain was born and I will give you a complete account of the system, and expound",
          },
          {
            "id": 4,
            "value":
              "hich of us ever undertakes laborious physical exercise, except to obtain some a find fault with a man wh",
          },
        ],
        "answer": 3,
      },
    ]

@app.route("/get-questions", methods=['GET'])
def get_questions():
    return jsonify(questionList)

if __name__ == "__main__":
    app.run(debug=True)
