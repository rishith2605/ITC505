const storyStages = {
    start: {
        text: "You are a traveler who stumbles upon the kingdom of Eldoria, where rumors of a dragon terrorizing the villages abound. In the marketplace, you’re approached by a hooded stranger offering you a choice: help slay the dragon or seek a legendary treasure hidden deep within the Forgotten Forest. What will you do?",
        choices: [
            { text: "Help slay the dragon", consequence: "dragonQuest" },
            { text: "Seek the legendary treasure", consequence: "forestQuest" },
            { text: "Decline both and rest at the inn", consequence: "inn" }
        ],
        image: "https://api.deepai.org/job-view-file/35695312-3b4f-4154-88a1-71eff73b5add/outputs/output.jpg?art-image=true"
    },
    dragonQuest: {
        text: "You join a group of warriors preparing to confront the dragon in its mountain lair. Before the journey, you’re given a choice to either carry a powerful sword or a protective shield. Which will you choose?",
        choices: [
            { text: "Take the sword", consequence: "swordPath" },
            { text: "Take the shield", consequence: "shieldPath" }
        ],
        image: "https://api.deepai.org/job-view-file/5034631e-1381-4b49-ae28-af331a71be0c/outputs/output.jpg?art-image=true"
    },
    forestQuest: {
        text: "You venture into the mysterious forest alone. The path is dark, and strange sounds echo all around. As you proceed, you encounter a mystical creature offering guidance, but it demands a tribute. Do you give it your amulet or try to find another way?",
        choices: [
            { text: "Offer the amulet", consequence: "creatureHelp" },
            { text: "Refuse and go alone", consequence: "noHelp" }
        ],
        image: "https://api.deepai.org/job-view-file/5e6ae47b-982f-493e-8722-3d6f0966b3b4/outputs/output.jpg?art-image=true"
    },
    inn: {
        text: "You rest at the inn, enjoying a hearty meal and warm bed. However, the next morning, you hear news of brave souls embarking on quests. Inspired, you decide to follow one of their paths. Will you help with the dragon or seek the treasure?",
        choices: [
            { text: "Help slay the dragon", consequence: "dragonQuest" },
            { text: "Seek the legendary treasure", consequence: "forestQuest" }
        ],
        image: "https://api.deepai.org/job-view-file/dd8c4ed4-58ae-421a-94ac-c8aa41809da3/outputs/output.jpg?art-image=true"
    },
    swordPath: {
        text: "Armed with the sword, you and the warriors face the dragon. With bravery and strength, you strike a decisive blow, and the beast falls. You’re hailed as a hero of Eldoria.",
        choices: [],
        image: "https://api.deepai.org/job-view-file/a24779b0-18c8-4541-8eb9-3e3062d0d689/outputs/output.jpg?art-image=true"
    },
    shieldPath: {
        text: "With the shield, you protect your fellow warriors as they fight the dragon. Though the beast is defeated, you realize you were instrumental in saving lives and are honored as a guardian of Eldoria.",
        choices: [],
        image: "https://api.deepai.org/job-view-file/ca2b7051-8091-4fb0-97de-412e72ba5ef7/outputs/output.jpg?art-image=true"
    },
    creatureHelp: {
        text: "The creature guides you through a hidden path, leading to a cave filled with ancient treasure. You leave Eldoria wealthier than you ever dreamed.",
        choices: [],
        image: "https://api.deepai.org/job-view-file/5d5f6795-6996-4845-aeaf-ed386cb8b79d/outputs/output.jpg?art-image=true"
    },
    noHelp: {
        text: "Without the creature’s help, you wander lost in the forest. Eventually, you find your way out, but the treasure remains hidden forever.",
        choices: [],
        image: "https://api.deepai.org/job-view-file/0f77ecb8-44e9-4a4a-b177-98ed8d7e3d33/outputs/output.jpg?art-image=true"
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
