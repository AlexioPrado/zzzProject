
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
    charDesc.innerHTML += '<br><br>Element: Ice<br>Health: 15<br>Skill: Deals 2 dmg<br>Passive: When dealing dmg or is switched to be the active character, the enemy is stunned. Lycaon can only stun again once the enemy has dealt at least one attack after the previous Stunned Effect.<br>Stunned Effect: Enemy cannot deal dmg for 2 turns<br>';
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
let alpeca = {'Health': 8 , 'Skill': 2, 'PrepareSkill': 0, 'Weak': 'Physical', 'Res': 'none', 'url': 'battleImages/alpeca.JPG'};
let alraune = {'Health': 12, 'Skill': 2, 'PrepareSkill': 1, 'Weak': 'Ice', 'Res': 'none', 'url': 'battleImages/alraune.JPG'};
let armoredHati = {'Health': 15, 'Skill': 3, 'PrepareSkill': 0, 'Weak': 'Physical', 'Res': 'Ice', 'url': 'battleImages/armoredHati.JPG'};
let assualter = {'Health': 10, 'Skill': 2, 'PrepareSkill': 0, 'Weak': 'Electric', 'Res': 'none', 'url': 'battleImages/assualter.JPG'};
let blastCrawler = {'Health': 4, 'Skill': 3, 'PrepareSkill': 1, 'Weak': 'none', 'Res': 'none', 'url': 'battleImages/blastcrawler.JPG'};
let bulkyEnforcer = {'Health': 15, 'Skill': 2, 'PrepareSkill': 0, 'Weak': 'Ice', 'Res': 'Electric', 'url': 'battleImages/bulkyEnforcer.JPG'};
let dullahan = {'Health': 20, 'Skill': 6, 'PrepareSkill': 1, 'Weak': 'Electric', 'Res': 'Ice', 'url': 'battleImages/dullahan.JPG'};
let fawn = {'Health': 12, 'Skill': 2, 'PrepareSkill': 0, 'Weak': 'Physical', 'Res': 'none', 'url': 'battleImages/fawn.JPG'};
let fawnEnergized = {'Health': 12, 'Skill': 2, 'PrepareSkill': 0, 'Weak': 'Physical', 'Res': 'Electric', 'url': 'battleImages/fawnEnergized.JPG'};
let mandrake = {'Health': 15, 'Skill': 4, 'PrepareSkill': 1, 'Weak': 'Ice', 'Res': 'Electric', 'url': 'battleImages/mandrake.JPG'};
let shatterBug = {'Health': 8, 'Skill': 1, 'PrepareSkill': 0, 'Weak': 'none', 'Res': 'Physical', 'url': 'battleImages/shatterbug.JPG'};
let thanatos = {'Health': 25, 'Skill': 5, 'PrepareSkill': 1, 'Weak': 'Electric', 'Res': 'Ice', 'url': 'battleImages/thanatos.JPG'};
let thanatosNotorius = {'Heath': 25, 'Skill': 7, 'PrepareSkill': 1, 'Weak': 'Ice', 'Res': 'Physical', 'url': 'battleImages/thanatosNotorious.JPG'};

/*Create Character Variables for Battles
    1. Health
    2. Dmg
    3. Passives
    4. Attribute
*/
let corinBattle = {'Name': 'Corin', 'Health': 11, 'Skill': 2, 'Attribute': 'Physical', 'url': 'battleImages/characterBattle/corinBattle.JPG', 'MaxHP' : 12};
let lycaonBattle = {'Name': 'Lycaon', 'Health': 18, 'Skill': 2, 'Attribute': 'Ice', 'url': 'battleImages/characterBattle/lycaonBattle.JPG', 'MaxHP' : 18};
let rinaBattle = {'Name': 'Rina', 'Health': 14, 'Skill': 1, 'Passive': 2, 'Attribute': 'Electric', 'url': 'battleImages/characterBattle/rinaBattle.JPG', 'MaxHP' : 14};

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
    13. Move Counter
*/
let characterHealth = document.getElementById('health1');
let enemyHealth = document.getElementById('health2');
let characterAttribute = document.getElementById('attribute');
let enemyRes = document.getElementById('resistance');
let enemyWeak = document.getElementById('weakness');
let battleRecord = document.getElementById('battleHisBox');
let characterImg = document.getElementById('battleCharacter');
let enemyImg = document.getElementById('battleEnemy');
let counter = document.getElementById('moveCounter')

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
    textOne.innerText = ''; 
    textOne.innerHTML += '*Door Bell Rings*<br>Wise: Welcome to the Random Play! Oh! Its you Lycaon how may I help?<br>Lycaon: Ellen is lost in a Hollow I need your help.<br>Wise: Oh is that so? I\'ll alert Belle. Here\'s Eous. Take him and we can help.<br>Lycaon: Thank you for your help. I promise to compensate you.<br>Wise: It\'s fine, no need to pay me. I\'m doing this as a friend. Now go and get to the Hollow.';
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

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

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

    selectCharacter(dullahan, blastCrawler);

}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

