const apiKey = import.meta.env.VITE_WEATHER_API_KEY

console.log(apiKey)

function convertData(data) {
    return {
        location: {
            name: data.location.name,
            region: data.location.region
        },
        current: {
            temp_f: data.current.temp_f,
            condition: {
                icon: data.current.condition.icon
            },
            uv: data.current.uv
        }
    }
}

export async function getWeatherData(query) {
    try {
        const response = await fetch('https://api.weatherapi.com/v1/current.json?key=' + apiKey + '&q=' + query + '&aqi=yes', {mode: 'cors'})
        if (!response.ok) {
            throw new Error(query + ' not found. Please try again.')
        }
        const data = await response.json()
        return convertData(data);
    } catch (error) {
        alert(error)
        return null;
    }
}
