function inverterArray1<T>(array: T[]): T[] {
    return array.slice().reverse();
  }
  
  const numero = [1, 2, 3, 4, 5];
  const strings = ["a", "b", "c", "d", "e"];
  
  console.log("Array de números invertido:", inverterArray1(numero));
  console.log("Array de strings invertido:", inverterArray1(strings));
  