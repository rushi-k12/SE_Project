
from flask import Flask, jsonify, request
from flask_cors import CORS
import pickle
from statsmodels.tsa.holtwinters import ExponentialSmoothing
import pandas as pd
import logging

logging.basicConfig(level=logging.DEBUG)
app = Flask(__name__)
CORS(app)  # Apply CORS globally for all routes

with open('bitcoin_model.pkl', 'rb') as f:
    final_model = pickle.load(f)

historical_data = pd.read_csv('bitcoin_data.csv', parse_dates=['Date'], index_col='Date', dayfirst=True)

@app.route('/api/bitcoin/historical')
def get_historical_data():

    processed_data = historical_data.to_dict(orient='records')
    return jsonify(processed_data)

@app.route('/api/bitcoin/predict', methods=['POST'])
def predict_bitcoin_price():
    try:
        input_date = request.json.get('date')
        logging.debug(f'Received prediction request for date: {input_date}')

        last_date = historical_data.index[-1]
        future_dates = pd.date_range(start=last_date, end=input_date, freq='D')
        forecast = final_model.forecast(len(future_dates))

        prediction_data = {
            "predicted_value": forecast[-1],
            "forecast": forecast.tolist(),
        }
        return jsonify(prediction_data)
    except Exception as e:
        logging.error(f'Error during prediction: {e}')
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)