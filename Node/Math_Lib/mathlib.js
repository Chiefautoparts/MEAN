module.exports = function (){
  return {
    add: function(num1, num2) { 
         // add code here 
         let sum = num1 + num2;
    },
    multiply: function(num1, num2) {
         // add code here 
         let mult = num1 * num2;
    },
    square: function(num) {
         // add code here
         let sqr = num * num;
    },
    random: function(num1, num2) {
         // add code here
         let min = 0;
         let max = 0;
         if(num1 > num2){
            max = num1;
            min = num2;
         }
         else {
            max = num2;
            min = num1;
         }
         let rand = Math.floor(Math.random() * (max - min) + min);
    }
  }
};