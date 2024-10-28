let numeros = [2, 5, 8, 13, 16, 21]

let impares = [];

numeros.forEach(num => {
    if (num % 2 !== 0) {
        let multiplicador = Math.floor(Math.random() * 10) + 1;
        impares.push(num * multiplicador);
    } else {
        impares.push(num);
    }
});

console.log(impares);




