interface Multiplicacao {
    (a: number, b: number): number;
  }
  
  const multiplica: Multiplicacao = (a, b) => {
    return a * b;
  };
  
  console.log(multiplica(2, 3)); 
  console.log(multiplica(5, 10)); 
  console.log(multiplica(-4, 7)); 
  console.log(multiplica(0, 100)); 
  