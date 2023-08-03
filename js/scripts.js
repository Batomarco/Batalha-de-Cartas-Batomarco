//Ideias futuras:
//Colocar as personagens do Project Qt como cartas, criar a lista em um outro arquivo fora do HTML;
//Separar as cartas entre os dois jogadores, são 52 personagens, 26 cartas para cada um;
//Fazer um esquema de rodada, uma vez o jogador pode escolher o atributo, outra vez a máquina pode escolher;
//Fazer o esquema do vencedor da rodada pegar a carta do outro jogador;
//Fazer um esquema que toda vez que a mesma carta aparecer pela terceira vez, ela vem na forma Awaken, com atributos melhores;
//Criar um modo normal onde joga com as 56 cartas, e um modo rápido onde joga com 26 cartas;
//Fazer um esquema que pode escolher ir contra a máquina, ou contra um jogador;

//Versão 2.0:
//Remodular o modo Normal, com as Awaken ficando fortes uma rodada sim uma rodada não
//Fazer novas cartas mais bonitas
//Fazer efeito especial para as cartas Awaken

//Armazena o conjunto de cartas
var cartas;
//Armazena o conjunto de cartas Awaken
var cartasAwaken;
//Armazena as cartas embaralhadas
var cartasEmbaralhadas;
//Armazena as mãos divididas dos jogadores
var maosDivididas = {}; 

function iniciarJogo() {
    //Obter o valor selecionado no menu suspenso
    var modoJogo = document.getElementById("modoJogo").value;

    //Ocultar o menu de seleção do modo de jogo
    document.getElementById("modoJogoContainer").style.display = "none";

    //Configurar o modo de jogo
    if (modoJogo === "rapido") {
        //Exibir os botões "Sortear" e "Jogar"
        document.getElementById("btnSortear").style.display = "";
        document.getElementById("btnJogar").style.display = "";

        //Embaralhar antes de definir quantidade de cartas
        embaralharModoRapido = embaralharCartas(cartas);

        //Definir quantidade de cartas para o modo rápido
        const cartasModoRapido = embaralharModoRapido.slice(0, 26);

        //Embaralhar as cartas no modo rápido
        cartasEmbaralhadas = embaralharCartas(cartasModoRapido.slice());

        //Dividir as cartas embaralhadas entre os jogadores
        maosDivididas = dividirCartas();

        conteudoElement.style.display = "none"
    } else {
        //Modo Normal
        document.getElementById("btnSortear").style.display = "";
        document.getElementById("btnJogar").style.display = "";
    }
}

