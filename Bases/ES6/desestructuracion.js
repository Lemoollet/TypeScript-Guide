"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downy Jr.',
        vision: ' Pacul Bettany',
        activo: true,
        poder: 150,
    };
    const { poder, vision } = avengers;
    console.log(poder.toFixed(2), vision.toUpperCase());
    const printAvengers = (_a) => {
        var { ironman } = _a, restoDeObjeto = __rest(_a, ["ironman"]);
        console.log(ironman);
        console.log(restoDeObjeto);
        console.log(restoDeObjeto.nick);
    };
    printAvengers(avengers);
    const avengersArr = ['Cap. America', 'Iron Man', 'Hulk'];
    const [capitan, ironman] = avengersArr;
    console.log({ ironman, capitan });
})();
