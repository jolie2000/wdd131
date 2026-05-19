const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const windChill = document.querySelector("#wind-chill");
const temperature = 9;
const windSpeed = 12;

function calculateWindChill(temperature, windSpeed) {
  return 13.12 + 0.6215 * temperature - 11.37 * windSpeed ** 0.16 + 0.3965 * temperature * windSpeed ** 0.16;
}

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = document.lastModified;

windChill.textContent =
  temperature <= 10 && windSpeed > 4.8
    ? `${calculateWindChill(temperature, windSpeed).toFixed(1)}\u00b0C`
    : "N/A";
