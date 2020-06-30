module.exports = {
  run() {
    const func = (arr, num) => arr.map(value => value *= num)

    console.log(func([1,2,3,4,5], 5))
  }
}