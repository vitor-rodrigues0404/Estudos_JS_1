/*sintaxe funções
function funcao() {
  console.log('Função')
}

var funcao = function () 

var funcao = () => {
  console.log('Função')
}

funcao()*/

/*calculadora
function calculadora() {
  const operacao = prompt(
    'Escolha uma operação:\n\n 1 - Soma(+)\n 2 - Subtração(-)\n 3 - Multiplicação(*)\n 4 - Resultado da divisão(/)\n 5 - Resto da divisão(%)\n 6 - Potenciação(**)\n'
  )
  if (operacao > 6 || operacao < 1) {
    alert('Operação inválida.')
    calculadora()
  }

  let n1 = Number(prompt('Insira o primeiro valor: '))
  let n2 = Number(prompt('Insira o segundo valor: '))
  let resultado

  switch (operacao) {
    case '1':
      resultado = n1 + n2
      alert(`${n1} + ${n2} = ${resultado}`)
      break
    case '2':
      resultado = n1 - n2
      alert(`${n1} - ${n2} = ${resultado}`)
      break
    case '3':
      resultado = n1 * n2
      alert(`${n1} * ${n2} = ${resultado}`)
      break
    case '4':
      resultado = n1 / n2
      alert(`${n1} / ${n2} = ${resultado}`)
      break
    case '5':
      resultado = n1 % n2
      alert(`${n1} % ${n2} = ${resultado}`)
      break
    case '6':
      resultado = n1 ** n2
      alert(`${n1} ** ${n2} = ${resultado}`)
      break
  }
  novaOperacao()
}

function novaOperacao() {
  let opcao = prompt('Deseja realizar outra operação?\n 1 - Sim\n 2 - Não')

  switch (opcao) {
    case '1':
      calculadora()
      break
    case '2':
      alert('Até mais!')
      break
    default:
      alert('Digite uma opção válida!')
      novaOperacao()
  }
}

calculadora()*/
