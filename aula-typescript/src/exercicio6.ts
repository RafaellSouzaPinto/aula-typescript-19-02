type Estudante = {
    nome: string;
    curso: string;
  };
  
  type Trabalhador = {
    empresa: string;
    cargo: string;
  };
  
  type EstudanteTrabalhador = Estudante & Trabalhador;
  
  const estudanteTrabalhador: EstudanteTrabalhador = {
    nome: "Rafael",
    curso: "Análise e Desenvolvimento de Sistemas",
    empresa: "Omint",
    cargo: "Desenvolvedor Júnior"
  };
  
  console.log(estudanteTrabalhador);
  