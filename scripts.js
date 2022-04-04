let Bebida;
let Sobremesa;
let Prato;


function selecionarPrato(nomePrato) {
    
  const botaoSelecionado = document.querySelector(".selecionado");
  if (botaoSelecionado !== null) {
    //REMOVE A CLASSE SELECIONADO
    botaoSelecionado.classList.remove("selecionado");
    Document.querySelector(".vector").classList.add("escondido")
  }

  //ADICIONA A CLASSE SELECIONADO
  nomePrato.classList.add("selecionado");
  Prato = nomePrato.innerHTML;
  Document.querySelector(".vector").classList.remove("escondido")

};

function selecionarBebida(nomeBebida) {
  const botaoSelecionado = document.querySelector(".bebidas").querySelector(".selecionado");
  if(botaoSelecionado !== null) {
    botaoSelecionado.classList.remove("selecionado")
  }
  nomeBebida.classList.add("selecionado");
  Bebida = nomeBebida.innerHTML;
};

function selecionarSobremesa(nomeSobremesa) {
  const botaoSelecionado = document.querySelector(".sobremesas").querySelector(".selecionado");
  if(botaoSelecionado !== null) {
    botaoSelecionado.classList.remove("selecionado")
  }
  nomeSobremesa.classList.add("selecionado");
  Sobremesa = nomeSobremesa.innerHTML;

  if (Prato && Bebida && Sobremesa) {
    document.querySelector(".button").classList.add("botaoVerde");
    document.querySelector(".button").innerHTML = "Fechar pedido"
  } 
  
};

function finalizarPedido() {
  if (Prato && Bebida && Sobremesa) {
    
    let mensagem = 
    `Olá, gostaria de fazer o pedido:
    - Prato: Frango Yin Yang
    - Bebida: Coquinha Gelada
    - Sobremesa: Pudim
    Total: R$ 27.70`
    mensagem = window.encodeURIComponent(mensagem);
    window.open("https://wa.me/5542984438733?text=" + mensagem);
  } 
}
