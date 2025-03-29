document.addEventListener("DOMContentLoaded", () => {
    // Footer year and last modification date
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("last-mod").textContent = document.lastModified;

    // Wind chill calculation
    const temperature = parseFloat(document.getElementById("temperature").textContent);
    const windSpeed = parseFloat(document.getElementById("wind-speed").textContent);

    function calculateWindChill(temp, wind) {
        if (temp <= 10 && wind > 4.8) {
            return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1);
        }
        return "N/A";
    }

    document.getElementById("wind-chill").textContent = calculateWindChill(temperature, windSpeed);
});