(() => {
  // Se utiliza para controlar la manera en la cual las instancias son ejecutadas
  // Es decir: se crea un singleton o sea, todas van a ser la misma instancia, solo existira 1
  class Apocalipsis {
    static instance: Apocalipsis;

    private constructor(public name: string) {}

    static callApocalipsis(): Apocalipsis {
      if (!Apocalipsis.instance) {
        Apocalipsis.instance = new Apocalipsis('Soy Apocalipsis... el unico');
      }
      return Apocalipsis.instance;
    }

    public changeName(newName: string) {
      this.name = newName;
    }
  }

  const apocalipsis1 = Apocalipsis.callApocalipsis();
  const apocalipsis2 = Apocalipsis.callApocalipsis();
  const apocalipsis3 = Apocalipsis.callApocalipsis();
  //const apocalipsis = new Apocalipsis('Soy apocalipsis... el unico');

  apocalipsis1.changeName('Xavier');

  console.log(apocalipsis1, apocalipsis2, apocalipsis3);
})();
