document.addEventListener("DOMContentLoaded", function() {
    const celestialObjects = document.querySelectorAll(".planet, .star");

    celestialObjects.forEach(function(object) {
        object.addEventListener("click", function() {
            const objectName = this.dataset.planet;
            const objectDetails = getObjectDetails(objectName);
            displayObjectDetails(objectDetails);
        });
    });

    function getObjectDetails(objectName) {
        const details = {
            Mercury: "Mercury is the smallest planet in our solar system and is named after the Roman god of commerce...",
            Venus: "Venus is often called Earth's twin because of their similar size, mass, proximity to the Sun...",
            Earth: "Earth is the third planet from the Sun and the only known planet to support life. It is home to millions...",
            Mars: "Mars is known as the Red Planet because of its reddish appearance...",
            Jupiter: "Jupiter is the largest planet in our solar system and is primarily composed of hydrogen and helium...",
            Saturn: "Saturn is best known for its beautiful rings, which are made of ice and rock particles...",
            Uranus: "Uranus is the seventh planet from the Sun and is tipped on its side with an axial tilt of over 90 degrees...",
            Neptune: "Neptune is the eighth and farthest planet from the Sun in our solar system. It is also the coldest...",
            Sun: "The Sun is a third-generation star presumed to be born from the remnants of a supernova explosion which took place 15 billion years ago."
            // Add details for other celestial objects as needed
        };
        return details[objectName];
    }

    function displayObjectDetails(details) {
        const objectDetailsDiv = document.getElementById("objectDetails");
        objectDetailsDiv.innerHTML = "<p>" + details + "</p>";
        objectDetailsDiv.style.display = "block";
    }
});
