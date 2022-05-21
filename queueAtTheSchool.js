var [n ,t] = readline().split(' ').map(Number);
var queue = readline().split('');
for (let i = 0; i < t; i++) {
    for (let j = n; j > 0; j--) {
        if (queue[j-1] === "G" && queue[j-2] === "B") {
            [queue[j-1], queue[j-2]] = [queue[j-2], queue[j-1]];
            j--;
        }
    }
}

console.log(queue.join(''));