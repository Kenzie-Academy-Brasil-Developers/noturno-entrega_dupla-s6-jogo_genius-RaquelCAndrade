let botoesCor = document.getElementById("containerBotoes")
console.log(botoesCor)
botoesCor.addEventListener("click",botaoApertado)
function botaoApertado (botao){
    console.log(botao.target.className)
}