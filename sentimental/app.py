from flask import Flask, render_template, jsonify, request
import json

app = Flask(__name__)

# Display your index page
@app.route("/")
def index():
    # return "console.log('hi')"
    return render_template('index.html')

@app.route("/test", methods = ['POST'])
def test():
    input_text = request.json['inputText']
    return jsonify({"result": input_text})

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80)