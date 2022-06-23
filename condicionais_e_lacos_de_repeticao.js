var x = 0
var array = [1, 2, 3]
var object = { prop1: 'vito', prop2: 'pedro', prop3: 'caina' }
/*if ternário -> forma diferente de escrever o if/else
//x > 0 ? console.log('Verdadeiro') : console.log('Falso')
[condição] + ? + [caso sim] + : + [caso não]*/

/*if (x > 0) {
  console.log('Verdadeiro')
} else if (x == 0) {
  console.log('Sei não, mano')
} else {
  console.log('Falso')
}*/

/*switch aceita só valores pré-definidos; ou seja, condições como 'x>0' não são aceitas
switch (x) {
  case 0:
    console.log('Falso')
    break
  case 1:
    console.log('Verdadeiro')
    break
  default:
    console.log('Sei não, mano')
}*/

/*for (let i in array) { 
  console.log(i)
} -> índice
//for (let i = 0; i < array.length; i++) console.log(array[i]) -> conteúdo
for (i of array) console.log(i) -> conteúdo*/

/*for (i in object){
  console.log(i) 
} -> nome da propriedade
for (i of object.prop1) console.log(i) -> conteúdo da propriedade*/

/*while (x < 10) {
  x++
  console.log(x)
}

/do {
  x++
  console.log(x)
} while (x < 10)*/
