// console.log("hello!?")

// const topSection = document.getElementById('topSection');
// topSection.style.backgroundColor = "purple";

// function shout(name) {
//     console.log(name.toUpperCase())
// }
// shout("Simon");


// nameSection.addEventListener('click', ()=> {
//     console.log("I am clicking this thing")
//     console.log(Math.random())
//     nameSection.innerHTML = "bob"
// })


// nameInput.addEventListener('input', (event)=> {
//     console.log(event.target.value)
// })


const nameSection = document.getElementById('nameSection');
const nameInput = document.getElementById('nameInput');
const submitButton = document.getElementById('submit')

submitButton.addEventListener('click', (event)=> {

    nameSection.innerText = nameInput.value;

})

const pinkButton = document.getElementById('pinkButton');
const greenButton = document.getElementById('greenButton');
const blueButton = document.getElementById('blueButton');
const topSection = document.getElementById('topSection');
const bottomSection = document.getElementById('bottomSection');

pinkButton.addEventListener('click', (pink)=> {

    topSection.style.backgroundColor = "pink";
    bottomSection.style.backgroundColor = "pink";

})


greenButton.addEventListener('click', (green)=> {

    topSection.style.backgroundColor = "lightgreen";
    bottomSection.style.backgroundColor = "lightgreen";

})


blueButton.addEventListener('click', (blue)=> {

    topSection.style.backgroundColor = "lightblue";
    bottomSection.style.backgroundColor = "lightblue";

})

const pronoun = document.getElementById("selection");
const pronounInput = document.getElementById('pronouns-input');
const pronounButton = document.getElementById('pronoun-button');

pronounButton.addEventListener('click', ()=> {

    pronounInput.innerText = pronoun.value;
    
})
