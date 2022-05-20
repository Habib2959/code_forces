var input = readline();

///////   solution 1  /////////////
var split = [];
for (let i = 0; i < input.length; i++) {
    if (input[i] !== "+") {
        split.push(input[i])
    }
}

// this is to remove '\r' in the last of the array for new line
split.pop()

// bubble sorting
for (let j = split.length; j > 0; j--) {
    for (let k = 0; k < j - 1 ; k++) {
        if (split[k] > split[k+1]) {
            // swap
            [split[k], split[k+1]] = [split[k +1], split[k]] 
        }
    }
}
console.log(split.join('+'));


///////   solution 2  /////////////
// console.log(input.split('+').sort().join('+')); 