'use strict';

let phrase = {
    "it": "esso",
    "is": "è",
    "now": "adesso",
    "time": "tempo",
    "for": "per",
    "the": "il",
    "airing": "aerazione",
    "of": "di",
    "grievances": "rimostranze"
};


function translateToItalian(inputArr) {
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

module.exports = {translateToItalian};