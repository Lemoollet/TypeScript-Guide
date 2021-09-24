(() => {
  //* Estas se usan para poder crear otras clases
  abstract class Mutante {
    constructor(public name: string, public realName: string) {}
  }

  //===============================================================
  class Xmen extends Mutante {
    public salvarMudno(): string {
      return 'Mundo a salvo!';
    }
  }
  //===============================================================

  class Villian extends Mutante {
    public conquistarMundo(): string {
      return 'Mundo conquistado!';
    }
  }

  //===============================================================
  const wolverine: Xmen = new Xmen('Wolverine', 'Logan');
  const magneto: Villian = new Villian('Magneto', 'Mangus');

  console.log(wolverine.salvarMudno());
  console.log(magneto.conquistarMundo());

  //Estoy esperando un charcater que haya sido extendido de mutante
  const printName = (character: Mutante) => {
    console.log(character.realName);
  };

  printName(magneto);
})();
