"use strict";

// public words array
var words;

// Get all words on page load and load into array
function getAllWords() {
    fetch("https://www.owenmccleary.com/words.txt")
      .then(response => response.text())
      .then(text => {
        // split text into an array using newline as delimiter
        const textArray = text.split('\n'); 
        // return array
        words = textArray;
        console.log(words);
      })
      .catch(error => console.error(error)); // handle errors
}

// testcase


// Declare filtered word array
var filteredWords = [];

// Filter and return array of words base on letter input
function filterWords() {
    filteredWords = [];
    
    var l1 = document.getElementById("inputLetters1").value;
    var l2 = document.getElementById("inputLetters2").value;
    var l3 = document.getElementById("inputLetters3").value;
    var l4 = document.getElementById("inputLetters4").value;
    var l5 = document.getElementById("inputLetters5").value;
    var l6 = document.getElementById("inputLetters6").value;
    var l7 = document.getElementById("inputLetters7").value;
    var l8 = document.getElementById("inputLetters8").value;


    var inputLetters = [l1, l2, l3, l4, l5, l5, l6, l7, l8];
    console.log(inputLetters);

    // Loop through words array
    for (var i = 0; i < words.length; i++) {
        var word = words[i].toLowerCase();
        var isMatch = false;

        // Loop through input letter array
        for (var k = 0; k < inputLetters.length; k++) {
            var letter = inputLetters[k].toLowerCase();
            
            // Exclude word if occurences of a letter exceed those of input array
            // var inputString = inputLetters.join();
            // if (inputString.count(letter) < word.count(letter)) {
            //     isMatch = false;
            //     break;
            // }

            // Include word if it contains any input letters
            if (word.includes(letter)) {
                isMatch = true;
                break;
            }
        }

        // Loop through each letter in the word
        for (var j = 0; j < word.length; j++) {
            var letter = word[j];
            
            // Exclude word if it contains letters not in input array
            if (!inputLetters.includes(letter)) {
              isMatch = false;
              break;
            }
        }

        // Add word to filtered array
        if (isMatch) {
            filteredWords.push(word);
        }
    }
    console.table(filteredWords);
    buildTable();
}

// Generate html to display filtered word list
setTimeout(buildTable, 100);

function buildTable() {

    var inner = "";
    filteredWords.forEach(word => {
        inner += "<h1>" + word + "</h1>";
        inner += "<cr>";
    });

    // Get the results div
    var resultsDiv = document.getElementById("results");

    if (filteredWords.length > 0) {
        // Clear the existing HTML content
        resultsDiv.innerHTML = "";
    
        // Add the new content to the results div
        resultsDiv.innerHTML = inner;

    }
}

