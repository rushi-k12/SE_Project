# PriceProphet
This project is a web-based platform designed to forecast future cryptocurrency prices based on historical data. Using advanced machine learning techniques, the platform provides real-time and historical data, along with a user-friendly interface for easy navigation and analysis. The project emphasizes scalability, security, and high performance to handle large data volumes and concurrent users.

## Features

- **Real-time Data Collection**: Fetches up-to-date cryptocurrency data through API integrations.
- **Prediction Engine**: Utilizes statistical models, including Naive Forecasting, Linear Regression, and LSTM, for future price predictions.
- **User Management**: Supports user registration, login, and profile management.
- **Dashboard Interface**: Displays predictions and data insights through an intuitive user interface (UI).
- **Scalability and Performance**: Built with robust architecture to support large volumes of data and concurrent users.

## Technology Stack

### Frontend
- **React.js**: For a modular, component-based user interface.
- **React Router**: Enables seamless navigation between sections without page reloads.

### Backend
- **Node.js and Express.js**: For server-side operations and API creation.
- **Appwrite**: Manages user authentication, database, and file storage.
- **MongoDB**: Database for storing historical cryptocurrency data and user information.

### Machine Learning Models
- **Naive Forecasting**: Uses the last known data point for predictions as a benchmark.
- **Linear Regression**: Establishes a relationship between time and price for trend prediction.
- **Exponential Smoothing**: Utilizes trend and seasonality components to make predictions, adapting to recurring patterns in the time series.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/crypto-price-prediction-platform.git
   cd crypto-price-prediction-platform
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install


## Usage
Register an account or log in to access the dashboard.
Select a cryptocurrency to view real-time data and predictions.
Analyze the predicted prices based on different models and time frames.
Monitor historical trends, which are displayed with interactive graphs.
## Future Enhancements
Real-time Model Adaptability: Automatic updates based on recent data to adapt to market trends.
Advanced Visualizations: Inclusion of additional charts for volatility and risk analysis.
Mobile-Friendly Interface: Optimizing the dashboard for mobile devices.
