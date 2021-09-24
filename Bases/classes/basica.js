"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
        static getAvgAge() {
            return this.name;
        }
    }
    Avenger.averageAge = 35;
    const antman = new Avenger('Antman', ' Capitan', 'Scott Lang');
    console.log(antman);
    console.log(antman.bio());
})();
