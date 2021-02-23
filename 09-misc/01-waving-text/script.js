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
    wave.push(target.slice(0, 11));
    wave.push(target.slice(11, 22));
    wave.push(target.slice(22, 33));
    wave.push(target.slice(33, 44));
    wave.push(target.slice(44, 55));
    wave.push(target.slice(55, 66));
    wave.push(target.slice(66,));

    let waveWithoutCommas = wave.join('');

    // setInterval(function () {
    for (let i = 0; i < waveWithoutCommas.length; i++) {

        let randomSize = Math.floor(Math.random() * 5) + 1;

        document.getElementById('target').innerHTML = waveWithoutCommas;
        document.getElementById('target').style.fontSize = `${randomSize}em`;
    }
    // }, 1000);
})();
