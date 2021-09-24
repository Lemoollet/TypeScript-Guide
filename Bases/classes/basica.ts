(() => {
  class Avenger {
    //==================Props y Constructor==================
    //* private: fuera de la clase no se puede acceder
    //* public va a ser vista fuiera de la calse (por defecto es publico pero es buena practica ponerlo)
    //* Static: se puede llamar de forma global mientras llames a la clase NO a la instancia.

    static averageAge: number = 35;
    //private name: string;
    //public team: string;
    //public realnName?: string;

    /* constructor(name: string, team: string, realName?: string) {
      this.name = name;
      this.team = team;
      this.realnName = realName;
    } */

    //* Forma corta de hacerlo en TS
    //* Aqui no es necesario los 2 de arriba, el mismo constructor crea y establece la propiedad nombre....
    //* el static por su naturaleza no se pone
    constructor(
      private name: string,
      private team: string,
      public realName?: string
    ) {}
    //==================Props y constructor==================

    //========================Metodos========================
    public bio() {
      return `${this.name} (${this.team})`;
    }

    //* Los meteodos estaticos son lo mismo, se llaman pueden llamar globales mientras se haga referencia a la clase
    static getAvgAge() {
      return this.name;
    }
    //========================Metodos========================
  }

  const antman: Avenger = new Avenger('Antman', ' Capitan', 'Scott Lang');
  console.log(antman);

  console.log(antman.bio());
})();

//ayuda en VS Code los cubos son metodos, las tablitas son propiedades
