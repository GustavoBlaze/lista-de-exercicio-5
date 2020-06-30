module.exports = {
  run() {
    const conceito = (nota) => {
      if (nota >= 9) 
        console.log(nota, '\tA')
      else if (nota >= 7)
        console.log(nota, '\tB')
      else if (nota >= 5)
        console.log(nota , '\tC')
      else
        console.log(nota, '\tD')
    }

    conceito(10)
    conceito(7)
    conceito(5)
    conceito(0)
  },
};
