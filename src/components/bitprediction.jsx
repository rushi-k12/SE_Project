import React, { useState, useEffect } from 'react';
import axios from 'axios';
<<<<<<< HEAD
import '../styles/bitprediction.css'; // Import the CSS file for styling

function BitPrediction() {
=======
import '../styles/bitprediction.css'; 

function Bitprediction() {
>>>>>>> origin/main
  
  const [historicalData, setHistoricalData] = useState([]);
  const [predictionDate, setPredictionDate] = useState('');
  const [predictedValue, setPredictedValue] = useState(null);
  const [forecast, setForecast] = useState([]);

<<<<<<< HEAD
  // Fetch historical data (assuming your Flask backend is running on http://127.0.0.1:5000)
=======
  
>>>>>>> origin/main
  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/bitcoin/historical')
      .then(response => {
        if (Array.isArray(response.data)) {
          setHistoricalData(response.data);
        } else {
          console.error('Invalid data format returned from API');
        }
      })
      .catch(error => console.error('Error fetching historical data:', error));
  }, []);

<<<<<<< HEAD
  // Handle prediction request
=======

>>>>>>> origin/main
  const handlePredict = async () => {
    if (!predictionDate) {
      alert('Please enter a prediction date!');
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:5000/api/bitcoin/predict', { date: predictionDate });
<<<<<<< HEAD
=======
      
>>>>>>> origin/main
      setPredictedValue(response.data.predicted_value);
      setForecast(response.data.forecast);
     
    } catch (error) {
      console.error('Error predicting price:', error);
<<<<<<< HEAD
      // Optionally display an error message to the user
=======

>>>>>>> origin/main
    }
  };

  return (
    <div className="container">
      <h1>Bitcoin Price Prediction</h1>

<<<<<<< HEAD
      {/* Historical Data */}
      <h2>Historical Data</h2>
=======
     
>>>>>>> origin/main
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

      {/* Prediction */}
      <div className="prediction-section">
        <h2>Predict Future Value</h2>
        <input
          className="date-input"
          type="date"
          value={predictionDate}
          onChange={(e) => setPredictionDate(e.target.value)}
        />
<<<<<<< HEAD
        <button className="predict-button" onClick={handlePredict}>Predict</button>
       
        {predictedValue && (
          <div className="prediction-result">
            <h3>Predicted Value for {predictionDate}: <span>${predictedValue}</span></h3>
=======
        
        <button className="predict-button" onClick={handlePredict}>Predict</button>
        
        {predictedValue && (
          <div className="prediction-result">
            <h3>Predicted Value for {predictionDate}: <span>${-1*predictedValue.toFixed(2)}</span></h3>
>>>>>>> origin/main
          </div>
        )}
      </div>
    </div>
  );
}

<<<<<<< HEAD
export default BitPrediction;
=======
export default Bitprediction;
>>>>>>> origin/main
