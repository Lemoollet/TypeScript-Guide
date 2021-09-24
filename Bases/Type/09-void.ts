(() => {
  //es para indicar que no hay un tipo de retorno
  function callBatman(): void {
    //Ponerlo asi o el return solito, interpreta que no regresa nada
    //return undefined;
    return;
  }

  const callSuperman = (): void => {
    return;
  };

  const a = callBatman();
  console.log(a);
})();
