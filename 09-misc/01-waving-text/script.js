/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    let target = document.getElementById('target').textContent;
    let wave = [];
    wave.push(target.slice(0, 8));
    wave.push(target.slice(9, 26));
    wave.push(target.slice(27, 33));
    wave.push(target.slice(34, 40));
    wave.push(target.slice(41,));

    document.getElementById('target').innerHTML = '';

    for (let i = 0; i < wave.length; i++) {
        let randomEm = Math.floor(Math.random() * 4);
        let p = document.createElement('p');
        p.setAttribute('style', `font-size : ${randomEm}em ; display: inline;`)
        p.innerHTML = wave[i];
        document.getElementById('target').appendChild(p);
    }
})();
