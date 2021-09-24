(() => {
  interface addTwoNumbers {
    (a: number, b: number): number;
  }

  let addnumberFunction: addTwoNumbers;

  addnumberFunction = (a: number, b: number): number => {
    return 10;
  };
})();
