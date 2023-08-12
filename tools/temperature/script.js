const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');

celsius.addEventListener('input', celsiusToFahrenheit);
fahrenheit.addEventListener('input', fahrenheitToCelsius);

function celsiusToFahrenheit() {
    const celsiusValue = parseFloat(celsius.value);
    const fahrenheitValue = celsiusValue * 9 / 5 + 32;
    fahrenheit.value = fahrenheitValue;
}

function fahrenheitToCelsius() {
    const fahrenheitValue = parseFloat(fahrenheit.value);
    const celsiusValue = (fahrenheitValue - 32) * 5 / 9;
    celsius.value = celsiusValue;
}


