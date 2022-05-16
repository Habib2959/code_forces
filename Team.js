var testCase = parseInt(readline());
var output = 0;
for (var i = 1; i <= testCase ; i++){
    var input = readline().split(' ').map(Number);
    if ((input[0] && input[1]) || (input[1] && input[2]) || (input[0] && input[2])) {
        output++;
    }
}

console.log(output);