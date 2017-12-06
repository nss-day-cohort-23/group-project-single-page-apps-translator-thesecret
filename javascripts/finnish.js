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

let translatedPhrase = '';

for (let i = 0; i < inputArr.length; i++) {
  translatedPhrase += ` ${phrase[inputArr[i]]}`;
}

module.exports = translatedPhrase;