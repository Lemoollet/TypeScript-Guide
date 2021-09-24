(() => {
  type Avenger = {
    name: string;
    weapon: string;
  };

  const ironman: Avenger = {
    name: 'Ironman',
    weapon: 'Armor suit',
  };

  const capAmerica: Avenger = {
    name: 'Capitan America',
    weapon: 'Sheild',
  };

  const thor: Avenger = {
    name: 'Thor',
    weapon: 'Mjolnir',
  };

  const avengers: Avenger[] = [ironman, thor, capAmerica];

  //* Ciclo for antiguo
  /* for (let i = 0; i < array.length; i++) {
    const element = array[i];
  } */

  for (const avenger of avengers) {
    console.log(avenger);
    console.log(avenger.weapon);
  }
})();
