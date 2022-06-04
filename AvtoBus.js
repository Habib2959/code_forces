var testCase = parseInt(readline());

function division(n, divisor) {
    var remainder;
    var dividend = n[0];
    var quotient = [];

    for (let i = 0; i < n.length; i++) {
        if (dividend < divisor) {
            quotient.push(Math.floor(dividend / divisor));
            remainder = dividend;
            dividend = (remainder * 10) + n[i + 1];
        } else {
            quotient.push(Math.floor(dividend / divisor));
            remainder = dividend % divisor;
            dividend = (remainder * 10) + n[i + 1];
        }
    }

    if (quotient[0] === 0) {
        quotient.shift();
    }
    if (divisor === 6 && remainder > 0) {
        if (quotient.length < 2) {
            return Number(quotient.join("")) + 1;
        }
        var carry = 1;
        var total =[];
        var sum;
        for (let j = quotient.length -1 ; j >= 0; j--) {
            sum = quotient[j] + carry;
            if (sum > 9 && j!==0) {
                total.unshift(0);
            } else {
                total.unshift(sum);
                carry = 0;
            }
        }
        return total.join("");
    }
    return quotient.join("");
}

for (let i = 0; i < testCase; i++) {
    var n = readline().trim().split('').map(Number);
    var result;
    var sum = 0;
    for (let i = 0; i < n.length; i++) {
        sum += n[i];
    }
    var divisiblebyfour = n.length < 2 ? n[n.length - 1] : ((n[n.length - 2] * 10) + n[n.length - 1]);
    if (n[n.length - 1] % 2 !== 0) {
        console.log(-1);
    } else if (n.length < 2 && n[n.length - 1] < 4) {
        console.log(-1);
    } else {
        console.log(division(n, 6), division(n, 4));
    }
}