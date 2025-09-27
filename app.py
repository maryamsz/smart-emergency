from flask import Flask, render_template, request, jsonify
import sqlite3

app = Flask(__name__)

# قاعدة بيانات بسيطة لتسجيل البلاغات
def init_db():
    conn = sqlite3.connect("emergency.db")
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS reports
                 (id INTEGER PRIMARY KEY AUTOINCREMENT,
                  service TEXT, message TEXT)''')
    conn.commit()
    conn.close()

init_db()

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/report", methods=["POST"])
def report():
    data = request.get_json()
    service = data.get("service")
    message = data.get("message")

    # تخزين البلاغ
    conn = sqlite3.connect("emergency.db")
    c = conn.cursor()
    c.execute("INSERT INTO reports (service, message) VALUES (?, ?)", (service, message))
    conn.commit()
    conn.close()

    return jsonify({"status": "success", "msg": "Report saved!"})

if __name__ == "__main__":
    app.run(debug=True)
