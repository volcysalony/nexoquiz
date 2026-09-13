<div align="center">

# NexoQuiz

### Create structured quiz videos from questions, images and reusable video compositions.

NexoQuiz is a full-stack web application for building and rendering quiz videos for short-form and horizontal content. It combines a structured quiz editor, bulk question import, media handling and programmatic video generation with Remotion.

<br />

![Next.js](https://img.shields.io/badge/Next.js-16.3-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Remotion](https://img.shields.io/badge/Remotion-4-0B84F3?style=flat-square)
![Prisma](https://img.shields.io/badge/Prisma-7-2D3748?style=flat-square&logo=prisma&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-Local-003B57?style=flat-square&logo=sqlite&logoColor=white)
![Status](https://img.shields.io/badge/status-active%20development-166534?style=flat-square)

</div>

---

## About the project

Creating quiz videos manually becomes repetitive very quickly: every question needs the same visual structure, timing, alternatives, answer reveal, images and export configuration.

NexoQuiz was created to automate that workflow.

Instead of manually editing every scene in a traditional video editor, the application stores quiz content as structured data and transforms it into a reusable video composition.

The core workflow is:

```text
Project
   ↓
Questions + A / B / C
   ↓
Images and visual configuration
   ↓
Timing and answer reveal
   ↓
Remotion composition
   ↓
Preview
   ↓
MP4 render
```

The project is being developed as both a real productivity tool and a software engineering portfolio project, with emphasis on maintainability, validation, regression protection and incremental architecture.

---

## ✨ Current features

### Quiz projects

- Create and manage quiz projects.
- Vertical `1080 × 1920` compositions.
- Horizontal `1920 × 1080` compositions.
- Configurable FPS and timing.
- Independent background color per question.

### Questions and answers

Each question follows a strict three-option model:

```text
Question

A — First option
B — Second option
C — Third option

Correct answer — A / B / C
```

Supported answer modes:

| Mode | Description |
| --- | --- |
| `TEXT` | Text-only alternatives |
| `IMAGE` | Image-based alternatives |
| `IMAGE_TEXT` | Images combined with text |

### Bulk question import

Large quizzes do not need to be created one question at a time.

NexoQuiz includes a parser capable of importing structured quiz text in bulk.

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

The current parser includes:

- support for up to 200 questions per import;
- required A/B/C alternatives;
- correct-answer validation;
- duplicate alternative detection;
- duplicate question detection;
- question and option length limits;
- server-side revalidation;
- append and replace workflows;
- transactional persistence.

The backend validates imported content again instead of trusting client-side validation.

### Image handling

Questions and alternatives can contain images.

Supported formats currently include:

- JPEG;
- PNG;
- WebP;
- GIF;
- AVIF.

Uploads are limited to 8 MB and their real binary signatures are inspected instead of relying only on the filename or browser-provided MIME type.

Each image can also store framing metadata:

```text
fit
positionX
positionY
scale
```

This allows the original image to remain unchanged while the video controls how it is displayed.

### Video preview

The application uses Remotion Player to preview quiz compositions inside the editor.

The preview and final renderer consume the same quiz data contract, reducing the risk of the editor showing a result that differs from the exported video.

### Video rendering

NexoQuiz currently renders real MP4 files using Remotion's rendering pipeline.

The render process includes:

```text
Project data
    ↓
QuizVideoProps
    ↓
Composition selection
    ↓
Remotion bundle
    ↓
Composition metadata
    ↓
H.264 render
    ↓
MP4 file
```

Rendering supports:

- vertical and horizontal compositions;
- H.264 output;
- persisted render status;
- real render progress;
- render history;
- failed-render state;
- MP4 download;
- render deletion.

---

## 🧱 Architecture

The application currently follows a full-stack Next.js architecture.

```text
┌─────────────────────────────────────────┐
│                Next.js                  │
│                                         │
│   Pages / Components / Server Actions   │
└───────────────────┬─────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────┐
│             Application Logic           │
│                                         │
│  Questions • Import • Media • Projects  │
└──────────────┬───────────────┬──────────┘
               │               │
               ▼               ▼
        ┌────────────┐   ┌──────────────┐
        │   Prisma   │   │   Remotion   │
        │            │   │              │
        │   SQLite   │   │ Player       │
        └────────────┘   │ Renderer     │
                         └──────┬───────┘
                                │
                                ▼
                            MP4 output
```

A key design decision is to keep the quiz domain independent from the UI whenever possible.

Project data is transformed into a shared video contract before being passed to Remotion:

```text
Database
   ↓
getProjectForRender()
   ↓
QuizVideoProps
   ↓
┌───────────────┬───────────────┐
│    Preview    │    Renderer   │
│ Remotion      │ Remotion      │
│ Player        │ MP4           │
└───────────────┴───────────────┘
```

This makes it easier to evolve the interface without rewriting the video engine.

---

## Tech stack

| Area | Technology |
| --- | --- |
| Framework | Next.js 16 |
| UI | React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Video | Remotion 4 |
| ORM | Prisma 7 |
| Database | SQLite |
| Validation | Zod + domain validation |
| Icons | Lucide React |
| Spreadsheet parsing | SheetJS / XLSX |
| Testing | Node.js Test Runner + `tsx` |
| Rendering | Remotion Bundler + Renderer |

---

## Project structure

```text
nexoquiz/
│
├── prisma/
│   ├── migrations/
│   ├── schema.prisma
│   └── seed.ts
│
├── scripts/
│   ├── audit-baseline.ts
│   ├── render-project.ts
│   └── test-project-render.ts
│
├── src/
│   ├── app/
│   │   ├── api/
│   │   └── projetos/
│   │
│   ├── components/
│   │   ├── layout/
│   │   ├── projects/
│   │   ├── questions/
│   │   └── renders/
│   │
│   ├── database/
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

## 🧪 Regression protection

The video engine existed before the current NexoQuiz redesign, so preserving its behavior is treated as a requirement rather than an assumption.

Regression tests currently protect important rules such as:

- exactly three alternatives per question;
- valid correct-answer indexes;
- intro, countdown and reveal timing;
- total video duration;
- answer reveal timing;
- compatibility with `TEXT`, `IMAGE` and `IMAGE_TEXT`;
- bulk quiz parsing;
- missing alternatives;
- unsupported fourth alternatives;
- duplicated alternatives;
- duplicated questions;
- accepted input formats.

Run the test suite with:

```bash
npm test
```

The project also includes a baseline audit against the local database:

```bash
npm run audit:baseline
```

And a render-data inspection command:

```bash
npm run test:project-render
```

---

## Getting started

### Requirements

- Node.js 20+
- npm
- Git

Clone the repository:

```bash
git clone https://github.com/volcysalony/nexoquiz.git
cd nexoquiz
```

Install dependencies:

```bash
npm install
```

Create a local `.env` file and configure the SQLite connection:

```env
DATABASE_URL="file:./prisma/dev.db"
```

Generate the Prisma client:

```bash
npx prisma generate
```

Apply the database migrations:

```bash
npx prisma migrate dev
```

Optional: populate the local database with development data:

```bash
npx prisma db seed
```

Start the application:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

---

## Useful commands

```bash
# Development
npm run dev

# Production build
npm run build

# Regression tests
npm test

# Baseline audit
npm run audit:baseline

# Inspect project data prepared for Remotion
npm run test:project-render

# Open Remotion Studio
npm run remotion

# Render the demo composition
npm run render:quiz
```

---

## 🔐 Security considerations

Security is treated as an architectural concern, not as a UI feature.

The repository intentionally excludes local and sensitive runtime data such as:

```text
.env files
SQLite databases
generated uploads
rendered videos
temporary files
Next.js build artifacts
```

Current defensive measures include:

- server-side validation of imported questions;
- transactional bulk imports;
- file-size limits for image uploads;
- binary image-signature validation;
- generated filenames instead of trusting uploaded filenames;
- restricted supported image formats;
- validation before video rendering;
- environment-based database configuration;
- local runtime files excluded from version control.

Real secrets such as API keys, passwords and access tokens must never be committed to the repository. They belong in environment variables or a production secret-management system.

> **Current security scope**
>
> NexoQuiz is still in active development and currently uses a local-first architecture. Authentication, multi-user authorization and private cloud media storage are not presented as implemented features yet.
>
> Those controls must be added before exposing the application as a public multi-user SaaS.

---

## Product direction

The current development roadmap focuses on evolving the working video engine without replacing functionality that is already stable.

Planned areas include:

```text
NexoQuiz UI redesign
        ↓
Reusable video templates
        ↓
Audio and voice workflows
        ↓
Video design customization
        ↓
Media library
        ↓
Authentication and authorization
        ↓
Private media storage
        ↓
Production render infrastructure
```

Future features will be added incrementally and should not be represented as complete until their real implementation is available.

---

## Engineering principles

NexoQuiz is developed around a few practical principles:

**Preserve working behavior.**  
A visual redesign should not require rewriting a stable rendering engine.

**One source of truth for video behavior.**  
Timing, questions and rendering data should not diverge between the editor and exported video.

**Validate at system boundaries.**  
Client-side validation improves UX, but server-side code must validate untrusted input again.

**Prefer explicit domain rules.**  
A quiz question has A, B and C. Invalid states should be rejected instead of silently accepted.

**Keep secrets out of source control.**  
Credentials belong in environment configuration, never inside the repository.

**Ship changes incrementally.**  
Features, fixes, tests and architectural changes are committed separately whenever possible.

---

## Current status

NexoQuiz is under active development.

The core quiz-to-video pipeline is functional, including project data, questions, image-based answer modes, preview and local MP4 rendering.

The product interface is currently being redesigned around the new NexoQuiz identity. Additional product features such as authentication, cloud storage, advanced templates and audio workflows remain part of the development roadmap.

---

## Author

**Volcy Salony**

Software Engineering student focused on full-stack development and software engineering.

[GitHub](https://github.com/volcysalony) · [LinkedIn](https://www.linkedin.com/in/volcysalony/)

---

<div align="center">

Built as a hands-on software engineering project focused on turning structured content into programmatically generated video.

</div>