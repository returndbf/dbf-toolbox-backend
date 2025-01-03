import app from "../index.js"
import request from "../fetch.js"
app.get('/reqTranslate', async (req, res) => {
    const r = await request('https://api.niutrans.com/NiuTransServer/translation', 'GET', {...req.query,apikey:process.env.TRANSLATE_KEY});
    res.send(r);
});
app.get('/reqWeather', async (req, res) => {
    let weatherData = null
    const locationData = await request(`https://geoapi.qweather.com/v2/city/lookup`, 'GET', {
        key: process.env.WEATHER_KEY,
        ...req.query,
    })
    const {location} = locationData
    if (location) {
        weatherData = await request(`https://devapi.qweather.com/v7/weather/3d`, 'GET', {
            key: process.env.WEATHER_KEY,
            location:location?.[0]?.id
        })
    }
    res.send({weatherData,position:locationData});
});
