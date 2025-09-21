let pswBox = document.querySelector('.psw-box');
let genBtn = document.querySelector('.gen-btn');

const adjectives = [
    "Bright", "Silent", "Ancient", "Quick", "Brave", "Gentle",
    "Luminous", "Fierce", "Misty", "Vivid", "Bold", "Calm",
    "Shiny", "Wild", "Graceful", "Frosty", "Radiant", "Swift"
];

const selfVerbs = [
    "Run", "Jump", "Fly", "Travel",
    "Glow", "Whisper", "Shine", "Roar",
    "Dance", "Sing"
];

const toSomeoneVerbs = [
    "Explore", "Create", "Build",
    "Discover", "Imagined", "Chase"
]

const adverbs = [
    "Quickly", "Silently", "Boldly", "Happily",
    "Brightly", "Eagerly", "Gracefully",
    "Fiercely", "Lazily"
];

const participles = [
    "Running", "Jumping", "Flying", "Dancing", "Singing",
    "Exploring", "Creating", "Building", "Discovering",
    "Imagining", "Traveling", "Chasing", "Glowing", "Whispering",
    "Shining", "Roaring", "Laughing", "Waiting", "Waiting",
    "Fading", "Burning", "Falling", "Rising"
];

const nouns = [
    "Apple", "Book", "Ocean", "Star", "Home", "Sun",
    "Forest", "River", "Mountain", "Flower", "Car", "Bird",
    "Space", "Game", "Bridge", "Key", "Sound", "Fire",
    "Tree", "Cloud", "Dream", "Light", "Sky", "Music",
    "River", "Stone", "Wind", "Shadow", "Rain", "Lemon",
    "Pearl", "Moon", "Sunshine", "Rainbow", "Candle",
    "Garden", "Castle", "Journey", "Magic"
];
const symbols = ['!', '@', '#', '$', '%', '&', '*'];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function onGenClick() {
    pswBox.style.display = 'flex';
    genBtn.innerHTML = 'REGENERATE';

    let passwordParts = [];

    if (getRandomInt(2) === 1) {
        passwordParts.push(adjectives[getRandomInt(adjectives.length)]);
    } else {
        passwordParts.push(participles[getRandomInt(participles.length)]);
    }

    passwordParts.push(nouns[getRandomInt(nouns.length)]);

    if (getRandomInt(2) === 1) {
        passwordParts.push(adverbs[getRandomInt(adverbs.length)]);
    }

    if (getRandomInt(2) === 1) {
        passwordParts.push(selfVerbs[getRandomInt(selfVerbs.length)]);
    } else {
        passwordParts.push(toSomeoneVerbs[getRandomInt(toSomeoneVerbs.length)]);
        passwordParts.push(nouns[getRandomInt(nouns.length)]);
    }

    passwordParts.splice(getRandomInt(passwordParts.length), 0, Math.trunc(getRandomInt(100) / 5) * 5);
    passwordParts.splice(getRandomInt(passwordParts.length), 0, symbols[getRandomInt(symbols.length)]);

    document.querySelector("p").innerHTML = passwordParts.join('');
}

function copyPassword() {
    navigator.clipboard.writeText(document.querySelector("p").innerHTML);
}