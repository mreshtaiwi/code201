var client_name
function welcome() {
    client_name = prompt("Hello, Welcome ..? what is your name?");
    if (client_name != null)
        alert("okay, welcome " + client_name + ".. now let's enojy :)");

}
function Lab02() {
    var Questions = ["Is Amman the capital of Joradn?", "Do you think my name is Baraa?", "1 + 2 is 4?", "The cat have 2 legs and 2 hands?", "Baraa is a female name only :)"];
    var Answers = [true, true, false, true, false];
    var res = [];
    var total_result = 0;
    for (var i = 0; i < Questions.length; i++) {
        res[i] = confirm(Questions[i]);
        if (res[i] === Answers[i]) {
            total_result++;
            var next_ques = i + 1;
            alert("good job, you have " + total_result + " points now.. let's go to question " + next_ques);
        }
        else
            alert("WRONG! :/"); 
    }
    alert("Your final result is " + total_result + "/5 :)");
    console.log(client_name);
    if (client_name != null && client_name!="") {
        document.getElementsByClassName('user-info')[0].style.display = "inline";
        document.getElementsByClassName('info-for-image')[1].textContent = "Here you can find some informations about " +
            client_name + " , on the left side you can see your pricture :) Also, you got " + total_result + "/5 :) ";
    }
}

function Lab03_a(){
    my_month=3;
    numberOfTries =0; 
    alert("Guess Game, 4 attemps , choose a number from 1-12 to know in which month i was born :) Let us start ....");
    
    for(var i=0;i<4;i++){
        var answer = prompt("Choose a number between (1-12)");
        numberOfTries++;
        // input check :)
        while(!Number(answer) || answer>12 || answer<1){
            answer = prompt("please, NUMBER between 1-12");
        }

        // processing 
        answer = my_month - answer;
        
        if(answer==0){
            alert("You did it :) from the "+numberOfTries+" try.");
            return true;
        }
        else if(answer>0){
            if(answer > 2)
                alert("Nah, too low");
            else
                alert("so close");
        }
        else{
            if(Math.abs(answer) > 2)
                alert("Nah, too low");
            else
                alert("so close");
        }
    }
    alert("bad");
}
function Lab03_b(){
    var lab_question = "What are my brothers names?";
    var answers_for_lab03 = ["bahaa","alaa","mustafa"];

    alert("Guess the answer fo this question, i have three you have 6 attempts:) lets go");
    var answer = prompt(lab_question);
    var j = 1; 

    for(j;j<6;j++){
        for(var i=0;i<3;i++)
            if(answers_for_lab03[i]===answer.toLocaleLowerCase())
                {
                    alert("good job, you did it from the"+j +" try");
                    return true;
                }
        alert("Wrong! you still have"+ (6-j) + " attemps..");
        answer = prompt(lab_question);
    }   
    alert("BAAAAAAAAAAAAAAAAAAAAD, the answers are :- "+answers_for_lab03);
            
}

//welcome();
//Lab02();
//Lab03_a();
//Lab03_b()

