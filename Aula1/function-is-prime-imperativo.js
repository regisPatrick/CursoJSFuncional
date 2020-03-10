function isPrime(num){
    // se for par E não for 2
    if ((num % 2) === 0 && num !== 2)
        return false;

    // Se um número tem uma **raiz inteira**
    // isso significa que ele é divisível
    if(Number.isInteger(Math.sqrt(num)))
        return false;

    // Começaremos as divisões a partir da sua metade
    for(let i = Math.floor(num / 2); i > 1; i--){
        if(num % i === 0) {
            console.log('\n')
            console.log(num + ' é divisível por: ' + i)
            return false;
        }
    }
    return true;
}

console.log('isPrime 10002', isPrime(10002))
console.log('isPrime 10003', isPrime(10003))
console.log('isPrime 13', isPrime(13))
console.log('isPrime 10007', isPrime(10007))