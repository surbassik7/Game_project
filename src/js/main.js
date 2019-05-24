var info = document.querySelector(".startInfo");
const button = document.querySelector("#button");
const dark = document.querySelector("#dark");
const questiondisplay = document.querySelector(".questionHolder");
const jumbotron = document.querySelector("#jumbotron");
questiondisplay.style.display = "none";
sceneArray = [
  "images/scene photos/Avengers Assembled.jpg",

  "images/scene photos/black panther civil war.jpg",

  "images/scene photos/captain-america.jpg",

  "images/scene photos/civilwar.jpg",

  "images/scene photos/doctor-strange_still_2017.jpg",

  "images/scene photos/iron man.jpg",

  "images/scene photos/Spider_Man.jpg",

  "images/scene photos/spidermanshield.jpg",

  "images/scene photos/thor hulk.jpg",

  "images/scene photos/vision.jpg",

  "images/scene photos/warmachine.jpg",

  "images/scene photos/guardians-of-the-galaxy.jpg"
];

const myQuestions = [
  {
    Question: "What alloy is Captain America's sheild made of?",
    answers: {
      a: "Steel",
      b: "Adamantium",
      c: "Vibrainium",
      d: "Uru"
    },
    correctAnswer: "c"
  },
  {
    Question:
      "What was the code name of the Government project that gave Captain America his powers?",
    answers: {
      a: "Weapon X",
      b: "Super Soldier",
      c: "AIM",
      d: "Hyrda"
    },
    correctAnswer: "b"
  },
  {
    Question:
      "What was the name of the Virtual Intellegnce designed by Iron man?",
    answers: {
      a: "Jarvis",
      b: "Hal 9000",
      c: "T-800",
      d: "R2-D2"
    },
    correctAnswer: "a"
  },
  {
    Question:
      "What did Iron man build to power his suits and keep himself alive?",
    answers: {
      a: "Skynet",
      b: "Death Star",
      c: "Gamma Bomb",
      d: "Arc Reactor"
    },
    correctAnswer: "d"
  },
  {
    Question: "What is the name Thor's Hammer?",
    answers: {
      a: "Starkiller",
      b: "Stormbraker",
      c: "Mjolnir",
      d: "Jarnbjorn"
    },
    correctAnswer: "c"
  },
  {
    Question: "Where is Thor from?",
    answers: {
      a: "Wakanda",
      b: "Asgard",
      c: "Atlantis",
      d: "Valhalla"
    },
    correctAnswer: "b"
  },
  {
    Question:
      "What type of weapon test was Bruce Banner caught in to become the Hulk?",
    answers: {
      a: "Arc Reactor",
      b: "Gamma Bomb",
      c: "Quatum Realm",
      d: "Jericho"
    },
    correctAnswer: "b"
  },
  {
    Question: "Who did the Hulk fight in New York City?",
    answers: {
      a: "The Absorbing Man",
      b: "The Leader",
      c: "Abomination",
      d: "Wolverine"
    },
    correctAnswer: "c"
  },
  {
    Question:
      "What is the name of the Goddess who gave the Black Panther his powers?",
    answers: {
      a: "Bask",
      b: "Sif",
      c: "Freya",
      d: "Loki"
    },
    correctAnswer: "a"
  },
  {
    Question:
      "What metal alloy is the meteor made of that is mined in Wakanda?",
    answers: {
      a: "Steel",
      b: "Adamantium",
      c: "Vibrainium",
      d: "Uru"
    },
    correctAnswer: "b"
  },
  {
    Question:
      "What Infinity stone was place in Visions head during his creation?",
    answers: {
      a: "Soul",
      b: "Power",
      c: "Reality",
      d: "Mind"
    },
    correctAnswer: "d"
  },
  {
    Question: "Who are the members of the Guardians of The Galaxy?",
    answers: {
      a: "Star Lord, Gamora, Groot, Rocket, Drax",
      b: "Cyclopes, Beast, Jean Grey, Angel, Iceman",
      c: "Mr. Fantastic, Invisible Woman, Human Torch, The Thing",
      d: "Thor, Hulk, Dr. Strange, Spider-man"
    },
    correctAnswer: "a"
  },
  {
    Question: "James Rhodes code name is??",
    answers: {
      a: "Whiplash",
      b: "Iron Monger",
      c: "War Machine",
      d: "Iron Patriot"
    },
    correctAnswer: "c"
  },
  {
    Question: "What is the Falcons real name?",
    answers: {
      a: "Donald Blake",
      b: "Sam Wilson",
      c: "Jonny Storm",
      d: "Bucky Barns"
    },
    correctAnswer: "b"
  },
  {
    Question: "Ant-Man gets his ablitiy to change size from what particles?",
    answers: {
      a: "Gamma Radiation",
      b: "Goliath",
      c: "Mystic",
      d: "Pym"
    },
    correctAnswer: "d"
  },
  {
    Question: "Captian Marvel is part of what Alien race?",
    answers: {
      a: "Kree",
      b: "Skrull",
      c: "Celestials",
      d: "Inhumans"
    },
    correctAnswer: "a"
  },
  {
    Question: "What is Doctor Stranges title?",
    answers: {
      a: "Protector of Midgard",
      b: "Strongest there is",
      c: "Sorcerer Supreme",
      d: "Earths Mightiest Hero"
    },
    correctAnswer: "c"
  },
  {
    Question: "What the item that Doctor Strange is sworn to protect?",
    answers: {
      a: "Aether",
      b: "Eye of Agamotto",
      c: "Tesserac",
      d: "Infinity Gauntlet"
    },
    correctAnswer: "b"
  },
  {
    Question:
      "What was the name of the Scarlet Witch's brother who died fighting Ultron?",
    answers: {
      a: "Quicksilver",
      b: "Polaris",
      c: "Magneto",
      d: "Zemo"
    },
    correctAnswer: "a"
  },
  {
    Question:
      "Know by their code names Hawkeye and Blackwidow were the first two Sheild Agents to make it into the Avengers Initiative, What are their names?",
    answers: {
      a: "Romanova/Barton",
      b: "Fury/Hill",
      c: "Colson/Ross",
      d: "Rumlow/Batroc"
    },
    correctAnswer: "a"
  }
];
var quest = 0;

