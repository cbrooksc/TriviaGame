$(document).ready(function() {

    //var timer = 0;
    // var answers = ["New England","10 ft","2002","Deion Sanders","China"];
    var correctGuesses = 0;
    var incorrectGuesses = 0;
    //var unanswered = 0;
    var number = 15;
    var intervalId ;
    var questions = [
    {
                questions:"Which NFL team overcame a 25-defict to win the 2017 Superbowl?",
                answers:['Philadelphia Eagles','New England','Denver Broncos'],
                correctGuesses: 1,
     }, 
     {
                questions:"What is the regualation height for a basketball gaol?",
                answers:['12ft','10ft','8ft'],
                correctGuesses: 1,
     },
     {
                questions:"In what year did the Houston Texans join the NFL?",
                answers:['2017','1996','2002'],
                correctGuesses: 2,
     },        
     {
               questions:"Who is the only athelete ever to play in a Super Bowl and World Series?",
               answers:['Deion Sanders','Mike Tyson','Ken Griffin Jr'],
               correctGuesses: 1,
    },
    {
               questions:"The art of kung fu originated in which country?",
               answers:['Japan','China','United States'],
               correctGuesses: 2,

    },
            ];

    
// Starts the timer when the button is clicked
    $("#start").on("click", function(e){
      e.preventDefault();
      startTimer();
    });

//Stops the timer when the button is clicked
    // $(".btn btn-default").on("click", done);

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
       
                 
   }

 //  The stop function to stop the timer
    function done() {
 //  Clears out the timer and stop the timer when it hits zero
      clearInterval(intervalId);
      intervalId = setInterval(function(){

        if ( number === 0);
        $("timeremaining").empty();     
    

      });
    }

    function setupQuestions() {
        // Grab the data-question attribute
       // Grab the radio that is checked.
      // Compare the value of the checked one to the value of the answer in the question. 
        
      var $questionsSection = $('.questions-section');

        for (var i = 0; i < questions.length; i++) {
            var $divRow = $('<div>').addClass('row text-center');

            var $questionDiv = $('<div>').addClass('questions')
            .attr('data-question', i);

            $questionDiv.append('<h3>' + questions[i].questions + '</h3>');

            questions[i].answers.map(function(answer, f) {
                $questionDiv.append(
                    '<div class="radio">\n' +
                    '    <label>\n' +
                    '       <input type="radio" name="question_' + i + '" value="' + f + '">' + answer +
                    ' </label>\n' +
                    '</div>'
                );
            });

            $divRow.append($questionDiv);

            $questionsSection.append($divRow);
        }
 }

              $('button').on('click', function() {
                 console.log('Done clicked...');

                  var $questions = $('.question');

                 $questions.each(function(index, item) {
                 var $item = $(item);
                 var currentQuestion = $item.attr('data-question');
                 var selectedAnswer = $item.find('input:checked').val();

               console.log('Current Question: ', currentQuestion, 'Selected Answer: ', selectedAnswer);

                if (questions[currentQuestion].correctGuesses == selectedAnswer) {
                          correctGuesses ++;
                      }
                              else {
                                      incorrectGuesses ++;
                             }

    });
                //  console.log('Correct Answers:', correctGuesses);
                 //console.log('Incorrect Answers:', incorrectGuesses);

                         setupQuestions();

                           function stats(){

                            if(questions[currentQuestion].correctGuesses === selectedAnswer) {

                                ("questions-section").html('correcrtGuesses');

                                done();
                            }
                                else {
                                    ("questions-section").html('incorrectGuesses');

                                        done();

                                }
                            

                              

                      }


});

















});
