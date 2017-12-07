'use strict';

let phrase = {
    "it":"het", 
    "is":"is",
    "now":"nu", 
    "time":"tijd", 
    "for":"voor",
    "the":"het",
    "airing":"uiten",
    "of":"van",
    "grievances":"grieven"
};


function translateTo(inputArr) {
  let translatedPhrase = "";
  for (i = 0; i < inputArr.length; i++) { 
    translatedPhrase += ` ${phrase[inputArr[i]]}`;
  };
  return translatedPhrase;
};

 
module.exports = translateTo();