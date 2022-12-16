const dynamicContent=document.getElementById("dynamic-text");
console.log(dynamicContent);

const phrases=["Software Engineer...","Content Creator..."," Crypto Enthusiast.."," Humanbeing..."];

let letterIndex=0;
let phraseIndex=0;
const typingspeed=150;
const erasingSpeed=75;

function printLetter(phrase){
    if(letterIndex==phrase.length){

    clearLetters();
    

    }
else if(letterIndex < phrase.length ) {

    dynamicContent.textContent +=phrase.charAt(letterIndex);
    letterIndex += 1;
    setTimeout(() => {
        printLetter(phrase)
    }, typingspeed);
}

}
function clearLetters(){

if(letterIndex == -1){

    phraseIndex=(phraseIndex +1)% phrases.length;
    letterIndex=0;
    printLetter(phrases[phraseIndex]);
     
}


else if(letterIndex>-1){

let updatedPhrase= "";
for(let index=0; index<letterIndex;index++){


updatedPhrase += phrases[phraseIndex].charAt(index);
}
console.log(updatedPhrase);
dynamicContent.textContent=updatedPhrase;
letterIndex-=1;
setTimeout(clearLetters,erasingSpeed)

}


}



printLetter(phrases[0]);

