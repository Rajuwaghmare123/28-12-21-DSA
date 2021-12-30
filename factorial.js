// Find Factorial of given Number
function factorial(n)
    {
        var res = 1;
        for (let i = 2; i <= n; i++)
            res *= i;
        return res;
    }
        var num = 5;
        console.log("Factorial of " + num + " is " + factorial(5));