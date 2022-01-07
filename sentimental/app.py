from flask import Flask, render_template, jsonify, request
import nltk
from nltk.sentiment.vader import SentimentIntensityAnalyzer

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    input_text = request.json['inputText']
    sid = SentimentIntensityAnalyzer()
    sentiment = sid.polarity_scores(input_text)["compound"]
    return jsonify({'result': sentiment})
    
    # input_text = request.json['inputText']
    # result = 1 if len(input_text) > 1 else 0
    # return jsonify({'result': result})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)

application = app