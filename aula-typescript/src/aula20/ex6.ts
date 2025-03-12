// Definição dos tipos separados
type Estudantes = {
    nome: string;
    curso: string;
  };
  
  type Trabalhadores = {
    empresa: string;
    cargo: string;
  };
  
  type EstudanteTrabalhadores = Estudantes & Trabalhadores;
  
  const estudanteTrabalhador1: EstudanteTrabalhador = {
    nome: "Rafael Souza",
    curso: "Análise e Desenvolvimento de Sistemas",
    empresa: "Omint",
    cargo: "Desenvolvedor Júnior",
  };
  
  console.log("Dados do Estudante Trabalhador:");
  console.log(`Nome: ${estudanteTrabalhador1.nome}`);
  console.log(`Curso: ${estudanteTrabalhador1.curso}`);
  console.log(`Empresa: ${estudanteTrabalhador1.empresa}`);
  console.log(`Cargo: ${estudanteTrabalhador1.cargo}`);
  