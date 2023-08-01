class Game {
    constructor(){
        this.board= new Board;
        this.startgame=false;
        this.endgame=false;
        this.input = null;
        this.command=null;
        this.ready =false;
    }
    

//create a loop to fill board.sequenceTOT with 200 random number generators.
    generateArray(){
    var array = this.board.sequenceTOT
    var maxlvl = this.board.maxLvl
    for (let i = 0; i<maxlvl; i++){
        var random = Math.floor(Math.random() * 4);
        array.push(random);
    }
}
    
gameplay(){
    this.board.nextlevel();
    this.board.btnactive(this.board.sequence);
}
userInput(e) {
    this.input= null;
    var input = this.input;
    
        if(this.ready) {
            if(e.target.id==='blue') {
                input= 3;
                this.checkinput(input);
                
            } else if ( e.target.id === 'yellow') {
                input = 2;
                this.checkinput(input);
            } else if (e.target.id === 'red') {
                input =1;
                this.checkinput(input);
                
            } else if (e.target.id === 'green') {
                input = 0;
                this.checkinput(input);
            }
        }
    }
checkinput(input) {
        this.ready = false;
        if (input===this.board.play){ // user input is correct.
            if(this.board.i === this.board.sequence.length-1) {// if it's the last number in the array
                if(this.board.sequence.length === 16){ //if the game is won
                        this.board.message(`Congrats you Won!!!`);
                        //extra = enter hard mode where you can put in as many levels as you want. (if it's already not on hard_mode);
                } else{ //user input correct end of level not end of game 
                   //display 'level[i]  complete'
                    this.board.nextlevel();
                    this.board.message(`Nice work, ready for Level ${this.board.lvl}`)
                }} else {
            //user input correct but not end of lvl
                this.board.i++;
                this.board.nextsequence();
        }}else {
        //user input was incorrect
                this.board.message("THAT'S NOT RIGHT! GAME OVER!!!");
    }
        
    }
}
//bringing the buttons into javascript outside of the classes.
var green = document.getElementById('green');
var red = document.getElementById('red');
var yellow = document.getElementById('yellow');
var blue = document.getElementById('blue');
