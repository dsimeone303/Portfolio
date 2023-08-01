// for dialog descriptions:
var gameArea = document.getElementById('body');
var exitbtn = document.createElement('button');
var contain = document.createElement('div');
contain.setAttribute('id','popup');
exitbtn.textContent='[ X ]';
exitbtn.setAttribute('id','exitbtn');
//how to play simon:
var rulebtn = document.getElementById('rules');

    var ruletitle = document.createElement('h2');
    var ruletext = "Get ready to watch, remember, repeat! The Simon game is the exciting electronic game of lights and sounds in which the player must repeat random sequences of lights by pressing the colored pads in the correct order. It's fast-paced play, with lights and sounds that can challenge you. Experience the fun as you repeat the patterns and advance to higher levels. Keep track of your score as you challenge friends or try to beat your own high score.";
    ruletitle.textContent='Rules:';
    
//rule button listener
    rulebtn.addEventListener('click',()=>{
       if(contain.textContent.length !== 0){
           contain.textContent=null;
       }
    contain.append(exitbtn);
    contain.append(ruletitle);
    contain.append(ruletext);
    gameArea.append(contain);
});

    var aboutbtn = document.getElementById('about');
    var infotitle = document.createElement('h2');
    var infotext = 'This is the first game I created without assistance after learning how to build Connect 4 in a course. I wanted to challenge myself by making a different game. This code is 100% original. The main focus was to gain more expereince working in JavaScript Classes. Hope you enjoy a chiildhood favorite of mine and make it all the way to lvl 16!';
    infotitle.textContent='Description';
//about btn listener
aboutbtn.addEventListener('click',()=>{
    if(contain.textContent.length !== 0){
   contain.textContent=null;
       }
    contain.append(exitbtn);
    contain.append(infotitle);
    contain.append(infotext);
    gameArea.append(contain);
    console.log('about happened');
    });

var popup = document.getElementById('popup');
exitbtn.addEventListener('click',()=>{
    gameArea.children[10].remove();
    contain.textContent=null;
    
});




