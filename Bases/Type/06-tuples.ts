(() => {
  //Una tupla quiere decir que se le especificara el tipo de dato dependeiendo la posicion
  const hero: [string, number, boolean] = ['Doctor Strange', 100, true];

  hero[0] = 'Iron man';
  hero[1] = 50;
  hero[2] = false;

  console.log(hero);
})();
