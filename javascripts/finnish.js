'use strict';

let phrase = {
  'it': 'se',
  'is': 'on',
  'now': 'nyt',
  'time': 'aika',
  'for': 'varten',
  'the': 'että',
  'airing': 'tuuletus',
  'of': 'ja',
  'grievances':'epakohtia'
};


function translateToFinnish(inputArr) {
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
module.exports = {translateToFinnish};