import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/bitprediction.css'; 

function EthereumPrediction() {
  
  const [historicalData, setHistoricalData] = useState([]);
  const [predictionDate, setPredictionDate] = useState('');
  const [predictedValue, setPredictedValue] = useState(null);
  const [forecast, setForecast] = useState([]);

  
  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/ethereum/historical')
      .then(response => {
        if (Array.isArray(response.data)) {
          setHistoricalData(response.data);
        } else {
          console.error('Invalid data format returned from API');
        }
      })
      .catch(error => console.error('Error fetching historical data:', error));
  }, []);


  const handlePredict = async () => {
    if (!predictionDate) {
      alert('Please enter a prediction date!');
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:5000/api/ethereum/predict', { date: predictionDate });
      
      setPredictedValue(response.data.predicted_value);
      setForecast(response.data.forecast);
     
    } catch (error) {
      console.error('Error predicting price:', error);

    }
  };

  return (
    <div className="container">
      <h1>Ethereum Price Prediction</h1>

     
      <table className="historical-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(historicalData) && historicalData.length > 0 && historicalData.map((data, index) => (
            <tr key={index}>
              <td>{data.Date}</td>
              <td>{data.Price}</td>
            </tr>
          ))}
        </tbody>
      </table>

  
      <div className="prediction-section">
        <h2>Predict Future Value</h2>
        <input
          className="date-input"
          type="date"
          value={predictionDate}
          onChange={(e) => setPredictionDate(e.target.value)}
        />
        
        <button className="predict-button" onClick={handlePredict}>Predict</button>
        
        {predictedValue && (
          <div className="prediction-result">
            <h3>Predicted Value for {predictionDate}: <span>${-1*predictedValue.toFixed(2)}</span></h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default EthereumPrediction;
