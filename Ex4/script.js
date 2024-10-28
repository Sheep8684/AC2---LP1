let nome = "Arthur Farias Carvalho";
let partes = nome.split(' ')
contador = 0

partes.forEach(palavra => {
    contador += palavra.length; 
});
console.log(contador)