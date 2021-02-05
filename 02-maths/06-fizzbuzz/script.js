/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    for (var i = 1; i <= 100; i++) {
        if (i % 3 == 0)
            console.log("buzz");
        else if (i % 5 == 0)
            console.log("fizz");
        else if (i % 15 == 0)
            console.log("fizzbuzz");
        else
            console.log(i);
    }

    // for (var i = 1; i <= 100; i++) {
    //     var f = i % 3 == 0, b = i % 5 == 0;
    //     console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
    //   }
    // condition ? "vrai" : "faux" --> abonné ? "prix abonné" : "prix non abonné"

})();
