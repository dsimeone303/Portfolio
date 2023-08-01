    var startbtn = document.createElement('button');
    var resetbtn = document.createElement('button');
    var scorediv = document.getElementById('scores');
        startbtn.setAttribute('id','resetbtn');
        startbtn.textContent="Start";
       scorediv.appendChild(startbtn);
        var game;
//start button to start game
        startbtn.addEventListener('click', ()=> {
            game = new Game;
            game.board.message('Ready...Begin!');
            game.generateArray();
            game.board.nextlevel(); 
            scorediv.removeChild(startbtn);
            showReset();
            });
//game reset:
    resetbtn.addEventListener('click', ()=> {
    gameReset();
    });

//reset button
resetbtn.setAttribute('id','resetbtn');
resetbtn.textContent="Reset";
function showReset () {
    scorediv.appendChild(resetbtn);
} 
function gameReset() {
    game = new Game;
    game.board.message('Ready...Begin!');
    game.generateArray();
    game.board.nextlevel(); 
}
var gamearea = document.getElementById('gameArea');
gamearea.addEventListener('click', function(event){
    game.userInput(event);
    highestLvl();
});


var highlvl = 0;
//reporting highest level
function highestLvl() {
    
    var highlevelcontain = document.getElementById('highLevel');
    var span = document.createElement('span');
    if(highlvl<game.board.lvl-1) {
        highlvl = game.board.lvl-1;
    }
        if(highlevelcontain.children[0]) {
            highlevelcontain.children[0].remove();
        }    
    
    span.textContent = highlvl;
    highlevelcontain.append(span);
}
