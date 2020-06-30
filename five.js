module.exports = {
  run() {
    const func = (vet1, vet2) => {
      if (vet1.length !== vet2.length)
        throw new Error('Tamanho dos arrays não são iguais')

      for(let i = 0; i < vet1.length; i++){
        let a = vet1[i]
        let b = vet2[i]

        vet1[i] = b
        vet2[i] = a
      }
    }

    const arr1 = [2,3,4]
    const arr2 = [5,6,7]
    console.log('Antes')
    console.table({arr1, arr2})
    func(arr1, arr2)
    console.log('Depois')
    console.table({arr1, arr2})

  },
};
