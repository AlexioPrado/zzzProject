
//Making new buttons
//let newButton = document.createElement('button')
//newButton.id = 'but4' //create id
//newButton.innerHTML = 'Choice 4' //text inside
//document.body.appendChild(newButton) //add it into html

// Removing buttons
//let rem = document.getElementById('but1') //makes variable
//rem.remove() //removes it

//setTimeout(function, milliseconds)

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Character Selection CODE
//Character Images
let corin = document.getElementById('charImage1');
let lycaon = document.getElementById('charImage2');
let rina = document.getElementById('charImage3');
// CHaracter Description Text
const charName = document.getElementById('placeholder');
const charDesc = document.getElementById('charText');
charDesc.style = 'max-width: 500px; font-size: 16px;';

//Functions to display descriptions of characters when Image clicked
// 1.Changes style of placeholder text
// 2.Adds the Name
// 3.Add their battle descriptions: Health, skill, and passive
corin.onclick = function() {
    charName.style = 'font-size: 30px; margin: 10px; border-bottom: 3px solid white;';
    charName.textContent = 'Corin Wickes';
    charDesc.innerHTML = 'A shy and timid girl with a sharp saw, she can defeat enemies with just large swings of her blade.';
    charDesc.innerHTML += '<br><br>Element: Physical<br>Health: 10<br>Skill: Deals 3 dmg<br>Passive: Gain an extra turn when Corin is the active character</p>';
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

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

/* Creates variabels which will change every node
    1. Node Number
    2. Description Title 1 & 2
    3. Description Text 1 & 2
    4. Description Image
*/
let nodeIndicator = document.getElementById('nodeCode');
let titleOne = document.getElementById('descTitle1');
let titleTwo = document.getElementById('descTitle2');
let textOne = document.getElementById('descText1');
let textTwo = document.getElementById('descText2');
let nodeImage = document.getElementById('nodeImage');

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

/* Create Enemy Variables for Battles
    1. Health
    2. Dmg
    3. Prepareskill timer
    4. Weakness
    5. Resistance
*/
let alpeca = {'Health': 8 , 'Skill': 2, 'PrepareSkill': 0, 'Weak': 'Physical', 'Res': 'none'};
let alraune = {'Health': 12, 'Skill': 2, 'PrepareSkill': 1, 'Weak': 'Ice', 'Res': 'none'};
let armoredHati = {'Health': 15, 'Skill': 3, 'PrepareSkill': 0, 'Weak': 'Physical', 'Res': 'Ice'};
let assualter = {'Health': 10, 'Skill': 2, 'PrepareSkill': 0, 'Weak': 'Electric', 'Res': 'none'};
let blastCrawler = {'Health': 4, 'Skill': 3, 'PrepareSkill': 1, 'Weak': 'none', 'Res': 'none'};
let bulkyEnforcer = {'Health': 15, 'Skill': 2, 'PrepareSkill': 0, 'Weak': 'Ice', 'Res': 'Electric'};
let dullahan = {'Health': 20, 'Skill': 6, 'PrepareSkill': 1, 'Weak': 'Electric', 'Res': 'Ice'};
let fawn = {'Health': 12, 'Skill': 2, 'PrepareSkill': 0, 'Weak': 'Physical', 'Res': 'none'};
let fawnEnergized = {'Health': 12, 'Skill': 2, 'PrepareSkill': 0, 'Weak': 'Physical', 'Res': 'Electric'};
let mandrake = {'Health': 15, 'Skill': 4, 'PrepareSkill': 1, 'Weak': 'Ice', 'Res': 'Electric'};
let shatterBug = {'Health': 8, 'Skill': 1, 'PrepareSkill': 0, 'Weak': 'none', 'Res': 'Physical'};
let thanatos = {'Health': 25, 'Skill': 5, 'PrepareSkill': 1, 'Weak': 'Electric', 'Res': 'Ice'};
let thanatosNotorius = {'Heath': 25, 'Skill': 7, 'PrepareSkill': 1, 'Weak': 'Ice', 'Res': 'Physical'};

/*Create Character Variables for Battles
    1. Health
    2. Dmg
    3. Passives
    4. Attribute
*/
let corinBattle = {'Health': 0, 'Skill': 3, 'Passive': false, 'Attribute': 'Physical'};
let lycaonBattle = {'Health': 15, 'Skill': 2, 'Passive': 2, 'Attribute': 'Ice'};
let rinaBattle = {'Health': 12, 'Skill': 1, 'Passive': false, 'Attribute': 'Eletric'};

/* Create Button Variables for all buttons used in Battles
    1. Select Character Buttons
    2. Switch Character Buttons
    3. Attack Button
*/
let corinButton = document.getElementById('charSelect1');
let lycaonButton = document.getElementById('charSelect2');
let rinaButton = document.getElementById('charSelect3');

let corinSwitch = document.getElementById('switch1');
let lycaonSwitch = document.getElementById('switch2');
let rinaSwitch = document.getElementById('switch3');

let attackButton = document.getElementById('battleAttack');

/* Create Variables for items that will change during battle
    1. HP Number Char/Enemy
    2. Attribute
    3. Enemy Res
    4. Enemy Weak
    5. BattleRecord
    6. Character Img
    7. Enemy Img
    8. ButtonBox: Box of options, disabled during battle
    9. BattleUI: Appears only during battles
    10. CharacterSelection: Appears before battles begin
    11. Battle: Appears during battle
    12. BattleChoice: Appears during battle
*/
let characterHealth = document.getElementById('health1');
let enemyHealth = document.getElementById('health2');
let characterAttribute = document.getElementById('attribute');
let enemyRes = document.getElementById('resistance');
let enemyWeak = document.getElementById('weakness');
let battleRecord = document.getElementById('battleHisBox');
let characterImg = document.getElementById('battleCharacter');
let enemyImg = document.getElementById('battleEnemy');

let buttonBox = document.getElementById('buttonBox');
let battleUI = document.getElementById('battleUI');
let characterSelection = document.getElementById('characterSelection');
let battleBox = document.getElementById('battle');
let battleChoice = document.getElementById('battleChoice');

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
    1. Create Button Variable for Node 1
    2. Create Button Description Variable
*/
let button1 = document.getElementById('button');
let buttonDesc = document.getElementById('butDesc');

// Node 1 Function
button1.onclick = function (){
    scroll(0,0); //Scrolls to top of page
    console.log('Node 1 Done!');//Personal Check if function is called

    nodeIndicator.innerHTML = 'Node: 2'; //Change node number
    
    //change title
    titleOne.innerHTML = 'Inside the Video Store';
    titleTwo.innerHTML = 'Entering the Hollow';
    
    //change text 1
    textOne.innerHTML = '*Door Bell Rings*<br>Wise: Welcome to the Random Play! Oh! Its you Lycaon how may I help?<br>Lycaon: Ellen is lost in a Hollow I need your help.<br>Wise: Oh is that so? I\'ll alert Belle. Here\'s Eous. Take him and we can help.<br>Lycaon: Thank you for your help. I promise to compensate you.<br>Wise: It\'s fine, no need to pay me. I\'m doing this as a friend. Now go and get to the Hollow.';
    textOne.innerHTML += '<br><br>Eous: A Bangboo which the Proxy can communicate others in the Hollow. The Proxy can also do some handy things like locate people using Data Piles.'
    //change text 2
    textTwo.innerHTML = 'Victoria Housekeeping and little Eous entered the Hollow. Eous begins to locate Data Piles to which they can find Ellen in the Hollow. As they continue throuhgout the Hollow, they suddenly encounter Ethereals!';
    textTwo.innerHTML += '<br><br>Ethereals: Ethereals are monsters formed from high ether activity. When exploring the Hollow make sure to stay far from high ether activity, or else you\'ll meet many foes.'
    //change Image
    nodeImage.src = 'nodeImages/Node2.jpg';

    //Remove the button and button description
    button1.remove()
    buttonDesc.remove()
    // Add the new button and button description for next node
    document.getElementById('outerBox1').appendChild(button2);
    document.getElementById('outerBox1').appendChild(buttonDesc2);
}

let button2 = document.createElement('button');
button2.id = 'button';
button2.innerHTML = 'TIME TO BATTLE';

let buttonDesc2 = document.createElement('p')
buttonDesc2.id = 'butDesc';
buttonDesc2.innerHTML = 'A turn based battle<br>between ethereals!<br>Remember: Stay Alive.';

//Node 2 Function
button2.onclick = function (){
    scroll(0,0);
    console.log('Node 2 Done!');

    nodeIndicator.innerHTML = 'Node: 3';

    textOne.innerHTML = 'Alpeca:<br>A quite humanoid Ethereal figure which deals 2 dmg every swing of its sharp arm-like blade.<br>';
    textOne.innerHTML += 'Blastcrawler:<br>An Ethereal that acts just like a bomb. Stun it before it can explode and deal 3 dmg to every party member.<br><br>';
    textOne.innerHTML += '<img src=\'battleImages/alpeca.jpg\' id=\'etherImage\'> <img src=\'battleImages/blastcrawler.jpg\' id=\'etherImage\'>';

    battle(alpeca, blastCrawler);

}

function battle(enemy1,enemy2) {
    let activeCharacter;
    let activeEnemy = enemy1;

    selectCharacter();

    //Description Box Changes: Titles and Adds battle rules
    titleOne.innerHTML = 'Battle Info'
    titleTwo.innerHTML = 'Battle Rules';
    textTwo.innerText = '';
    textTwo.innerHTML += '1. You and the enemy take turns each to deal dmg.<br>';
    textTwo.innerHTML += '2. Changing characters are considered a turn. Selecting a character at the start of the game does not count as your turn.<br>';
    textTwo.innerHTML += '3. When a character\'s Health reaches 0 or lower, they have fallen and can\'t be used for the whole story.<br>';
    textTwo.innerHTML += '4. Enemies have attribute weakness and resistance. Character\'s with the same attribute the enemy is weak to, damage dealt is increased by 1. If the character has the same attribute at the enemy\'s resistance, damge dealt decreased by 1.'
    //Description Box: Removes image for now....
    nodeImage.style = 'display: none;';

}

function selectCharacter(){
    buttonBox.style = 'display: none;';
    battleUI.style = 'display: flex;';
    characterSelection.style = 'display: flex;';

    if (corinBattle['Health'] === 0)  {
        corinButton.remove()
    }
    else if (lycaonBattle['Health'] === 0)  {
        lycaonButton.remove()
    }
    else if (rinaBattle['Health'] === 0)  {
        rinaButton.remove()
    }

    corinButton.onclick = function (){
        activeCharacter = corinBattle;
        console.log('hey!');
    }
    lycaonButton.onclick = function (){
        activeCharacter = lycaonBattle;
        console.log('hey!');
    }
    rinaButton.onclick = function (){
        activeCharacter = rinaBattle;
        console.log('hey!');
    }

}



function battleEnding() {

}