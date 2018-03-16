$(document).ready(function() {

    //var timer = 0;
    var answers = ["New England","10 ft","2002","Deion Sanders","China"];
    var correctGuesses = 0;
    var incorrectGuesses = 0;
    var unanswered = 0;
    var number = 15;
    var intervalId = 0 ;
    var questions = {
                q1:"Which NFL team overcame a 25-defict to win the 2017 Superbowl?",
                q2:"What is the regualation height for a basketball gaol?",
                q3:"In what year did the Houston Texans join the NFL?",
                q4:"Who is the only athelete ever to play in a Super Bowl and World Series?",
                q5:"The art of kung fu originated in which country?"

    };

    
// Starts the timer when the button is clicked
    $("#start").on("click", function(e){
      e.preventDefault();
      startTimer();
    });

//Stops the timer when the button is clicked
    $("#done").on("click", done);

//Set the interval to run the next function decrement
//The decrement function will decrease the time until it hit zero

    function startTimer() {
        clearInterval(intervalId);
        intervalId = setInterval(function(){
            number--;
            console.log(number);
 //Displays the number in the time remaining tag
 $("#timeremaining").html("<h2>" + number + "<h2>");
        }, 1000);  
              
 //Displays the number in the time remaining tag
//  $("#timeremaining").html("<h2>" + number + "<h2>");
 
        //    if (number === 0) {
        //      done();
        //    }
           
        }

 //  The stop function to stop the timer
    function done() {
 //  Clears out the timer and stop the timer when it hits zero
      clearInterval(intervalId);
      intervalId = setInterval(function(){

        if ( number === 0);
        clearInterval(number);     
        
        gameover();

      });
    }

    
    // function stats(){


    // }


    function gameover() {
//calls the done function to stop the timer
        

        for(var i = 0; i < answers.length; i++){

// Finding the correct answer with the question, then adding one to the guessses
        if ((questions.q1 = answers[0]) || (questions.q2 = answers[1] ))
            correctGuesses ++;  
//Appends the correct guesses to h2 element
            $("<h2>").append("<h2>" + correctGuesses + "<h2>");

        } if ((questions.q3 = answers[2]) || (questions.q4 = answers[3]) ||(questions.q5 =answers[4] ) ) {
            correctGuesses ++;
//Appends the correct guesses to h2 element
            $("<h2>").append("<h2>" + correctGuesses + "<h2>");

        } else if (questions > answers) {
            incorrectGuesses ++;
//Appends the incorrect guesses to h2 element
         $("<h2>").append("<h2>" + incorrectGuesses + "<h2>");  
         
        } else { ((questions = "" ) || (answers = "" )) 

             unanswered ++;

//Appends the unanswered guesses to h2 element
     $("<h2>").append("<h2>" + unanswered + "<h2>");  
         
    }  
 }


});
