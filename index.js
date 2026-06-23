const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntar(pergunta) {
    return new Promise(resolve => {
        rl.question(pergunta, resposta => {
            resolve(resposta);
        });
    });
}

const categorias = {
    Tecnologia: [
        "computador",
        "internet",
        "javascript",
        "programacao",
        "teclado",
        "monitor",
        "algoritmo"
    ],

    Animais: [
        "cachorro",
        "gato",
        "elefante",
        "girafa",
        "coelho",
        "tigre",
        "macaco"
    ],

    Frutas: [
        "banana",
        "manga",
        "morango",
        "abacaxi",
        "laranja",
        "uva",
        "melancia"
    ]
};

function escolherPalavra(categoria) {
    const lista = categorias[categoria];
    const indice = Math.floor(Math.random() * lista.length);
    return lista[indice];
}

function mostrarPalavra(palavra, letrasCorretas) {
    let resultado = "";

    for (let letra of palavra) {
        if (letrasCorretas.includes(letra)) {
            resultado += letra + " ";
        } else {
            resultado += "_ ";
        }
    }

    return resultado;
}

function venceu(palavra, letrasCorretas) {
    for (let letra of palavra) {
        if (!letrasCorretas.includes(letra)) {
            return false;
        }
    }

    return true;
}

async function jogar() {

    console.log("\n===== JOGO DA FORCA =====\n");

    const jogador = await perguntar("Digite seu nome: ");

    console.log("\nCategorias:");

    const nomesCategorias = Object.keys(categorias);

    nomesCategorias.forEach((cat, i) => {
        console.log(`${i + 1} - ${cat}`);
    });

    const opcao = await perguntar("\nEscolha uma categoria: ");

    const categoriaEscolhida = nomesCategorias[opcao - 1];

    if (!categoriaEscolhida) {
        console.log("Categoria inválida.");
        return;
    }

    const palavra = escolherPalavra(categoriaEscolhida);

    let letrasCorretas = [];
    let letrasTentadas = [];
    let erros = 0;
    const maxErros = 6;

    while (erros < maxErros) {

        console.log("\nCategoria:", categoriaEscolhida);
        console.log("Palavra:", mostrarPalavra(palavra, letrasCorretas));
        console.log("Tentadas:", letrasTentadas.join(", "));
        console.log("Erros restantes:", maxErros - erros);

        const letra = (
            await perguntar("\nDigite uma letra: ")
        ).toLowerCase();

        if (letra.length !== 1) {
            console.log("Digite apenas uma letra.");
            continue;
        }

        if (letrasTentadas.includes(letra)) {
            console.log("Você já tentou essa letra.");
            continue;
        }

        letrasTentadas.push(letra);

        if (palavra.includes(letra)) {
            letrasCorretas.push(letra);
            console.log("Acertou!");
        } else {
            erros++;
            console.log("Errou!");
        }

        if (venceu(palavra, letrasCorretas)) {

            const pontuacao = (maxErros - erros) * 10;

            console.log("\n===== RESULTADO =====");
            console.log("Jogador:", jogador);
            console.log("Resultado: VENCEU");
            console.log("Palavra:", palavra);
            console.log("Pontuação:", pontuacao);

            const novamente = await perguntar(
                "\nDeseja jogar novamente? (s/n): "
            );

            if (novamente.toLowerCase() === "s") {
                return jogar();
            }

            rl.close();
            return;
        }
    }

    console.log("\n===== RESULTADO =====");
    console.log("Jogador:", jogador);
    console.log("Resultado: PERDEU");
    console.log("Palavra correta:", palavra);
    console.log("Pontuação: 0");

    const novamente = await perguntar(
        "\nDeseja jogar novamente? (s/n): "
    );

    if (novamente.toLowerCase() === "s") {
        return jogar();
    }

    rl.close();
}

jogar();