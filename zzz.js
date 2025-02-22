
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
let buttonDesc = document.getElementById('butDesc');

button1.onclick = function (){
    scroll(0,0);
    console.log('hey');
    nodeIndicator.innerHTML = 'Node: 2';
    
    titleOne.innerHTML = 'Inside the Video Store';
    titleTwo.innerHTML = 'Entering the Hollow';
    
    textOne.innerHTML = '*Door Bell Rings*<br>Wise: Welcome to the Random Play! Oh! Its you Lycaon how may I help?<br>Lycaon: Ellen is lost in a Hollow I need your help.<br>Wise: Oh is that so? I\'ll alert Belle. Here\'s Eous. Take him and we can help.<br>Lycaon: Thank you for your help. I promise to compensate you.<br>Wise: It\'s fine, no need to pay me. I\'m doing this as a friend. Now go and get to the Hollow.';
    textOne.innerHTML += '<br><br>Eous: A Bangboo which the Proxy can communicate others in the Hollow. The Proxy can also do some handy things like locate people using Data Piles.'
    
    textTwo.innerHTML = 'Victoria Housekeeping and little Eous entered the Hollow. Eous begins to locate Data Piles to which they can find Ellen in the Hollow. As they continue throuhgout the Hollow, they suddenly encounter Ethereals!';
    textTwo.innerHTML += '<br><br>Ethereals: Ethereals are monsters formed from high ether activity. When exploring the Hollow make sure to stay far from high ether activity, or else you\'ll meet many foes.'
    
    nodeImage.src = 'nodeImages/Node2.jpg';
    
    //button1.remove();

    let button2 = document.createElement('button');
    button2.id = 'button';
    button2.innerHTML = 'TIME TO BATTLE';
    let but1 = document.getElementsByClassName('but1');
    document.body.replaceChild(button2,button1);
    
    //button1.innerHTML = 'TIME TO BATTLE!';


    buttonDesc.innerHTML = 'A turn based battle<br>between ethereals!<br>Remember: Stay Alive.';
    
    
}


/*
button2.onclick = function (){
    console.log('heyo!')
}
*/