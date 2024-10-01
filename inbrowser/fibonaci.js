function fibonachi(n) {

    let fib = [0, 1];

    for(let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

// test

console.log(...fibonachi(10))
console.log(...fibonachi(12))
console.log(...fibonachi(5))