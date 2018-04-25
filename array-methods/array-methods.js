const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]
const planetEl = document.getElementById("planets");
planets.forEach(element => {
    const planetH1 = document.createElement("P");
    planetH1.textContent = element;
    planetEl.appendChild(planetH1);
});

const capitalizedPlanets = planets.map(element =>
    element.charAt(0).toUpperCase() + element.slice(1)
)
console.log(capitalizedPlanets);

const ePlanets = planets.filter(element => element.includes("e"))
console.log(ePlanets);

// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

const newSentence = words.reduce((sentence, word) => sentence + " " + word);
console.log(newSentence);