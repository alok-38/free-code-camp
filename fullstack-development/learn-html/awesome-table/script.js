document.addEventListener("DOMContentLoaded", function() {
    const planets = document.querySelectorAll(".planet");

    planets.forEach(function(planet) {
        planet.addEventListener("click", function() {
            const planetName  = this.dataset.planet;
        });
    });
});