var testCase = parseInt(readline());

for (let i = 1; i <= testCase; i++) {
    var words = readline();
    var len = words.length - 1;
    if (len > 10) {
        console.log(words.charAt(0)+(len - 2)+words.charAt(len - 1) );
    } else {
        console.log(words);
    }    
}