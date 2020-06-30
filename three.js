module.exports = {
  run() {
    const PG = (numtermos, inicial, razao) => {
      const arr = [inicial];
      for (let i = 0; i < numtermos; i++) {
        arr.push(arr[i] * razao);
      }

      return arr;
    };

    console.log(PG(5, 4, 3));
  },
};
