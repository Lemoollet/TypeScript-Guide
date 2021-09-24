(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
      console.log('Constructor avenger llamado');
    }

    //* Dif PRIVATE y PROTECTED, con protected podemos acceder desde las clases que extienden de la clase padre
    protected getFullNameAvenger() {
      return `${this.name} (${this.realName})`;
    }
  }
  //============================================================================
  class Xmen extends Avenger {
    constructor(name: string, realName: string, public isMutant: boolean) {
      //* Super hace referencia a la clase padre, es decir, llama al constructor de la clase padre
      super(name, realName);
      console.log('Constructor Xmen llamado');
    }

    //* Los geters no se ejecutan, es decir: no van con parentesis
    get getFullName() {
      return `${this.name} - ${this.realName}`;
    }

    set setFullName(name: string) {
      if (name.length < 3) {
        throw new Error('El nombre tiene que ser mayor de 3 letras');
      }
      this.name = name;
    }

    public getFullNameDesdeXmen() {
      console.log(super.getFullNameAvenger());
    }
  }
  //============================================================================

  const wolverine: Xmen = new Xmen('Wolverine', 'Logan', true);
  wolverine.setFullName = 'Moy';
  console.log(wolverine.getFullName);
  //? wolverine.getFullNameDesdeXmen();
})();
