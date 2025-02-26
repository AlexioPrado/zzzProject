
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
    5. Character Description boxes
    6. Extra Buttons
*/
let nodeIndicator = document.getElementById('nodeCode');
let titleOne = document.getElementById('descTitle1');
let titleTwo = document.getElementById('descTitle2');
let textOne = document.getElementById('descText1');
let textTwo = document.getElementById('descText2');
let nodeImage = document.getElementById('nodeImage');
let char = document.getElementById('char');
let charDescClass = document.getElementById('charDesc');

/* Extra Buttons*/
let buttonE2 = document.getElementById('outerBox2');
let buttonE3 = document.getElementById('outerBox3')

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
let fawnEnergized = {'Health': 12, 'Skill': 2, 'PrepareSkill': 0, 'Weak': 'Electric', 'Res': 'Physical', 'url': 'battleImages/fawnEnergized.JPG'};
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
let corinBattle = {'Name': 'Corin', 'Health': 12, 'Skill': 3, 'Attribute': 'Physical', 'url': 'battleImages/characterBattle/corinBattle.JPG', 'MaxHP' : 12};
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
    scroll(0,0);//Scrolls to top of page
    console.log('Node 2 Done!'); //Personal Check if function is called

    nodeIndicator.innerHTML = 'Node: 3'; //Change node number

    textOne.innerHTML = 'Alpeca:<br>A quite humanoid Ethereal figure which deals 2 dmg every swing of its sharp arm-like blade.<br>';
    textOne.innerHTML += 'Blastcrawler:<br>An Ethereal that acts just like a bomb. Stun it before it can explode and deal 3 dmg to every party member.<br><br>';
    textOne.innerHTML += '<img src=\'battleImages/alpeca.jpg\' id=\'etherImage\'> <img src=\'battleImages/blastcrawler.jpg\' id=\'etherImage\'>';

    selectCharacter(alpeca, blastCrawler);

    button2.remove()
    buttonDesc2.remove()

    document.getElementById('outerBox1').appendChild(button3);
    document.getElementById('outerBox1').appendChild(buttonDesc3);
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

let button3 = document.createElement('button');
button3.id = 'button';
button3.innerHTML = 'Continue in the hollow';

let buttonDesc3 = document.createElement('p')
buttonDesc3.id = 'butDesc';
buttonDesc3.innerHTML = 'Continue with the Proxy and head to the first Data Pile.';