function getQuestion() {
  let postQuest = myQuestions[i].Question;
  let answerA = myQuestions[i].answers.a;
  let answerB = myQuestions[i].answers.b;
  let answerC = myQuestions[i].answers.c;
  let answerD = myQuestions[i].answers.d;
}
function layout() {
  let questionLocation = document.createElement("div");
  questionLocation.className = "questionLocation";
  questionLocation.innerHTML = myQuestions[0].question;
  document.querySelector(".questionHolder").appendChild(questionLocation);
}

button.addEventListener("click", function changePic() {
  document.getElementById("scene").src = "images/scene photos/civilwar.jpg";
  //   document.querySelector("scene" + scene).src = sceneArray[scene][1].src;
  info.style.display = "none";
  questiondisplay.style.display = "block";
  button.style.display = "none";
});

button.addEventListener("click", function getQuestion() {
  postQuest = document.querySelector(".questionLocation");
  answerA = document.querySelector("#answer1");
  answerB = document.querySelector("#answer2");
  answerC = document.querySelector("#answer3");
  answerD = document.querySelector("#answer4");
  console.log("Button pressed");
});

dark.addEventListener("click", function getQuestion() {
  postQuest = document.querySelector(".questionLocation");
  answerA = document.querySelector("#answer1");
  answerB = document.querySelector("#answer2");
  answerC = document.querySelector("#answer3");
  answerD = document.querySelector("#answer4");
  console.log("Button pressed");
});

function layout(num) {}
