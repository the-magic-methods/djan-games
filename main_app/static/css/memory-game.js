/*----- constants -----*/
const raceCardSound = new Audio("/static/css/sounds/racecarsound.wav");
/*----- state variables -----*/
console.log("connectedd")
let playerScore = 0;
let clickCounter = 0;
let selectedImages = [];
let hideAllTheImages = [];

/*----- cached elements  -----*/

const images = document.querySelectorAll(".front");
const btn = document.querySelector("#playButton");
const hiddenImages = document.querySelectorAll(".front img");
const shuffleImages = document.querySelectorAll(".image");
const howManyClicks = document.querySelector(".clicks span");
const gameOver = document.querySelector(".clicks");
const message = document.querySelector(".userMessage");

/*----- event listeners -----*/

shuffle();
handleClick();

function handleClick() {
  hiddenImages.forEach(function (image) {
    image.addEventListener("click", function () {
      clickCounter += 1;
      howManyClicks.innerText = clickCounter;
      hideAllTheImages.push(image);
      let data = parseInt(image.dataset.index);
      selectedImages.push(data);
      image.style.opacity = "1";
      if (clickCounter === 31) {
        message.innerText = ".....GAME OVER.....";
        message.style.color = "red";
        images.forEach(function (image) {
          image.style.pointerEvents = "none";
        });
      }
      checkWinner();
    });
  });
}

/*----- functions -----*/

// to check for win or lose conditions
function checkWinner() {
  if (selectedImages[0] === selectedImages[1]) {
    selectedImages = [];
    hideAllTheImages = [];
    playerScore += 1;
  } else {
    // to handle images that do not match
    if (selectedImages.length === 2) {
      function hideTheImage() {
        hideAllTheImages[0].style.opacity = "0";
        hideAllTheImages[1].style.opacity = "0";
      }
      setTimeout(hideTheImage, 800);

      function clearSelectedImages() {
        selectedImages = [];
        hideAllTheImages = [];
      }
      setTimeout(clearSelectedImages, 900);
    }
  }
  // to handle all image pairs matching (game complete)
  if (playerScore === 6) {
    message.innerText =
      "WE'VE GOT OURSELVES A WINNER! KEEP PLAYING TO EXERCISE YOUR MEMORY MUSCLE..";
    selectedImages = [];
    document.getElementById("container").style.backgroundImage =
      "url('/static/css/images/hqraceflag.gif')";
    message.style.fontSize = "x-large";
    message.style.color = "red";
    hiddenImages.forEach(function (image) {
      image.style.opacity = "0";
    });
    images.forEach(function (flag) {
      flag.style.opacity = "0";
      flag.style.pointerEvents = "none";
    });
    raceCardSound.play();
  }
}
// to reset game board and call shuffle function
function restartGame() {
  hiddenImages.forEach(function (image) {
    image.style.opacity = "0";
    playerScore = 0;
    clickCounter = 0;
    howManyClicks.innerText = 0;
    document.getElementById("container").style.backgroundImage = "";
    message.innerText =
      "Click a race flag to reveal a car, remember its color and try to make your next race flag click match the previous car's color in 30 or less CLICKS!??";
    message.style.color = "white";
  });
  images.forEach(function (flag) {
    flag.style.backgroundImage = "url('/static/css/images/raceflag.png')";
    flag.style.opacity = "1";
    flag.style.pointerEvents = "";
  });
  shuffle();
}

// shuffle images function
function shuffle() {
  shuffleImages.forEach(function (card) {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
}