function selectCharacter(enemy1,enemy2){
    let choice;

    buttonBox.style = 'display: none;';
    battleUI.style = 'display: flex;';
    characterSelection.style = 'display: flex;';

    //Description Box: Removes image for now....
    nodeImage.style = 'display: none;';

    //Description Box Changes: Titles and Adds battle rules
    titleOne.innerHTML = 'Battle Info'
    titleTwo.innerHTML = 'Battle Rules';
    textTwo.innerText = '';
    textTwo.innerHTML += '1. You and the enemy take turns each to deal dmg.<br>';
    textTwo.innerHTML += '2. Changing characters are considered a turn. Selecting a character at the start of the game does not count as your turn.<br>';
    textTwo.innerHTML += '3. When a character\'s health reaches 0 or lower, they have fallen and can\'t be used for the whole story. The player must choose another active character to continue the battle.<br>';
    textTwo.innerHTML += '4. When an enemy\'s health reachs 0 or lower, they perish and the next wave of enemies comes. Each battle has two waves.<br>';
    textTwo.innerHTML += '5. Enemies have attribute weakness and resistance. Character\'s with the same attribute, the enemy is weak to, has damage dealt increased by 1. If the character has the same attribute as the enemy\'s resistance, damage dealt decreased by 1.<br>'
    textTwo.innerHTML += '6. A battle will always start with your turn.<br>'


    if (corinBattle['Health'] === 0)  {
        corinButton.remove()
        corinSwitch.remove()
    }
    if (lycaonBattle['Health'] === 0)  {
        lycaonButton.remove()
        lycaonSwitch.remove()
    }
    if (rinaBattle['Health'] === 0)  {
        rinaButton.remove()
        rinaSwitch.remove()
    }

    corinButton.onclick = function (){
        choice = corinBattle;
        console.log('Selected active character: Corin');
        battleRecordFunc(`> Selected Character: Corin<br>`)
        battleInfo(enemy1, enemy2, choice);
    }
    lycaonButton.onclick = function (){
        choice = lycaonBattle;
        console.log('Selected active character: Lycaon');
        battleRecordFunc(`> Selected Character: Lycaon<br>`)
        battleInfo(enemy1, enemy2, choice);
    }
    rinaButton.onclick = function (){
        choice = rinaBattle;
        console.log('Selected active character: Rina');
        battleRecordFunc(`> Selected Character: Rina<br>`)
        battleInfo(enemy1, enemy2, choice)
    }
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

function battleInfo(enemy1,enemy2,activeCharacter) {
    let activeEnemy = enemy1;
    let deadEnemy = [];

    let stunCounter = 0;
    let stunBefore = false;
    let Heal = false;
    let prepareSkill = false;
    let moveCounter = 0;

    counter.innerText = 'Move Counter: ' + moveCounter;

    characterSelection.style = 'display: none;';
    battleBox.style = 'display: flex;';
    battleChoice.style = 'display: flex;';

    switchCharacter(activeCharacter);
    switchEnemy(activeEnemy);    
        
    attackButton.onclick = function () {
        let characterDmg = activeCharacter['Skill'];

        if (activeCharacter['Health'] <= 0){
            battleRecordFunc('- Error: Fallen character cannot attack. Change active character. <br>')
            return;
        }

        if (activeCharacter['Name'] !== 'Rina' && rinaBattle['Health'] > 0){
            characterDmg += 1;
        }

        if (activeCharacter['Attribute'] === activeEnemy['Res']){
            characterDmg -= 1;
        }
        else if (activeCharacter['Attribute'] === activeEnemy['Weak']){
            characterDmg += 1;
        }

        if (activeEnemy['Health']-characterDmg <= 0){
            activeEnemy['Health'] -= characterDmg;
            enemyHealth.innerHTML = activeEnemy['Health'];
            battleRecordFunc('> ' + activeCharacter['Name'] + ' dealt ' + characterDmg + ' damage and killed the ethereal!<br>');
            battleRecordFunc('- The next Enemy has approached!<br>', battleRecord);

            stunBefore = false;

            deadEnemy.push(activeEnemy);
            console.log(deadEnemy);

            if (deadEnemy.length === 2){
                //END BATTLE
                console.log('Battle Ends')
            } else{
                activeEnemy = enemy2;
                switchEnemy(enemy2);
            }
            
        }
        else {
            activeEnemy['Health'] -= characterDmg;
            enemyHealth.innerHTML = activeEnemy['Health'];

            battleRecordFunc('> ' + activeCharacter['Name'] + ' dealt ' + characterDmg + ' damage to the enemy.<br>');

            moveCounter += 1;

            counter.innerText = 'Move Counter: ' + moveCounter;

            enemyAttack();
        }
    }
    // CHANGE FORMAT LIKE CORINS TO THE OTHERSSSSSSSSS
    corinSwitch.onclick = function() {
        if (activeCharacter['Name'] === 'Corin'){
            battleRecordFunc('- Active Character is already Corin.<br>')
        } else {
            console.log('Switched to Corin');
            activeCharacter = corinBattle;
            battleRecordFunc('- Switched Character: Corin<br>');
            switchCharacter(activeCharacter);
            enemyAttack();
        }
    }
    lycaonSwitch.onclick = function() {
        if (activeCharacter['Name'] === 'Lycaon'){
            battleRecordFunc('- Active Character is already Lycaon.<br>');

        } else {
            console.log('Switched to Lycaon');
            activeCharacter = lycaonBattle;
            battleRecordFunc('- Switched Character: Lycaon<br>');
            switchCharacter(activeCharacter);
            enemyAttack();  
        }
    }
    rinaSwitch.onclick = function() {
        if (activeCharacter['Name'] === 'Rina'){
            battleRecordFunc('- Active Character is already Rina.<br>');
        } else {
            console.log('Switched to Rina');
            activeCharacter = rinaBattle;
            battleRecordFunc('- Switched Character: Rina<br>');
            heal();
            switchCharacter(activeCharacter);
            enemyAttack();
        }
    }

    let doubleMoveDone = false;

    function enemyAttack() {
        let doubleMove;
        
        if (activeCharacter['Name'] === 'Corin' && !doubleMoveDone) {
            doubleMove = true;
            doubleMoveDone = true;
        }
        else {
            doubleMove = false;
            doubleMoveDone = false;
        }

        let enemyDmg = activeEnemy['Skill'];

        if(stunCounter > 0){
            stunCounter -= 1
            console.log(stunCounter)
        }

        if (activeCharacter['Name'] === 'Lycaon' && stunCounter === 0 && stunBefore === false){
            stunCounter = 2;
            console.log(stunCounter)
            battleRecordFunc('> Lycaon Stunned the Enemy! They can\'t attack for 2 turns.<br>');
            stunBefore = true;
        } 

        if (doubleMove === true){
            battleRecordFunc('> Corin activate her passive. She has one more turn.<br>');
            doubleMove = false;
        }
        else if (stunCounter > 0){
            battleRecordFunc('+ The enemy is stunned, they failed to attack.<br>');
        }
        else if (activeEnemy['PrepareSkill'] === 1 && prepareSkill === false){
            battleRecordFunc('+ Enemy is preparing to attack!<br>');
            prepareSkill = true;
        }
        else {
            if (activeCharacter['Health']-enemyDmg <= 0){
                activeCharacter['Health'] -= enemyDmg;
                characterHealth.innerHTML = activeCharacter['Health'];
                battleRecordFunc('+ The enemy dealt ' + enemyDmg + ' damage! ' + activeCharacter['Name'] + ' has fallen!<br>');
                battleRecordFunc('- Select a new active Character<br>');
                console.log(activeCharacter['Health']);
                fallenCharacter(activeCharacter);
            }
            else{
                activeCharacter['Health'] -= enemyDmg;
                characterHealth.innerHTML = activeCharacter['Health'];
                battleRecordFunc('+ The enemy dealt ' + enemyDmg + ' damage to ' + activeCharacter['Name'] + '.<br>');
            }

            stunBefore = false;
            prepareSkill = false;
        }
    }
    function heal() {
        corinBattle['Health'] += rinaBattle['Passive'];
        lycaonBattle['Health'] += rinaBattle['Passive'];
        rinaBattle['Health'] += rinaBattle['Passive'];
        
        if(corinBattle['Health'] > corinBattle['MaxHP']){
            corinBattle['Health'] = corinBattle ['MaxHP'];
            console.log(corinBattle)
        }
    }
    
}

function switchEnemy(newEnemy){
    enemyImg.src = newEnemy['url'];
    enemyHealth.innerHTML = newEnemy['Health'];
    enemyRes.innerHTML = newEnemy['Res'];
    enemyWeak.innerHTML = newEnemy['Weak'];
}

function switchCharacter(newCharacter) {
    characterImg.src = newCharacter['url'];
    characterHealth.innerHTML = newCharacter['Health'];
    characterAttribute.innerHTML = newCharacter['Attribute'];
}

function fallenCharacter(character){
    let fallen = []
    fallen.push(character);
    console.log(fallen);
    if (fallen.length === 3){
        battleEnding()
    } else {
        if (character['Name'] === 'Corin'){
            corinSwitch.remove()
            corinButton.remove()
        }
        else if (character['Name'] === 'Lycaon'){
            lycaonSwitch.remove()
            lycaonBattle.remove()
        }
        else if (character['Name'] === 'Rina'){
            rinaSwitch.remove()
            rinaButton.remove()
        }
    }
}

function battleRecordFunc(addText) {
    let placeholder = battleRecord.innerHTML;
    battleRecord.innerText = '';
    battleRecord.innerHTML += addText;
    battleRecord.innerHTML += placeholder;
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

function battleEnding() {
    console.log('dead ending.')
}