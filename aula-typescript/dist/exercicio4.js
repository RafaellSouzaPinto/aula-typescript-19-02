class UsuarioRepositorio {
    constructor() {
        this.usuarios = [];
    }
    salvar(dado) {
        this.usuarios.push(dado);
    }
    obterTodos() {
        return this.usuarios;
    }
}
const repositorio = new UsuarioRepositorio();
repositorio.salvar({ nome: "Rafael", email: "rafael@email.com" });
repositorio.salvar({ nome: "Julia", email: "julia@email.com" });
console.log("Lista de usuários:", repositorio.obterTodos());
