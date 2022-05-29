var n = parseInt(readline());
var t = readline().trim().split(" ").map(Number);

var indexof1 = [];
var indexof2 = [];
var indexof3 = [];
for (let i = 0; i < t.length; i++) {
    if (t[i] === 1) {
        indexof1.push(i + 1);
    } else if (t[i] === 2) {
        indexof2.push(i + 1);
    } else if (t[i] === 3) {
        indexof3.push(i + 1);
    }
}

if (indexof1.length === 0 || indexof2.length === 0 || indexof3.length === 0) {
    console.log(0);
} else {
    var team =0;
    if (indexof1.length < indexof2.length && indexof1.length < indexof3.length) {
        team = indexof1.length;
    } else if(indexof2.length < indexof3.length){
        team = indexof2.length;
    }else{
        team = indexof3.length;
    }
    console.log(team);
    for (let i = 0; i < team; i++) {
        console.log(`${indexof1[i]} ${indexof2[i]} ${indexof3[i]}`);
    }
}
