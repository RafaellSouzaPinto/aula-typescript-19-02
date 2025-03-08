type RespostaServidor = string | boolean;

function processarResposta(resposta: RespostaServidor): void {
  if (typeof resposta === 'string') {
    console.log(`A resposta do servidor é uma string: ${resposta}`);
  } else if (typeof resposta === 'boolean') {
    console.log(`A resposta do servidor é um booleano: ${resposta}`);
  }
}

processarResposta("Erro 404: Página não encontrada");
processarResposta(true);
processarResposta(false);
processarResposta("Sucesso: Operação concluída");
