/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {



    document.getElementById("run").addEventListener("click", function () {

        // your code here
        let num = document.getElementById("number").value;

        let f = 1;
        for (i = 1; i <= num; i++) {
            f = f * i;
        }

        alert(f);

    });

})();