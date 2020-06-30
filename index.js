const one = require('./one')
const two = require('./two')
const three = require('./three')
const four = require('./four')
const five = require('./five')
const six = require('./six')

try {
  console.log('Exercicio: 1')
  one.run()
  console.log('------------')
  
  console.log('Exercicio: 2')
  two.run()
  console.log('------------')
  
  console.log('Exercicio: 3')
  three.run()
  console.log('------------')
  
  console.log('Exercicio: 4')
  four.run()
  console.log('------------')

  console.log('Exercicio: 5')
  five.run()
  console.log('------------')

  console.log('Exercicio: 6')
  six.run()
  console.log('------------') 
}catch(err) {
  console.log('Erro: ', err.message)
}