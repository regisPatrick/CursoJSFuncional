const empregados = [
    { nome: 'A', valor: 30, horas: 140 },
    { nome: 'B', valor: 45, horas: 100 },
    { nome: 'C', valor: 23, horas: 180 }
]

const calculeSalarioPorHora = ( empregado ) => {
    const total = empregado.valor * empregado.horas

    return {
        nome: empregado.nome,
        total
    }
}

const salariosDosEmpregados = empregados.map( calculeSalarioPorHora )

console.log( "salariosDosEmpregados: \n", salariosDosEmpregados )