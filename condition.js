/*
 * condition.js
 * functions to test conditions with callback function
 * MLL - 06/24/2020
*/

const condition = {
  lessThan: function lessThanOrEqual(a, b, function2Call){
    if( a < b) function2Call();
  },
  lessThanOrEqual: function lessThanOrEqual(a, b, function2Call){
    if( a <= b) function2Call();
  },
  greaterThan: function greaterThanOrEqual(a, b, function2Call){
    if( a > b) function2Call();
  },
  greaterThanOrEqual: function greaterThanOrEqual(a, b, function2Call){
    if( a >= b) function2Call();
  },
  isEqual: function isEqual(a, b, function2Call){
    if( a == b) function2Call();
  },
  isTrue: function isTrue(a, function2Call){
    if(a) function2Call();
  }, 
  notEqual: function notEqual(a, b, function2Call){
    if( a != b) function2Call();
  },
  isNot: function isNot(a, function2Call){
    if(!a) function2Call();
  },
  isEmpty: function isEmpty(a, function2Call){
    if(a == "" || null;
  }
};

// The function below is only to test the condition methods above. Can be any function.
 function functionCall(){
  console.log ("True. the condition was met.");
}









