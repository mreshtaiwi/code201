var client_name
function welcome() {
    client_name = prompt("Hello, Welcome ..? what is your name?");
    if (client_name != null)
        alert("okay, welcome " + client_name + ".. now let's enojy :)");

}
function Game() {
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
welcome();
Game();
