document.getElementById("???").onclick = function(){
    window.location.href = "https://theuselessweb.com"
}
let inputElement = document.getElementById("submitWord")
let answerElement = document.getElementById("submitAnswer")
let word = inputElement.value;
let guess = answerElement.value
document.getElementById("submitAnswer").onclick = function(){
    if(word == guess){
        window.alert("you guessed your word correctly!!! :D")
    }
    else{
        window.alert("you have a bad memory")
    }
};