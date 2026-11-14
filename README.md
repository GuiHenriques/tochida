# Tochida: bateria de experimentos psicolinguísticos

Bateria com três tarefas computadorizadas em **JavaScript + [jsPsych 7](https://www.jspsych.org/)**, desenvolvidas do zero para pesquisas de pós-graduação do [LabLing](https://labling.ufsc.br/), o laboratório de psicolinguística da UFSC. As tarefas investigam a aprendizagem de palavras novas por falantes bilíngues e foram usadas em **dois estudos**, conduzidos por pesquisadores diferentes:

| Línguas | Pesquisa | Pasta |
| --- | --- | --- |
| **Português · Espanhol** | Júlia | [`pt-es/`](pt-es/) |
| **Português · Inglês** | Guilherme | [`pt-en/`](pt-en/) |

Os dois estudos usam a mesma arquitetura. O que muda são as línguas, os áudios, os objetos e as palavras de cada tarefa.

> 🔗 **Demo:** https://guihenriques.github.io/tochida/

| Tarefa | O que mede | Saída |
| --- | --- | --- |
| [Aprendizado](#aprendizado-de-palavras) | Aprendizagem de palavras novas associadas a criaturas, em cada língua e em combinações entre as duas | Linha do tempo controlada para coleta com equipamento externo |
| [Memória](#memória-de-trabalho-span-de-dígitos) | Span de dígitos em ordem direta e inversa | `memoria_<id>.csv` |
| [Tradução](#tradução) | Conhecimento de vocabulário: tradução de palavras escritas | `traducao_<id>.csv` |

Na página inicial, o pesquisador escolhe o estudo e depois a tarefa que vai aplicar.

---

## Aprendizado de palavras

Tarefa principal do estudo. A cada tentativa aparece uma grade 2×2 com quatro **criaturas inventadas**, cada uma segurando um **objeto conhecido**. Uma gravação diz o nome novo de uma das criaturas, e o participante deve **direcionar o olhar** para a criatura indicada. Na fase de teste, as criaturas aparecem sem os objetos e o participante precisa lembrar qual delas corresponde à palavra ouvida.

**Estrutura**

- **4 ordens contrabalanceadas**, escolhidas pelo pesquisador no início. Cada ordem apresenta as **4 condições de língua** em sequência diferente: só língua A, só língua B, A→B e B→A. Na versão PT·ES as línguas são português e espanhol, com instruções bilíngues. Na versão PT·EN são português e inglês.
- Cada condição tem uma **fase de aprendizado** (8 tentativas, apresentadas duas vezes) seguida de uma **fase de teste** (8 tentativas).
- **Prática** com criaturas e áudios próprios antes do experimento (só na versão PT·EN; a versão PT·ES não tinha essa etapa).
- Modo **"somente teste"**, que pula a prática e o aprendizado.
- **Pré-carregamento** de todas as imagens (80 criaturas + 17 objetos) e de todos os áudios (256 na versão PT·ES, 320 na versão PT·EN) antes do início, para que nenhum estímulo atrase durante a coleta.

**Linha do tempo de cada tentativa**

```
Fixação (+) 3000 ms → Grade 500 ms → Grade + áudio 6500 ms   (aprendizado)
Fixação (+) 3000 ms → Grade 1000 ms → Grade + áudio 6000 ms  (teste)
```

Todos os tempos ficam em constantes no topo de [`aprendizado/script.js`](pt-en/aprendizado/script.js). As tentativas de cada ordem e condição são definidas de forma declarativa em [`aprendizado/orders/`](pt-en/aprendizado/orders/). A montagem da linha do tempo acontece em duas etapas: primeiro roda a configuração (ordem e tipo de experimento) e, com base nas escolhas do pesquisador, o restante do experimento é gerado dinamicamente.

## Memória de trabalho (span de dígitos)

Implementação de uma tarefa de **span de dígitos** em ordem **direta** e **inversa**:

- Os dígitos aparecem um por vez (1000 ms cada). O participante reproduz a sequência clicando em um **teclado numérico na tela**, com botões para apagar e confirmar.
- Os níveis vão de 2 a 9 dígitos, com **duas sequências por nível**.
- **Regra de interrupção:** a tarefa avança enquanto o participante acertar pelo menos uma das duas sequências do nível. Se errar as duas, aquela ordem termina.
- Há **prática com feedback** que se repete até o participante acertar, com instruções extras na segunda tentativa.
- A validação da ordem inversa compara a resposta com a sequência invertida.
- O CSV exportado contém a **pontuação** e a **maior sequência correta** em cada ordem.

## Tradução

O participante vê 16 palavras escritas, uma por vez, e digita a tradução: do português para o espanhol na versão PT·ES, e do inglês para o português na versão PT·EN. As respostas são exportadas em `traducao_<id>.csv`.

---

## Tecnologias

- **JavaScript (ES Modules)** e **jsPsych 7**, com os plugins `audio-keyboard-response`, `html-keyboard-response`, `html-button-response`, `survey-text` e `preload`
- HTML/CSS, sem etapa de build: o projeto é um site estático
- Exportação de dados com `jsPsych.data.localSave` (CSV)

## Contexto

Projeto desenvolvido durante minha Iniciação Científica no LabLing (UFSC). Implementei sozinho as três tarefas, do zero, a partir do desenho experimental definido pelos pesquisadores responsáveis por cada estudo.
