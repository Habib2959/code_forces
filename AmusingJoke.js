var input1 = readline().trim();
var input2 = readline().trim();
var input3 = readline().trim();

var totalWord = input1 + input2;
if (totalWord.length !== input3.length) {
    console.log("NO");
} else {
    var letterCount = {};
    var letterCountPile = {};
    var result = "YES";
    for (let i = 0; i < totalWord.length; i++) {
        if (!letterCount[totalWord[i]]) {
            letterCount[totalWord[i]] = 1;
        } else {
            letterCount[totalWord[i]]++;
        }
    }

    for (let i = 0; i < input3.length; i++) {
        if (!letterCountPile[input3[i]]) {
            letterCountPile[input3[i]] = 1;
        } else {
            letterCountPile[input3[i]]++;
        }
    }
    
    for (let i = 0; i < totalWord.length; i++) {
        if (letterCount[totalWord[i]] === letterCountPile[totalWord[i]]) {
           continue;
        } else {
            result = "NO";
            break;
        }
        
    }

    console.log(result);
}

