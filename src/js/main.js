const sceneArray = new Array();

sceneArray[0] = new Image();
sceneArray[0].src = "images/scene photos/Avengers Assembled.jpg";

sceneArray[1] = new Image();
sceneArray[1].src = "images/scene photos/black panther civil war.jpg";

sceneArray[2] = new Image();
sceneArray[2].src = "images/scene photos/captain-america.jpg";

sceneArray[3] = new Image();
sceneArray[3].src = "images/scene photos/civilwar.jpg";

sceneArray[4] = new Image();
sceneArray[4].src = "images/scene photos/doctor-strange_still_2017.jpg";

sceneArray[5] = new Image();
sceneArray[5].src = "images/scene photos/iron man.jpg";

sceneArray[6] = new Image();
sceneArray[6].src = "images/scene photos/Spider_Man.jpg";

sceneArray[7] = new Image();
sceneArray[7].src = "images/scene photos/spidermanshield.jpg";

sceneArray[8] = new Image();
sceneArray[8].src = "images/scene photos/thor hulk.jpg";

sceneArray[9] = new Image();
sceneArray[9].src = "images/scene photos/vision.jpg";

sceneArray[10] = new Image();
sceneArray[10].src = "images/scene photos/warmachine.jpg";

function nextImage(scene) {
  var img = document.getElementById(scene);

  for (var i = 0; i < sceneArray.length; i++) {
    if (sceneArray[i].src == img.src) {
      if (i === sceneArray.length) {
        document.getElementById(scene).src = sceneArray[0].src;
        break;
      }
      document.getElementById(scene).src =
        sceneArray[i + Math.floor(Math.random() * sceneArray.length)].src;
      break;
    }
  }
}

class Question {
    constructor(questionString, choices, answer){
    this.questionString = questionString;
    this.choices = choices;
    this.answer = answer;
    }
    IsAnswerCorrect(selectedAnswer) {
        if(selectedAnswer === this.answer){
            return true;
        } else return false;
    }
}

class Quiz {
    constructor(questions){
    this.questions = questions;
    this.score = 0;
    this.questionNum = 0;
    }

    increaseScore(){
        this.score ++;
    }

    getCurrentQuestion(){
        return this.question[this.questionNum];
    }
    
    moveToNextQuestion(){
        this.questionNum ++;
    }

    isQuizFinished(){
        if(this.questionNum === this.questions.length=10);
    }
}

const myQuestions = [
  {
    question: "What alloy is Captain America's sheild made of?",
    answers: {
      a: "Steel",
      b: "Adamantium",
      c: "Vibrainium",
      d: "Uru"
    },
    correctAnswer: "c"
  },
  {
    question:
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
    question:
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
    question:
      "What did Iron man build to power his suits and keep himself alive?",
    answers: {
      a: "Skynet",
      b: "Death Star",
      c: "Gamma Bomb",
      d: "Arc Reactor"
    },
    correctAnswer: "d"
  }
];



// function changeImage() {
//   myImage.setAttribute("src", sceneArr[imageIndex]);
//   imageIndex = (imageIndex + 1) % sceneArr.length;
// }

// button.addEventListener("click", function() {
//   let sceneBox = document.querySelector(".scene");
//   for (var i in sceneImg) {
//     var img = new Image();
//     img.src = sceneImg[i];
//     img.style.display = "none";
//     img.addEventListener("load", function() {
//       this.parentNode.removeChild(this);
//     });
//     document.scene.appendChild(img);
//   }
// });
