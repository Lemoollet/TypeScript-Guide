(() => {
  class Avenger {
    //* En js poner esto no es necesario pero no es muy conveniente
    name;
    power;

    //*--this.name hace referencia al scope que lo contiene, en clases hace referencia a la clase, despues del igual
    //* hace referencia a la funcion
    //* --El constructor sobreescribe los valores de arriba o sea de las propiedades

    constructor(nameC = 'No name', powerC = 0) {
      this.name = nameC;
      this.power = powerC;
    }
  }

  class FlyingAvenger extends Avenger {
    flying;

    constructor(name, power) {
      super(name, power);
      this.flying = true;
    }
  }

  const hulk = new Avenger('Hulk', 9000);
  const falcon = new FlyingAvenger('Falcon', 90);

  console.log(hulk);
  console.log(falcon);
})();
