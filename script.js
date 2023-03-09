const riddles = [
    {
        question : "What has to be broken before you can use it?",
        answer : "an egg",
    },
    {
        question : "What month of the year has 28 days?",
        answer : "all of them",
    },
    {
        question : "What is full of holes but still holds water?",
        answer : "a sponge",
    },
    {
        question : "What gets wet while drying?",
        answer : "a towel",
    },
    {
        question : "The more of this there is, the less you see. What is it?",
        answer : "darkness",
    },
]
// We need to get HTML elements 
const userAnswer = document.querySelector("input");
const result = document.querySelector(".result");
const forQuestion = document.querySelector(".forQuestion");
const button = document.querySelector("button");
///////////////////////////////////////////
// Wee need attempts
let attempts = 3;
///////////////////////////////////////////
// We need random number from array's length
let length = riddles.length;
let getRandom = (random) => {
    return Math.round(Math.random() * length);
}
let random = getRandom(length);
///////////////////////////////////////////
// Need addEventListener to the button
button.addEventListener("click" , press => {
    checkAnswer(riddles , random , userAnswer);
})
///////////////////////////////////////////
// Need a function which 'll check input value and compare it this answer 
let checkAnswer = (riddles , random , userAnswer) => {
    if(userAnswer.value.toLowerCase() == riddles[random].answer){
        alert("Well done :)");
        location.reload();
    }else{
        attempts -=1;
        result.innerHTML = " ";
        result.insertAdjacentHTML(
            "beforeend",
            `${attempts} attempts left`
        )
        if(attempts < 1) {
            alert(`It was : ${ riddles[random].answer}`);
            location.reload();
        }
    }
}
///////////////////////////////////////////
// Also we need to screen the riddle
let screenOn = (forQuestion , riddle , random) => {
    forQuestion.insertAdjacentHTML(
        "beforeend",
        `<p> Question -
            ${riddle[random].question}
        </p>`
    )
    return;
}
screenOn(forQuestion , riddles , random);
///////////////////////////////////////////
// Button for reload a page
const buttonReload = document.querySelector("#reload").addEventListener("click",press=>{
    location.reload();
})
///////////////////////////////////////////
// Show answer
const forAnswer = document.querySelector(".answer");
const getAnswer = document.querySelector(".getAnswer").addEventListener("click" , press=>{
    forAnswer.innerHTML = " ";
    forAnswer.insertAdjacentHTML(
        "beforeend",
        `<p>${riddles[random].answer}</p>`
    )
})
