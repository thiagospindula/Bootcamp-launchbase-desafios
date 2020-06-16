const nome = "Thiago";
const sexo = "M";
const idade = 34;
const contribuicao = 18;

const mulherPodeAposentar = sexo == "F" && contribuicao + idade >=85 && contribuicao >=30;
const homemPodeAposentar = sexo =="M" && contribuicao + idade >= 95 && contribuicao >= 35;

if (mulherPodeAposentar || homemPodeAposentar) {
  console.log(`${nome}, você pode se aposentar!`)
} else {
  console.log(`${nome}, você não pode se aposentar!`)
}
