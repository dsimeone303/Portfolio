class Board{
    constructor(){
        this.sequenceTOT=[];
        this.sequence=[]; 
        this.lvl= 0;
        this.maxLvl=16;
        this.button = this.initiateButton();
        this.i = null; // valued in nextlevel(), used in nextseqeuence() to go through the values of sequence.
        this.play=null;
        
    }
    

//buttons are in the html create buttons in the button class to assign each one to it's html equivilant.
    initiateButton(){
        var buttons=[];
        let buttonarray = ['green','red','yellow','blue'];
        for (let i = 0; i<4; i++) {
            let button = new Button(i,buttonarray[i]);
            button =document.getElementById(buttonarray[i]) //used to make the buttons work
            buttons.push(button);
        }
        return buttons;
    } 
    // function allows AI to show the sequence given the 'lightshow' being the sequence.... THIS FUNCTION GETS INITIATED IN NEXT LEVEL
    // this.button values: 0 = green, 1 = red, 2 = yellow, 3 = blue
    btnactive(lightshow){
        var btnarray = this.button; //array of the buttons
        var sequence = lightshow; //an array of the light output wanted                   
        var i = 0;
        var length = sequence.length;
        var nIntervId;
        var holdBright=0;
        var prevBtn;
        //for set interval counter to work properly.
        appear();
       function appear(){
         if(!nIntervId) {
           nIntervId = setInterval(delay,1000);
            }
        }
        function delay(){                                                                       //test run 2 values:
            var command = sequence[i];                      // single value of sequence                                        
            if (holdBright!==0){                            //last button's ID value                           
              prevBtn.setAttribute('id',holdBright);        //return button to nonactive state; in loop;                  
            }
            if(i === length) {                              //if i is at the last value of the sequenc                     
                this.game.ready = true;
                clearInterval(nIntervId);                   //gets out of interval                                              
                prevBtn.setAttribute('id',holdBright);
                
            }else(
            
                //sets the main varaibles and updates the button to be active.
            setTimeout(()=>{  
                var saverid= btnarray[command].attributes.id.nodeValue;
                var active = `${saverid}active`;  
                var bright = saverid === saverid ? active : saverid;
                btnarray[command].setAttribute('id',bright);                                       
                holdBright= saverid;                                                                                
                prevBtn = btnarray[command];                                                        
           i++;                                                                                
            },400));
            

            
        }  
    }
//sequence holds the value of what the AI will visibly show. for that level and what the player will have to mimic.... THIS FUNCTION GETS INITIATED IN NEXTLVL()
    lvlsequence(){
        var mainArray = this.sequenceTOT;
        var playArray = this.sequence;
        var nextMove = mainArray[0]
        playArray.push(nextMove);
        mainArray.shift();
        this.play=this.sequence[0];
        }
//setup level 1 and the correct sequence. place AI
    nextlevel() {
        var span = document.createElement('span');
        var lvl = this.lvl;
        var lvlContain = document.getElementById('currentLevel');
        if(lvlContain.children[0]){
            lvlContain.children[0].remove();
        }
        lvl++;
    
        span.textContent= lvl;
        lvlContain.append(span);
        this.lvlsequence();
        this.lvl = lvl;
        this.i = 0;
        this.btnactive(this.sequence);
    }
//create a function that provides 1 command at a time that the player must match:
    nextsequence(){
        game.ready = true;
        var sequence = this.sequence;                //so at level 3. this should hold 3 values.
        var command = sequence[this.i];                //at begining of round this should be the first sequence sequence[0]
        this.play = command;
            }
  
    //display text for 1 second saying the level is complete
    message(text) {
        var message = document.createElement('span');
        var contain = document.getElementById('messageContain');
        message.setAttribute('id','message');
        message.textContent=text;
        contain.append(message);
        
        if(message.textContent !== "THAT'S NOT RIGHT! GAME OVER!!!") {
        setTimeout(()=> { contain.children[0].remove();},1500
        )} else {
            setTimeout(()=> { contain.children[0].remove();},5000)}
    } 
}


    
    
    
    
    
