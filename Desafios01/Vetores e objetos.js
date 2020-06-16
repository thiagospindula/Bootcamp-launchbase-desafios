const programador = {
  nome: "Thiago",
  idade: 34,
  tecnologias: [
    {nome: "C++", especialidade: "Desktop"},
    {nome: "JavaScript", especialidade: "Web/Mobile"}
  ]
}
console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[1].nome} com especialidade em ${programador.tecnologias[1].especialidade}.`)