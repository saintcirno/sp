document.getElementById('predict-button').addEventListener('click', function() {
    const stockSymbol = document.getElementById('stock-input').value;
    fetchStockPrediction(stockSymbol);
});

function fetchStockPrediction(symbol) {
    // Mock prediction data for demonstration
    const mockPrediction = {
        symbol: symbol,
        predictedPrice: (Math.random() * 1000).toFixed(2), // Random price for demo
        change: (Math.random() * 10 - 5).toFixed(2) // Random change for demo
    };

    displayPrediction(mockPrediction);
}

function displayPrediction(prediction) {
    const outputDiv = document.getElementById('prediction-output');
    outputDiv.innerHTML = `
        <p>Predicted Price for ${prediction.symbol}: $${prediction.predictedPrice}</p>
        <p>Change: ${prediction.change}%</p>
    `;
}
