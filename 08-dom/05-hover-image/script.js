/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    let baseImage = document.querySelector('img');
    let image1 = baseImage.getAttribute('src');
    let image2 = baseImage.getAttribute('data-hover');

    baseImage.addEventListener('mouseover', () => {
        baseImage.setAttribute('src', image2)
    });
    baseImage.addEventListener('mouseout', () => {
        baseImage.setAttribute('src', image1)
    });
})();
