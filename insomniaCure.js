var k = parseInt(readline());
var l = parseInt(readline());
var m = parseInt(readline());
var n = parseInt(readline());
var d = parseInt(readline());


if (k === 1) {
    console.log(1);
} else {
    var output = 0;
    for (let i = 1; i <= d; i++) {
        if (i % k === 0 || i % l === 0 ||i % m=== 0 ||i % n === 0 ) {
            output++;           
        }
    }
    console.log(output);
}

