var testCase = parseInt(readline());

var even = [];
var odd = [];
for (let i = 0; i <testCase; i++) {
    var n = parseInt(readline());
    if (n%4 === 0) {
        for (let j = 1; j <= n; j++) {
            if (j%2===0) {
                even.push(j);
            } else {
                odd.push(j)
            }
        }
       var a = even.concat(odd);
       a[n-1] = a[n-1] + (n/2);
       console.log("YES");
       console.log(a.join(" "));
       even = [];
       odd =[];
    } else {
        console.log("NO");
    }
}