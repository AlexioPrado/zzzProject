
//Making new buttons
//let newButton = document.createElement('button')
//newButton.id = 'but4' //create id
//newButton.innerHTML = 'Choice 4' //text inside
//document.body.appendChild(newButton) //add it into html

// Removing buttons
//let rem = document.getElementById('but1') //makes variable
//rem.remove() //removes it


//Character Selection CODE

//Character Images
let corin = document.getElementById('charImage1');
let lycaon = document.getElementById('charImage2');
let rina = document.getElementById('charImage3');
// Description Text
const charName = document.getElementById('placeholder');
const charDesc = document.getElementById('charText');
charDesc.style = 'max-width: 500px; font-size: 16px;';

//Functions to display descriptions of characters
corin.onclick = function() {
    charName.style = 'font-size: 30px; margin: 10px; border-bottom: 3px solid white;';
    charName.textContent = 'Corin Wickes';
    charDesc.innerHTML = 'A shy and timid girl with a sharp saw, she can defeat enemies with just large swings of her blade.';
    charDesc.innerHTML += '<br><br>Element: Physical<br>Health: 10<br>Skill: Deals 3 dmg<br>Passive: Gain an extra move when Corin is the active character</p>';
}
lycaon.onclick = function() {
    charName.style = 'font-size: 30px; margin: 10px; border-bottom: 3px solid white;';
    charName.textContent = 'Von Lycaon';
    charDesc.innerHTML = 'As the leader of Victoria\'s Houskeeping, he strives to protect his team and quickly assess situations when in need.';
    charDesc.innerHTML += '<br><br>Element: Ice<br>Health: 15<br>Skill: Deals 2 dmg<br>Passive: When dealing dmg, enemy is stunned.<br>Stunned Effect: Enemy cannot deal dmg for 2 turns<br>';
}
rina.onclick = function() {
    charName.style = 'font-size: 30px; margin: 10px; border-bottom: 3px solid white;'
    charName.textContent = 'Alexandrina Sebastiane';
    charDesc.innerHTML = 'The Head Maid of Victoria\'s Housekeeping, she cares alot about her team and does her best to care for them. She is also a ghost!';
    charDesc.innerHTML += '<br><br>Element: Electric<br>Health: 12<br>Skill: Deal 1 dmg<br>Passive: When not the active character, party deals +1 dmg, if the active character, heal party by 2 hp. Occurs once when the active character<br>';
}

let nodeIndicator = document.getElementById('nodeCode');
let titleOne = document.getElementById('descTitle1');
let titleTwo = document.getElementById('descTitle2');
let textOne = document.getElementById('descText1');
let textTwo = document.getElementById('descText2');
let nodeImage = document.getElementById('nodeImage');
let button1 = document.getElementById('button');


button1.onclick = function (){
    scroll(0,0);
    console.log('hey');
    nodeIndicator.innerHTML = 'Node: 2';
    titleOne.innerHTML = 'Inside the Video Store';
    titleTwo.innerHTML = 'Entering the Hollow';
    textOne.innerHTML = 'hey';
    textTwo.innerHTML = 'hey';
    nodeImage.src = 'nodeImages/Node2.jpg';
}