//Função para embaralhar as cartas
function embaralharCartas(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

//Embaralha as cartas e armazena o resultado
cartasEmbaralhadas = embaralharCartas(cartas.slice());

//Arrays para armazenar as cartas da mão
var maoJogador = [];
var maoMaquina = [];

//Função para dividir as cartas embaralhadas entre os jogadores
function dividirCartas() {
    const meio = Math.floor(cartasEmbaralhadas.length / 2);
    maoMaquina = cartasEmbaralhadas.slice(0, meio);
    maoJogador = cartasEmbaralhadas.slice(meio);
    return {maoMaquina, maoJogador};
}

//Função para exibir a quantidade de cartas na mão dos jogadores
function exibirQuantidadeCartas() {
    var divQuantidadeCartas = document.getElementById("quantidade-cartas");
    divQuantidadeCartas.innerHTML = 
        `<p> Quantidade de cartas na sua mão: ${maoJogador.length}</p> <p>Quantidade de cartas na mão da máquina: ${maoMaquina.length}</p>`;
}

//Variáveis para armazenar as cartas atuais
var cartaMaquina;
var cartaJogador;

//Variáveis para controlar o turno dos jogadores
var turnoJogador = true;
var turnoComputador = false;

//Função para sortear as cartas entre os jogadores
function sortearCarta() {
    //Verifica se ainda há cartas nas mãos de cada jogador
    if (maoMaquina.length > 0 && maoJogador.length > 0) {
        if (turnoJogador) {
            var divResultado = document.getElementById("resultado");
            divResultado.innerHTML = "<p class='resultado-final'>Sua Vez!</p>";
        }

        // Mostrar o <h2> com ID "escolhaAtributo" quando o jogo começar
        document.getElementById("escolhaAtributo").style.display = "";

        //Verifica se as mãos dos jogadores foram previamente divididas
        if (!maosDivididas.maoMaquina || !maosDivididas.maoJogador) {
            maosDivididas = dividirCartas();
        }

        //Atualiza as mãos dos jogadores com as cartas dividas
        maoMaquina = maosDivididas.maoMaquina;
        maoJogador = maosDivididas.maoJogador;

        //Escolhe a primeira carta da mão dos jogadores
        cartaMaquina = maoMaquina[0];
        cartaJogador = maoJogador[0];

        //Desabilita o botão de "Sortear" e habilita o de "Jogar"
        document.getElementById("btnSortear").disabled = true;
        document.getElementById("btnJogar").disabled = false;

        //Exibe a carta do jogador e atualiza a quantidade de cartas
        exibirCartaJogador();
        exibirQuantidadeCartas();
    } else {
        //Caso uma das mãos fique vazia, o jogo termina
        var divResultado = document.getElementById("resultado");
        divResultado.innerHTML = "<p class='resultado-final'>Fim de Jogo!</p>";
        document.getElementById('btnJogar').disabled = true;
    }
};

//Função para obter o atributo selecionado pelo jogador
function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");

    for (var i = 0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked == true) {
            return radioAtributos[i].value
        }
    }
};

//Função para transferir as cartas entre o vencedor e o perdedor
function transferirCartas(vencedor, perdedor) {
    // Remove a carta perdida do perdedor e adiciona ao array temporário
    const cartaPerdedor = perdedor.shift();
    // Remove a carta ganhadora do vencedor e adiciona ao array temporário
    const cartaVencedor = vencedor.shift();

    // Armazena as cartas do vencedor temporariamente
    const cartasVencedorTemp = [...vencedor, cartaVencedor];

    // Limpa o array do vencedor
    vencedor.length = 0;

    // Adiciona as cartas do vencedor no final do array original
    vencedor.push(...cartasVencedorTemp, cartaPerdedor);

    exibirQuantidadeCartas();
};

//Função para simular a jogada do jogador
function jogar() {
    //Obtém o atributo selecionado pelo jogador
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.getElementById("resultado");

    //Obtém o valor do atributo escolhido nas cartas da máquina e do jogador
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

    //Inicializa o resultado como "Empatou"
    var resultado = "<p class='resultado-final'>Empatou!</p>";

    //Verifica quem venceu, transferindo as cartas
    if (valorCartaJogador > valorCartaMaquina) {
        resultado = "<p class='resultado-final'>Você venceu!</p>";

        //Remove o melhoramento AWAKEN da carta, se for o caso
        const cartaAwakenMaquina = maoMaquina[0];
        if (cartaAwakenMaquina.nome.includes("[AWAKEN]")) {
            removerCartaAwaken(cartaAwakenMaquina);
        }

        //Verifica se a carta do jogador venceu duas vezes e aprimora se necessário
        verificarCartasVencidas(cartaJogador, cartasVencidasJogador);
        removerCartaVencida(cartaMaquina, cartasVencidasMaquina);
        transferirCartas(maoJogador, maoMaquina);
    } else if (valorCartaMaquina > valorCartaJogador) {
        resultado = "<p class='resultado-final'>Você perdeu!</p>"

        //Remove o melhoramento AWAKEN da carta, se for o caso
        const cartaAwakenJogador = maoJogador[0];
        if (cartaAwakenJogador.nome.includes("[AWAKEN]")) {
            removerCartaAwaken(cartaAwakenJogador);
        }

        // Verifica se a carta da máquina venceu duas vezes e aprimora se necessário
        verificarCartasVencidas(cartaMaquina, cartasVencidasMaquina);
        removerCartaVencida(cartaJogador, cartasVencidasJogador);
        transferirCartas(maoMaquina, maoJogador);
    }

    //Exibe o resultado na tela
    divResultado.innerHTML= resultado;

    //Desabilita o botão de "Jogar" e exibe a carta da máquina
    document.getElementById('btnJogar').disabled = true;
    exibirCartaMaquina();

    //Aguarda 7 segundo para a carta do computador ser revelada
    setTimeout(function () {
        resultado = "<p class='resultado-final'>Empatou!</p>";
        limparCartas();
        sortearCarta();
    }, 7000);

    //Verifica empate e realiza a nova jogada
    if (valorCartaJogador === valorCartaMaquina) {
        setTimeout(function () {
            limparCartas();
            sortearNovasCartas();
        }, 2000)
    } else {
        //Aguarda mais 7 segundos antes de limpar as cartas e sortear novas cartas
        setTimeout(function () {
            limparCartas();

            //Alterna os turnos após limpar as cartas
            if (turnoJogador) {
                turnoJogador = true;
                turnoComputador = false;
                jogadaComputador();
            } else if (turnoComputador) {
                turnoJogador = false;
                turnoComputador = true;
                sortearCarta();
            }
        }, 7000);
    }
};

