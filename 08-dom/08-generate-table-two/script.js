/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    let table = document.createElement("table");
    document.getElementById('target').appendChild(table);

    for (let i = 1; i < 11; i++) {
        let tr = document.createElement('tr');
        document.querySelector('table').appendChild(tr);
        for (let mult = 1; mult < 11; mult++) {
            let td = document.createElement('td');
            tr.appendChild(td).innerHTML = i * mult;
        }
    }
})();
