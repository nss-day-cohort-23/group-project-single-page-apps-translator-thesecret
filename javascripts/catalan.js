'use strict';

let phrase = {
    "it": "ho",
    "is": "és",
    "now": "ara",
    "time": "temps",
    "for": "per a",
    "the": "el",
    "airing": "airejar",
    "of": "de",
    "grievances": "greuges" 
};

function translateToCatalan(inputArr) {
    let translatedPhrase = "";
    for (let i = 0; i < inputArr.length; i++) {

      if(`${phrase[inputArr[i]]}` =='undefined'){
        window.alert(`${inputArr[i]} is not an acceptible word. Happy Festivus`);
      }else{
        translatedPhrase += ` ${phrase[inputArr[i]]}`;
      }
    }
    return translatedPhrase;
}


module.exports = {translateToCatalan};