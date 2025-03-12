interface Carro {
    marca: string;
    modelo: string;
    ano: number;
    motor?: string; // Propriedade opcional
  }
  
  const meuCarro1: Carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    motor: "1.8 Flex",
  };
  
  console.log("Dados do meu carro:");
  console.log(`Marca: ${meuCarro1.marca}`);
  console.log(`Modelo: ${meuCarro1.modelo}`);
  console.log(`Ano: ${meuCarro1.ano}`);
  console.log(`Motor: ${meuCarro1.motor ?? "Não especificado"}`);
  