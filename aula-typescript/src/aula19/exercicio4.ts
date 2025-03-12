interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
  }
  
  type Usuario = {
    nome: string;
    email: string;
  };
  
  class UsuarioRepositorio implements Repositorio<Usuario> {
    private usuarios: Usuario[] = [];
  
    salvar(dado: Usuario): void {
      this.usuarios.push(dado);
    }
  
    obterTodos(): Usuario[] {
      return this.usuarios;
    }
  }
  
  const repositorio = new UsuarioRepositorio();
  
  repositorio.salvar({ nome: "Rafael", email: "rafael@email.com" });
  repositorio.salvar({ nome: "Julia", email: "julia@email.com" });
  
  console.log("Lista de usuários:", repositorio.obterTodos());

