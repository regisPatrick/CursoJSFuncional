const hello = ( name ) => {              // Programação funcional com 2 espaços de indentação
  console.log( `oi ${name}!
tchau ${name}! ` )    // Programação funcional usando template strings
}

hello( 'Regis' );  // Programação funcional com aspas simples

const something = () => 'something'

const myFunction = () => {
  return something()
}

console.log( myFunction() )

const condition = true

if ( condition ) {
  console.log( 'condition: ', condition)
}