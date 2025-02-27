

// Mission Shark: Save Ellen Joe
// Javascript File
// 2/26/25
// Marcus Prado

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*Character Selection
    Over the next few code lines, it creates the character description box
    at the bottom of the web page and reacts to user input.
*/

//Character Image
let corin = document.getElementById('charImage1');
let lycaon = document.getElementById('charImage2');
let rina = document.getElementById('charImage3');
// Character Description Text
// Creat variable of text boxes to be changed later
const charName = document.getElementById('placeholder');
const charDesc = document.getElementById('charText');
charDesc.style = 'max-width: 500px; font-size: 16px;';

//Functions to display descriptions of characters when Image clicked
// 1.Changes style of placeholder text
// 2.Add the Name of the character
// 3.Add their battle descriptions: Health, skill, and passive
// 4.Based on what image was clicked
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
    6. Image
    7. Max Health
*/
let alpeca = {'Health': 10 , 'Skill': 2, 'PrepareSkill': 0, 'Weak': 'Physical', 'Res': 'none', 'url': 'battleImages/alpeca.JPG', 'MaxHP' : 10};
let alraune = {'Health': 16, 'Skill': 3, 'PrepareSkill': 1, 'Weak': 'Ice', 'Res': 'none', 'url': 'battleImages/alraune.JPG', 'MaxHP' : 13};
let armoredHati = {'Health': 20, 'Skill': 4, 'PrepareSkill': 0, 'Weak': 'Physical', 'Res': 'Ice', 'url': 'battleImages/armoredHati.JPG', 'MaxHP' : 18};
let blastCrawler = {'Health': 8, 'Skill': 3, 'PrepareSkill': 1, 'Weak': 'none', 'Res': 'none', 'url': 'battleImages/blastcrawler.JPG', 'MaxHP' : 8};
let dullahan = {'Health': 22, 'Skill': 6, 'PrepareSkill': 1, 'Weak': 'Electric', 'Res': 'Ice', 'url': 'battleImages/dullahan.JPG', 'MaxHP' : 22};
let fawn = {'Health': 14, 'Skill': 3, 'PrepareSkill': 0, 'Weak': 'Physical', 'Res': 'none', 'url': 'battleImages/fawn.JPG', 'MaxHP' : 14};
let fawnEnergized = {'Health': 14, 'Skill': 3, 'PrepareSkill': 0, 'Weak': 'Electric', 'Res': 'Physical', 'url': 'battleImages/fawnEnergized.JPG', 'MaxHP' : 14};
let mandrake = {'Health': 16, 'Skill': 4, 'PrepareSkill': 1, 'Weak': 'Ice', 'Res': 'Electric', 'url': 'battleImages/mandrake.JPG', 'MaxHP' : 16};
let shatterBug = {'Health': 12, 'Skill': 4, 'PrepareSkill': 1, 'Weak': 'none', 'Res': 'Physical', 'url': 'battleImages/shatterbug.JPG', 'MaxHP' : 12};
let thanatos = {'Health': 27, 'Skill': 6, 'PrepareSkill': 1, 'Weak': 'Electric', 'Res': 'Ice', 'url': 'battleImages/thanatos.JPG', 'MaxHP' : 27};
let thanatosNotorius = {'Health': 27, 'Skill': 7, 'PrepareSkill': 1, 'Weak': 'Ice', 'Res': 'Physical', 'url': 'battleImages/thanatosNotorious.JPG', 'MaxHP' : 27};

/*Create Character Variables for Battles
    1. Health
    2. Dmg
    3. Passives
    4. Attribute
    5. Image
    6. Max Health
*/
let corinBattle = {'Name': 'Corin', 'Health': 12, 'Skill': 3, 'Attribute': 'Physical', 'url': 'battleImages/characterBattle/corinBattle.JPG', 'MaxHP' : 12};
let lycaonBattle = {'Name': 'Lycaon', 'Health': 18, 'Skill': 2, 'Attribute': 'Ice', 'url': 'battleImages/characterBattle/lycaonBattle.JPG', 'MaxHP' : 18};
let rinaBattle = {'Name': 'Rina', 'Health': 14, 'Skill': 1, 'Passive': 2, 'Attribute': 'Electric', 'url': 'battleImages/characterBattle/rinaBattle.JPG', 'MaxHP' : 14};

