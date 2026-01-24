// Get the current year
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

// Get last modified date
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;


// wind chill equation

document.addEventListener("DOMContentLoaded", () => {
  const tempInput = document.getElementById("temperature");
  const windInput = document.getElementById("wind");
  const windChillSpan = document.getElementById("windChill");

  function calculateWindChill() {
    const temp = parseFloat(tempInput.value);
    const windSpeed = parseFloat(windInput.value);

    let windChill = "N/A";

    if (!isNaN(temp) && !isNaN(windSpeed) && temp <= 50 && windSpeed > 3) {
      windChill =
        35.74 +
        0.6215 * temp -
        35.75 * Math.pow(windSpeed, 0.16) +
        0.4275 * temp * Math.pow(windSpeed, 0.16);
      windChill = `${Math.round(windChill)}°F`;
    }

    windChillSpan.textContent = windChill;
  }

  // Run on page load
  calculateWindChill();

  // Recalculate whenever user changes temperature or wind
  tempInput.addEventListener("input", calculateWindChill);
  windInput.addEventListener("input", calculateWindChill);
});
