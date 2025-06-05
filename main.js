const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual dessas tendências de moda você adotaria para o próximo outono?",
        alternativas: [
            {
                texto: "Blazer de couro oversized** – "Clássico e moderno, combina sofisticação e ousadia.",
                afirmacao: "<b>ousado</b> Quem escolhe o blazer de couro oversized tem estilo arrojado, buscando versatilidade, sofisticação e conforto."
            },
            {
                texto: "Botas de cano longo– "Escolho por sua versatilidade e praticidade, adaptando-se a diversos looks.",
                afirmacao: "Você se destaca por ser <b>versátil</b>, Quem escolhe botas de cano longo valoriza praticidade, versatilidade e funcionalidade, combinando estilo com durabilidade."
            }
        ]
    },
    {
        enunciado: "Qual dessas tendências de acessórios você escolheria para atualizar seu visual no inverno?",
        alternativas: [
            {
                texto: "Cachecóis e lenços volumosos – "Adoro acessórios que transformam o look, adicionando elegância e conforto.",
                afirmacao: "Quem escolhe cachecóis e lenços volumosos valoriza conforto e estilo, expressando sua personalidade através dos detalhes."
            },
            {
                texto: "Gorros de tricô ou beanies – "Prefiro peças práticas e estilosas, como o gorro de tricô, que adiciona um toque descontraído.",
                afirmacao: "Quem escolhe gorros de tricô ou beanies busca conforto, praticidade e um look casual com estilo."
            }
        ]
    },
    {
        enunciado: "Qual dessas opções de roupa você escolheria para um evento informal à noite?",
        alternativas: [
            {
                texto: "Macacão de alfaiataria com decote discreto – "Prefiro elegância moderna e confortável, ideal para eventos noturnos descontraídos.",
                afirmacao: "<b>elegante</b> Quem escolhe um macacão de alfaiataria valoriza o equilíbrio entre sofisticação, conforto e um estilo minimalista com classe."
            },
            {
                texto: "Vestido midi com estampa floral** – "Adoro mostrar personalidade; a estampa floral é atemporal e o vestido midi combina informalidade com elegância.",
                afirmacao: "<b>sofisticado</b>,Quem escolhe um vestido midi floral tem uma personalidade leve e romântica, buscando um estilo feminino, descontraído e sofisticado."
            }
        ]
    },
    {
        enunciado: "Para o seu dia a dia no trabalho, qual dessas peças você escolheria?",
        alternativas: [
            {
                texto: "Camisa social de seda – "Gosto do clássico com qualidade e estilo; a seda é versátil e confiante para o trabalho.",
                afirmacao: "<b>Básica</b> Quem escolhe uma camisa de seda tem um estilo clássico e sofisticado, buscando conforto, qualidade e elegância atemporal."
            },
            {
                texto: "Calça de cintura alta com corte reto – "Adoro calças de cintura alta por realçarem a silhueta e serem versáteis e confortáveis.",
                afirmacao: "<b>Minimalista</b> Quem escolhe calças de cintura alta e corte reto tem um estilo minimalista e prático, buscando versatilidade, conforto e elegância."
            }
        ]
    },
    {
        enunciado: "Qual dessas tendências de calçados você usaria para dar aquele up no seu look?",
        alternativas: [
            {
                texto: "Tênis branco de couro – "Adoro um visual clean e moderno; o tênis branco é versátil e dá frescor ao look.",
                afirmacao: "Quem escolhe tênis branco de couro tem um estilo prático, casual e descomplicado, com foco em tendências contemporâneas."
            },
            {
                texto: "Sandálias de tiras finas – "Tenho um estilo leve e feminino, e as sandálias de tiras finas são perfeitas pela simplicidade e elegância.",
                afirmacao: "Sandálias de tiras finas são ideais para quem tem um estilo delicado e sofisticado, perfeito para eventos informais ou ao ar livre."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.innerHTML = historiaFinal;
    caixaAlternativas.innerHTML = "";
}

mostraPergunta(); 
