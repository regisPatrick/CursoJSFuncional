const empregados = [
    { nome: 'A', valor: 30, horas: 140 },
    { nome: 'B', valor: 45, horas: 100 },
    { nome: 'C', valor: 23, horas: 180 }
]

const salariosDosEmpregados = []

for ( let i = 0; i < empregados.length; i++ ){
    const total = empregados[ i ].valor * empregados[ i ].horas
    
    salariosDosEmpregados.push( {
        nome: empregados[ i ].nome,
        total
    } )
}

// for ( let i = 0; i < salariosDosEmpregados.length; i++ ) {
//     console.log( "salario Do Empregado: " + salariosDosEmpregados[i].nome + " é de: " + salariosDosEmpregados[i].total )
// }

console.log(salariosDosEmpregados)