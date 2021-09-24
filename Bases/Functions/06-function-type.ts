(() => {
  const addNumbers = (a: number, b: number): number => a + b;
  const greet = (name: string): string => `Hola ${name}`;
  const saveTheWorld = () => `El mundo esta salvado`;

  //? let myFunction: Function;
  //? let myFunction: (a: number, b: number) => number;
  //? let myFunction: (a: string) => string;
  let myFunction: () => string;

  // myFunction = 10;
  // console.log(myFunction);

  //* No se le ponene los parentisis por que se ejecutaria, solo se esta haceidno referencia
  //? myFunction = addNumbers;
  //? console.log(myFunction(1, 2));

  //? myFunction = greet;
  //? console.log(myFunction('Moy'));

  myFunction = saveTheWorld;
  console.log(myFunction());
})();
