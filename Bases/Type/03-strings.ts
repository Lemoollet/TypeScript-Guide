(() => {
  const batman: string = 'Batman';
  const linternaVerde: string = 'Lintera Verde';
  const volcanNegro: string = `Heroe: Volcan negro`;

  console.log(`I'm ${batman}`);
  console.log(batman.toUpperCase());

  //Null check
  //Si batman tiene algo en la posicion 10, haz el toUpper case, si no(regresa undefined), escribe 'No esta presente'
  console.log(batman[10]?.toUpperCase() || 'No esta presente');
})();
