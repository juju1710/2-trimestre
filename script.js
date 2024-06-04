const caixaPrincipal=document.querySelector(".caixa-principal);
const caixaPerguntas=document.querySelector(".caixa-perguntas");
const caixaAlternativas=document.querySelector(".caixa-alternativas");
const caixaResultado=document.querySelector(".caixa-resultado");
const textoResultado=document.querySelector(".texto-resultado);

const perguntas=[
  {
    enunciado: "Pergunta 1",
    alternativas:[
      "Alternativa 1"
      "Alternativa 2"
    ]
  },
  {
    enunciado: "Pergunta 1",
    alternativas:[
      "Alternativa 1"
      "Alternativa 2"
    ]
  },
  {
    enunciado: "Pergunta 1",
    alternativas:[
      "Alternativa 1"
      "Alternativa 2"
    ]
  },
  {
    enunciado: "Pergunta 1",
    alternativas:[
      "Alternativa 1"
      "Alternativa 2"
    ]
  },
  {
    enunciado: "Pergunta 1",
    alternativas:[
      "Alternativa 1"
      "alternativa 2"
     ]
  },
];

let atual=0;
let perguntasAtual;

function mostraPergunta (){
  perguntaAtual=perguntas [atual];
  caixaPerguntas.textContent=perguntaAtual.enunciado;
  mostraAltenativas ();
}

function mostraAltenativas(){
   for(const alternativa of perguntasAtual.alternativa){
   const botaoAlternativas = document.createElement("button");
   botaoAlternativas.textContent= alternativa;
   caixaAlternativas.appendChild(botaoAlternativas);
   }
}





mostraPergunta();