//Node 3 Function
button3.onclick = function (){
    scroll(0,0); //Scrolls to top of page
    console.log('Node 3 Done!');//Personal Check if function is called

    nodeIndicator.innerHTML = 'Node: 3'; //Change node number
    
    //change title
    titleOne.innerHTML = 'Data Piles';
    titleTwo.innerHTML = 'Data Pile 1: Data Collection Completed';
    
    //change text 1
    textOne.innerText = ''; 
    textOne.innerHTML += 'Data Piles are beacons located inside the Hollow, scattered across the area. Data piles can collect data in its surrondings. This data includes biothermal signatures. If you collect enough data piles, you can locate people or ethereals. You can locate Ellen!<br>';
    textOne.innerHTML += '<br><img src=\'nodeImages/Node3.png\' id=\'nodeImage\'>'
    //change text 2
    textTwo.innerHTML = 'Lycaon\'s company and the Proxy arrived to the first data pile of 3. While the proxy collects the data, Lycaon checked the surrondings for ethereals while Corin and Rina look for clues of Ellen.<br>';
    textTwo.innerHTML += '<br>Proxy: Okay guys! I\'ve collected the data and there are three paths we could go from here.<br>'
    textTwo.innerHTML += '<br>Left -> High Ether Activity<br>Straight -> Low Ether Activity<br>Right -> No activity, however a very dangerous terrain of debris<br>'
    textTwo.innerHTML += '<br>Meanwhile...<br>Ellen: Gahhh! I don\'t think I can handle the Ethereals any longer. I have to hurry!'
    //change Image
    nodeImage.src = 'nodeImages/zzz_combat.jpg';

    //Remove the button and button description
    button3.remove();
    buttonDesc3.remove();
    // Add the new button and button description for next node
    document.getElementById('outerBox1').appendChild(button4a);
    document.getElementById('outerBox2').appendChild(button4b);
    document.getElementById('outerBox3').appendChild(button4c);
    document.getElementById('outerBox1').appendChild(buttonDesc4a);
    document.getElementById('outerBox2').appendChild(buttonDesc4b);
    document.getElementById('outerBox3').appendChild(buttonDesc4c);
    //Display new buttons for this node
    buttonE2.style = 'display: flex;';
    buttonE3.style = 'display: flex;';
    
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

let button4a = document.createElement('button');
button4a.id = 'button';
button4a.innerHTML = 'Move Left';

let buttonDesc4a = document.createElement('p')
buttonDesc4a.id = 'butDesc';
buttonDesc4a.innerHTML = 'High Ether Activity. Dangerous ethereals but great rewards.';

let button4b = document.createElement('button');
button4b.id = 'button';
button4b.innerHTML = 'Move Straight';

let buttonDesc4b = document.createElement('p')
buttonDesc4b.id = 'butDesc';
buttonDesc4b.innerHTML = 'Low Ether Activity. Not much ethereals and little reward.';

let button4c = document.createElement('button');
button4c.id = 'button';
button4c.innerHTML = 'Move Right';

let buttonDesc4c = document.createElement('p')
buttonDesc4c.id = 'butDesc';
buttonDesc4c.innerHTML = 'Dangerous terrain. An accident waiting to happen.';

//Node 4c Function
button4c.onclick = function (){
    scroll(0,0); //Scrolls to top of page
    console.log('Node 4c Done!');//Personal Check if function is called

    nodeIndicator.innerHTML = 'Node: 4c'; //Change node number
    
    //change title
    titleOne.innerText = '';
    titleTwo.innerHTML = 'Dangerous Debris Ahead!';
    
    //change text 1
    textOne.innerText = ''; 
    //change text 2
    textTwo.innerHTML = 'Lycaon: Let\'s go right. We don\'t want to risk ourselves in fighting ethereals when we could pass them.<br>';
    textTwo.innerHTML += 'Corin: Sir, wouldn\'t it be quicker to go through the ether activity than go around? We need to save Ellen quick!<br>';
    textTwo.innerHTML += 'Lycaon: We can only save her if we are alive. We are here to find her, but we must stay safe as well. Now let\'s get a move on!'
    //change Image
    nodeImage.src = 'nodeImages/Node4c.jpg';

    //Remove the button and button description
    button4a.remove();
    buttonDesc4a.remove();
    button4b.remove();
    buttonDesc4b.remove();
    button4c.remove();
    buttonDesc4c.remove();
    // Add the new button and button description for next node
    document.getElementById('outerBox1').appendChild(button5c);
    document.getElementById('outerBox1').appendChild(buttonDesc5c);
    //Display new buttons for this node
    buttonE2.style = 'display: none;';
    buttonE3.style = 'display: none;';
}

//Node 4b Function
button4b.onclick = function (){
    scroll(0,0); //Scrolls to top of page
    console.log('Node 4b Done!');//Personal Check if function is called

    nodeIndicator.innerHTML = 'Node: 4b'; //Change node number
    
    //change title
    titleOne.innerHTML = 'Resonium';
    titleTwo.innerHTML = 'Ethereals Ahead!';
    
    //change text 1
    textOne.innerText = 'Resonium are effects which can enhance the party. Especially in high ether activity, you can gain better resonium.'; 
    //change text 2
    textTwo.innerHTML = 'Lycaon: Let\'s go straight. We don\'t want to encounter stronger enemies this early. We need to be capable enought to find Ellen and still be there quick enough before she become and ethereal.<br>';
    textTwo.innerHTML += 'Corin: That sounds good, but we still might meet some ethereals along the way.<br>';
    textTwo.innerHTML += 'Rina: Don\'t worry Corin, they\'ll be easy to defeat. Trust us and trust yourself. We can defeat them.<br>';
    textTwo.innerHTML += 'Corin: Oh oh, looks like there are some ahead of us. Guys!!!'
    //change Image
    nodeImage.src = 'nodeImages/Node4ab.jpg';

    //Remove the button and button description
    button4a.remove();
    buttonDesc4a.remove();
    button4b.remove();
    buttonDesc4b.remove();
    button4c.remove();
    buttonDesc4c.remove();
    // Add the new button and button description for next node
    document.getElementById('outerBox1').appendChild(button5b);
    document.getElementById('outerBox1').appendChild(buttonDesc5b);
    //Display new buttons for this node
    buttonE2.style = 'display: none;';
    buttonE3.style = 'display: none;';
}

//Node 4a Function
button4a.onclick = function (){
    scroll(0,0); //Scrolls to top of page
    console.log('Node 4a Done!');//Personal Check if function is called

    nodeIndicator.innerHTML = 'Node: 4a'; //Change node number
    
    //change title
    titleOne.innerHTML = 'Resonium';
    titleTwo.innerHTML = 'Ethereals Ahead!';
    
    //change text 1
    textOne.innerText = 'Resonium are effects which can enhance the party. Especially in high ether activity, you can gain better resonium.'; 
    //change text 2
    textTwo.innerHTML = 'Lycaon: Let\'s go left. Ellen is kind of an Ether magnet. Maybe this high ether activity was caused by many ethereals following Ellen.<br>';
    textTwo.innerHTML += 'Corin: I hope the Ethereals won\t go for us instead. *Gulp*<br>';
    textTwo.innerHTML += 'Rina: Don\t worry sweetie, I\'m sure they won\'t come for- Oh and there they are. Oops I jinxed it.<br>'
    textTwo.innerHTML += 'Lycaon: Everyone, get ready for battle!'
    //change Image
    nodeImage.src = 'nodeImages/Node4ab.jpg';

    //Remove the button and button description
    button4a.remove();
    buttonDesc4a.remove();
    button4b.remove();
    buttonDesc4b.remove();
    button4c.remove();
    buttonDesc4c.remove();
    // Add the new button and button description for next node
    document.getElementById('outerBox1').appendChild(button5a);
    document.getElementById('outerBox1').appendChild(buttonDesc5a);
    //Display new buttons for this node
    buttonE2.style = 'display: none;';
    buttonE3.style = 'display: none;';
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

let button5a = document.createElement('button');
button5a.id = 'button';
button5a.innerHTML = 'TIME TO BATTLE';

let buttonDesc5a = document.createElement('p')
buttonDesc5a.id = 'butDesc';
buttonDesc5a.innerHTML = 'This isn\'t your first rodeo. Just fight like you usually do. Remember. These Ethereals are dangerous.';

let button5b = document.createElement('button');
button5b.id = 'button';
button5b.innerHTML = 'TIME TO BATTLE';

let buttonDesc5b = document.createElement('p')
buttonDesc5b.id = 'butDesc';
buttonDesc5b.innerHTML = 'This isn\'t your first rodeo. Just fight like you usually do. Remember. These Ethereals are dangerous.';

let button5c = document.createElement('button');
button5c.id = 'button';
button5c.innerHTML = 'Continue to the Debris';

let buttonDesc5c = document.createElement('p')
buttonDesc5c.id = 'butDesc';
buttonDesc5c.innerHTML = 'It may be risky, but Lycaon believes this path will be safer for everyone.';



//Node 5a Function
button5a.onclick = function (){
    scroll(0,0);//Scrolls to top of page
    console.log('Node 5 Done!'); //Personal Check if function is called

    nodeIndicator.innerHTML = 'Node: 5a'; //Change node number

    textOne.innerHTML = 'Alraune:<br>Resembling a flower, it attacks with a bubble of spores dealing 2 dmg.<br>';
    textOne.innerHTML += 'Armored Hati:<br>A very tough-exteriored Ethereal and a heavy hitter. It deals 3 dmg.<br><br>';
    textOne.innerHTML += '<img src=\'battleImages/alraune.jpg\' id=\'etherImage\'> <img src=\'battleImages/armoredHati.jpg\' id=\'etherImage\'>';

    selectCharacter(alraune, armoredHati);

    button5a.remove()
    buttonDesc5a.remove()

    document.getElementById('outerBox1').appendChild(button6aA);
    document.getElementById('outerBox1').appendChild(buttonDesc6aA);
    document.getElementById('outerBox2').appendChild(button6aB);
    document.getElementById('outerBox2').appendChild(buttonDesc6aB);

    buttonE2.style = 'display: flex;';
}

//Node 5b Function
button5b.onclick = function (){
    scroll(0,0);//Scrolls to top of page
    console.log('Node 5 Done!'); //Personal Check if function is called

    nodeIndicator.innerHTML = 'Node: 5a'; //Change node number

    textOne.innerHTML = 'Fawn:<br>An ethereal formed by a stoplight. It\'s use of a train-track-sign pole deals 2 dmg.<br>';
    textOne.innerHTML += 'Fawn Energized:<br>An ethereal with the form just like a fawn but its ether make up is quite different, having different effects of attributes from the character. It deals 2 dmg as well.<br><br>';
    textOne.innerHTML += '<img src=\'battleImages/fawn.jpg\' id=\'etherImage\'> <img src=\'battleImages/fawnEnergized.jpg\' id=\'etherImage\'>';

    selectCharacter(fawn, fawnEnergized);

    button5b.remove()
    buttonDesc5b.remove()

    document.getElementById('outerBox1').appendChild(button6b);
    document.getElementById('outerBox1').appendChild(buttonDesc6b);

    buttonE2.style = 'display: none;';
}

button5c.onclick = function() {
    fallenEnding()
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

let button6aA = document.createElement('button');
button6aA.id = 'button';
button6aA.innerHTML = 'DMG Increase';

let buttonDesc6aA = document.createElement('p')
buttonDesc6aA.id = 'butDesc';
buttonDesc6aA.innerHTML = 'Resonium: DMG increased by 2';

let button6aB = document.createElement('button');
button6aB.id = 'button';
button6aB.innerHTML = 'Healing Increase';

let buttonDesc6aB = document.createElement('p')
buttonDesc6aB.id = 'butDesc';
buttonDesc6aB.innerHTML = 'Resonium: Healing increased by 2';

let button6b = document.createElement('button');
button6b.id = 'button';
button6b.innerHTML = 'HP Increase';

let buttonDesc6b = document.createElement('p')
buttonDesc6b.id = 'butDesc';
buttonDesc6b.innerHTML = 'Resonium: Increase Max HP by 2';

button6aA.onclick = function() {
    corinBattle['Skill'] += 2;
    lycaonBattle['Skill'] += 2;
    rinaBattle['Skill'] += 2;

    node6();
}

button6aB.onclick = function() {
    rinaBattle['Passive'] += 2

    node6();
}

button6b.onclick = function() {
    corinBattle['MaxHP'] += 2;
    lycaonBattle['MaxHP'] += 2;
    rinaBattle['MaxHP'] += 2;

    node6();
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

function node6() {
    scroll(0,0); //Scrolls to top of page
    console.log('Node 6 Done!');//Personal Check if function is called

    nodeIndicator.innerHTML = 'Node: 6'; //Change node number
    
    //change title
    titleOne.innerHTML = 'Continuing through the Hollow';
    titleTwo.innerHTML = 'Data Pile 2: Data Collection Complete';
    
    //change text 1
    textOne.innerText = 'Everyone succesfuly defeated the ethereals and gained a resonium. After their battle, they continue onward to the next data pile.';
    //change text 2
    textTwo.innerHTML = 'Proxy: Okay Guys I\'m almost done collecting the data! However, I can\'t locate the last data pile. We will have to look for it ourselves.<br>';
    textTwo.innerHTML += 'Lycaon: Thank you Proxy. Everyone, if you could listen. After this, we need to find the last data pile and then we can finally locate Ellen.<br>';
    textTwo.innerHTML += 'Corin: Ellen, just wait a little longer. We will be there as fast as we can!<br>';
    textTwo.innerHTML += 'Rina: Don\'t you worry Corin, We will get her!';
    //change Image
    nodeImage.src = 'nodeImages/Node6.png';

    //Remove the button and button description
    button6aA.remove();
    buttonDesc6aA.remove();
    button6aB.remove();
    buttonDesc6aB.remove();
    button6b.remove();
    buttonDesc6b.remove();
    // Add the new button and button description for next node
    document.getElementById('outerBox1').appendChild(button7);
    document.getElementById('outerBox1').appendChild(buttonDesc7);
    //Display new buttons for this node
    buttonE2.style = 'display: none;';
    buttonE3.style = 'display: none;';
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

let button7 = document.createElement('button');
button7.id = 'button';
button7.innerHTML = 'Continue in the hollow ';

let buttonDesc7 = document.createElement('p')
buttonDesc7.id = 'butDesc';
buttonDesc7.innerHTML = 'Continue with the Proxy and head to the next Data Pile.';

button7.onclick = function (){
    scroll(0,0); //Scrolls to top of page
    console.log('Node 7 Done!');//Personal Check if function is called

    nodeIndicator.innerHTML = 'Node: 7'; //Change node number
    
    //change title
    titleOne.innerHTML = '';
    titleTwo.innerHTML = 'Distress in the Hollow';
    
    //change text 1
    textOne.innerText = ''; 
    //change text 2
    textTwo.innerHTML = 'They continue on their journey to the final data pile. While Lycaon walked foreward to the next block, he over heard soft voices saying "HELP US! PLEASE HELP US! WE\'RE BEING ATTACKED BY ETHEREALS!".';
    textTwo.innerHTML += ' The group looked at each other in confusion. However the party was split into what to do next.<br><br>';
    textTwo.innerHTML += 'Lycaon: Our mission may be to find Ellen, but she would agree as well to investigate and help them first.<br>';
    textTwo.innerHTML += 'Rina: Lycaon, you know how much time Ellen has left. She won\'t be alive if we help those people.<br>';
    textTwo.innerHTML += 'Corin: Lycaon, I understand what your saying... But Corin is our friend. She needs our help!<br><br>';
    textTwo.innerHTML += 'The party is indecisive. What should they do?';
    //change Image
    nodeImage.src = 'nodeImages/Node7.jpg';

    //Remove the button and button description
    button7.remove();
    buttonDesc7.remove();
    // Add the new button and button description for next node
    document.getElementById('outerBox1').appendChild(button8a);
    document.getElementById('outerBox1').appendChild(buttonDesc8a);
    document.getElementById('outerBox2').appendChild(button8b);
    document.getElementById('outerBox2').appendChild(buttonDesc8b);
    //Display new buttons for this node
    buttonE2.style = 'display: flex;';
    buttonE3.style = 'display: none;';
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

let button8a = document.createElement('button');
button8a.id = 'button';
button8a.innerHTML = 'Don\'t Help';

let buttonDesc8a = document.createElement('p')
buttonDesc8a.id = 'butDesc';
buttonDesc8a.innerHTML = 'Focus on the Mission and find the last data pile.';

let button8b = document.createElement('button');
button8b.id = 'button';
button8b.innerHTML = 'Help';

let buttonDesc8b = document.createElement('p')
buttonDesc8b.id = 'butDesc';
buttonDesc8b.innerHTML = 'Helping will result in a battle against the ethereals.';

button8b.onclick = function (){
    scroll(0,0);//Scrolls to top of page
    console.log('Node 8 Done!'); //Personal Check if function is called

    nodeIndicator.innerHTML = 'Node: 8'; //Change node number

    textOne.innerHTML = 'Mandrake:<br><br>';
    textOne.innerHTML += 'Shatterbug:<br><br><br>';
    textOne.innerHTML += '<img src=\'battleImages/mandrake.jpg\' id=\'etherImage\'> <img src=\'battleImages/shatterbug.jpg\' id=\'etherImage\'>';

    selectCharacter(mandrake, shatterBug);

    button8a.remove()
    buttonDesc8a.remove()
    button8b.remove()
    buttonDesc8b.remove()

    document.getElementById('outerBox1').appendChild(button9a);
    document.getElementById('outerBox1').appendChild(buttonDesc9a);

    buttonE2.style = 'display: none;';
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

let button9a = document.createElement('button');
button9a.id = 'button';
button9a.innerHTML = 'Talk to the people in need';

let buttonDesc9a = document.createElement('p')
buttonDesc9a.id = 'butDesc';
buttonDesc9a.innerHTML = 'You defeated the ethereals and now have to talk to the people in need.';


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
                battleRecord.innerText = '';
                console.log('Battle Ended')
                endBattle(activeCharacter);
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
        }
        if(lycaonBattle['Health'] > lycaonBattle['MaxHP']){
            lycaonBattle['Health'] = lycaonBattle['MaxHP'];
        }
        if(rinaBattle['Health'] > rinaBattle['MaxHP']){
            rinaBattle['Health'] = rinaBattle ['MaxHP'];
        }

        battleRecordFunc('> Rina healed the party by '+rinaBattle['Passive']+'HP<br>');
        console.log('Party was healed.');
    }

    
}

function endBattle(character) {
    battleUI.style = 'display: none;';
    battleChoice.style = 'display: none;';
    battleBox.style = 'display: none;';
    characterSelection.style = 'display: none;';
    buttonBox.style = 'display: flex;';
    nodeImage.style = 'display: flex;';
    window.alert('Wipeout! You finished the battle.');
    nodeImage.src = 'battleImages/extraImages/WP'+character['Name']+'.png';
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

function fallenEnding(){
    scroll(0,0); //Scrolls to top of page
    console.log('Node Fallen Debris Ending Done!');

    nodeIndicator.innerHTML = 'Node: Fallen To Death Ending'; //Change node number
    
    //change title
    titleOne.innerHTML = 'The dangerous terrain was indeed dangerous terrain';
    titleTwo.innerHTML = '';
    
    //change text 1
    textOne.innerText = 'Everyone went into the broken infrastructure and went right on unstable ground. They tried to leave the premises but failed to escape. They fell from the 5th floor and they all perished. Ellen was nowhere to be found. By now, she became an ethereal. The Proxy, the only surviving member of the mission felt guilt for the rest of his life and he mourns their loss every year.'; 
    //change text 2
    textTwo.innerHTML = '';
    //change Image
    nodeImage.src = 'nodeImages/fallEnd.jpg';

    //Hide everything
    buttonBox.style = 'display: none;';
    char.style = 'display: none;';
    charDescClass.style = 'display: none;';
}