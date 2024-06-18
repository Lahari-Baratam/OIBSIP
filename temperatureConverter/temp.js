function convertTemperature() {
    let temp = document.getElementById("temperatureInput").value;
    let unit = document.getElementById("unitInput").value;

    // Validate input
    if (isNaN(temp) || temp === "") {
        document.getElementById("result").innerText = "Please enter a valid number!";
        return;
    }

    temp = parseFloat(temp);
    let convertedTemp;
    let resultText = "";

    if (unit === "Celsius") {
        convertedTemp = (temp * 9/5) + 32;
        resultText = `${temp} °C is ${convertedTemp.toFixed(2)} °F`;
        convertedTemp = temp + 273.15;
        resultText += ` and ${convertedTemp.toFixed(2)} K`;
    } else if (unit === "Fahrenheit") {
        convertedTemp = (temp - 32) * 5/9;
        resultText = `${temp} °F is ${convertedTemp.toFixed(2)} °C`;
        convertedTemp = (temp - 32) * 5/9 + 273.15;
        resultText += ` and ${convertedTemp.toFixed(2)} K`;
    } else if (unit === "Kelvin") {
        convertedTemp = temp - 273.15;
        resultText = `${temp} K is ${convertedTemp.toFixed(2)} °C`;
        convertedTemp = (temp - 273.15) * 9/5 + 32;
        resultText += ` and ${convertedTemp.toFixed(2)} °F`;
    }

    document.getElementById("result").innerText = resultText;
}
