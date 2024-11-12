const storyStages = {
    start: {
        text: "You are a traveler who stumbles upon the kingdom of Eldoria, where rumors of a dragon terrorizing the villages abound. In the marketplace, you’re approached by a hooded stranger offering you a choice: help slay the dragon or seek a legendary treasure hidden deep within the Forgotten Forest. What will you do?",
        choices: [
            { text: "Help slay the dragon", consequence: "dragonQuest" },
            { text: "Seek the legendary treasure", consequence: "forestQuest" },
            { text: "Decline both and rest at the inn", consequence: "inn" }
        ],
        image: "90c04c7e-6861-45ca-b5f7-fc707daed3b0.jpg"
    },
    dragonQuest: {
        text: "You join a group of warriors preparing to confront the dragon in its mountain lair. Before the journey, you’re given a choice to either carry a powerful sword or a protective shield. Which will you choose?",
        choices: [
            { text: "Take the sword", consequence: "swordPath" },
            { text: "Take the shield", consequence: "shieldPath" }
        ],
        image: "c20835b1-367a-42e7-bf02-a53f226df4f4.jpg"
    },
    forestQuest: {
        text: "You venture into the mysterious forest alone. The path is dark, and strange sounds echo all around. As you proceed, you encounter a mystical creature offering guidance, but it demands a tribute. Do you give it your amulet or try to find another way?",
        choices: [
            { text: "Offer the amulet", consequence: "creatureHelp" },
            { text: "Refuse and go alone", consequence: "noHelp" }
        ],
        image: "bb13c7f1-0511-4baa-ba53-a55b3b2ef5e4.jpg"
    },
    inn: {
        text: "You rest at the inn, enjoying a hearty meal and warm bed. However, the next morning, you hear news of brave souls embarking on quests. Inspired, you decide to follow one of their paths. Will you help with the dragon or seek the treasure?",
        choices: [
            { text: "Help slay the dragon", consequence: "dragonQuest" },
            { text: "Seek the legendary treasure", consequence: "forestQuest" }
        ],
        image: "be49654b-4c52-46e0-b805-bf15780b52e5.jpg"
    },
    swordPath: {
        text: "Armed with the sword, you and the warriors face the dragon. With bravery and strength, you strike a decisive blow, and the beast falls. You’re hailed as a hero of Eldoria.",
        choices: [],
        image: "cad2acf4-0380-4f84-a9b1-85f40d794a01.jpg"
    },
    shieldPath: {
        text: "With the shield, you protect your fellow warriors as they fight the dragon. Though the beast is defeated, you realize you were instrumental in saving lives and are honored as a guardian of Eldoria.",
        choices: [],
        image: "301d0884-28cd-4cfc-b720-39e9be7353a1.jpg"
    },
    creatureHelp: {
        text: "The creature guides you through a hidden path, leading to a cave filled with ancient treasure. You leave Eldoria wealthier than you ever dreamed.",
        choices: [],
        image: "ebb38daf-7f04-4990-b3ab-ac09be4a231d.jpg"
    },
    noHelp: {
        text: "Without the creature’s help, you wander lost in the forest. Eventually, you find your way out, but the treasure remains hidden forever.",
        choices: [],
        image: "32cecd25-1244-45da-95e4-af59e1a8975e.jpg"
    }
};

let currentStage = "start";

function startGame() {
    currentStage = "start";
    updatePage();
}

function updatePage() {
    const stage = storyStages[currentStage];
    document.getElementById("story").textContent = stage.text;

    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";

    if (stage.choices.length === 0) {
        const restartButton = document.createElement("button");
        restartButton.textContent = "Restart Story";
        restartButton.addEventListener("click", startGame);
        choicesContainer.appendChild(restartButton);
    } else {
        stage.choices.forEach(choice => {
            const button = document.createElement("button");
            button.textContent = choice.text;
            button.addEventListener("click", () => {
                currentStage = choice.consequence;
                updatePage();
            });
            choicesContainer.appendChild(button);
        });
    }

    document.getElementById("image").innerHTML = `<img src="${stage.image}" alt="Image for ${currentStage}">`;
}

startGame();
