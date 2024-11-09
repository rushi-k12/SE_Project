
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

bitcoinhistorical_data = pd.read_csv('bitcoin_data.csv', parse_dates=['Date'], index_col='Date', dayfirst=True)
bnbhistorical_data = pd.read_csv('bnb_data.csv', parse_dates=['Date'], index_col='Date', dayfirst=True)
Dogecoinhistorical_data = pd.read_csv('Dogecoin_data.csv', parse_dates=['Date'], index_col='Date', dayfirst=True)
ethereumhistorical_data = pd.read_csv('ethereum_data.csv', parse_dates=['Date'], index_col='Date', dayfirst=True)
solanahistorical_data = pd.read_csv('solana_data.csv', parse_dates=['Date'], index_col='Date', dayfirst=True)
tetherhistorical_data = pd.read_csv('tether_data.csv', parse_dates=['Date'], index_col='Date', dayfirst=True)
toncoinhistorical_data = pd.read_csv('toncoin_data.csv', parse_dates=['Date'], index_col='Date', dayfirst=True)
tronhistorical_data = pd.read_csv('tron_data.csv', parse_dates=['Date'], index_col='Date', dayfirst=True)
usdchistorical_data = pd.read_csv('usdc.csv', parse_dates=['Date'], index_col='Date', dayfirst=True)
xrphistorical_data = pd.read_csv('xrp.csv', parse_dates=['Date'], index_col='Date', dayfirst=True)

@app.route('/api/bitcoin/historical')
def get_bitcoin_historical_data():

    processed_data = bitcoinhistorical_data.to_dict(orient='records')
    return jsonify(processed_data)

@app.route('/api/bitcoin/predict', methods=['POST'])
def predict_bitcoin_price():
    try:
        input_date = request.json.get('date')
        logging.debug(f'Received prediction request for date: {input_date}')

        last_date = bitcoinhistorical_data.index[-1]
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
    
@app.route('/api/bnb/historical')
def get_bnb_historical_data():

    processed_data = bnbhistorical_data.to_dict(orient='records')
    return jsonify(processed_data)

@app.route('/api/bnb/predict', methods=['POST'])
def predict_bnb_historical_price():
    try:
        input_date = request.json.get('date')
        logging.debug(f'Received prediction request for date: {input_date}')

        last_date = bnbhistorical_data.index[-1]
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
    
@app.route('/api/Dogecoin/historical')
def get_Dogecoin_historical_data():

    processed_data = Dogecoinhistorical_data.to_dict(orient='records')
    return jsonify(processed_data)

@app.route('/api/Dogecoin/predict', methods=['POST'])
def predict_Dogecoin_price():
    try:
        input_date = request.json.get('date')
        logging.debug(f'Received prediction request for date: {input_date}')

        last_date = Dogecoinhistorical_data.index[-1]
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
    

@app.route('/api/ethereum/historical')
def get_ethereum_historical_data():

    processed_data = ethereumhistorical_data.to_dict(orient='records')
    return jsonify(processed_data)

@app.route('/api/ethereum/predict', methods=['POST'])
def predict_ethereum_price():
    try:
        input_date = request.json.get('date')
        logging.debug(f'Received prediction request for date: {input_date}')

        last_date = ethereumhistorical_data.index[-1]
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
    
@app.route('/api/solana/historical')
def get_solana_historical_data():

    processed_data = solanahistorical_data.to_dict(orient='records')
    return jsonify(processed_data)

@app.route('/api/solana/predict', methods=['POST'])
def predict_solana_price():
    try:
        input_date = request.json.get('date')
        logging.debug(f'Received prediction request for date: {input_date}')

        last_date = solanahistorical_data.index[-1]
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

@app.route('/api/tether/historical')
def get_tether_historical_data():

    processed_data = tetherhistorical_data.to_dict(orient='records')
    return jsonify(processed_data)

@app.route('/api/tether/predict', methods=['POST'])
def predict_tether_price():
    try:
        input_date = request.json.get('date')
        logging.debug(f'Received prediction request for date: {input_date}')

        last_date = tetherhistorical_data.index[-1]
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
    
@app.route('/api/toncoin/historical')
def get_toincoin_historical_data():

    processed_data = toncoinhistorical_data.to_dict(orient='records')
    return jsonify(processed_data)

@app.route('/api/toncoin/predict', methods=['POST'])
def predict_toncoin_price():
    try:
        input_date = request.json.get('date')
        logging.debug(f'Received prediction request for date: {input_date}')

        last_date = toncoinhistorical_data.index[-1]
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
    
@app.route('/api/tron/historical')
def get_tron_historical_data():

    processed_data = tronhistorical_data.to_dict(orient='records')
    return jsonify(processed_data)

@app.route('/api/tron/predict', methods=['POST'])
def predict_tron_price():
    try:
        input_date = request.json.get('date')
        logging.debug(f'Received prediction request for date: {input_date}')

        last_date = tronhistorical_data.index[-1]
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
    
@app.route('/api/usdc/historical')
def get_usdc_historical_data():

    processed_data = usdchistorical_data.to_dict(orient='records')
    return jsonify(processed_data)

@app.route('/api/usdc/predict', methods=['POST'])
def predict_usdc_price():
    try:
        input_date = request.json.get('date')
        logging.debug(f'Received prediction request for date: {input_date}')

        last_date = usdchistorical_data.index[-1]
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
    
@app.route('/api/xrp/historical')
def get_xrp_historical_data():

    processed_data = xrphistorical_data.to_dict(orient='records')
    return jsonify(processed_data)

@app.route('/api/xrp/predict', methods=['POST'])
def predict_xrp_price():
    try:
        input_date = request.json.get('date')
        logging.debug(f'Received prediction request for date: {input_date}')

        last_date = xrphistorical_data.index[-1]
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