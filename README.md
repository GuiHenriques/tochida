# Tochida: bateria de experimentos psicolinguísticos

Bateria com três tarefas computadorizadas em **JavaScript + [jsPsych 7](https://www.jspsych.org/)**, desenvolvidas do zero para uma pesquisa de pós-graduação do [LabLing](https://labling.ufsc.br/), o laboratório de psicolinguística da UFSC. O estudo investiga a aprendizagem de palavras novas em **português** e **espanhol**.

> 🔗 **Demo:** https://guihenriques.github.io/tochida/

| Tarefa | O que mede | Saída |
| --- | --- | --- |
| [Aprendizado](#aprendizado-de-palavras) | Aprendizagem de palavras novas associadas a criaturas, em português, espanhol e combinações entre as duas línguas | Linha do tempo controlada para coleta com equipamento externo |
| [Memória](#memória-de-trabalho-span-de-dígitos) | Span de dígitos em ordem direta e inversa | `memoria_<id>.csv` |
| [Tradução](#tradução) | Conhecimento de vocabulário: tradução de palavras escritas | `traducao_<id>.csv` |

A página inicial (`index.html`) é um menu em que o pesquisador escolhe qual tarefa vai aplicar.

---

## Aprendizado de palavras

Tarefa principal do estudo. A cada tentativa aparece uma grade 2×2 com quatro **criaturas inventadas**, cada uma segurando um **objeto conhecido**. Uma gravação diz o nome novo de uma das criaturas, e o participante deve **direcionar o olhar** para a criatura indicada. Na fase de teste, as criaturas aparecem sem os objetos e o participante precisa lembrar qual delas corresponde à palavra ouvida.

**Estrutura**

- **4 ordens contrabalanceadas**, escolhidas pelo pesquisador no início. Cada ordem apresenta as **4 condições de língua** em sequência diferente: `PT`, `ES`, `ES→PT` e `PT→ES`.
- Cada condição tem uma **fase de aprendizado** (8 tentativas, apresentadas duas vezes) seguida de uma **fase de teste** (8 tentativas).
- **Prática** com criaturas e áudios próprios antes do experimento.
- Modo **"somente teste"**, que pula a prática e o aprendizado.
- **Pré-carregamento** de todas as imagens (80 criaturas + 17 objetos) e áudios (~300 arquivos `.wav`) antes do início, para que nenhum estímulo atrase durante a coleta.

**Linha do tempo de cada tentativa**

```
Fixação (+) 3000 ms → Grade 500 ms → Grade + áudio 6500 ms   (aprendizado)
Fixação (+) 3000 ms → Grade 1000 ms → Grade + áudio 6000 ms  (teste)
```

Todos os tempos ficam em constantes no topo de [`aprendizado/script.js`](aprendizado/script.js). As tentativas de cada ordem e condição são definidas de forma declarativa em [`aprendizado/orders/`](aprendizado/orders/). A montagem da linha do tempo acontece em duas etapas: primeiro roda a configuração (ordem e tipo de experimento) e, com base nas escolhas do pesquisador, o restante do experimento é gerado dinamicamente.

## Memória de trabalho (span de dígitos)

Implementação de uma tarefa de **span de dígitos** em ordem **direta** e **inversa**:

- Os dígitos aparecem um por vez (1000 ms cada). O participante reproduz a sequência clicando em um **teclado numérico na tela**, com botões para apagar e confirmar.
- Os níveis vão de 2 a 9 dígitos, com **duas sequências por nível**.
- **Regra de interrupção:** a tarefa avança enquanto o participante acertar pelo menos uma das duas sequências do nível. Se errar as duas, aquela ordem termina.
- Há **prática com feedback** que se repete até o participante acertar, com instruções extras na segunda tentativa.
- A validação da ordem inversa compara a resposta com a sequência invertida.
- O CSV exportado contém a **pontuação** e a **maior sequência correta** em cada ordem.

## Tradução

O participante vê 16 palavras escritas em inglês, uma por vez, e digita a tradução em português. As respostas são exportadas em `traducao_<id>.csv`.

---

## Tecnologias

- **JavaScript (ES Modules)** e **jsPsych 7**, com os plugins `audio-keyboard-response`, `html-keyboard-response`, `html-button-response`, `survey-text` e `preload`
- HTML/CSS, sem etapa de build: o projeto é um site estático
- Exportação de dados com `jsPsych.data.localSave` (CSV)

## Contexto

Projeto desenvolvido durante minha Iniciação Científica no LabLing (UFSC). Implementei sozinho as três tarefas, do zero, a partir do desenho experimental definido pela pesquisadora responsável.
