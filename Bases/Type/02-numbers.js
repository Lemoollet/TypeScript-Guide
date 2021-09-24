"use strict";
(() => {
    let avengers = 10;
    console.log(avengers);
    const villians = 20;
    if (avengers < villians) {
        console.log('estamos en porblemas');
    }
    else {
        console.log(' nos salvamos');
    }
    avengers = Number('55A');
    console.log({ avengers });
})();
