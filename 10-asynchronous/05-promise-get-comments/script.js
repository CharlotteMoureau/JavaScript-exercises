/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById('run').addEventListener('click', function () {

        const promise1 = window.lib.getPosts((resolve, reject) => {
            resolve();
            reject(new Error("Error!"));
        });

        const promise2 = window.lib.getComments((id, reject) => {
            id();
            reject(new Error("Error!"));
        });


        promise1.then((value) => {

            value.forEach((post) => {

                promise2.then((comments) => {
                    post.comments = comments;
                });
            });
            console.log(value);
        });
    });
})();
