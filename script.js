const caixaPrincipal=document.querySelector(".caixa-principal");
const caixaPerguntas=document.querySelector(".caixa-perguntas");
const caixaAlternativas=document.querySelector(".caixa-alternativas");
const caixaResultado=document.querySelector(".caixa-resultado");
const textoResultado=document.querySelector(".texto-resultado");

const perguntas=[
  {
    enunciado: "Pergunta 1",
    alternativas:[
      {
      texto: "Alternativa 1",
    afiremação: "afiremação",
      },
      {
      texto: "Alternativa 2",
      afiremação: "afiremação",
      },
    ]
  },
  {
    enunciado: "Pergunta 1",
    alternativas:[
      {
      texto: "Alternativa 1",
      afiremação: "afiremação",
      },
      {
      texto: "Alternativa 2",
      afiremação: "afiremação",
      },
    ]
  },
  {
    enunciado: "Pergunta 1",
    alternativas:[
      {
      texto: "Alternativa 1",
      afiremação: "afiremação",
      },
      {
      texto: "Alternativa 2",
      afiremação: "afiremação"
      },
    ]
  },
  {
    enunciado: "Pergunta 1",
    alternativas:[
      {
      texto: "Alternativa 1",
      afiremação: "afiremação",
    },
    {
      texto: "Alternativa 2",
      afiremação: "afiremação"
    },
    ]
  },
  {
    enunciado: "Pergunta 1",
    alternativas:[
      {
      texto: "Alternativa 1",
      afiremação: "afiremação",
      },
      {
      texto: "alternativa 2",
      afiremação: "afiremação",
      },
     ]
  },
];

let atual=0;
let perguntasAtual;
let historiaFinal " ";

function mostraPergunta (){
  perguntaAtual=perguntas [atual];
  caixaPerguntas.textContent=perguntaAtual.enunciado;
  mostraAltenativas ();
}

function mostraAltenativas(){
   for(const alternativa of perguntasAtual.alternativa){
   const botaoAlternativas = document.createElement("button");
   botaoAlternativas.textContent= alternativa.texto;
   botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
   caixaAlternativas.appendChild(botaoAlternativas);
   }
}




function respostaSelecionada(opcaoSelecionada){
  const afiremacoes= opcaoSelecionada.afiremacoes;
  historiaFinal= afiremacoes;
  atual++;
}
mostraPergunta();
