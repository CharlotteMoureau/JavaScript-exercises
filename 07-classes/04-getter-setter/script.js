/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
        get getName() {
            return `${this.firstname} ${this.lastname}`;
        }

        set setName(setter) {
            let toSplit = setter.split(' ');
            this.firstname = toSplit[0];
            this.lastname = toSplit[1];
        }
    }

    document.getElementById('run').addEventListener('click', function () {
        let person = new Person('Jean-Michel', 'Test');
        console.log(person.getName);

        person.setName = 'Micheline Pasdinspi';
        console.log(person);

    });

})();
