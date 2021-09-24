"use strict";
(() => {
    const client = {
        name: 'Moy',
        age: 25,
        adress: {
            id: 123,
            zip: 'Ky2 SUD',
            city: 'Otawa',
        },
        getFullAddress() {
            return this.adress.city;
        },
    };
    const client2 = {
        name: 'Melissa',
        age: 23,
        adress: {
            city: 'Toronto',
            id: 12,
            zip: 'dd54098',
        },
        getFullAddress() {
            return this.adress.city;
        },
    };
})();
