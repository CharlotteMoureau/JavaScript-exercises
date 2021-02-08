/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    var age = prompt("How old are you?");
    var gender = prompt("What is your gender?").toLowerCase();
    var town = prompt("Where do you live?");

    var x = confirm(`Is it correct? You are ${age}, you identify as: ${gender}, you live in ${town}.`);
    if (x == true) {
        alert("Ok!");
    } else {
        var age = prompt("How old are you?");
        var gender = prompt("What is your gender?");
        var town = prompt("Where do you live?");
    }


})();
