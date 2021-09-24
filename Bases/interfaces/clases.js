"use strict";
(() => {
    class Mutant {
        constructor(name, age, realName) {
            this.name = name;
            this.age = age;
            this.realName = realName;
        }
        mutantPower() {
            return this.name;
        }
    }
})();
