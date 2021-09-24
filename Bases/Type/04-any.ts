(() => {
  // Si solo se declara con let es de tipo any
  // Una constante siempre teine que estar inicializada
  let avenger: any = 123;
  let exist;
  let power;

  avenger = 'Doctor Strange';
  //Le estamos diciendo a TS que trate a avenger como string
  console.log((avenger as string).charAt(0));

  avenger = 150.1234;
  //Otra forma de casteo, igual le decimos a TS que trate avenger como un numero
  console.log(<number>avenger.toFixed(2));

  console.log(exist);
  console.log(power);
})();