//Função para sortear novas cartas em caso de empate
function sortearNovasCartas() {
    //Remove as cartas atuais do topo das mãos de cada jogador
    const cartaEmpateMaquina = maoMaquina.shift();
    const cartaEmpateJogador = maoJogador.shift();

    //Adiciona as cartas removidas no final dos baralhos
    maoMaquina.push(cartaEmpateMaquina);
    maoJogador.push(cartaEmpateJogador);

    setTimeout(function () {

        //Alterna os turnos após limpar as cartas
        if (turnoJogador) {
            turnoJogador = true;
            turnoComputador = false;
            jogadaComputador();
        } else if (turnoComputador) {
            turnoJogador = false;
            turnoComputador = true;
            sortearCarta();
        }
    }, 7000);
}

//Função para simular a jogada do computador
function jogadaComputador() {
    turnoComputador = true;
    document.getElementById('btnJogar').disabled = true;
    
    var divResultado = document.getElementById("resultado");
    divResultado.innerHTML = "<p class='resultado-final'>Vez do Computador!</p>";

    exibirCartaJogador();

    //Aguarda 4 segundos para simular o "pensamento" do computador
    setTimeout(function () {
        var atributoSelecionadoComputador = escolherAtributoComputador(cartaMaquina);

        var valorCartaJogador = cartaJogador.atributos[atributoSelecionadoComputador];
        var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionadoComputador];

        var resultado = "<p class='resultado-final'>Empatou!</p>";

        //Verifica quem venceu, transferindo as cartas
        if (valorCartaMaquina > valorCartaJogador) {
            resultado = "<p class='resultado-final'>O computador venceu!</p>";

            removerCartaVencida(cartaJogador, cartasVencidasJogador);
            transferirCartas(maoMaquina, maoJogador);

        } else if (valorCartaJogador > valorCartaMaquina) {
            resultado = "<p class='resultado-final'>Você venceu!</p>";

            removerCartaVencida(cartaMaquina, cartasVencidasMaquina)
            transferirCartas(maoJogador, maoMaquina);
        }

        //Exibe o resultado na tela
        divResultado.innerHTML = resultado;
        exibirCartaMaquina();

        //Aguarda 3 segundos para exibir qual atributo o computador escolheu
        setTimeout(function () {
            resultado = "<p class='resultado-final'>O computador escolheu: <br>" + atributoSelecionadoComputador + " " + valorCartaMaquina +"</p>";
            divResultado.innerHTML = resultado;

            if (valorCartaJogador === valorCartaMaquina) {
                setTimeout (function () {
                    limparCartas();
                    sortearNovasCartas();
                }, 2000);
            } else {
                if (valorCartaMaquina > valorCartaJogador) {
                    
                    const cartaAwakenJogador = maoJogador[0];
                    if (cartaAwakenJogador.nome.includes("[AWAKEN]")) {
                        removerCartaAwaken(cartaAwakenJogador)
                    }

                    verificarCartasVencidas(cartaMaquina, cartasVencidasMaquina);
                } else if (valorCartaJogador > valorCartaMaquina) {

                    const cartaAwakenMaquina = maoMaquina[0];
                    if (cartaAwakenMaquina.nome.includes("[AWAKEN]")) {
                        removerCartaAwaken(cartaAwakenMaquina);
                    }

                    verificarCartasVencidas(cartaJogador, cartasVencidasJogador);
                }

                //Aguarda mais 7 segundos antes de reinicar o jogo
                setTimeout(function () {
                    turnoComputador = false;
                    limparCartas();
                    sortearCarta();
                }, 7000);
            }
        }, 3000);
    }, 4000);
};

