(() => {
  //Para mandar un parametro opcional solo se tiene que poner el signo de interrogacion
  const fullNmae = (fisrtName: string, lastName?: string): string => {
    //Esto sirve como 'or' por si el parametro viene como undefined
    return `${fisrtName} ${lastName || '---'}`;
  };

  const name = fullNmae('Tony');
  console.log({ name });
})();
