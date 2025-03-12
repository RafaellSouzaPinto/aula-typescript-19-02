interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
  }
  
  interface Usuarios {
    nome: string;
    email: string;
  }
  
  class RepositorioUsuario implements Repositorio<Usuarios> {
    private usuarios: Usuarios[] = [];
  
    salvar(dado: Usuarios): void {
      this.usuarios.push(dado);
      console.log(`Usuário ${dado.nome} salvo com sucesso!`);
    }
  
    obterTodos(): Usuarios[] {
      return this.usuarios;
    }
  }
  
  const repo = new RepositorioUsuario();
  repo.salvar({ nome: "Rafael", email: "rafael@email.com" });
  repo.salvar({ nome: "Ana", email: "ana@email.com" });
  
  console.log("Usuários cadastrados:", repo.obterTodos());
  