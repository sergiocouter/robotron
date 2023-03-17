const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const braco = document.querySelector("#braco");
const controle = document.querySelectorAll(".controle-ajuste");

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent)
    }) 
})

function manipulaDados(operacao) {
    if (operacao === "-") {
        braco.value = parseInt(braco.value) - 1;
    }else{
        braco.value = parseInt(braco.value) + 1;
    }
}

var lista = ["Laranja", "Vermelho", "Branco", "Amarelo", "Rosa"]; 

lista.splice(1,1);

console.log(lista);

