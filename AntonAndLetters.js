var input = readline();

// var charactersArray = input.match(/[a-z]/g); this is the regex of finding a to z
var charactersArray = [];
for (let i = 0; i < input.length; i++) {
    if (input[i] >= "a" && input[i]<= "z") {
        charactersArray.push(input[i]);
    }
}

if (charactersArray.length === 0) {
    console.log(0);
} else {
    console.log([...new Set(charactersArray)].length);
}