//Função para que o computador escolha um atributo
function escolherAtributoComputador(carta) {
    //Obter todos os atributos da carta
    var atributos = carta.atributos;
    var defesa = atributos.defesa;
    var ataque = atributos.ataque;
    var magia = atributos.magia;

    if (carta.nome.includes("[AWAKEN]")) {
        if (defesa > 1600) {
            return "defesa";
        } else if (ataque > 600) {
            return "ataque";
        } else if (magia > 500) {
            return "magia";
        }
    } else {
        if (defesa > 1650) {
            return "defesa";
        } else if (ataque > 650) {
            return "ataque";
        } else if (magia > 550) {
            return "magia";
        }
    }
        
    //Caso nenhum atributo específico seja escolhido, retorna aleatoriamente
    var atributosArray = ["defesa", "ataque", "magia"];
    return atributosArray[Math.floor(Math.random() * atributosArray.length)];
};

//Função para exibir a carta do jogador na tela
function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`

    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';

    var tagHTML = "<div id='opcoes' class='carta-status'>"

    var opcoesTexto = "";
    
    //Cria os radio buttons para os atributos da carta do jogador
    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += 
            `<input type='radio' name='atributo' value=${atributo} ${turnoComputador ? 'disabled' : '' }> ${atributo} ${cartaJogador.atributos[atributo]}<br>`
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`

    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
};

//Função para exibir a carta da máquina na tela
function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");

    var imagemFundo = `url(${cartaMaquina.imagem})`;
    divCartaMaquina.style.backgroundImage =  imagemFundo;

    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style="width: inherit; height: inherit; position: absolute;">';

    var tagHTML = "<div id='opcoes' class='carta-status'>";

    //Cria as tags HTML com os atributos da carta da máquina
    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto +=
            "<p type='text' name='atributo' value=" + atributo + ">" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div";
};

var cartasVencidasJogador = [];
var cartasVencidasMaquina = [];

function verificarCartasVencidas(carta, cartasVencidas) {
    if (carta.nome.includes("[AWAKEN]")) {
        return;
    }
    
    const nomeCarta = carta.nome;
    const cartaVencida = cartasVencidas.find((cartaVencida) => cartaVencida.nome === nomeCarta);

    if (cartaVencida) {
        cartaVencida.contador++;

        if (cartaVencida.contador === 2 && !carta.nome.includes("[AWAKEN]")) {
            aprimorarCarta(carta); //Aprimorar carta após 2 vitórias
        }
    } else {
        cartasVencidas.push({nome: nomeCarta, contador: 1});
    }

    if (carta.nome.includes("[AWAKEN]") && cartaVencida) {
        const index = cartasVencidas.findIndex(c => c.nome === nomeCarta);
        cartasVencidas.splice(index, 1);
    }
};