/* Create Button Variables for all buttons used in Battles
    1. Select Character Buttons: Appears before the battle begins
    2. Switch Character Buttons: Appears during the battle
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
    1. HP value of Character/Enemy
    2. Attribute
    3. Enemy Resistance
    4. Enemy Weakness
    5. BattleRecord
    6. Character Img
    7. Enemy Img
    8. ButtonBox: Box of options, disabled during battle
    9. BattleUI: Appears only during battles
    10. CharacterSelection: Appears before battles begin
    11. Battle: Appears during battle
    12. BattleChoice: Appears during battle
    13. Move Counter: Tracks the amount of moves per battle
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
    textOne.innerHTML += '*Door Bell Rings*<br>Wise: Welcome to the Random Play Store! Oh! Its you Lycaon how may I help?<br>Lycaon: Ellen is lost in a Hollow and I need your help.<br>Wise: Oh is that so? I\'ll alert Belle. Here\'s Eous. Take him and we can help.<br>Lycaon: Thank you for your help. I promise to compensate you.<br>Wise: It\'s fine, no need to pay me. I\'m doing this as a friend. Now go and get to the Hollow.';
    textOne.innerHTML += '<br><br>Eous: A Bangboo which the Proxy can communicate others in the Hollow. The Proxy can also do some handy things like locate people using Data Piles.';
    //change text 2
    textTwo.innerHTML = 'Victoria Housekeeping and little Eous entered the Hollow. Eous begins to locate Data Piles to which they can find Ellen in the Hollow. As they continue throuhgout the Hollow, they suddenly encounter Ethereals!';
    textTwo.innerHTML += '<br><br>Ethereals: Ethereals are monsters formed from high ether activity. When exploring the Hollow, make sure to stay far from high ether activity, or else you\'ll meet many foes.'
    //change Image
    nodeImage.src = 'nodeImages/Node2.jpg';

    //Remove the button and button description
    button1.remove();
    buttonDesc.remove();
    // Add the new button and button description for next node
    document.getElementById('outerBox1').appendChild(button2);
    document.getElementById('outerBox1').appendChild(buttonDesc2);
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

//1. Create button Node 2 and Description of Button
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

    textOne.innerHTML = 'Alpeca:<br>A quite humanoid ethereal figure which deals 2 dmg every swing of its sharp arm-like blade.<br>';
    textOne.innerHTML += 'Blastcrawler:<br>An ethereal that acts just like a bomb. Stun it before it can explode and deal 3 dmg.<br><br>';
    textOne.innerHTML += '<img src=\'battleImages/alpeca.JPG\' id=\'etherImage\'> <img src=\'battleImages/blastcrawler.JPG\' id=\'etherImage\'>';
    
    selectCharacter(alpeca, blastCrawler); // Call selection Function

    //Remove the button and button description
    button2.remove();
    buttonDesc2.remove();
    // Add the new button and button description for next node
    document.getElementById('outerBox1').appendChild(button3);
    document.getElementById('outerBox1').appendChild(buttonDesc3);
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Create button Node 3 and Description of Button
let button3 = document.createElement('button');
button3.id = 'button';
button3.innerHTML = 'Continue in the hollow';

let buttonDesc3 = document.createElement('p');
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
    textOne.innerHTML += 'Data Piles are beacons located inside the Hollow, scattered across the area. Data Piles can collect data in its surrondings. This data includes biothermal signatures. If you collect enough Data Piles, you can locate people or ethereals. You can locate Ellen!<br>';
    textOne.innerHTML += '<br><img src=\'nodeImages/Node3.png\' id=\'nodeImage\'>';
    //change text 2
    textTwo.innerHTML = 'Lycaon\'s company and the Proxy arrived to the first data pile. While the proxy collects the data, Lycaon checked the surrondings for ethereals while Corin and Rina look for clues of Ellen.<br>';
    textTwo.innerHTML += '<br>Proxy: Okay guys! I\'ve collected the data and there are three paths we could go from here.<br>';
    textTwo.innerHTML += '<br>Left -> High Ether Activity<br>Straight -> Low Ether Activity<br>Right -> No activity, however a very dangerous terrain of debris<br>';
    textTwo.innerHTML += '<br>Meanwhile...<br>Ellen: Gahhh! I don\'t think I can handle the Ethereals any longer. I have to hurry!';
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

//1. Create button Node 4a,4b,4c and Description of Button
let button4a = document.createElement('button');
button4a.id = 'button';
button4a.innerHTML = 'Move Left';

let buttonDesc4a = document.createElement('p');
buttonDesc4a.id = 'butDesc';
buttonDesc4a.innerHTML = 'High Ether Activity. Dangerous ethereals but great rewards.';

let button4b = document.createElement('button');
button4b.id = 'button';
button4b.innerHTML = 'Move Straight';

let buttonDesc4b = document.createElement('p');
buttonDesc4b.id = 'butDesc';
buttonDesc4b.innerHTML = 'Low Ether Activity. Not much ethereals and little reward.';

let button4c = document.createElement('button');
button4c.id = 'button';
button4c.innerHTML = 'Move Right';

let buttonDesc4c = document.createElement('p');
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
    textTwo.innerHTML += 'Lycaon: We can only save her if we are alive. We are here to find her, but we must stay safe as well. Now let\'s get a move on!';
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
    textTwo.innerHTML = 'Lycaon: Let\'s go straight. We don\'t want to encounter stronger enemies this early. We need to be capable enough to find Ellen and still be there quick enough before she becomes an ethereal.<br>';
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
    textTwo.innerHTML += 'Corin: I hope the Ethereals won\'t go for us instead. *Gulp*<br>';
    textTwo.innerHTML += 'Rina: Don\t worry sweetie, I\'m sure they won\'t come for- Oh and there they are. Oops I jinxed it.<br>';
    textTwo.innerHTML += 'Lycaon: Everyone, get ready for battle!';
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

//1. Create button Node 5a,5b and Description of Button
let button5a = document.createElement('button');
button5a.id = 'button';
button5a.innerHTML = 'TIME TO BATTLE';

let buttonDesc5a = document.createElement('p');
buttonDesc5a.id = 'butDesc';
buttonDesc5a.innerHTML = 'This isn\'t your first rodeo. Just fight like you usually do. Remember. These Ethereals are dangerous.';

let button5b = document.createElement('button');
button5b.id = 'button';
button5b.innerHTML = 'TIME TO BATTLE';

let buttonDesc5b = document.createElement('p');
buttonDesc5b.id = 'butDesc';
buttonDesc5b.innerHTML = 'This isn\'t your first rodeo. Just fight like you usually do. Remember. These Ethereals are dangerous.';

let button5c = document.createElement('button');
button5c.id = 'button';
button5c.innerHTML = 'Continue to the Debris';

let buttonDesc5c = document.createElement('p');
buttonDesc5c.id = 'butDesc';
buttonDesc5c.innerHTML = 'It may be risky, but Lycaon believes this path will be safer for everyone.';

//Node 5a Function
button5a.onclick = function (){
    scroll(0,0);//Scrolls to top of page
    console.log('Node 5 Done!'); //Personal Check if function is called

    nodeIndicator.innerHTML = 'Node: 5a'; //Change node number

    textOne.innerHTML = 'Alraune:<br>Resembling a flower, it attacks with a bubble of spores dealing 3 dmg.<br>';
    textOne.innerHTML += 'Armored Hati:<br>A very tough-exteriored Ethereal and a heavy hitter. It deals 4 dmg.<br><br>';
    textOne.innerHTML += '<img src=\'battleImages/alraune.JPG\' id=\'etherImage\'> <img src=\'battleImages/armoredHati.JPG\' id=\'etherImage\'>';

    selectCharacter(alraune, armoredHati); // Call Selection Function

    //Remove the button and button description
    button5a.remove();
    buttonDesc5a.remove();
    // Add the new button and button description for next node
    document.getElementById('outerBox1').appendChild(button6aA);
    document.getElementById('outerBox1').appendChild(buttonDesc6aA);
    document.getElementById('outerBox2').appendChild(button6aB);
    document.getElementById('outerBox2').appendChild(buttonDesc6aB);
    //Display new buttons for this node
    buttonE2.style = 'display: flex;';
}

//Node 5b Function
button5b.onclick = function (){
    scroll(0,0);//Scrolls to top of page
    console.log('Node 5 Done!'); //Personal Check if function is called

    nodeIndicator.innerHTML = 'Node: 5a'; //Change node number

    textOne.innerHTML = 'Fawn:<br>An ethereal formed by a stoplight. It\'s use of a train tracks sign deals 3 dmg.<br>';
    textOne.innerHTML += 'Fawn Energized:<br>An ethereal with the form just like a fawn but its ether make-up is quite different, having different effects of attributes from the character. It deals 3 dmg as well.<br><br>';
    textOne.innerHTML += '<img src=\'battleImages/fawn.JPG\' id=\'etherImage\'> <img src=\'battleImages/fawnEnergized.JPG\' id=\'etherImage\'>';

    selectCharacter(fawn, fawnEnergized); // Call Selection Function

    //Remove the button and button description
    button5b.remove();
    buttonDesc5b.remove();
    // Add the new button and button description for next node
    document.getElementById('outerBox1').appendChild(button6b);
    document.getElementById('outerBox1').appendChild(buttonDesc6b);
    //Display new buttons for this node
    buttonE2.style = 'display: none;';
}

//Node 5c Function
button5c.onclick = function() {
    fallenEnding(); 
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

//1. Create button Node 6aA,6aB,6b and Description of Button
let button6aA = document.createElement('button');
button6aA.id = 'button';
button6aA.innerHTML = 'DMG Increase';

let buttonDesc6aA = document.createElement('p');
buttonDesc6aA.id = 'butDesc';
buttonDesc6aA.innerHTML = 'Resonium: DMG increased by 1';

let button6aB = document.createElement('button');
button6aB.id = 'button';
button6aB.innerHTML = 'Healing Increase';

let buttonDesc6aB = document.createElement('p');
buttonDesc6aB.id = 'butDesc';
buttonDesc6aB.innerHTML = 'Resonium: Healing increased by 1';

let button6b = document.createElement('button');
button6b.id = 'button';
button6b.innerHTML = 'HP Increase';

let buttonDesc6b = document.createElement('p');
buttonDesc6b.id = 'butDesc';
buttonDesc6b.innerHTML = 'Resonium: Increase Max HP by 2';

//Node 6aA Function
button6aA.onclick = function() {
    //Increases Dmg by 1
    corinBattle['Skill'] += 1;
    lycaonBattle['Skill'] += 1;
    rinaBattle['Skill'] += 1;

    node6(); //Goes to next node, 6
}

//Node 6aB Function
button6aB.onclick = function() {
    //Increase Healing by 1
    rinaBattle['Passive'] += 1;

    node6(); //Goes to next node, 6
}

//Node 6b Function
button6b.onclick = function() {
    //Increase Max HP by 2
    corinBattle['MaxHP'] += 2;
    lycaonBattle['MaxHP'] += 2;
    rinaBattle['MaxHP'] += 2;

    node6(); //Goes to next node, 6
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Node 6 Function
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
    textTwo.innerHTML += 'Rina: Don\'t you worry Corin, we will get her!';
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

//Create Button 7 and Description of button
let button7 = document.createElement('button');
button7.id = 'button';
button7.innerHTML = 'Continue in the hollow ';

let buttonDesc7 = document.createElement('p');
buttonDesc7.id = 'butDesc';
buttonDesc7.innerHTML = 'Continue with the Proxy and look for the next Data Pile.';

//Node 7 Function 
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
    textTwo.innerHTML += 'Rina: Our mission may be to find Ellen, but she would agree as well to investigate and help them first.<br>';
    textTwo.innerHTML += 'Lycaon: Rina, you know how much time Ellen has left. She won\'t be alive if we help those people.<br>';
    textTwo.innerHTML += 'Corin: Lycaon, I understand what your saying... But Ellen is capable to fight on her own. I know that. Let\'s help the strangers!<br><br>';
    textTwo.innerHTML += 'The party is indecisive. What should they do?';
    //change Image
    nodeImage.src = 'nodeImages/Node7.JPG';

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

//Create Button 8a,8b and Description of button
let button8a = document.createElement('button');
button8a.id = 'button';
button8a.innerHTML = 'Don\'t Help';

let buttonDesc8a = document.createElement('p');
buttonDesc8a.id = 'butDesc';
buttonDesc8a.innerHTML = 'Focus on the Mission and find the last data pile.';

let button8b = document.createElement('button');
button8b.id = 'button';
button8b.innerHTML = 'Help';

let buttonDesc8b = document.createElement('p');
buttonDesc8b.id = 'butDesc';
buttonDesc8b.innerHTML = 'Helping will result in a battle against the ethereals.';

//Node 8b Function
button8b.onclick = function (){
    scroll(0,0);//Scrolls to top of page
    console.log('Node 8 Done!'); //Personal Check if function is called

    nodeIndicator.innerHTML = 'Node: 8'; //Change node number

    textOne.innerHTML = 'Mandrake:<br>An ugly looking ethereal Indeed. Unlike its looks, its attacks are plain and simple. It deals 4 dmg.<br>';
    textOne.innerHTML += 'Shatterbug:<br>The stronger cousin of the blastcrawler. Be careful, it deals 4 dmg as well.<br><br>';
    textOne.innerHTML += '<img src=\'battleImages/mandrake.JPG\' id=\'etherImage\'> <img src=\'battleImages/shatterbug.JPG\' id=\'etherImage\'>';

    selectCharacter(mandrake, shatterBug); // Call Selection Function

    //Remove buttons
    button8a.remove();
    buttonDesc8a.remove();
    button8b.remove();
    buttonDesc8b.remove();
    //Add new button and description
    document.getElementById('outerBox1').appendChild(button9a);
    document.getElementById('outerBox1').appendChild(buttonDesc9a);
    //Display button change
    buttonE2.style = 'display: none;';
}

//Node 8a Function
button8a.onclick = function (){
    scroll(0,0); //Scrolls to top of page
    console.log('Node 8a Done!');//Personal Check if function is called

    nodeIndicator.innerHTML = 'Node: 8a'; //Change node number
    
    //change title
    titleOne.innerHTML = 'Stick to the Mission';
    titleTwo.innerHTML = '';
    
    //change text 1
    textOne.innerText = 'Lycaon: We are not helping them. End of discussion. What\'s important is Ellen. That\'s it. Our mission is to save her, not strangers who most likely brought this issue onto themselves.';
    textOne.innerHTML += '<br>Corin: Ugh, you\'re so mean Mr. Lycaon! Hmph. Let\'s just go!';
    //change text 2
    textTwo.innerHTML = 'Lycaon sighs in defeat and could understood why Corin is so upset. She wants to help, but we have a goal and that\'s helping Ellen. Rina looks at Lycaon and shakes her head in dissaproval. It upsetted Lycaon and his ears drooped down. For the next 10 mins, no one spoke at all, only the occasional directional instructions by the Proxy.<br><br>';
    textTwo.innerHTML += 'Lycaon: Hey Corin, Rina. I apologize. I should\'ve listen to both of you and tried to help those strangers. I just got very upset that we would want to rescue them before Ellen. It didn\'t feel right to me. Ellen is family. However, you both are right. Anyone needing help in a Hollow deserves help.<br>';
    textTwo.innerHTML += 'Rina: Lycaon, it\'s okay. We all too want to save Ellen. You are right. Everyone in a hollow deserves help. We can\'t change what we have already done. So let\'s continue onto the third data pile. Maybe when leaving the hollow, we will see them.<br><br>';
    textTwo.innerHTML += 'Lycaon nods his head and they all continue on the path. They walk for another 10 mins before they reached a fork in the road.';
    //change Image
    nodeImage.src = 'nodeImages/Node7.JPG';

    //Remove the button and button description
    button8a.remove();
    buttonDesc8a.remove();
    button8b.remove();
    buttonDesc8b.remove();
    // Add the new button and button description for next node
    document.getElementById('outerBox1').appendChild(button9ba);
    document.getElementById('outerBox1').appendChild(buttonDesc9ba);
    document.getElementById('outerBox2').appendChild(button9bc);
    document.getElementById('outerBox2').appendChild(buttonDesc9bc);
    //Display new buttons for this node
    buttonE2.style = 'display: flex;';
    buttonE3.style = 'display: none;';
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Create Button 9ba,9bc and description of buttons
let button9ba = document.createElement('button');
button9ba.id = 'button';
button9ba.innerHTML = 'Open Area';

let buttonDesc9ba = document.createElement('p');
buttonDesc9ba.id = 'butDesc';
buttonDesc9ba.innerHTML = 'Open areas mean less debris to get caught on and easier to see your surrondings.';

let button9bc = document.createElement('button');
button9bc.id = 'button';
button9bc.innerHTML = 'Alleyway';

let buttonDesc9bc = document.createElement('p');
buttonDesc9bc.id = 'butDesc';
buttonDesc9bc.innerHTML = 'What\'s at the end of this alleyway? Ethereals? Ellen? Who knows, be ready for anything!';

//Node 9ba Function
button9ba.onclick = function (){
    scroll(0,0) //Scrolls to top of page
    console.log('Node 9ba Done!'); //Personal Check if function is called

    ambushedEnding(); // Call ambushed ending
}

//Node 9bc Function
button9bc.onclick = function (){
    scroll(0,0);//Scrolls to top of page
    console.log('Node 9bc Done!'); //Personal Check if function is called

    nodeIndicator.innerHTML = 'Node: 9bc'; //Change node number

    textOne.innerText = '';
    textOne.innerHTML += 'Mystery Ethereal:<br>This battle will introduce a mystery ethereal. Start the battle to unravel the mystery.<br>';
    textOne.innerHTML += 'Dullahan:<br>A humanoid Ethereal which can compare to the strongest Ethereal recorded in this game. Beware, Dullahan deals 6 dmg per strike.<br><br>';
    textOne.innerHTML += '<img src=\'battleImages/question.gif\' id=\'etherImage\' style=\'background-color: #283e52;\'> <img src=\'battleImages/dullahan.JPG\' id=\'etherImage\'>';

    let etherealList = [alpeca,alraune,armoredHati,blastCrawler,fawn,fawnEnergized,mandrake,shatterBug];
    let change;
    for (let i = 0; i < etherealList.length; i++){
        change = etherealList[i].MaxHP;
        etherealList[i].Health = change;
    }

    selectCharacter(etherealList[Math.floor(Math.random() * (etherealList.length - 1))],dullahan);

    //Remove buttons and descriptions
    button9ba.remove();
    buttonDesc9ba.remove();
    button9bc.remove();
    buttonDesc9bc.remove();
    //Add new buttons and description
    document.getElementById('outerBox1').appendChild(button10);
    document.getElementById('outerBox1').appendChild(buttonDesc10);
    //Displaying new buttons
    buttonE2.style = 'display: none;';
    buttonE3.style = 'display: none;';
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Creating button 9a and description of buttons
let button9a = document.createElement('button');
button9a.id = 'button';
button9a.innerHTML = 'Talk to the people in need';

let buttonDesc9a = document.createElement('p');
buttonDesc9a.id = 'butDesc';
buttonDesc9a.innerHTML = 'You defeated the ethereals and now have to talk to the people in need.';

button9a.onclick = function() {
    scroll(0,0); //Scrolls to top of page
    console.log('Node 9a Done!');//Personal Check if function is called

    nodeIndicator.innerHTML = 'Node: 9a'; //Change node number
    
    //change title
    titleOne.innerHTML = '"Saviours"';
    titleTwo.innerHTML = 'On To The Final Data Pile';
    
    //change text 1
    textOne.innerText = 'Stranger 1: Oh thank you kind souls! We\'ve been saved!';
    textOne.innerHTML += '<br>Stranger 2: Thank you for saving us from those ethereals!<br>';
    textOne.innerHTML += '<br>Lycaon looks at the strangers up and down.<br>';
    textOne.innerHTML += '<br><i>"This hollow is closed for all unauthorized personal. Though I can\'t complain. We are also unauthorized personel..."</i> Lycaon thinks to himself<br>';
    textOne.innerHTML += '<br>Lycaon: I\'m glad you all are safe. However I would like to know why <i>you both</i>, or should I say THUGS, are here...<br>';
    textOne.innerHTML += 'Stranger 1: Gosh, h-he saw us right through... Okay how bout this, we\'ll tell you everything we know. Just let us go, please!<br>';
    textOne.innerHTML += 'Lycaon: Fine. Tell us, if any, have you seen a data pile?<br>';
    textOne.innerHTML += 'Stranger 2: Oh! U-uh I saw one while coming here!! It\'s just passed that block over there!<br>';
    textOne.innerHTML += 'Lycaon: Excellent. Now I\'ll give you 1 min to run as fast as you can, or else I WILL, apprehend you. Go.<br>';
    //change text 2
    textTwo.innerHTML = 'The thugs scrambled on the ground and ran away. Lycaon had no issue of them leaving, because they ran to the direction of high ether activity. Lycaon pointed to where the thugs instructed and they began to walk.';
    //change Image
    nodeImage.src = 'nodeImages/Node9a.png';

    //Remove the button and button description
    button9a.remove();
    buttonDesc9a.remove();
    // Add the new button and button description for next node
    document.getElementById('outerBox1').appendChild(button10);
    document.getElementById('outerBox1').appendChild(buttonDesc10);
    //Displaying new buttons for this node
    buttonE2.style = 'display: none;';
    buttonE3.style = 'display: none;';
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Create button 10 and description of button
let button10 = document.createElement('button');
button10.id = 'button';
button10.innerHTML = 'Continue to the Final Data Pile';

let buttonDesc10 = document.createElement('p');
buttonDesc10.id = 'butDesc';
buttonDesc10.innerHTML = 'Your Journey is almost to its end. Find Ellen.';

button10.onclick = function() {
    scroll(0,0); //Scrolls to top of page
    console.log('Node 10 Done!');//Personal Check if function is called

    nodeIndicator.innerHTML = 'Node: 10'; //Change node number
    
    //change title
    titleOne.innerHTML = 'Data Pile 3: Data Collection Complete';
    titleTwo.innerHTML = '';
    
    //change text 1
    textOne.innerText = 'The 3rd and final data pile to use. Eous stands beside the beacon and begins collecting data. Victoria Housekeeping stay close by, checking for dangerous ethereals. ';
    textOne.innerHTML += 'Corin is so excited to see Ellen back, but is scared that she will fail to rescue and leave the Hollow. Lycaon is worried the most. He is responsible for protecting his companions and he failed this time. He wouldn\'t want this to happen again ever. Rina, well she worries just like a mother worries about her kids. Which is a lot.<br>';
    textOne.innerHTML += '<br>Eous: Mhphh. Guys!!! I finished. Her biothermal signature is just 2 blocks East! We are so close!!!<br>';
    textOne.innerHTML += 'Lycaon: Everyone! Get ready! We are leaving now!<br>';
    textOne.innerHTML += 'Rina & Corin: Yes Sir!';
    //change text 2
    textTwo.innerHTML = '';
    //change Image
    nodeImage.src = 'nodeImages/Node10.png';

    //Remove the button and button description
    button10.remove();
    buttonDesc10.remove();
    // Add the new button and button description for next node
    document.getElementById('outerBox1').appendChild(buttonEllen);
    document.getElementById('outerBox1').appendChild(buttonDescEllen);
    //Displaying new buttons for this node
    buttonE2.style = 'display: none;';
    buttonE3.style = 'display: none;';
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

//create button Ellen and description of button
let buttonEllen = document.createElement('button');
buttonEllen.id = 'button';
buttonEllen.innerHTML = 'Find Ellen';

let buttonDescEllen = document.createElement('p');
buttonDescEllen.id = 'butDesc';
buttonDescEllen.innerHTML = 'what are you waiting for? Save Ellen!!!';

buttonEllen.onclick = function() {
    scroll(0,0); //Scrolls to top of page
    console.log('Node Ellen Done!');//Personal Check if function is called

    nodeIndicator.innerHTML = 'Node: Ellen.'; //Change node number
    
    //change title
    titleOne.innerHTML = 'Ellen';
    titleTwo.innerHTML = '';
    
    //change text 1
    textOne.innerText = '';
    textOne.innerHTML += 'The party run towards Ellen\'s location as quickly as they can. The location of Ellen is found in a clear field, prone to many ethereals. They climb up to a building that is right at the outskirt of this clear field. They stopped at the top of the building and gazed down to the field. All stood quietly as they scan the field for their friend.<br><br>She\'s not here.<br>';
    textOne.innerHTML += 'The party falls silent. They look over the area again and again, but no Ellen in sight. What\'s only present is the slowly forming rifts that is continuing to produce several ethereals.<br><br>';
    textOne.innerHTML += 'Lycaon: You said she was here. Proxy<br>';
    textOne.innerHTML += 'Eous: Uh I don\'t understand! Her biothermal signature is right infront of us!<br>';
    textOne.innerHTML += 'Lycaon: Well she isn\'t here!!! THE DATA MUST BE WRONG! WEHRE IS SHE!?<br>';
    //change text 2 
    textTwo.innerHTML = 'As Lycaon shouted, a figure jumped forth from below the building up to the top floor.<br><br>It\'s Ellen!!';
    textTwo.innerHTML += '<br><br>Ellen: Well I\'m here alright! Come on! These ethereals aren\'t gonna dissapear on their on yknow! I was commisioned to kill ethereals here, but I\'m guessing you know that already.<br>';
    textTwo.innerHTML += 'Lycaon: Ellen.... Ellen you shouldn\'t be fighting at your state. Let us deal with the ethereals.<br>';
    textTwo.innerHTML += 'Ellen: You know I won\'t let you stop me from fighting. Cmon, Rina and Corin are already preparing to battle. We are just waiting for you Lycaon.<br>';
    textTwo.innerHTML += 'Lycaon: I- Okay. Proxy, stay behind. I\'m sorry for my outburst. We will deal with the ethereals.<br>';
    textTwo.innerHTML += 'Eous: Yes Sir!<br>';
    textTwo.innerHTML += 'Corin: Victoria Housekeeping is now back together!! Let\'s go Ellen!<br>';
    textTwo.innerHTML += 'Ellen: Ready when you are!<br><br>';
    textTwo.innerHTML += 'Ellen is now back with Lycaon, Corin, and Rina. Now its time for the final battle of this saga.';
    //change Image
    nodeImage.src = 'nodeImages/NodeEllen.jpg';

    //Remove the button and button description
    buttonEllen.remove();
    buttonDescEllen.remove();
    // Add the new button and button description for next node
    document.getElementById('outerBox1').appendChild(buttonFinalBattle);
    document.getElementById('outerBox1').appendChild(buttonDescFinalBattle);
    //Displaying new buttons for this node
    buttonE2.style = 'display: none;';
    buttonE3.style = 'display: none;';
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Create button Final Battle and its description
let buttonFinalBattle = document.createElement('button');
buttonFinalBattle.id = 'button';
buttonFinalBattle.innerHTML = 'Battle the Ethereals';

let buttonDescFinalBattle = document.createElement('p');
buttonDescFinalBattle.id = 'butDesc';
buttonDescFinalBattle.innerHTML = 'It\'s time to battle, now with Ellen. Cmon, the mission is almost done!';

buttonFinalBattle.onclick = function (){
    scroll(0,0);//Scrolls to top of page
    console.log('Node Final Battle Done!'); //Personal Check if function is called

    nodeIndicator.innerHTML = 'Node: Final Battle'; //Change node number

    textOne.innerHTML = 'Thanatos:<br>An ethereal that is not a laughing matter. It\'s attacks from its bow deals 6 dmg. Tread carefully.<br>';
    textOne.innerHTML += 'Notorious Thanatos:<br>It\'s Thanatos but notorious. It deals 7 dmg.<br><br>';
    textOne.innerHTML += '<img src=\'battleImages/thanatos.JPG\' id=\'etherImage\'> <img src=\'battleImages/thanatosNotorious.JPG\' id=\'etherImage\'>';

    selectCharacter(thanatos, thanatosNotorius); //Call selection function

    //removes button and description
    buttonFinalBattle.remove();
    buttonDescFinalBattle.remove();
    //Adds new button and description
    document.getElementById('outerBox1').appendChild(buttonLeave);
    document.getElementById('outerBox1').appendChild(buttonDescLeave);
    //Display of other buttons
    buttonE2.style = 'display: none;';
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Create Button Leave and its description
let buttonLeave = document.createElement('button');
buttonLeave.id = 'button';
buttonLeave.innerHTML = 'Leave the Hollow';

let buttonDescLeave = document.createElement('p');
buttonDescLeave.id = 'butDesc';
buttonDescLeave.innerHTML = 'You defeated the last of the ethereals! Go quick, leave the Hollow before more arrive!';

buttonLeave.onclick = function() {
    scroll(0,0); //Scrolls to top of page
    console.log('Node Leaving Hollow Done!');//Personal Check if function is called

    nodeIndicator.innerHTML = 'Node: Leaving Hollow'; //Change node number
    
    //change title
    titleOne.innerHTML = 'Outside the Hollow';
    titleTwo.innerHTML = '';
    
    //change text 1
    textOne.innerText = '';
    textOne.innerHTML = 'With the help of Ellen, the party was able to defeat all the ethereals. They quickly ran outside the Hollow with the help of the Proxy.<br><br>';
    textOne.innerHTML += 'Lycaon: Gasp, hah haa.... Are you all right? Ellen, any ethereal corruption on your body?<br>';
    textOne.innerHTML += 'Ellen: You know I have tough skin, they won\'t dare scratch me! Ha!<br>';
    textOne.innerHTML += 'Rina: It\'s such a relief you are well Ellen. We miss you very much.<br>';
    textOne.innerHTML += 'Ellen: Is that Rina being emotional? That\'s a first. Just kidding! Thank you Rina for worrying about me.<br>';
    textOne.innerHTML += 'Corin: I worried about you the most Ellen! I was so worried!<br><br>';
    textOne.innerHTML += 'Corin runs towards Ellen and gives her the strongest hugs ever.<br><br>';
    textOne.innerHTML += 'Ellen: okay okay Corin get off me! You are breaking my ribs!<br>';
    textOne.innerHTML += 'Corin: Haha, sorry I\'m just happy you\'re here Ellen.<br>';
    textOne.innerHTML += 'Ellen: Im happy too Corin. Sir, so were to next?<br>';
    textOne.innerHTML += 'Lycaon: Well, if need be, let\'s go to the hospital and get some treatment. Other than that, let\'s eat out with the Proxies tonight!<br>';
    textOne.innerHTML += 'Corin & Ellen & Rina: Yay!!!!!';
    //change text 2
    textTwo.innerHTML = '';
    //change Image
    nodeImage.src = 'nodeImages/LeavingHollow.gif';

    //Remove the button and button description
    buttonLeave.remove();
    buttonDescLeave.remove();
    // Add the new button and button description for next node
    document.getElementById('outerBox1').appendChild(buttonFinish);
    document.getElementById('outerBox1').appendChild(buttonDescFinish);
    //Displaying new buttons for this node
    buttonE2.style = 'display: none;';
    buttonE3.style = 'display: none;';
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

//create button finish and description
let buttonFinish = document.createElement('button');
buttonFinish.id = 'button';
buttonFinish.innerHTML = 'Mission Shark: Completed';

let buttonDescFinish = document.createElement('p');
buttonDescFinish.id = 'butDesc';
buttonDescFinish.innerHTML = 'Leave the premises of the Hollow';

buttonFinish.onclick = function() {
    scroll(0,0); //Scrolls to top of page
    console.log('Node Mission Shark: Completed Done!');//Personal Check if function is called
    
    //This returns a true/false if a character has fallen in the story
    let endingDecider = fallenCharacter('give');
    
    if (endingDecider){
        //If a character has fallen, go here
        hospitalEnding();
    }
    else {
        //If not, go here
        dinnerEnding();
    }

    //Remove buttons
    buttonFinish.remove();
    buttonDescFinish.remove();
    //Displaying new buttons for this node
    buttonE2.style = 'display: none;';
    buttonE3.style = 'display: none;';
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Select Character Function
/*
    1. Remove display of Button choices
    2. Show battleUI box
    3. Show character selection box: Allows user to choose active character before battle
    4. Remove display of node image
    5. DIsplay battle rules
    6. if any of the character's health is lower than 0, button does not appear
    7. Onclick of the character's button:
        a. Change battle record
        b. Call BattleInfo function
*/
function selectCharacter(enemy1,enemy2){
    let choice;

    buttonBox.style = 'display: none;';
    battleUI.style = 'display: flex;';
    characterSelection.style = 'display: flex;';

    //Description Box: Removes image for now....
    nodeImage.style = 'display: none;';

    //Description Box Changes: Titles and Adds battle rules
    titleOne.innerHTML = 'Battle Info';
    titleTwo.innerHTML = 'Battle Rules';
    textTwo.innerText = '';
    textTwo.innerHTML += '1. You and the enemy take turns each to deal dmg.<br>';
    textTwo.innerHTML += '2. Changing characters are considered a turn. Selecting a character at the start of the game does not count as your turn.<br>';
    textTwo.innerHTML += '3. When a character\'s health reaches 0 or lower, they have fallen and can\'t be used for the whole story. The player must choose another active character to continue the battle.<br>';
    textTwo.innerHTML += '4. When an enemy\'s health reachs 0 or lower, they perish and the next wave of enemies comes. Each battle has two waves.<br>';
    textTwo.innerHTML += '5. Enemies have attribute weakness and resistance. Character\'s with the same attribute, the enemy is weak to, has damage dealt increased by 1. If the character has the same attribute as the enemy\'s resistance, damage dealt decreased by 1.<br>';
    textTwo.innerHTML += '6. A battle will always start with your turn.<br>';


    if (corinBattle['Health'] <= 0)  {
        corinButton.remove();
        corinSwitch.remove();
    }
    if (lycaonBattle['Health'] <= 0)  {
        lycaonButton.remove();
        lycaonSwitch.remove();
    }
    if (rinaBattle['Health'] <= 0)  {
        rinaButton.remove();
        rinaSwitch.remove();
    }

    corinButton.onclick = function (){
        choice = corinBattle;
        console.log('Selected active character: Corin');
        battleRecordFunc(`> Selected Character: Corin<br>`);
        battleInfo(enemy1, enemy2, choice);
    }
    lycaonButton.onclick = function (){
        choice = lycaonBattle;
        console.log('Selected active character: Lycaon');
        battleRecordFunc(`> Selected Character: Lycaon<br>`);
        battleInfo(enemy1, enemy2, choice);
    }
    rinaButton.onclick = function (){
        choice = rinaBattle;
        console.log('Selected active character: Rina');
        battleRecordFunc(`> Selected Character: Rina<br>`);
        battleInfo(enemy1, enemy2, choice);
    }
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

//battleInfo Function
/*
    1. Places enemy 1 as the active enemy
    2. creates deadEnemy list
    3. Create DeadEnemy, Stun Counter, Stun Before, Prepare Skill, Move Counter
    4. Update counter
    5. Display BattleBox and Battle Choice. Hide character selection
    6. Call Switch Character
        a. Update Character Image
        b. Update Character Health
        c. Update Character Attribute
    7. Call Switch Enemy
        a. Update Enemy Image
        b. Update Enemy Health
        c. Update Enemy Res and Weakness
    8. attackButton Event
    9. CorinSwitch Event
    10. LycaonSwitch Event
    11. RinaSwitch Event
    12. Doublemove variable: Checks Corin's passive
    13. Function EnemyAttack
    14. Function Healing
*/
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
    // Attack Button
    /*
        1. Character DMG based on active character skill
        2. When active character fallen, cant attack
        3. If rina not active and alive, dmg +1
        4. If attribute == enemy res, dmg -1
        5. If attribute == enemy weak, dmg +1
        6. If enemyHealth-dmg < 0:
            a. enemy health decrease
            b. update html
            c. update battle records
            d. stunBefore = false
            e. add enemy to dead list
            Else:
            a. enemy health decrease
            b. update battle records
            c. move counter + 1
            d. update html
            e. Call Enemy Attack
     */
    attackButton.onclick = function () {
        let characterDmg = activeCharacter['Skill'];

        if (activeCharacter['Health'] <= 0){
            battleRecordFunc('- Error: Fallen character cannot attack. Change active character. <br>');
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

            /*
                If dead Enemy list === 2:
                    1. battle record clear
                    2. console
                    3. Call End Battle function
                else:
                    1. switch active enemy to enemy 2
                    2. Call switch Enemy Function
            */
            if (deadEnemy.length === 2){
                battleRecord.innerText = '';
                console.log('Battle Ended');
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

    //  Corin Switch event
    /*
        If active character is corin:
            1. update battle record
        else:
            1. console
            2. switch active character
            3. Update battle record
            4. Call Enemy Attack
    */
    corinSwitch.onclick = function() {
        if (activeCharacter['Name'] === 'Corin'){
            battleRecordFunc('- Active Character is already Corin.<br>');
        } else {
            console.log('Switched to Corin');
            activeCharacter = corinBattle;
            battleRecordFunc('- Switched Character: Corin<br>');
            switchCharacter(activeCharacter);
            enemyAttack();
        }
    }

    // Lycaon Switch event
    /*
        If active character is lycaon:
            1. update battle record
        else:
            1. console
            2. switch active character
            3. Update battle record
            4. Call Enemy Attack
    */
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

    // Rina Switch event
    /*
        If active character is rina:
            1. update battle record
        else:
            1. console
            2. switch active character
            3. update battle record
            4. Call Enemy Attack
    */
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

    //This variable checks corins passive, inorder for it to not be acctivate every single time
    let doubleMoveDone = false;

    //Enemy Attack Function
    /*
        1. Create Double Move variable
        2. If active char == corin & doubleMoveDone = false
            a. double move = true
            b. double move done = true
            else
            a. double move = false
            b. double move done = false
        3. If stun > 0: Stun-1 and console
        4. active character == lycaon && stunCounter == 0 && stubbefore == false
            a. stun = 2
            b. console
            c. update battle record
            d. stunbefore = true
        5. Battle Record Updating If Statement
        6. 
    */
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
            console.log(stunCounter);
        }

        if (activeCharacter['Name'] === 'Lycaon' && stunCounter === 0 && stunBefore === false){
            stunCounter = 2;
            console.log(stunCounter)
            battleRecordFunc('> Lycaon Stunned the Enemy! They can\'t attack for 2 turns.<br>');
            stunBefore = true;
        } 

        /*
            If Double Move == true: Update battle record, doubleMove = false
            Else If Stun Counter > 0: update battle record
            Else If activeenemy['PrepareSkill'] === 1 & prepareskill === false: update record, prepareskill = false
            else:....
        */
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
            /*
                If active character health - dmg <= 0:
                    a. update active character health
                    b. update html
                    c. update battle record
                    d. console
                    e. call fallen Character
                else:
                    a. update active character health
                    b. update html
                    c. update battle record
            */
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

    //Heal Function
    /*
        1. Increase party health by rina's passive
        2. If characters health is over max hp, change health to max hp
        3. update battle record
        4. console
    */
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

// endBattle Function
/*
    1. Make battle ui dissapear 
    2. alert
    3. change node image based on active character
*/
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
// Switch Enemy Function
//1. update img and html
function switchEnemy(newEnemy){
    enemyImg.src = newEnemy['url'];
    enemyHealth.innerHTML = newEnemy['Health'];
    enemyRes.innerHTML = newEnemy['Res'];
    enemyWeak.innerHTML = newEnemy['Weak'];
}
// Switch Character Function
//1. update img and html
function switchCharacter(newCharacter) {
    characterImg.src = newCharacter['url'];
    characterHealth.innerHTML = newCharacter['Health'];
    characterAttribute.innerHTML = newCharacter['Attribute'];
}

// fallen character Function
let fallen = [];
function fallenCharacter(character){
    /*
        1. if character === give:
            a. if length of fallen greater than 0: True
            else: False
    */
    if (character === 'give'){
        if (fallen.length > 0){
            return true;
        }
        else {
            return false;
        }
    }

    /*
        1. add character to fallen list
        2. console
        3. if fallen lenght == 3
            a. Call battleEnding function
            else:
            a. if character is corin: remove button
            b. if character is lycaon: remove button
            c. if character is rina: remove button

    */
    fallen.push(character);
    console.log(fallen);
    if (fallen.length === 3){
        battleEnding();
    } else {
        if (character['Name'] === 'Corin'){
            corinSwitch.remove();
            corinButton.remove();
        }
        else if (character['Name'] === 'Lycaon'){
            lycaonSwitch.remove();
            lycaonButton.remove();
        }
        else if (character['Name'] === 'Rina'){
            rinaSwitch.remove();
            rinaButton.remove();
        }
    }
}

// Battle Record Function
// Adjusts it so latest text appears at the top
function battleRecordFunc(addText) {
    let placeholder = battleRecord.innerHTML;
    battleRecord.innerText = '';
    battleRecord.innerHTML += addText;
    battleRecord.innerHTML += placeholder;
}



//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

function battleEnding() {
    scroll(0,0); //Scrolls to top of page
    console.log('Node Fallen in Battle Done!');

    nodeIndicator.innerHTML = 'Node: Fallen in Battle Ending'; //Change node number
    
    //change title
    titleOne.innerHTML = 'Mission Shark: Save Ellen - Failed';
    titleTwo.innerHTML = 'Epilogue';
    
    //change text 1
    textOne.innerText = 'No matter how hard they tried, they couldn\'t defeat the existing ethereals and perished. Eous watched in horror as his companions, no. His best friends died at the hands of ethereals. Their bodies fall to the ground, limp. He couldn\'t do anything and neither could everyone else. The proxies cut their connection to Eous and never saw them again.'; 
    //change text 2
    textTwo.innerHTML = 'Wise: Belle, do you remember Victoria Housekeeping?<br>';
    textTwo.innerHTML += 'Belle: How could I not. It was the only mission that we... failed.... I miss them.<br>';
    textTwo.innerHTML += 'Wise: I... I shoud\'ve-<br>';
    textTwo.innerHTML += 'Belle: It is not your fault Wise. It was nothing that we could control.<br>';
    textTwo.innerHTML += 'Wise: Okay...<br>';
    textTwo.innerHTML += 'Belle: We may have lost them, but we still have them in our memories Wise. Cmon, look at your collage picture board. Do you remember? Our first mission with them?<br>';
    textTwo.innerHTML += 'Wise: Yeah I remember. Sniffle...<br>';
    textTwo.innerHTML += 'Belle: Okay bro, let\'s go down and open the store. For lunch we can get some noodles to go.';
    //change Image
    nodeImage.style = 'display: flex;';
    nodeImage.src = 'nodeImages/BattleEnding.png';

    //Hide everything
    buttonBox.style = 'display: none;';
    char.style = 'display: none;';
    charDescClass.style = 'display: none;';
    battleUI.style = 'display: none;';
}

function fallenEnding(){
    scroll(0,0); //Scrolls to top of page
    console.log('Node Fallen Debris Ending Done!');

    nodeIndicator.innerHTML = 'Node: Fallen To Death Ending'; //Change node number
    
    //change title
    titleOne.innerHTML = 'The dangerous terrain was indeed dangerous terrain';
    titleTwo.innerHTML = '';
    
    //change text 1
    textOne.innerHTML = 'Everyone went into the broken infrastructure and went right on unstable ground. They tried to leave the premises but failed to escape. They fell from the 5th floor and they all perished. Ellen was nowhere to be found. By now, she became an ethereal. The Proxy, the only surviving member of the mission felt guilt for the rest of his life and he mourns their loss every year.<br><br>Mission Shark: Save Ellen - Failed'; 
    //change text 2
    textTwo.innerHTML = '';
    //change Image
    nodeImage.src = 'nodeImages/fallEnd.jpg';

    //Hide everything
    buttonBox.style = 'display: none;';
    char.style = 'display: none;';
    charDescClass.style = 'display: none;';
}

function ambushedEnding(){
    scroll(0,0); //Scrolls to top of page
    console.log('Node Ambushed Ending Done!');

    nodeIndicator.innerHTML = 'Node: Ambushed Ending'; //Change node number

    //change title
    titleOne.innerHTML = 'Like A Moth To A Flame';
    titleTwo.innerHTML = '';
    
    //change text 1
    textOne.innerText = 'Everyone decided to go through the open area. This way, everyone can see their surrondings and possibily Ellen. As they continued closer to the center of the area, the surrondings began to change from trashed and broken buildings, to ruble, then finally a clear plain. ';
    textOne.innerHTML += 'Everyone was puzzled on the drastic change of environment. They then formed a defense formation to make sure no dangerous figure can attack them. However, their attempt to protect themselves was futile and a huge ethereal flew down to them. The party was frozen in shock. ';
    //change text 2
    textTwo.innerHTML = 'The party failed to escape and they all perished by the hands of the ethereal. Eous was destroyed in the process and the Proxy never saw them again. Ellen was never found.<br><br>Mission Shark: Save Ellen - Failed';
    //change Image
    nodeImage.src = 'nodeImages/AmbushedEnding.png';

    //Hide everything
    buttonBox.style = 'display: none;';
    char.style = 'display: none;';
    charDescClass.style = 'display: none;';
}

function dinnerEnding(){
    scroll(0,0); //Scrolls to top of page
    console.log('Node Dinner w/ Proxy Ending Done!');

    nodeIndicator.innerHTML = 'Node: Dinner with the Proxy Ending'; //Change node number

    //change title
    titleOne.innerHTML = 'DINNER';
    titleTwo.innerHTML = 'Epilogue';
    
    //change text 1
    textOne.innerText = '';
    textOne.innerHTML += 'Victoria Housekeeping returned to the Random Play Store to pick up the Proxies. They entered the company vehicle and went to Lumina Square for dinner. It was an amazing dinner with friends. A nice way to end the day.<br><br>Mission Shark: Save Ellen - Completed'; 
    textOne.innerHTML += '<br><br><img src=\'nodeImages/DinnerEnding.jpg\' id=\'endingPhoto\'>';
    //change text 2
    textTwo.innerHTML = 'Corin: Oh! Ellen! Remember when you went into the Brant Street Hollow by yourself? And then we had to save you? Hahaha that was so fun!<br>';
    textTwo.innerHTML += 'Ellen: Oh shut it Corin! I was in danger!<br>';
    textTwo.innerHTML += 'Lycaon: Well I wonder, why go by yourself? We always do commisions together?<br>';
    textTwo.innerHTML += 'Ellen: Uhhhh well. I was going to ask yall to help but uhh... I was distracted by a butterfly and walked into the Hollow.<br>';
    textTwo.innerHTML += 'Rina: Why didn\'t you just leave then?<br>';
    textTwo.innerHTML += 'Ellen: Ugh! obviously the Hollow shifted right when I entered and the entrance closed! Ugh, just give me the drink....<br>';
    textTwo.innerHTML += 'Corin: HAHAHA you got my drink!!! Be careful Ellen, its very spicy!!!';
    //change Image
    nodeImage.src = 'nodeImages/DinnerEnding2.png';

    //Hide everything
    buttonBox.style = 'display: none;';
    char.style = 'display: none;';
    charDescClass.style = 'display: none;';
}

function hospitalEnding(){
    scroll(0,0); //Scrolls to top of page
    console.log('Node Hospital Done!');

    nodeIndicator.innerHTML = 'Node: Hospital Ending'; //Change node number

    //change title
    titleOne.innerHTML = 'In the Hospital';
    titleTwo.innerHTML = '';
    
    //change text 1
    textOne.innerText = '';
    textOne.innerHTML += 'Ellen: So how is it that I stayed in the Hollow longer than all of you and still had less injuries than yall?<br>';
    textOne.innerHTML += 'Lycaon: It\'s because you aren\'t a playable character, you can\'t die!<br>';
    textOne.innerHTML += 'Ellen: Huh? Uh well anyway, lets get a snack when you all are done. Cmon, I\'ll be waiting outside. Toodeloo!';
    textOne.innerHTML += '<br><br><img src=\'nodeImages/HospitalEnding2.png\' id=\'endingPhoto\'>';
    //change text 2
    textTwo.innerHTML = 'Though they planned to eat dinner with the proxies, their treatment in the hospital forced them to delay the dinner tommorrow. However, they got a little laugh in their situation in the hospital. It was a hard and grueling mission for them and its kind for Ellen to act like it\'s a normal day, or else anyone of them will burst in tears.';
    textTwo.innerHTML += 'After they were released from the hospital, they went out to eat some sandwiches.<br><br>';
    textTwo.innerHTML += 'Ellen: Hey guys, can we watch Astra Yao\'s concert tommorow instead of dinner with the proxies? I heard they are huge Astra Yao fans as well, so we can invite them.<br>';
    textTwo.innerHTML += 'Lycaon: How considerate of you Ellen. Sure, we can do that instead of dinner.';
    //change Image
    nodeImage.src = 'nodeImages/hospitalEnding.jpg';
    
    document.getElementById('image').appendChild(newImage);

    //Hide everything
    buttonBox.style = 'display: none;';
    char.style = 'display: none;';
    charDescClass.style = 'display: none;';
}

let newImage = document.createElement('img');
newImage.id = 'nodeImage';
newImage.src = 'nodeImages/HospitalEnding3.png';