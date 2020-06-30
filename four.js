module.exports = {
  run() {
    const func = (inicio, fim) => {
      if (fim < inicio)
        throw new Error("O numero final deve ser maior que o numero inicial");

      const arr =[]
      for (let i = inicio; i <= fim; i++) {
        arr.push(i)
      }
      return arr
    };

    console.log(func(2, 5));
  },
};
