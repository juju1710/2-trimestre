const caixaPrincipal=document.querySelector(".caixa-principal");
const caixaPerguntas=document.querySelector(".caixa-perguntas");
const caixaAlternativas=document.querySelector(".caixa-alternativas");
const caixaResultado=document.querySelector(".caixa-resultado");
const textoResultado=document.querySelector(".texto-resultado");

const perguntas=[
  {
    enunciado: "você gosta de lazanha ?",
    alternativas:[
      {
      texto: "Sim",
    afiremação: "porque é minha comida preferida",
      },
      {
      texto: "não",
      afiremação: "porque a textura não é boa",
      },
    ]
  }, 
  {
    enunciado: "o jack é branco ou roxo ?",
    alternativas:[
      {
      texto: "roxo",
      afiremação: "porque eu assisti na pirataria",
      },
      {
      texto: "branco",
      afiremação: "correto,ele é branco",
      },
    ]
  },
  {
    enunciado: "você fala varias linguas ?",
    alternativas:[
      {
      texto: "sim",
      afiremação: "fala 3 linguas diferentes",
      },
      {
      texto: "não",
      afiremação: "não sei nem falar português direito"
      },
    ]
  },
  {
    enunciado: "você acha que as ginastas arrasaram na olimpíada ?",
    alternativas:[
      {
      texto: "sim",
      afiremação: "a pontuação delas foram incrível",
    },
    {
      texto: "não",
      afiremação: "acho que elas poderiam ter melhorado em varios movimentos "
    },
    ]
  },
  {
    enunciado: "você colocava os seus dentes embaixo do travisseiro para a fada do dente ?",
    alternativas:[
      {
      texto: "sim",
      afiremação: "sempre ganhava um troquinho da fada do dente",
      },
      {
      texto: "não",
      afiremação: "minha mãe falou que ela nunca existiu era apenas uma história ",
      },
     ]
  },
];

let atual=0;
let perguntasAtual;
let historiaFinal " ";

function mostraPergunta (){
  if(atual >= perguntas.lenghth){
    mostraResultado();
    return;
  }
  perguntaAtual=perguntas [atual];
  caixaPerguntas.textContent=perguntaAtual.enunciado;
  caixaAlternativas.textContent = "";
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
  historiaFinal += afiremacoes + " ";
  atual++;
  mostraPergunta();
}

function mostraResultado(){
  caixaPerguntas.textContent = "você chegou até o final , parabéns"
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = " ";
}

mostraPergunta