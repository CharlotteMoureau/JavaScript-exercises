/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    // to get the value of an input: document.getElementById("element-id")
    let number1 = document.getElementById("op-one");
    let number2 = document.getElementById("op-two");

    document.getElementById("addition").addEventListener("click", function () {

        let result = parseFloat(number1.value) + parseFloat(number2.value);

        alert(result);
    });

    document.getElementById("substraction").addEventListener("click", function () {

        let result = number1.value - number2.value;

        alert(result);
    });

    document.getElementById("multiplication").addEventListener("click", function () {

        let result = number1.value * number2.value;

        alert(result);
    });

    document.getElementById("division").addEventListener("click", function () {

        let result = number1.value / number2.value;

        alert(result);
    });
})();
