interface Multiplicacao {
    (num1: number, num2: number): number;
  }
  
  const multiplicar: Multiplicacao = (num1, num2) => num1 * num2;
  
  console.log(multiplicar(5, 3)); 
  console.log(multiplicar(7, 2)); 
  console.log(multiplicar(10, 0)); 
  console.log(multiplicar(-4, 6)); 
  