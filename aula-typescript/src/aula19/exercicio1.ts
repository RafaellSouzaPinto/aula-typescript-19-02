interface Carro {
    marca: string;
    modelo: string;
    ano: number;
    motor?: string; 
  }
  
  const meuCarro: Carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    motor: "2.0 Flex", 
  };
  
  console.log("Dados do carro:");
  console.log(`Marca: ${meuCarro.marca}`);
  console.log(`Modelo: ${meuCarro.modelo}`);
  console.log(`Ano: ${meuCarro.ano}`);
  console.log(`Motor: ${meuCarro.motor ?? "Não especificado"}`); 