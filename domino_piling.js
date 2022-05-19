var [M, N] = readline().split(' ').map(Number);


if (M % 2 === 0 && N % 2 === 0) {
    console.log((M / 2) * N);
} else if (M % 2 !== 0 && N % 2 !== 0) {
    console.log(((M / 2) * N) - 0.5);
} else if (M % 2 !== 0 && N % 2 !== 0) {
    console.log((M / 2) * N);
}else{
    console.log((M / 2) * N);
}
