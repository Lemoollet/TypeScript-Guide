"use strict";
(() => {
    let myCustomVariable = 'Moy';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Bruce',
        age: 40,
        powers: [1],
    };
    console.log(typeof myCustomVariable);
})();
