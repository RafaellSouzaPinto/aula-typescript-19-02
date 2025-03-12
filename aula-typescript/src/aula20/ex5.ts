type RespostaServidores = string | boolean;

function processarRespostas(resposta: RespostaServidores): void {
  if (typeof resposta === "string") {
    console.log(`Mensagem do servidor: ${resposta}`);
  } else if (typeof resposta === "boolean") {
    console.log(resposta ? "Operação bem-sucedida!" : "Falha na operação.");
  }
}

processarRespostas("Tudo certo!");
processarRespostas(true);
processarRespostas(false);
