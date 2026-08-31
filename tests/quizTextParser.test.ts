import assert from "node:assert/strict";
import test from "node:test";

import {
  parseQuizText,
} from "../src/features/questions/quizTextParser";

const validQuiz = `
Pergunta 1: Quem chegou ao Brasil em 1500?
A) Pedro Álvares Cabral
B) Dom Pedro I
C) Getúlio Vargas
Resposta correta: A

Pergunta 2: Em que ano foi proclamada a Independência do Brasil?
A) 1500
B) 1822
C) 1889
Resposta correta: B
`;

test(
  "interpreta múltiplas perguntas com A, B e C",
  () => {
    const result =
      parseQuizText(
        validQuiz
      );

    assert.equal(
      result.valid,
      true
    );

    assert.equal(
      result.questions.length,
      2
    );

    assert.deepEqual(
      result.questions[0].options,
      [
        "Pedro Álvares Cabral",
        "Dom Pedro I",
        "Getúlio Vargas",
      ]
    );

    assert.equal(
      result.questions[0]
        .correctAnswer,
      0
    );

    assert.equal(
      result.questions[0]
        .correctLetter,
      "A"
    );

    assert.equal(
      result.questions[1]
        .correctAnswer,
      1
    );

    assert.equal(
      result.questions[1]
        .correctLetter,
      "B"
    );
  }
);

test(
  "rejeita pergunta sem alternativa C",
  () => {
    const result =
      parseQuizText(`
Pergunta: Qual é a capital do Brasil?
A: Brasília
B: São Paulo
Resposta: A
`);

    assert.equal(
      result.valid,
      false
    );

    const messages =
      result.issues
        .map(
          (issue) =>
            issue.message
        )
        .join("\n");

    assert.match(
      messages,
      /alternativa C/i
    );
  }
);

test(
  "rejeita alternativa D no formato atual",
  () => {
    const result =
      parseQuizText(`
Pergunta: Qual é a capital do Brasil?
A: Brasília
B: São Paulo
C: Rio de Janeiro
D: Curitiba
Resposta: A
`);

    assert.equal(
      result.valid,
      false
    );

    const messages =
      result.issues
        .map(
          (issue) =>
            issue.message
        )
        .join("\n");

    assert.match(
      messages,
      /linha não reconhecida/i
    );
  }
);

test(
  "rejeita alternativas duplicadas",
  () => {
    const result =
      parseQuizText(`
Pergunta: Qual é a capital do Brasil?
A: Brasília
B: Brasília
C: Rio de Janeiro
Resposta: A
`);

    assert.equal(
      result.valid,
      false
    );

    const messages =
      result.issues
        .map(
          (issue) =>
            issue.message
        )
        .join("\n");

    assert.match(
      messages,
      /alternativas duplicadas/i
    );
  }
);

test(
  "rejeita perguntas duplicadas na mesma importação",
  () => {
    const result =
      parseQuizText(`
Pergunta: Qual é a capital do Brasil?
A: Brasília
B: São Paulo
C: Rio de Janeiro
Resposta: A

Pergunta: Qual é a capital do Brasil?
A: Brasília
B: Curitiba
C: Salvador
Resposta: A
`);

    assert.equal(
      result.valid,
      false
    );

    const messages =
      result.issues
        .map(
          (issue) =>
            issue.message
        )
        .join("\n");

    assert.match(
      messages,
      /pergunta duplicada/i
    );
  }
);

test(
  "aceita os dois estilos atuais de alternativa e resposta",
  () => {
    const colonStyle =
      parseQuizText(`
Pergunta: Qual é a capital do Brasil?
A: Brasília
B: São Paulo
C: Rio de Janeiro
Resposta: A
`);

    const parenthesisStyle =
      parseQuizText(`
Pergunta 1: Qual é a capital do Brasil?
A) Brasília
B) São Paulo
C) Rio de Janeiro
Resposta correta: A
`);

    assert.equal(
      colonStyle.valid,
      true
    );

    assert.equal(
      parenthesisStyle.valid,
      true
    );

    assert.deepEqual(
      colonStyle.questions[0]
        .options,
      parenthesisStyle.questions[0]
        .options
    );

    assert.equal(
      colonStyle.questions[0]
        .correctAnswer,
      parenthesisStyle.questions[0]
        .correctAnswer
    );
  }
);