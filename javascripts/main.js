'use strict';
console.log("are we here?");
let catalan = require('./catalan');
let dutch = require('./dutch');
let finnish = require('./finnish');
let italian = require('./italian');

let langSelect = document.getElementById("language");
let inputText = document.getElementById("inputArr");
let button = document.getElementById("btn");
let outputDiv = document.getElementById("output");

button.addEventListener("click", function() {
    let inputArr = inputText.value.split(" ");
    switch (langSelect.value) {
        case "1":
            outputDiv.innerHTML = catalan.translateToCatalan(inputArr);
            break;
        case "2":
            outputDiv.innerHTML = dutch.translateToDutch(inputArr);
            break;
        case "3":
            outputDiv.innerHTML = finnish.translateToFinnish(inputArr);
            break;
        case "4":
            outputDiv.innerHTML = italian.translateToItalian(inputArr);
            break;
    }
}
);