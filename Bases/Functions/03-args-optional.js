"use strict";
(() => {
    const fullNmae = (fisrtName, lastName) => {
        return `${fisrtName} ${lastName || '---'}`;
    };
    const name = fullNmae('Tony');
    console.log({ name });
})();
