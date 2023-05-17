`use strict`;
const pinAnswer1 = document.querySelector(".pin-answer1");
const pinAnswer2 = document.querySelector(".pin-answer2");
const pinAnswer3 = document.querySelector(".pin-answer3");
const pinAnswer4 = document.querySelector(".pin-answer4");
const pinAnswer5 = document.querySelector(".pin-answer5");
const pinAnswer6 = document.querySelector(".pin-answer6");

const pinCheck = [
  pinAnswer1,
  pinAnswer2,
  pinAnswer3,
  pinAnswer4,
  pinAnswer5,
  pinAnswer6,
];
const digit1 = document.querySelector(".pin-digit1");
const digit2 = document.querySelector(".pin-digit2");
const digit3 = document.querySelector(".pin-digit3");
const digit4 = document.querySelector(".pin-digit4");
const digit5 = document.querySelector(".pin-digit5");
const digit6 = document.querySelector(".pin-digit6");
const digit7 = document.querySelector(".pin-digit7");
const digit8 = document.querySelector(".pin-digit8");
const digit9 = document.querySelector(".pin-digit9");
const digit10 = document.querySelector(".pin-digit0");
const clear = document.querySelector(".fa-times");
const digitPress = [
  digit1,
  digit2,
  digit3,
  digit4,
  digit5,
  digit6,
  digit7,
  digit8,
  digit9,
  digit10,
];
const overlay = document.querySelector(".overlay");

const signIn = document.querySelector(".sign-in-mode");
const darkMode = document.querySelector(".dark-mode");
const moon = document.querySelector(".dark-mode-container");
let moonLog = document.querySelector(".fa-moon");
const body = document.querySelector("body");
const greetings = document.querySelector(".greetings");
const information = document.querySelector(".information");
const faceId = document.querySelector(".face-id");
const wrongMsgText = document.querySelector(".wrong-account-msg-text");
let counter = 0;
let clickCounter = 0;

const init = function () {
  // let clickCount = 6;
  // for (let i = 0; i < pinCheck.length; i++) {
  //   if (clickCount === 6)
  //     clear.addEventListener("click", function () {
  //       pinCheck[5].classList.remove("checked");
  //       counter--;
  //     });
  //   else if (clickCount === 5) {
  //     clear.addEventListener("click", function () {
  //       pinCheck[5].classList.remove("checked");
  //       pinCheck[4].classList.remove("checked");
  //       counter--;
  //     });
  //   }
  // }

  overlay.classList.add("hidden");
  signIn.classList.add("hidden");

  for (let i = 0; i < digitPress.length; i++) {
    digitPress[i].addEventListener("click", function () {
      if (counter === 0) {
        pinCheck[0].classList.add("checked");
        counter++;
      } else if (counter === 1) {
        pinCheck[0].classList.add("checked");
        pinCheck[1].classList.add("checked");
        counter++;
      } else if (counter === 2) {
        pinCheck[0].classList.add("checked");
        pinCheck[1].classList.add("checked");
        pinCheck[2].classList.add("checked");
        counter++;
      } else if (counter === 3) {
        pinCheck[0].classList.add("checked");
        pinCheck[1].classList.add("checked");
        pinCheck[2].classList.add("checked");
        pinCheck[3].classList.add("checked");
        counter++;
      } else if (counter === 4) {
        pinCheck[0].classList.add("checked");
        pinCheck[1].classList.add("checked");
        pinCheck[2].classList.add("checked");
        pinCheck[3].classList.add("checked");
        pinCheck[4].classList.add("checked");
        counter++;
      } else if (counter === 5) {
        pinCheck[0].classList.add("checked");
        pinCheck[1].classList.add("checked");
        pinCheck[2].classList.add("checked");
        pinCheck[3].classList.add("checked");
        pinCheck[4].classList.add("checked");
        pinCheck[5].classList.add("checked");
        overlay.classList.remove("hidden");
        signIn.classList.remove("hidden");
        darkMode.style.display = `none`;
      }
    });
  }

  // Add event listeners to digitPress elements for mouseenter and mouseout
  for (let i = 0; i < digitPress.length; i++) {
    digitPress[i].addEventListener("mouseenter", function () {
      digitPress[i].classList.add("clicked");
    });
    digitPress[i].addEventListener("mouseout", function () {
      digitPress[i].classList.remove("clicked");
    });
  }
};

init();

moon.addEventListener("click", function () {
  if (clickCounter === 0) {
    body.style.background = `linear-gradient(
      rgba(0, 0, 0, 0.589),
      rgba(0, 0, 0, 0.516)
    ),
    url(Images/young-black-boys-playing-their-n.jpg)`;
    body.style.backgroundPosition = "center";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundSize = "cover";
    body.style.backgroundAttachment = "scroll";
    moonLog.classList.remove(`fa-moon`);
    moonLog.classList.add(`fa-sun`);
    moonLog.style.color = `#fff`;
    greetings.style.color = `#fff`;
    information.style.color = `#fff`;
    faceId.style.color = `#fff`;
    wrongMsgText.style.color = `#fff`;
    clickCounter++;
  } else if (clickCounter === 1) {
    body.style.background = `linear-gradient(
      rgba(255, 255,255, 0.289),
      rgba(255, 255, 255, 0.216)
    ),
    url(Images/young-black-boys-playing-their-n.jpg)`;
    body.style.backgroundPosition = "center";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundSize = "cover";
    body.style.backgroundAttachment = "scroll";
    moonLog.classList.remove(`fa-sun`);
    moonLog.classList.add(`fa-moon`);
    moonLog.style.color = `#000`;
    greetings.style.color = `#000`;
    information.style.color = `#000`;
    faceId.style.color = `#000`;
    wrongMsgText.style.color = `#000`;
    clickCounter--;
  }
});
// }
// let clickCount = 0;

// // Get a reference to the button element
// const button = document.getElementById("myButton");

// // Initialize a counter variable to track the number of clicks
// let clickCount = 0;

// // Add an event listener to the button that performs a different function based on the number of clicks
// button.addEventListener("click", function() {
//   // Increment the click count
//   clickCount++;

//   // Call the first function if it's the first click
//   if (clickCount === 1) {
//     doFirstFunction();
//   }
//   // Call the second function if it's the second click
//   else if (clickCount === 2) {
//     doSecondFunction();
//     // Reset the click count to start over
//     clickCount = 0;
//   }
// });

// // Define the first function
// function doFirstFunction() {
//   console.log("First function called.");
// }

// // Define the second function
// function doSecondFunction() {
//   console.log("Second function called.");
// }
