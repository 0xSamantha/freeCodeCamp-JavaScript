

/* conditionals (cont): greater than, is enough, else if
   loops: summation, factorial,

*/

// Taking in some integer value n, find the factorial for that number and return it.

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

factorialize(5);
