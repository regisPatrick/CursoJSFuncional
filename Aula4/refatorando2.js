const unmaskNumbers = ( num ) => num.match(/\d+/g).join('')

const cnpj = '05.506.560/0001-36';

unmaskNumbers(cnpj);