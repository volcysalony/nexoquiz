import assert from "node:assert/strict";
import test from "node:test";

import {
  demoQuiz,
} from "../src/remotion/data/demoQuiz";

test(
  "cada pergunta mantém exatamente três alternativas",
  () => {
    for (
      const question
      of demoQuiz.questions
    ) {
      assert.equal(
        question.options.length,
        3
      );

      assert.ok(
        question.correctAnswer >=
          0
      );

      assert.ok(
        question.correctAnswer <=
          2
      );
    }
  }
);

test(
  "o baseline mantém intro, contagem e revelação",
  () => {
    assert.equal(
      demoQuiz.introSeconds,
      1
    );

    assert.equal(
      demoQuiz.countdownSeconds,
      6
    );

    assert.equal(
      demoQuiz.revealSeconds,
      2
    );

    assert.equal(
      demoQuiz.fps,
      30
    );
  }
);

test(
  "uma pergunta padrão continua tendo nove segundos",
  () => {
    const secondsPerQuestion =
      demoQuiz.introSeconds +
      demoQuiz.countdownSeconds +
      demoQuiz.revealSeconds;

    assert.equal(
      secondsPerQuestion,
      9
    );
  }
);

test(
  "três perguntas continuam produzindo 810 frames no baseline",
  () => {
    const secondsPerQuestion =
      demoQuiz.introSeconds +
      demoQuiz.countdownSeconds +
      demoQuiz.revealSeconds;

    const durationInFrames =
      demoQuiz.questions.length *
      secondsPerQuestion *
      demoQuiz.fps;

    assert.equal(
      durationInFrames,
      810
    );
  }
);

test(
  "resposta somente aparece depois da intro e da contagem",
  () => {
    const revealStartFrame =
      (
        demoQuiz.introSeconds +
        demoQuiz.countdownSeconds
      ) *
      demoQuiz.fps;

    assert.equal(
      revealStartFrame,
      210
    );
  }
);

test(
  "todos os modos atuais permanecem compatíveis",
  () => {
    const allowedModes =
      new Set([
        undefined,
        "TEXT",
        "IMAGE",
        "IMAGE_TEXT",
      ]);

    for (
      const question
      of demoQuiz.questions
    ) {
      assert.ok(
        allowedModes.has(
          question.answerMode
        )
      );
    }
  }
);