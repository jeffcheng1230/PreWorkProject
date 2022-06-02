let a = 1, b = 1, c;
let num_fib = 10;

console.log(a) // fib #1
console.log(b) // fib #2
for (let i = 0; i < num_fib - 2; i++) { // fib #3-10
    c = a + b;
    console.log(c);
    a = b;
    b = c;
}