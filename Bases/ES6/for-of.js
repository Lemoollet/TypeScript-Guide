"use strict";
(() => {
    const ironman = {
        name: 'Ironman',
        weapon: 'Armor suit',
    };
    const capAmerica = {
        name: 'Capitan America',
        weapon: 'Sheild',
    };
    const thor = {
        name: 'Thor',
        weapon: 'Mjolnir',
    };
    const avengers = [ironman, thor, capAmerica];
    for (const avenger of avengers) {
        console.log(avenger);
        console.log(avenger.weapon);
    }
})();
