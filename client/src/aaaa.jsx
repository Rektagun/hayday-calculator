app.get('/api/weather', async (req, res) => {
  try {
    // req.query contains query parameters from the frontend request
    const city = req.query.city || 'London';
    console.log('Getting weather for:', city);

    // Backend making a request to external API (backend acting as client)
    const weatherResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`
    );

    // Process the external API response
    const weatherData = {
      city: weatherResponse.data.name,
      temperature: weatherResponse.data.main.temp,
      description: weatherResponse.data.weather[0].description
    };

    // Send processed data back to frontend
    res.json(weatherData);
  } catch (error) {
    console.error('Weather API error:', error);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});
