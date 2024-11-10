import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/bitprediction.css'; 

function TronPrediction() {
  
  const [historicalData, setHistoricalData] = useState([]);
  const [predictionDate, setPredictionDate] = useState('');
  const [predictedValue, setPredictedValue] = useState(null);
  const [forecast, setForecast] = useState([]);

  
  useEffect(() => {
    axios.get('https://se-project-backend-jfga.onrender.com/api/tron/historical')
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
      const response = await axios.post('https://se-project-backend-jfga.onrender.com/api/tron/predict', { date: predictionDate });
      
      setPredictedValue(response.data.predicted_value);
      setForecast(response.data.forecast);
     
    } catch (error) {
      console.error('Error predicting price:', error);

    }
  };

  return (
    <div className='bit-container'>
    <div className="container">
      <h1>TRON Price Prediction</h1>


      {/* Prediction */}
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
            <h3>Predicted Value for {predictionDate}: <span>${-1*(predictedValue/100).toFixed(2)}</span></h3>
          </div>
        )}
      </div>
      </div>
    </div>
  );
}

export default TronPrediction;
