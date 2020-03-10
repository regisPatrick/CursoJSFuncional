function unmaskNumbers(num) {
    let unmasked = num.match(/\d+/g);
    unmasked = unmasked.join('');

    return String(unmasked);
}

const cnpj = '05.506.560/0001-36';

unmaskNumbers(cnpj);