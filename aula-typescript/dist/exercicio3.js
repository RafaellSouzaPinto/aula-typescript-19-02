function inverterArray(array) {
    return array.slice().reverse();
}
const numeros = [1, 2, 3, 4, 5];
console.log("Array de números invertido:", inverterArray(numeros));
const palavras = ["Kendrick", "Lamar", "teste", "Rafael"];
console.log("Array de strings invertido:", inverterArray(palavras));
