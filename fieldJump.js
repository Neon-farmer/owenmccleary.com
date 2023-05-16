"use strict";

function nextLetter(current, nextFieldID) {
    var letters = /^[A-Za-z]+$/;
   if(current.value.match(letters))
     {
        if (current.value.length >= current.maxLength) {  
                document.getElementById(nextFieldID).focus();
        }  
     }
   else
     {
        current.value = "";
     }
  }
