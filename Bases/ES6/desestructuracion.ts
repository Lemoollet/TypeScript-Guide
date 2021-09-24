(() => {
  type Avenger = {
    nick: string;
    ironman: string;
    vision: string;
    activo: boolean;
    poder: number;
  };

  const avengers: Avenger = {
    nick: 'Samuel L. Jackson',
    ironman: 'Robert Downy Jr.',
    vision: ' Pacul Bettany',
    activo: true,
    poder: 150,
  };

  const { poder, vision } = avengers;

  console.log(poder.toFixed(2), vision.toUpperCase());

  //* Se puede desestrucutar cuando mandas parametros a una funcion
  const printAvengers = ({ ironman, ...restoDeObjeto }: Avenger) => {
    console.log(ironman);
    console.log(restoDeObjeto);
    console.log(restoDeObjeto.nick);
  };

  printAvengers(avengers);

  const avengersArr: string[] = ['Cap. America', 'Iron Man', 'Hulk'];
  //* Como se haria sin hacer destructuring
  //? const ironman = avengersArr[1];
  //* Con Desestructuracion, en los arreglos no importa el nombre, lo que importa es la posicion
  const [capitan, ironman] = avengersArr;

  console.log({ ironman, capitan });
})();
