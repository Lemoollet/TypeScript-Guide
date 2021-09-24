(() => {
  const sumar = (a: number, b: number): number => {
    return a + b;
  };

  const contar = (heroes: string[]): number => {
    return heroes.length;
  };

  let superHeroes: string[] = ['Flash', 'Arrow', 'Superman', 'Linterna Verde'];
  contar(superHeroes);

  const llamarBatman = (llamar: boolean): void => {
    if (llamar) {
      console.log('Batisenal activada');
    }
  };

  llamarBatman(true);

  const unirHeroes = (...personas: string[]): string => {
    return personas.join(', ');
  };

  const noHaceNada = (
    numero: number,
    text: string,
    booleano: boolean,
    arreglo: string[]
  ): void => {};

  let noHaceNadaTampoco: (
    n: number,
    s: string,
    b: boolean,
    a: string[]
  ) => void;
  noHaceNadaTampoco = noHaceNada;
})();
