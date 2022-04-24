/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 ***/
let quotesArray = ["with great power comes great responsability.", "I am your father.",
  "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  "The way to get started is to quit talking and begin doing.",
  "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. ",
  "Always remember that you are absolutely unique. Just like everyone else. -"
];

let randomColor = ["red", "blue", "yellow", "black", "purple", "orange"];

/***
 * `getRandomQuote` function
 ***/


function getRandomQuote() {

  const number = Math.floor(Math.random() * 6);

  document.querySelector('.quote').innerHTML = quotesArray[number];

  document.querySelector('body').style.backgroundColor = randomColor[number];

  if (number === 0) {

    document.querySelector('.source').innerHTML = "Ben Parker";


    document.querySelector('body').style.backgroundColor = randomColor[number];

  } else if (number === 1) {

    document.querySelector('.source').innerHTML = "Darth Vader";

    document.querySelector('body').style.backgroundColor = randomColor[number];
  } else if (number === 2) {

    document.querySelector('.source').innerHTML = "Nelson Mandela";

    document.querySelector('body').style.backgroundColor = randomColor[number];
  } else if (number === 3) {

    document.querySelector('.source').innerHTML = "Walt Disney";

    document.querySelector('body').style.backgroundColor = randomColor[number];
  } else if (number === 4) {

    document.querySelector('.source').innerHTML = "Steve Jobs";

    document.querySelector('body').style.backgroundColor = randomColor[number];
  } else if (number === 5) {

    document.querySelector('.source').innerHTML = "Margaret Mead";


    document.querySelector('body').style.backgroundColor = randomColor[number];
  }
}
/***
 * `printQuote` function
 ***/
function printQuote() {

  getRandomQuote();

}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);