function removerCartaVencida(carta, cartasVencidas) {
    const nomeCarta = carta.nome;
    const index = cartasVencidas.findIndex(c => c.nome === carta.nome);

    if (index !== -1) {
        const cartaVencida = cartasVencidas[index];

        if (cartaVencida.contador > 1) {
            cartasVencidas.splice(index, 2);
        } else {
            cartasVencidas.splice(index, 1);
        }
    }
}

function removerCartaAwaken(carta) {
    // Verifica se a carta está no estado awaken (possui [AWAKEN] no nome)
    if (carta.nome.includes("[AWAKEN]")) {
        // Remove o sufixo [AWAKEN] do nome
        carta.nome = carta.nome.replace(" [AWAKEN]", "");

        // Procura a carta normal correspondente no array de cartas originais
        const cartaNormal = cartas.find(cartas => cartas.nome === carta.nome);

        // Se encontrar a carta normal, restaura a imagem e os atributos originais
        if (cartaNormal) {
            carta.imagem = cartaNormal.imagem;
            carta.atributos = cartaNormal.atributos;
        }
    }
}

function aprimorarCarta(carta) {
    if (!carta.nome.includes("[AWAKEN]")) {
        const cartaAwaken = cartasAwaken.find(c => c.nome === carta.nome);

        if (cartaAwaken) {
            carta.imagem = cartaAwaken.imagem;
            carta.atributos = cartaAwaken.atributos;
            carta.nome += " [AWAKEN]";
        }
    }
}

//Função para limpar as cartas exibidas na tela
function limparCartas() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = "";
    divCartaJogador.innerHTML = "";

    var divCartaMaquina = document.getElementById("carta-maquina");

    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style="width: inherit; height: inherit; position: absolute;">';

    divCartaMaquina.style.backgroundImage = "";
    divCartaMaquina.innerHTML = moldura;

    var divResultado = document.getElementById("resultado");
    divResultado.innerHTML = "";
};

// Função para exibir o menu de seleção do modo de jogo
function exibirMenuModoJogo() {
    document.getElementById("modoJogoContainer").style.display = "block";
    document.getElementById("btnSortear").style.display = "none";
    document.getElementById("btnJogar").style.display = "none";
    document.getElementById("carta-jogador").innerHTML = "";
    document.getElementById("carta-maquina").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("quantidade-cartas").innerHTML = "";
    document.getElementById("escolhaAtributo").style.display = "none";
  }

//Funções de Instruções e Versões {
    const linkElement = document.getElementById("instrucoes-link");
    const instrucoesElement = document.getElementById("instrucoes");
    const conteudoElement = document.getElementById("conteudo-instrucoes");
    const voltarBtn = document.getElementById("voltar-btn");

    //Adiciona uma evento de clique 
    linkElement.addEventListener("click", function() {
        //Oculta o conteúdo atual
        conteudoElement.style.display = "none";
        document.getElementById("modoJogoContainer").style.display = "none";

        //Exibe as instruções
        instrucoesElement.style.display = "";
    });

    voltarBtn.addEventListener("click", function() {
        //Oculta as instruções
        instrucoesElement.style.display = "none";

        //Exibe o conteúdo inicial
        conteudoElement.style.display = ""
        document.getElementById("modoJogoContainer").style.display = "";
    });

    const versoesLink = document.getElementById("versoes-link");
    const versoesElement = document.getElementById("versoes");
    const voltarBtnVersoes = document.getElementById("voltar-btn-versoes");

    //Adiciona um evento de clique
    versoesLink.addEventListener("click", function() {
        //Oculta o conteúdo atual
        instrucoesElement.style.display = "none";

        //Exibe a seção de versões
        versoesElement.style.display = "";
    });

    voltarBtnVersoes.addEventListener("click", function() {
        //Oculta a seção de versões
        versoesElement.style.display = "none";

        //Exibe o conteúdo inicial
        instrucoesElement.style.display = ""
    });
//}
  
// Chamada da função ao carregar a página
exibirMenuModoJogo();