let loading = [
    'Retrieving your message with good vibes...',
    'Getting your fortune...',
    'Checking the vibes...',
    'Stay present...',
    'Before you eat the cookie...'

];
let responses = [
    'Things are about to get so much better',
    'Future looks bright if you keep working hard',
    'Whatever is meant for you is on its way',
    'Make sure to do the undone things',
    'Do not quit now, you might almost be there'
];




const container =document.querySelector("#container");
const fortuneButton = document.querySelector("#fortuneButton");
const theFortune = document.querySelector("#theFortune");

const buttonHeader = document.getElementById("firstheader")

fortuneButton.addEventListener('click', getFortune);



let timeout;

function getFortune () {

theFortune.style.backgroundColor = "bisque"
theFortune.style.color = "black"
theFortune.style.fontSize = "3rem"
theFortune.style.transform = "translateY(1.5rem)"
buttonHeader.classList.add('hide')
shuffle(loading);
theFortune.textContent = loading[0];


clearTimeout(timeout);
crackCookie();
timeout = setTimeout (function(){
shuffle(responses);
theFortune.textContent = responses[0];
},3000)

} 

const fortuneCookie = document.querySelector("#fortuneCookie");
const crackCookie = function() {
  if (fortuneCookie.dataset.image == "one") {
    fortuneCookie.src = "cracked.png";
    fortuneCookie.dataset.image = "two";

    return
  } }
//Helper function that uses Fisher-Yates algorithm-> https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array/2450976#2450976
function shuffle (array) {

let currentIndex = array.length;
let temporaryValue, randomIndex;

// While there remain elements to shuffle...
while (0 !== currentIndex) {
// Pick a remaining element...
randomIndex = Math.floor(Math.random() * currentIndex);
currentIndex -= 1;

// And swap it with the current element.
temporaryValue = array[currentIndex];
array[currentIndex] = array[randomIndex];
array[randomIndex] = temporaryValue;
}

}
