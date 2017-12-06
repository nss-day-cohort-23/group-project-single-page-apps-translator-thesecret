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
    "grievences": "greuges" 
};

translatedPhrase = "";

for (i = 0; i < inputArr.length; i++) {
    translatedPhrase += ` ${phrase[inputArr[i]]}`;
}

module.exports = translatedPhrase;