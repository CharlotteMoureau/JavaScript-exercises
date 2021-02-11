/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    document.getElementById('run').addEventListener('click', function () {

        if (document.getElementById("pass-one").value !== document.getElementById("pass-two").value) {

            let targetInput = document.getElementsByTagName("input");

            for (var i = 0; i < targetInput.length; i++) {
                targetInput[i].classList.add("error");
            }
        }
    });
})();
