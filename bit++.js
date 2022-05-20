var testCase = parseInt(readline());

var result = 0;
for (let i = 0; i <testCase; i++) {
   var bitInput = readline();
   if (bitInput.charAt(1) === "+") {
       result++;
   }else if(bitInput.charAt(1) === "-"){
        result--;
   }
}

console.log(result);