/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    // your code here
    class Dog extends Animal {
        constructor(name) {
            super();
            this.name = name;
        }
        static greeting = "Woof";
    }

    class Cat extends Animal {
        constructor(name) {
            super();
            this.name = name;
        }
        static greeting = "Meow";
    }

    let Ghynzu = new Dog("Ghynzu");
    let Babelutte = new Cat("Babelutte");

    document.getElementById('run').addEventListener('click', function () {

        console.log(Ghynzu.sayHello());
        console.log(Babelutte.sayHello());
    });
})();
