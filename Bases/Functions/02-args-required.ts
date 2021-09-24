(() => {
  //Si se quisiera aceptar dos tipos de dato se pone asi: lastName: (string | boolean)
  //Cuando los parametros estan asi, quiere decir que los parametros son obligatorios
  const fullNmae = (fisrtName: string, lastName: string): string => {
    return `${fisrtName} ${lastName}`;
  };

  const name = fullNmae('Tony', 'Stark');
  console.log({ name });
})();
