<div align="center">

# NexoQuiz 🎬

### Turn structured quiz content into ready-to-render videos.

NexoQuiz is a full-stack application for creating, previewing and rendering quiz videos from structured questions, images and reusable video compositions.

<br />

![Next.js](https://img.shields.io/badge/Next.js-16.3-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19.2-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Remotion](https://img.shields.io/badge/Remotion-4-0B84F3?style=flat-square)
![Prisma](https://img.shields.io/badge/Prisma-7.9-2D3748?style=flat-square&logo=prisma&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-Local-003B57?style=flat-square&logo=sqlite&logoColor=white)

<br />

**Active development · Full-stack · Programmatic video generation**

</div>

---

## 🚀 About NexoQuiz

Creating quiz videos manually becomes repetitive very quickly.

Each question usually requires the same sequence of work:

- writing the question;
- positioning three alternatives;
- configuring the correct answer;
- adding images;
- adjusting image framing;
- creating the countdown;
- revealing the answer;
- repeating the same structure for the next question;
- exporting the final video.

NexoQuiz was created to automate that workflow.

Instead of manually editing every scene in a traditional video editor, quiz content is stored as structured data and transformed into reusable video compositions.

The core workflow is:

```text
Project
   ↓
Questions + A / B / C
   ↓
Images and visual configuration
   ↓
Timing
   ↓
Countdown
   ↓
Correct-answer reveal
   ↓
Remotion composition
   ↓
Preview
   ↓
MP4 render
```

The project is also being developed as a software engineering portfolio project, with focus on maintainability, validation, regression protection, security-conscious development and incremental architecture.

---

## 🎯 Project goals

NexoQuiz aims to make quiz-video creation faster without turning the application into a complex professional video editor.

The product focuses on:

- structured quiz creation;
- fast bulk content import;
- reusable video layouts;
- predictable timing;
- image-based questions and alternatives;
- accurate preview;
- automated rendering;
- simple customization;
- maintainable application architecture.

The goal is to keep the workflow powerful while remaining considerably simpler than tools such as Premiere Pro, After Effects or DaVinci Resolve.

---

## ✨ Current features

### 📁 Quiz projects

Projects currently support:

- creation and editing;
- custom project titles;
- vertical video format;
- horizontal video format;
- configurable FPS;
- configurable timing;
- multiple questions;
- render history.

Current supported video formats:

| Format | Resolution | Ratio |
| --- | ---: | ---: |
| Vertical | `1080 × 1920` | `9:16` |
| Horizontal | `1920 × 1080` | `16:9` |

---

### ❓ Questions and answers

Every quiz question follows a strict three-option model:

```text
Question

A — First option
B — Second option
C — Third option

Correct answer — A / B / C
```

This constraint is part of the domain model instead of being only a UI convention.

Supported answer modes:

| Mode | Description |
| --- | --- |
| `TEXT` | Text-only alternatives |
| `IMAGE` | Image-based alternatives |
| `IMAGE_TEXT` | Images combined with text |

Each question can also have:

- its own image;
- its own background color;
- an independent correct answer;
- independent image framing;
- three ordered alternatives.

---

## 📥 Bulk question import

Creating a 30-question quiz manually should not require filling out the same form 30 times.

NexoQuiz includes a structured text parser that can import many questions at once.

Example:

```text
Pergunta 1: Who arrived in Brazil in 1500?
A) Pedro Álvares Cabral
B) Dom Pedro I
C) Tiradentes
Resposta correta: A

Pergunta 2: In which year was Brazil's independence proclaimed?
A) 1500
B) 1822
C) 1889
Resposta correta: B
```

The current importer supports:

- up to **200 questions per import**;
- exactly three alternatives: A, B and C;
- correct-answer validation;
- missing-alternative detection;
- duplicate alternative detection;
- duplicate question detection;
- question length limits;
- option length limits;
- line-level validation errors;
- append mode;
- replace mode;
- server-side revalidation;
- transactional persistence.

> [!NOTE]
> The current parser syntax uses Portuguese keywords such as `Pergunta` and `Resposta correta`. Internationalized import syntax can be introduced later without changing the underlying quiz domain.

Client-side parsing improves the user experience, but the server validates imported content again before writing it to the database.

---

## 🖼️ Image handling

Questions and alternatives can contain images.

Currently supported image formats include:

- JPEG;
- PNG;
- WebP;
- GIF;
- AVIF.

Uploads are limited to **8 MB**.

The upload workflow also inspects the binary file signature instead of trusting only the filename extension or browser-provided MIME type.

Uploaded files receive generated names using UUIDs rather than trusting user-provided filenames.

---

### 🔍 Image framing

NexoQuiz stores the original image and keeps framing configuration separately.

Current framing properties include:

```text
fit
positionX
positionY
scale
```

Supported fitting modes:

```text
COVER
CONTAIN
```

This makes it possible to reposition and zoom an image without destructively modifying the original file.

Framing rules currently validate:

```text
positionX: 0 → 100
positionY: 0 → 100
scale:     1 → 3
```

Questions and answer alternatives maintain independent framing settings.

---

## ⏱️ Video timing

Each project stores its own timing configuration.

The video sequence follows the same core timeline for every question:

```text
INTRO
   ↓
COUNTDOWN
   ↓
ANSWER REVEAL
   ↓
NEXT QUESTION
```

The current project model stores:

```text
introSeconds
countdownSeconds
revealSeconds
fps
```

The same timing data is used when preparing content for Remotion.

This is important because the editor and the final video should not maintain independent timing rules.

---

## 🎬 Video preview

NexoQuiz uses **Remotion Player** to preview quiz compositions directly inside the application.

A key architectural decision is that preview data and rendering data share the same video contract.

```text
Database
   ↓
getProjectForRender()
   ↓
QuizVideoProps
   ↓
┌─────────────────────┬─────────────────────┐
│       Preview       │        Render       │
│   Remotion Player   │   Remotion Renderer │
└─────────────────────┴─────────────────────┘
```

This reduces the risk of having:

```text
Preview shows one result
            ≠
Exported video shows another
```

---

## 🎥 Video rendering

NexoQuiz currently renders real MP4 files using Remotion's server-side rendering tools.

The rendering pipeline is:

```text
Project data
     ↓
getProjectForRender()
     ↓
QuizVideoProps
     ↓
Composition selection
     ↓
Remotion bundle
     ↓
Composition metadata
     ↓
H.264 rendering
     ↓
MP4 output
```

The application automatically chooses the appropriate composition based on the project format:

```text
VERTICAL
   ↓
QuizVertical

HORIZONTAL
   ↓
QuizHorizontal
```

Current rendering features include:

- real Remotion rendering;
- H.264 output;
- vertical and horizontal compositions;
- persisted render records;
- pending state;
- rendering state;
- completed state;
- failed state;
- real rendering progress;
- MP4 output path;
- render history;
- MP4 download;
- render deletion.

Render progress is not artificially simulated.

The application maps the real Remotion rendering progress into the persisted render status.

---

## 🧱 Architecture

NexoQuiz currently uses a full-stack Next.js architecture.

```text
┌──────────────────────────────────────────────┐
│                   Next.js                    │
│                                              │
│ Pages · Components · APIs · Server Actions   │
└──────────────────────┬───────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────┐
│              Application Logic               │
│                                              │
│ Projects · Questions · Media · Import        │
└───────────────┬───────────────────┬──────────┘
                │                   │
                ▼                   ▼
        ┌───────────────┐   ┌──────────────────┐
        │    Prisma     │   │     Remotion     │
        │               │   │                  │
        │    SQLite     │   │ Player           │
        └───────────────┘   │ Bundler          │
                            │ Renderer         │
                            └────────┬─────────┘
                                     │
                                     ▼
                                  MP4 file
```

The application is currently local-first.

That keeps the current development architecture simple while the core product and rendering engine are still evolving.

---

## 🧠 Key engineering decisions

### Shared video contract

The application does not send raw Prisma objects directly into the video layer.

Project data is transformed first:

```text
Prisma data
    ↓
getProjectForRender()
    ↓
QuizVideoProps
    ↓
Remotion
```

This creates a boundary between persistence and video rendering.

---

### Preview and renderer reuse

Whenever possible, the preview and final render use the same Remotion components.

This avoids maintaining two independent implementations of the quiz layout.

---

### Server-side validation

Client-side validation is never treated as a security boundary.

Important operations validate data again on the server.

The bulk import workflow, for example, parses and validates the quiz again before persistence.

---

### Transactional imports

Bulk imports use a database transaction.

This follows the rule:

```text
All questions are imported
          OR
No questions are imported
```

A partial import should not leave the project in an inconsistent state.

---

### Non-destructive image framing

Image position and zoom are stored as metadata.

The uploaded source image does not need to be repeatedly cropped or rewritten.

---

### Regression before redesign

The original video engine became functional before the current NexoQuiz redesign.

Instead of rewriting that engine only to match a new interface, regression tests were added first.

The UI can evolve while the rendering behavior remains protected.

---

## 🛠️ Tech stack

| Area | Technology |
| --- | --- |
| Framework | Next.js 16.3 |
| UI | React 19.2 |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Video engine | Remotion 4 |
| Video preview | Remotion Player |
| Video rendering | Remotion Bundler + Renderer |
| ORM | Prisma 7 |
| Database | SQLite |
| SQLite adapter | better-sqlite3 |
| Icons | Lucide React |
| Testing | Node.js Test Runner |
| TypeScript execution | tsx |

---

## 📂 Project structure

```text
nexoquiz/
│
├── prisma/
│   ├── migrations/
│   ├── schema.prisma
│   └── seed.ts
│
├── public/
│   └── uploads/
│       ├── options/
│       └── questions/
│
├── scripts/
│   ├── audit-baseline.ts
│   ├── render-project.ts
│   └── test-project-render.ts
│
├── src/
│   │
│   ├── app/
│   │   ├── api/
│   │   │   ├── projetos/
│   │   │   └── renders/
│   │   │
│   │   └── projetos/
│   │
│   ├── components/
│   │   ├── layout/
│   │   ├── projects/
│   │   ├── questions/
│   │   ├── renders/
│   │   └── video/
│   │
│   ├── database/
│   │   └── prisma.ts
│   │
│   ├── features/
│   │   ├── media/
│   │   ├── projects/
│   │   ├── questions/
│   │   └── renders/
│   │
│   └── remotion/
│       ├── components/
│       ├── compositions/
│       ├── data/
│       ├── templates/
│       └── types/
│
├── storage/
│   ├── audio/
│   ├── effects/
│   ├── images/
│   ├── music/
│   ├── renders/
│   └── tmp/
│
└── tests/
    ├── legacyVideoContract.test.ts
    └── quizTextParser.test.ts
```

---

## 🧪 Testing and regression protection

The project currently includes regression tests for critical quiz behavior.

The test suite protects rules including:

- exactly three alternatives per question;
- valid correct-answer indexes;
- intro timing;
- countdown timing;
- answer reveal timing;
- total video duration;
- video frame calculations;
- compatibility with `TEXT`;
- compatibility with `IMAGE`;
- compatibility with `IMAGE_TEXT`;
- valid bulk imports;
- missing alternative detection;
- unsupported fourth alternative detection;
- duplicate alternative detection;
- duplicate question detection;
- supported parser syntax.

Run the automated test suite:

```bash
npm test
```

Current regression baseline:

```text
12 tests
12 passing
0 failing
```

---

### 🔎 Baseline audit

The project also includes a script that validates a real project from the local database before major architectural changes:

```bash
npm run audit:baseline
```

It checks important information such as:

```text
project format
resolution
FPS
number of questions
answer mode
three-option contract
correct answer
timing
total duration
total frames
```

---

### 🎞️ Render-data inspection

To inspect the data that will be passed to Remotion:

```bash
npm run test:project-render
```

This is useful when changing persistence or editor logic without immediately rendering a complete MP4.

---

## ⚙️ Getting started

### Prerequisites

You will need:

- Node.js;
- npm;
- Git.

Clone the repository:

```bash
git clone https://github.com/volcysalony/nexoquiz.git
```

Enter the project:

```bash
cd nexoquiz
```

Install dependencies:

```bash
npm install
```

---

### 🗄️ Configure the local database

Create a local `.env` file:

```env
DATABASE_URL="file:./dev.db"
```

Generate the Prisma client:

```bash
npx prisma generate
```

Apply migrations:

```bash
npx prisma migrate dev
```

Optionally populate the development database:

```bash
npx prisma db seed
```

---

### ▶️ Start development

Run:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

---

## 🧰 Available commands

### Development

```bash
npm run dev
```

Starts the Next.js development server.

---

### Production build

```bash
npm run build
```

Creates an optimized production build and performs TypeScript validation.

---

### Automated tests

```bash
npm test
```

Runs the regression test suite.

---

### Regression tests

```bash
npm run test:regression
```

Runs the regression tests explicitly.

---

### Baseline audit

```bash
npm run audit:baseline
```

Validates the current database project against the expected quiz contract.

---

### Inspect render data

```bash
npm run test:project-render
```

Shows the project data prepared for Remotion.

---

### Remotion Studio

```bash
npm run remotion
```

Starts Remotion Studio using the current compositions.

---

### Render demo quiz

```bash
npm run render:quiz
```

Renders the demo vertical composition.

---

### Render a database project

```bash
npm run render:project
```

Runs the manual project rendering workflow.

---

## 🔐 Security and data handling

Security is treated as an architectural concern rather than a marketing feature.

The current repository excludes local or sensitive runtime data such as:

```text
.env files
SQLite database files
generated uploads
rendered MP4 files
temporary files
Next.js build output
generated Prisma client files
```

Current defensive measures include:

- environment-based database configuration;
- server-side validation of imported questions;
- transactional bulk imports;
- duplicate-content checks;
- image size limits;
- binary image-signature detection;
- generated UUID-based upload filenames;
- strict framing bounds;
- validation before rendering;
- render output restricted to the expected render directory;
- path-boundary validation before reading or deleting rendered files.

Real credentials such as:

```text
API keys
passwords
private keys
access tokens
authentication secrets
```

must never be committed to the repository.

They should be provided through environment variables or a production secret-management service.

---

### ⚠️ Current security scope

NexoQuiz is currently a **local-first application under active development**.

The project does **not** currently present the following as production-ready features:

- user authentication;
- multi-user authorization;
- workspace isolation;
- cloud object storage;
- production secret management;
- rate limiting;
- distributed render workers.

These controls must be implemented before exposing the application as a public multi-user SaaS.

This distinction is intentional: unfinished security functionality should never be represented as already implemented.

---

## 🎨 NexoQuiz redesign

The application is currently transitioning from its original development interface to the official NexoQuiz design system.

The new visual direction focuses on:

- warm cream backgrounds;
- off-white surfaces;
- forest green as the primary brand color;
- yellow editorial accents;
- simple and human interface design;
- compact creator workflows;
- clear information hierarchy;
- responsive layouts;
- accessible controls.

The platform UI and the generated quiz-video design are intentionally treated as separate design systems.

```text
NexoQuiz application design
             ≠
Quiz video template design
```

This allows the application itself to remain visually consistent while users customize the appearance of generated videos.

---

## 🗺️ Roadmap

Development is being approached incrementally so that working functionality is not replaced by superficial mock implementations.

### Current

- functional project persistence;
- quiz editor;
- bulk question import;
- three-answer model;
- text and image answer modes;
- image uploads;
- image framing;
- vertical rendering;
- horizontal rendering;
- Remotion preview;
- real MP4 generation;
- render progress;
- render history;
- regression tests;
- NexoQuiz UI redesign.

### Next

- complete NexoQuiz dashboard redesign;
- redesigned project editor;
- reusable video templates;
- question reordering;
- expanded visual customization;
- configurable video backgrounds;
- configurable typography;
- countdown styles;
- text animations;
- responsive editor experience.

### Future

- voice generation;
- audio uploads;
- browser voice recording;
- music library;
- reusable media library;
- authentication;
- Google sign-in;
- workspace isolation;
- private cloud storage;
- production render workers;
- render queue;
- subscription and usage management.

---

## 📐 Engineering principles

### Preserve working behavior

A redesign should not require rewriting a stable video engine.

---

### Keep one source of truth

Preview and final rendering should consume the same core project and timing data.

---

### Validate untrusted input

Browser validation improves UX.

Server-side validation protects the application.

Both have different responsibilities.

---

### Prefer explicit domain rules

A NexoQuiz question currently has:

```text
A
B
C
```

Invalid states should be rejected instead of silently accepted.

---

### Keep secrets outside source control

Credentials belong in environment configuration or a secret manager.

Never inside source files.

---

### Prefer incremental changes

Features, fixes, tests, documentation and architectural changes should be separated into meaningful commits whenever possible.

---

### Avoid fake integrations

A button should not pretend that AI, authentication, billing, TTS or another external integration works when the real integration has not been implemented.

---

### Protect before refactoring

Critical behavior should be tested before a major refactor or redesign.

That allows the interface to change without silently changing the video engine.

---

## 📊 Current status

NexoQuiz is under active development.

The core quiz-to-video pipeline is already functional:

```text
Project
   ↓
Questions
   ↓
A / B / C
   ↓
Images
   ↓
Timing
   ↓
Preview
   ↓
Remotion
   ↓
MP4
```

The current development phase is focused on transforming the original development interface into the complete NexoQuiz product experience while preserving the existing rendering behavior.

---

## 👨‍💻 Author

**Volcy Salony**

Software Engineering student focused on full-stack development, backend engineering and building practical software products.

[GitHub](https://github.com/volcysalony) · [LinkedIn](https://www.linkedin.com/in/volcysalony/)

---

<div align="center">

### NexoQuiz 🎬

**Structured content. Reusable compositions. Programmatic video.**

Built as a hands-on software engineering project.

</div>