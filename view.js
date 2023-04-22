export function showWeatherData(data) {

    if (data) {
        const condition = document.getElementById('condition')
        const location = document.getElementById('location')
        const temperature = document.getElementById('temperature')
        const uv = document.getElementById('uv')

        condition.src = data.current.condition.icon
        location.innerHTML = data.location.name + ', ' + data.location.region
        temperature.innerHTML = data.current.temp_f + '°F'
        uv.innerHTML = 'UV Index: ' + data.current.uv
    }

    const searchInput = document.querySelector('#searchInput')
    searchInput.value = ''
    searchInput.blur();

    const searchButton = document.querySelector('#searchButton')
    searchButton.blur();
}
