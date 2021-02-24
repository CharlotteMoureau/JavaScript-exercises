/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    async function aNewHeroAppears() {
        try {
            const myFetch = await fetch('http://localhost:3000/heroes');
            const data = await myFetch.json();

            console.log(data);

            const nameInput = document.querySelector('#hero-name').value;
            const alterEgoInput = document.querySelector('#hero-alter-ego').value;
            const powersInput = document.querySelector('#hero-powers').value;

            if (nameInput.length != 0 && alterEgoInput.length != 0 && powersInput.length != 0) {
                let i = data.length + 1;
                i++;
                const newHero = {
                    id: i,
                    name: nameInput,
                    alterEgo: alterEgoInput,
                    abilities: [powersInput],
                }
                data.push(newHero);
                console.log(data);

            } else {
                alert('There seems to be an empty input');
            }
        } catch (error) {
            console.error(error);
        }
    }
    document.getElementById('run').addEventListener('click', function () {
        aNewHeroAppears();
    });
})();
