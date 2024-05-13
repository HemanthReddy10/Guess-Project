let input=document.getElementById('input');
let btn=document.getElementById('btn');
let guesses=document.getElementById('guesses');
let wrng=document.querySelector('.wrng');

let answer=Math.floor(Math.random()*100)+1;
console.log(answer);
let numOfGuesses=0;

btn.addEventListener("click",()=>{
    guessNumber();
})
function guessNumber(){
    if (input.value<1|| input.value>100 ||isNaN(input.value)){
    wrng.innerHTML="Enter between 1 to 100"
    }
    else if(input.value==answer){
        numOfGuesses++;
        guesses.innerHTML="No of guess: "+numOfGuesses;
        wrng.innerHTML="Hakuna Matata!! You guessed it correctly";
        
    }
    else if(input.value>answer){
        numOfGuesses++;
        guesses.innerHTML="No of guess: "+numOfGuesses;
        wrng.innerHTML=`Your guess is Higherrrrr! Try less than ${input.value}`;
        input.value="";
    }
    else if(input.value<answer){
        numOfGuesses++;
        guesses.innerHTML="No of guess: "+numOfGuesses;
        wrng.innerHTML=`Your guess is Lowerrrr! Try more than ${input.value}`;
        input.value="";
    }
}