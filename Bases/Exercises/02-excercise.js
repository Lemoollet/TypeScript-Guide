"use strict";
(() => {
    const sumar = (a, b) => {
        return a + b;
    };
    const contar = (heroes) => {
        return heroes.length;
    };
    let superHeroes = ['Flash', 'Arrow', 'Superman', 'Linterna Verde'];
    contar(superHeroes);
    const llamarBatman = (llamar) => {
        if (llamar) {
            console.log('Batisenal activada');
        }
    };
    llamarBatman(true);
    const unirHeroes = (...personas) => {
        return personas.join(', ');
    };
    const noHaceNada = (numero, text, booleano, arreglo) => { };
    let noHaceNadaTampoco;
    noHaceNadaTampoco = noHaceNada;
})();
