class RepositorioUsuario {
    constructor() {
        this.usuarios = [];
    }
    salvar(dado) {
        this.usuarios.push(dado);
        console.log(`Usuário ${dado.nome} salvo com sucesso!`);
    }
    obterTodos() {
        return this.usuarios;
    }
}
const repo = new RepositorioUsuario();
repo.salvar({ nome: "Rafael", email: "rafael@email.com" });
repo.salvar({ nome: "Ana", email: "ana@email.com" });
console.log("Usuários cadastrados:", repo.obterTodos());
