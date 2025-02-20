
//Making new buttons
//let newButton = document.createElement('button')
//newButton.id = 'but4' //create id
//newButton.innerHTML = 'Choice 4' //text inside
//document.body.appendChild(newButton) //add it into html

// Removing buttons
//let rem = document.getElementById('but1') //makes variable
//rem.remove() //removes it


//Character selection

let corin = document.getElementById('charImage1');
let lycaon = document.getElementById('charImage2');
let rina = document.getElementById('charImage3');
const charName = document.getElementById('placeholder')
const charDesc = document.getElementById('charText')

corin.onclick = function() {
    charName.textContent = 'Corin';
    charName.textContent += `${<br></br>}`
}
lycaon.onclick = function() {
    charName.textContent = 'Lycaon';
}
rina.onclick = function() {
    charName.textContent = 'Rina';
}
