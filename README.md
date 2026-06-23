# Jogo da Forca

## Autor

Erick Douglas Silva Campos

---

## Regras do jogo

- O jogador escolhe uma categoria.
- Uma palavra aleatória é sorteada.
- O jogador tenta descobrir a palavra digitando letras.
- Cada erro reduz as tentativas restantes.
- O jogador vence ao descobrir todas as letras.
- O jogador perde ao atingir o limite de erros.

---

## Como jogar

1. Execute o projeto.
2. Digite seu nome.
3. Escolha uma categoria.
4. Digite letras para tentar descobrir a palavra.
5. Continue até vencer ou perder.

---

## Como executar

Instale o Node.js e execute:

```bash
npm start

```

---

## Pontuação

A pontuação é calculada com base nas tentativas restantes ao final da partida.

Fórmula:

Pontuação = Tentativas Restantes × 10

Exemplo:
- 4 tentativas restantes = 40 pontos
- 2 tentativas restantes = 20 pontos

---

## Erros Máximos

O jogador possui no máximo 6 erros por rodada.

Ao atingir esse limite, a partida é encerrada e o jogador perde.

---

## Letras Repetidas

Caso o jogador digite uma letra que já foi utilizada anteriormente, o sistema exibe uma mensagem informando que a letra já foi tentada.

Nenhuma tentativa é descontada nesse caso.

---

## Caracteres Inválidos

O jogo aceita apenas uma letra por vez.

Caso o jogador digite mais de um caractere, será exibida uma mensagem de erro e uma nova entrada será solicitada.

---

## Categorias

O jogo possui três categorias:

- Tecnologia
- Animais
- Frutas

O jogador escolhe a categoria antes do início da partida.

---

## Escolha da Palavra

Após a seleção da categoria, uma palavra é sorteada aleatoriamente dentre as palavras disponíveis naquela categoria.

---

## Exibição do Progresso

Durante a partida são exibidas:

- Letras já descobertas.
- Letras já tentadas.
- Quantidade de erros restantes.

Exemplo:

_ A _ A _ A

Tentadas: a, r, p, t

Erros restantes: 4