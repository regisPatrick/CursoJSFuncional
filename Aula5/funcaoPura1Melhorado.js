const empregados = [
  { nome: 'A', valor: 30, horas: 140 },
  { nome: 'B', valor: 45, horas: 100 },
  { nome: 'C', valor: 23, horas: 180 }
]

const calculeSalarioPorHora = (empregado) => ({
  nome: empregado.nome,
  total: empregado.valor * empregado.horas

})

const salariosDosEmpregados = empregados.map(calculeSalarioPorHora)

console.log("salariosDosEmpregados: \n", salariosDosEmpregados)