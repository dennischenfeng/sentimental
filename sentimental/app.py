from flask import Flask, render_template, jsonify, request
import json

app = Flask(__name__)

# Display your index page
@app.route("/")
def index():
    # return "console.log('hi')"
    return render_template('index.html')

# @app.route("/result")
# def result():
#     input_text = request.args.get('input-text')
#     # b = request.args.get('b')
#     return jsonify({"result": input_text + "test"})

@app.route("/test", methods = ['GET', 'POST'])
def test():
    input_text = request.json['inputText']
    return json.dumps({"result": input_text})


    # return '{"a": "hello world"}'



if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80)