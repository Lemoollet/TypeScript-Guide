"use strict";
(() => {
    const fullNmae = (fisrtName, lastName, upper = false) => {
        if (upper) {
            return `${fisrtName} ${lastName || '---'}`.toUpperCase();
        }
        else {
            return `${fisrtName} ${lastName || '---'}`;
        }
    };
    const name = fullNmae('Tony', 'Stark', true);
    console.log({ name });
})();
