(() => {
  let avengers: number = 10;

  console.log(avengers);

  const villians: number = 20;

  if (avengers < villians) {
    console.log('estamos en porblemas');
  } else {
    console.log(' nos salvamos');
  }

  //Esto regresa un NaN lo que en JS es considerado un numero por lo que TS no lo considera como error
  avengers = Number('55A');

  console.log({ avengers });
})();
