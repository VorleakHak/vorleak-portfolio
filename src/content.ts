/**
 * ALL SITE TEXT LIVES HERE.
 *
 * Edit words in this file. You shouldn't need to touch layout code.
 *
 * Conventions:
 *  - Any string that starts with "TODO:" shows up on the site as a yellow
 *    placeholder, so an unfinished spot is hard to miss. Replace the whole
 *    string (including "TODO:") with your real text.
 *  - Image `src` paths point inside /public. Drop a file with that exact name
 *    into /public and it appears automatically. Until then a labeled
 *    placeholder block shows instead.
 *  - Run `npm run todos` to list every remaining TODO.
 */

// ---------- Types ----------

export type Media = {
  /** Path inside /public, e.g. "/images/memory-lab/01-welcome.jpg" */
  src: string;
  /** Text shown on the placeholder block until the real image exists */
  label: string;
  /** Alt text for screen readers. Describe what the image shows. */
  alt: string;
  /** Optional display tweaks: CSS aspect ratio ("4 / 3"), tablet frame, or "contain" to show the whole image uncropped */
  ratio?: string;
  frame?: 'none' | 'tablet';
  fit?: 'cover' | 'contain';
};

export type Block =
  | { type: 'p'; text: string }
  | { type: 'list'; items: string[]; ordered?: boolean }
  | { type: 'callout'; tone?: 'insight' | 'decision'; title: string; text?: string; items?: string[] }
  | { type: 'cards'; items: { title: string; text: string }[] }
  | { type: 'figures'; items: Media[] }
  | { type: 'todo'; text: string }
  | { type: 'link'; label: string; href: string }
  | { type: 'walkthrough'; items: (Media & { caption: string })[] }
  | { type: 'reflection'; prompts: string[] }
  /** Big headline numbers */
  | { type: 'stats'; items: { value: string; label: string }[] }
  /** Simple data table. First column is treated as the row header. */
  | { type: 'table'; caption: string; headers: string[]; rows: string[][] };

export type Section = {
  /** Used for the anchor link + progress tracker */
  id: string;
  heading: string;
  blocks: Block[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  /** Short name for cards/nav */
  shortTitle: string;
  oneLiner: string;
  /** Small pill on the card, e.g. "In progress" */
  badge?: string;
  /** What this project proves (chips on the home page card) */
  tags: string[];
  /** Card color theme */
  theme: 'tangerine' | 'sky' | 'lilac' | 'butter';
  /** 'featured' = big rows at the top of Work (most relevant). 'more' = compact cards under "Other experience". */
  tier?: 'featured' | 'more';
  cover: Media;
  snapshot: { label: string; value: string }[];
  sections: Section[];
};

// ---------- Site-wide ----------

export const site = {
  name: 'Vorleak Hak',
  title: 'Vorleak Hak: Product, design research & human factors',
  description:
    'Human Factors Psychology (HCI) student at Tufts. Case studies in accessible bilingual service design, gamified learning, and VR user research.',
  /** Social preview image (1200×630). Put the file at /public/og-image.png */
  ogImage: '/og-image.png',
  email: 'muninvorleak.hak@tufts.edu',
  linkedin: 'https://www.linkedin.com/in/vorleakhak/',
  /** Put your resume PDF at /public/resume.pdf (no phone number on it!) */
  resume: '/resume.pdf',
};

// ---------- Hero ----------

export const hero = {
  greeting: "Hi, I'm Vorleak.",
  // Wrap words in *asterisks* to set them in italic with the ochre highlight.
  headline: 'I turn how people think into *products they love to use.*',
  // Alternate headline, swap in if you prefer:
  // 'Human factors researcher building products people actually come back to.'
  subhead: [
    'Human Factors Psychology (HCI) @ Tufts',
    'Engineering Management & Entrepreneurship minor',
    'User research & product',
  ],
  /** The "What I bring" strip under the intro. Each links to the case study that proves it. */
  strengthsHeading: 'What I bring',
  strengths: [
    { title: 'Understands users deeply', text: 'Usability testing, interviews & qualitative analysis', href: '/work/owl-head' },
    { title: 'Gets learning & motivation', text: 'Designs games that teach by doing', href: '/work/memory-lab' },
    { title: 'Designs for trust & access', text: 'Bilingual, accessible, urgency-aware intake', href: '/work/la-colaborativa' },
    { title: 'Works across teams', text: 'Clients, clinicians, engineers & designers', href: '#research' },
  ],
};

// ---------- Section headings on the home page ----------

export const home = {
  work: {
    eyebrow: 'Featured work',
    heading: 'Selected *case studies*',
    lead: 'How I frame messy problems, make tradeoffs, and ship. Each one covers the problem, the research, the decisions, and what I learned.',
  },
  research: {
    eyebrow: 'Research & design',
    heading: 'Where I’ve *done the research*',
    lead: 'Hands-on user testing, qualitative coding and thematic analysis, and usability work, in VR, healthcare, and accessibility.',
  },
  experience: {
    eyebrow: 'Also',
    heading: 'Other *experience*',
    projectsLabel: 'Strategy project',
    rolesLabel: 'Roles',
  },
  skills: {
    eyebrow: 'Toolkit',
    heading: 'Skills *& tools*',
    lead: 'What I use to research, frame, and ship.',
  },
};

// ---------- About ----------
// Shown in the opening section, right under the headline, so it's the first thing visitors read.

export const about = {
  paragraphs: [
    "I'm a junior at Tufts studying Human Factors Psychology (HCI), driven to make a real, positive difference in people's lives. Raised in Phnom Penh, I've lived in Japan and now the U.S., so I've learned to see products through very different users' eyes. I turn research into product decisions, from VR usability testing to qualitative healthcare interviews to a bilingual intake system now used by a nonprofit. My approach: understand people, imagine what's possible, then build it.",
  ],
  headshot: {
    src: '/images/headshot.jpg',
    label: 'Headshot photo',
    alt: 'Portrait of Vorleak Hak smiling outdoors in front of palm trees',
  } satisfies Media,
  /** Small caption under the photo */
  caption: "Fig. 01 — Vorleak Hak, Tufts '28",
  facts: [
    "Tufts '28 · Human Factors Psychology (HCI)",
    '4 languages: English, Khmer, Thai, French',
    'Based in Boston area',
    'Off the clock: musical theatre, culinary enthusiast & dog lover',
  ],
};

// ---------- Case studies ----------
// Order here = order on the home page. The first one is shown largest.

export const caseStudies: CaseStudy[] = [
  // ===== 1. La Colaborativa (featured first) =====
  // Sources: ENP 161 final report + final presentation + resume.
  // Never name real staff or the client contact on the site (persona names are fictional).
  {
    slug: 'la-colaborativa',
    title: 'Accessible Bilingual Intake: Kiosk + Paper',
    shortTitle: 'La Colaborativa × Tufts',
    oneLiner:
      'Redesigned the front door of a community nonprofit that sees up to 500 walk-ins a day: a touchscreen kiosk and a bilingual paper form that flag emergencies at first contact. Both passed all 5 usability criteria and launched in June 2026, connected to the organization’s Salesforce CRM.',
    badge: 'Launched',
    tags: ['Service design', 'Accessibility', 'Usability testing'],
    theme: 'sky',
    cover: {
      src: '/images/la-colaborativa/kiosk-photo.png',
      label: 'La Colaborativa: kiosk on its stand',
      alt: 'The La Colaborativa check-in kiosk on its stand, showing the screen "Are you a new or existing member?" with New Member and Existing Member buttons',
      ratio: '5 / 4',
    },
    snapshot: [
      { label: 'Role', value: 'Project Manager / Client Communication Manager & Designer' },
      { label: 'Client', value: 'La Colaborativa, Chelsea, MA' },
      { label: 'Context', value: 'ENP 161 Human Factors Product Design, client project' },
      { label: 'Timeline', value: 'Jan – June 2026' },
      { label: 'Methods', value: 'Site visit, staff interviews, document + literature review, personas, usability testing' },
      { label: 'Tools', value: 'Figma (kiosk prototype), CAD (kiosk stand), print form design' },
      { label: 'Status', value: 'Launched June 2026: paper form + kiosk in use, integrated with Salesforce' },
    ],
    sections: [
      {
        id: 'problem',
        heading: 'The problem',
        blocks: [
          {
            type: 'p',
            text: 'La Colaborativa is a Latina-led nonprofit in Chelsea, Massachusetts that has served the Latinx immigrant community since 1988. Housing, food, immigration, legal, and healthcare support all start at one front door, with up to 500 walk-ins a day.',
          },
          {
            type: 'p',
            text: 'That front door was entirely manual. There was no standard way to capture information, no way to flag the most urgent cases, and no reliable link to the organization’s database. An earlier form-based process had been abandoned because it was too slow under pressure.',
          },
          {
            type: 'callout',
            tone: 'insight',
            title: 'The constraint',
            text: 'People arrive in crisis and staff have almost no margin, so a slow or confusing intake isn’t an inconvenience. It’s a barrier to getting help.',
          },
          {
            type: 'p',
            text: 'We set four goals: reduce front desk burden, improve accessibility, flag urgency at first contact, and build toward integration with the database staff already use.',
          },
        ],
      },
      {
        id: 'users',
        heading: 'Users & research',
        blocks: [
          {
            type: 'list',
            items: [
              'Site visit: observed the intake area, the outdoor entry space, the front desk workflow in real time, and how people were feeling as they arrived.',
              'Semi-structured interviews with front desk staff and case managers. The open format surfaced pain points a survey would have missed.',
              'Review of internal triage documentation covering more than a dozen service tracks.',
              'Literature review: human factors, Universal Design, crisis communication, and medical triage models.',
            ],
          },
          {
            type: 'cards',
            items: [
              { title: 'Intake is emotionally high-stakes', text: 'Staff calm people down one by one. The process itself gave them no help, so the effort fell on people instead of the system.' },
              { title: 'Language and literacy are barriers', text: 'Many community members can’t complete a text-heavy form, on paper or on screen, without icons, visuals, and translated content.' },
              { title: 'Urgency relied on intuition', text: 'Nothing at intake separated an emergency from a routine visit, often during several conversations at once.' },
              { title: 'Trust comes first', text: 'People who feel disoriented or watched at check-in are less likely to engage with services at all.' },
            ],
          },
          {
            type: 'p',
            text: 'We turned the research into three personas: a Spanish-speaking single mother with limited tech comfort who wants to feel heard and guided; a bilingual 18-year-old, first-generation student who is wary of sharing personal data; and a front desk staff member who wants to move people to the right service faster.',
          },
        ],
      },
      {
        id: 'process',
        heading: 'Process',
        blocks: [
          {
            type: 'p',
            text: 'As project manager, I kept the project on track and was the bridge between La Colaborativa and our team:',
          },
          {
            type: 'list',
            items: [
              'Ran weekly communication with 5+ client and project team members, turning community needs and staff feedback into design requirements.',
              'Designed and refined 15–20 bilingual "Calmline" communication templates, written for clarity, trust, and a clear next step.',
              'Folded user feedback and testing insights back into the intake flow.',
              'Led the June 2026 launch: met with La Colaborativa staff to walk them through the paper form and kiosk and guide them through the switch to the new intake process.',
            ],
          },
          {
            type: 'figures',
            items: [
              {
                src: '/images/la-colaborativa/team-session.jpg',
                label: 'A working session with La Colaborativa staff and our team',
                alt: 'Vorleak taking a selfie at a conference table with the project team and La Colaborativa staff, a La Colaborativa banner reading "Housing is a Human Right" in the background',
                ratio: '4 / 3',
              },
            ],
          },
          {
            type: 'callout',
            tone: 'decision',
            title: 'Decision: two front doors, one system',
            text: 'A touchscreen kiosk for people comfortable with it, and a bilingual paper form as an equal path for anyone who isn’t. Both ask the same questions and flag urgency the same way.',
          },
          {
            type: 'p',
            text: 'Reviewing the first paper prototype surfaced six problems. Each one changed the design:',
          },
          {
            type: 'cards',
            items: [
              { title: 'Language was buried → Step 1', text: 'Language choice moved to the very first step, written in each language’s own script.' },
              { title: 'Text too small → bigger, one page', text: 'All text enlarged, and each language fits on a single page.' },
              { title: 'Tiny bubbles → doubled', text: 'Bigger targets for unsteady hands, and fewer scanning errors.' },
              { title: 'Color-only sections → contrast', text: 'Structure carried by shading and line weight, so it works for colorblind users.' },
              { title: 'Vague urgency → border weight', text: 'Emergency, Urgent, and Routine boxes readable at a glance, without color.' },
              { title: 'No next step → hand-off note', text: '“When finished, please hand this form to a staff member. You will be assisted shortly.”' },
            ],
          },
          {
            type: 'figures',
            items: [
              {
                src: '/images/la-colaborativa/paper-form-en.png',
                label: 'Final paper form, English side',
                alt: 'English side of the client intake form: preferred language first, then member type, three urgency boxes with heavy, medium, and light borders, personal information, services needed, household, and a hand-off note',
                ratio: '3 / 4',
                fit: 'contain',
              },
              {
                src: '/images/la-colaborativa/paper-form-es.png',
                label: 'Final paper form, Spanish side',
                alt: 'Spanish side of the intake form, Formulario de Admisión, mirroring the English layout',
                ratio: '3 / 4',
                fit: 'contain',
              },
            ],
          },
        ],
      },
      {
        id: 'built',
        heading: 'What we built',
        blocks: [
          {
            type: 'p',
            text: 'The kiosk flow, screen by screen, with the reasoning behind each one:',
          },
          { type: 'link', label: 'Try the live prototype', href: 'https://dog-jade-22308515.figma.site/' },
          {
            type: 'walkthrough',
            items: [
              {
                src: '/images/la-colaborativa/kiosk-01-language.png',
                label: 'Choose a language, or ask for audio',
                alt: 'Kiosk welcome screen: "Choose your language / Elige tu idioma" with English and Español buttons, and an Audio Help / Ayuda de Audio button',
                caption: 'Language is the first choice, labeled in both languages. Audio Help is right there for anyone who can’t read the screen.',
                frame: 'none',
                ratio: '1 / 1',
                fit: 'contain',
              },
              {
                src: '/images/la-colaborativa/kiosk-02-member-type.png',
                label: 'New or returning',
                alt: 'Kiosk screen "Are you a new or existing member?" with large New Member and Existing Member buttons and a Step 1 of 3 progress bar',
                caption: 'Two big choices with icons, and a “Step 1 of 3” counter, so people always know how much is left.',
                frame: 'none',
                ratio: '1 / 1',
                fit: 'contain',
              },
              {
                src: '/images/la-colaborativa/kiosk-03-fill-mode.png',
                label: 'Type it, or say it',
                alt: 'Kiosk screen "How would you like to fill out your form?" with Fill Out Myself and Audio-Assisted options',
                caption: 'Audio-assisted mode reads each question aloud and lets people speak their answers, for clients who don’t read or write.',
                frame: 'none',
                ratio: '1 / 1',
                fit: 'contain',
              },
              {
                src: '/images/la-colaborativa/kiosk-04-urgency.png',
                label: 'How urgent is it?',
                alt: 'Kiosk screen "How urgent is your situation?" with Emergency, Urgent, and Routine options, each with an icon and examples',
                caption: 'Emergency, Urgent, or Routine, with plain examples for each. Picking Emergency automatically alerts staff, so nobody in crisis has to explain it at the desk.',
                frame: 'none',
                ratio: '1 / 1',
                fit: 'contain',
              },
              {
                src: '/images/la-colaborativa/kiosk-05-form.png',
                label: 'Only the essentials',
                alt: 'Client intake form screen with an Emergency tag, name, date of birth, phone, email, and an address search field',
                caption: 'Short, structured fields, with the urgency tag carried along. Address search cuts down on typing.',
                frame: 'none',
                ratio: '1 / 1',
                fit: 'contain',
              },
              {
                src: '/images/la-colaborativa/kiosk-06-confirmation.png',
                label: 'You’ve been heard',
                alt: 'Thank-you screen: "A case manager will assist you IMMEDIATELY. Please remain at the front desk," with an option to send a confirmation text and a "What to bring" note',
                caption: 'The emergency confirmation was the favorite feature in testing: instant reassurance, plus a confirmation text and what to bring.',
                frame: 'none',
                ratio: '1 / 1',
                fit: 'contain',
              },
            ],
          },
          {
            type: 'p',
            text: 'The kiosk itself is a freestanding iPad stand. We set the screen at 4.5 feet so it’s reachable for older adults, shorter clients, and parents with kids. Version 2 routes the charging cable through a hollow pole, so it can’t be tripped over or unplugged.',
          },
          {
            type: 'figures',
            items: [
              {
                src: '/images/la-colaborativa/kiosk-cad-v1.png',
                label: 'Kiosk stand, version 1',
                alt: 'CAD render of the freestanding kiosk: a round base, a tall pole, and an angled iPad holder',
                ratio: '4 / 3',
                fit: 'contain',
              },
              {
                src: '/images/la-colaborativa/kiosk-cad-v2.png',
                label: 'Version 2: cable runs inside a hollow pole',
                alt: 'Cross-section CAD render of the kiosk pole with arrows pointing to the cable entry points at the top and bottom',
                ratio: '4 / 3',
                fit: 'contain',
              },
            ],
          },
        ],
      },
      {
        id: 'outcome',
        heading: 'Outcome & impact',
        blocks: [
          {
            type: 'callout',
            tone: 'insight',
            title: 'In use today',
            text: 'Launched in June 2026. La Colaborativa adopted both the paper form and the kiosk, and integrated intake with its Salesforce CRM. The organization reports a smoother front desk and more efficient work for staff.',
          },
          {
            type: 'p',
            text: 'Before launch, we usability-tested both prototypes against five success criteria we set up front, using persona-based scenarios: both client personas on each format, and the staff persona reviewing what came in.',
          },
          {
            type: 'stats',
            items: [
              { value: '5/5', label: 'success criteria met, by both prototypes' },
              { value: '100%', label: 'completed without assistance (3/3 on each)' },
              { value: '~3.75', label: 'minutes, average on paper (target: 5 or less)' },
              { value: '~4.5', label: 'minutes, average on the kiosk' },
            ],
          },
          {
            type: 'table',
            caption: 'Results against success criteria',
            headers: ['Criterion', 'Target', 'Paper form', 'Kiosk'],
            rows: [
              ['Complete without assistance', '≥80%', '3/3 (100%) ✓', '3/3 (100%) ✓'],
              ['Average completion time', '≤5 min', '~3.75 min ✓', '~4.5 min ✓'],
              ['Errors per user', '≤2', '0–1 ✓', '0 ✓'],
              ['Understand next steps', '>50%', '2/3 ✓', '3/3 ✓'],
              ['Hesitation points per user', '≤3', '0–3 ✓', '0–3 ✓'],
            ],
          },
          {
            type: 'callout',
            tone: 'insight',
            title: 'What staff valued most',
            text: 'The three-tier urgency flag. Border weights let the triage team sort a stack of forms in seconds, and on the kiosk an emergency alerts staff automatically.',
          },
          {
            type: 'callout',
            tone: 'decision',
            title: 'Gaps testing exposed',
            items: [
              'Typing open answers on a touchscreen was hard under stress. Lean on audio and selection over free text.',
              'The employment question confused people with informal work. Reword the options.',
              'The paper form needs a timestamp field for staff.',
              'The prototypes had no live Salesforce connection. The launched version now feeds intake directly into La Colaborativa’s Salesforce CRM.',
            ],
          },
        ],
      },
    ],
  },

  // ===== 2. The Memory Lab =====
  // Source: the live game (vorleakhak.github.io/PSY53---Memory-Lab-Mini-Game).
  {
    slug: 'memory-lab',
    title: 'The Memory Lab',
    shortTitle: 'PSY 53 · Learning game',
    oneLiner:
      'A browser game with six bite-sized experiments that let players catch their own memory in the act, then explain the psychology behind what just happened.',
    tags: ['Learning design', 'Gamification', 'Built & shipped'],
    theme: 'tangerine',
    cover: {
      src: '/images/memory-lab/04-reveal.jpg',
      label: 'Memory Lab: results screen',
      alt: 'Memory Lab results screen: "Experiment Complete!" with scores of 8/12 recalled, 3/3 primacy, 3/3 recency, a color-coded memory curve, and a Serial Position Effect explanation',
      ratio: '16 / 10',
    },
    snapshot: [
      { label: 'Role', value: 'Solo researcher, designer & builder' },
      { label: 'Context', value: 'Final project for PSY 53, Tufts' },
      { label: 'Timeline', value: 'Jan – May 2026' },
      { label: 'Format', value: 'Interactive browser game, 6 experiments' },
      { label: 'Tools', value: 'Figma + Figma Make (prototype); HTML, CSS, JavaScript; GitHub Pages' },
      { label: 'Status', value: 'Live and playable' },
    ],
    sections: [
      {
        id: 'problem',
        heading: 'The problem',
        blocks: [
          {
            type: 'p',
            text: 'Memory is the part of psychology I find most fascinating: how much we forget, how confidently we misremember, and how little of it we notice. The Memory Lab started as my final project for PSY 53 and became one of my passion projects.',
          },
          {
            type: 'p',
            text: 'Memory research is full of effects that are easy to define and hard to believe: you remember the start and end of a list better than the middle, and a false statement starts to feel true just because you’ve seen it before.',
          },
          {
            type: 'p',
            text: 'Reading about an effect is not the same as noticing it in yourself. I wanted to build something where the player’s own results are the lesson.',
          },
        ],
      },
      {
        id: 'users',
        heading: 'Users & research',
        blocks: [
          {
            type: 'p',
            text: 'The learner: a student meeting these concepts for the first time, with a few minutes to spare and no patience for a lecture.',
          },
          {
            type: 'callout',
            tone: 'insight',
            title: 'Key insight',
            text: 'People trust their own data. Show them their memory curve first, and the explanation lands as an “oh, that’s why.”',
          },
          {
            type: 'p',
            text: 'I had 25 people play it, which let me see whether the “catch yourself” moment actually happened outside my own head.',
          },
        ],
      },
      {
        id: 'process',
        heading: 'Process',
        blocks: [
          {
            type: 'p',
            text: 'I prototyped the whole experience in Figma before writing any code. Planning up front kept the scope realistic for one semester:',
          },
          {
            type: 'list',
            items: [
              'A screen-by-screen build guide and a flowchart of how players move through the lab.',
              'A color palette and typography system, so every experiment feels like part of one product.',
              'A component plan: reusable pieces (cards, progress bars, results screens) instead of six one-off designs.',
            ],
          },
          {
            type: 'p',
            text: 'I picked six classic memory effects and grouped them into three “folders,” so the lab feels explorable rather than like a test:',
          },
          {
            type: 'cards',
            items: [
              { title: 'Memory Curve', text: 'Serial position effect: why you remember the first and last words best.' },
              { title: 'Recall vs. Recognition', text: 'Why picking the right answer is easier than producing it.' },
              { title: 'Depth Dive', text: 'Levels of processing: thinking about meaning makes words stick.' },
              { title: 'Cue Match', text: 'Encoding specificity: the cue has to match how the memory was stored.' },
              { title: 'Priming Lab', text: 'Semantic priming: hidden words speed up your brain without you noticing.' },
              { title: 'Illusion of Truth', text: 'Familiarity makes false statements feel true.' },
            ],
          },
          {
            type: 'callout',
            tone: 'decision',
            title: 'Decision: play first, explain second',
            text: 'Every experiment runs the same loop: play a short task, see your own results, then get a reveal that names the effect and explains why it happened.',
          },
          {
            type: 'callout',
            tone: 'decision',
            title: 'Decision: bite-sized and replayable',
            text: 'Each experiment takes a couple of minutes and stands on its own, with a “Try Another” button at the end, so players can stop anytime or keep going.',
          },
        ],
      },
      {
        id: 'built',
        heading: 'What I built',
        blocks: [
          { type: 'link', label: 'Play the Memory Lab', href: 'https://vorleakhak.github.io/PSY53---Memory-Lab-Mini-Game/' },
          {
            type: 'walkthrough',
            items: [
              {
                src: '/images/memory-lab/01-welcome.jpg',
                label: 'A warm welcome',
                alt: 'Memory Lab welcome screen: "A Working Memory Project," the title Memory Lab, a one-line description of six interactive experiments, and an Open the Lab button',
                caption: 'One sentence and one button. The promise is clear: six experiments, each revealing something happening in your own brain.',
                frame: 'none',
                ratio: '16 / 10',
                fit: 'contain',
              },
              {
                src: '/images/memory-lab/02-lab.jpg',
                label: 'Pick an experiment',
                alt: 'The lab screen: three folders (Recall & Recognition, Context & Encoding, Implicit Memory), with the first folder open showing Memory Curve and Recall vs. Recognition as playing cards',
                caption: 'Experiments live in folders and pop out as playing cards on hover, which makes choosing feel like play instead of a menu.',
                frame: 'none',
                ratio: '16 / 10',
                fit: 'contain',
              },
              {
                src: '/images/memory-lab/03-study.jpg',
                label: 'Play the task',
                alt: 'Memory Curve experiment in progress: the word TROPHY in large type, "Word 3 of 12," and a progress bar',
                caption: 'One word at a time, with a progress bar and clear instructions. Nothing on screen competes with the task.',
                frame: 'none',
                ratio: '16 / 10',
                fit: 'contain',
              },
              {
                src: '/images/memory-lab/04-reveal.jpg',
                label: 'See your results, then the reveal',
                alt: 'Results screen with scores, a color-coded memory curve showing which words were remembered, and a Serial Position Effect explanation',
                caption: 'Your own memory curve comes first, color-coded by beginning, middle, and end. Only then does the reveal name the effect and explain it.',
                frame: 'none',
                ratio: '16 / 10',
                fit: 'contain',
              },
            ],
          },
          {
            type: 'callout',
            tone: 'insight',
            title: 'The product thinking underneath',
            items: [
              'Learn by doing: the experiment is the lesson, not decoration on top of it.',
              'Bite-sized: one concept per experiment, a few minutes each.',
              'Tight feedback loop: play → your results → reveal, every time.',
              'Shipped: a live, playable game anyone can open in a browser.',
            ],
          },
        ],
      },
      {
        id: 'outcome',
        heading: 'Outcome & impact',
        blocks: [
          {
            type: 'stats',
            items: [
              { value: '25', label: 'people played it' },
              { value: 'A+', label: 'final project grade' },
              { value: '6', label: 'experiments across 3 areas of memory' },
              { value: 'Live', label: 'shipped on GitHub Pages' },
            ],
          },
          {
            type: 'callout',
            tone: 'insight',
            title: 'What players said',
            text: 'The most common reaction was surprise: players were caught off guard by how their own memory was tricking them, which is exactly the moment the game was designed to create.',
          },
        ],
      },
    ],
  },

  // ===== 3. Owl Head (Tufts IDEA Lab) =====
  // Sources: resume + lab project description + test protocol.
  // Keep internal links (surveys, spreadsheets) and lab location OFF the site.
  {
    slug: 'owl-head',
    title: 'VR Point-of-View Research',
    shortTitle: 'Tufts IDEA Lab · Owl Head',
    oneLiner:
      'Running an IRB-approved user study on a VR system that expands effective field of view by 50–60%, to learn whether real people can adapt to a view that no longer matches their head.',
    badge: 'Ongoing',
    tags: ['User research', 'Emerging tech (VR)', 'Study design'],
    theme: 'butter',
    cover: {
      src: '/images/owl-head/cover.jpg',
      label: 'Owl Head: VR headset and controllers',
      alt: 'A VR headset with two handheld controllers floating on either side',
      ratio: '16 / 9',
    },
    snapshot: [
      { label: 'Role', value: 'UI/UX Researcher' },
      { label: 'Team', value: 'OwlHead team at the Tufts IDEA Lab, led by Prof. James Intriligator: engineers + me as UI/UX researcher' },
      { label: 'Timeline', value: 'Jan 2026 – Present' },
      { label: 'Methods', value: 'IRB-approved user study: pre/post surveys, randomized timed trials, in-game performance logging' },
      { label: 'Focus', value: 'VR, cognitive adaptability, spatial compression, immersive tech' },
      { label: 'Tools', value: 'Unity VR simulation, VR headset + controllers, Qualtrics, Google Sheets' },
      { label: 'Status', value: 'Ongoing: testing resumes this semester; more trials before conclusions' },
    ],
    sections: [
      {
        id: 'problem',
        heading: 'The problem',
        blocks: [
          {
            type: 'p',
            text: 'In a normal VR headset, the world on screen moves exactly as fast as your head. Owl Head breaks that rule. It remaps point of view (POV) so the view moves at a different speed than your head, letting you see further than your eyes normally could. The goal is faster awareness in situations where quick reactions matter.',
          },
          {
            type: 'figures',
            items: [
              {
                src: '/images/owl-head/cover.svg',
                label: 'Head-synced view vs. remapped POV',
                alt: 'Diagram of a head seen from above: a narrower teal wedge shows the normal head-synced view, and a wider ochre wedge shows the remapped point of view, labeled +50–60% effective field of view',
                ratio: '16 / 10',
              },
            ],
          },
          {
            type: 'p',
            text: 'The engineers had already built a vision expansion system that boosts effective field of view by 50–60%, plus a simulation to test it. The open question was the human one.',
          },
          {
            type: 'callout',
            tone: 'insight',
            title: 'The research question',
            text: 'A wider view sounds like a pure win. It only helps if people can stay oriented, accurate, and comfortable while using it.',
          },
        ],
      },
      {
        id: 'users',
        heading: 'Study design',
        blocks: [
          {
            type: 'p',
            text: 'Participants play a fast number game in VR: spot numbers in the scene and press the left trigger for even, the right trigger for odd. That gives us a measurable task (speed and accuracy) instead of just asking how the view “feels.”',
          },
          {
            type: 'list',
            ordered: true,
            items: [
              'Consent: IRB consent form, then a short briefing',
              'Pre-survey',
              'Tutorial in normal field of view',
              'Three 2-minute trials in expanded vision, in a randomized order',
              '3-minute breaks with a motion-sickness check',
              'Post-survey',
            ],
          },
          {
            type: 'callout',
            tone: 'decision',
            title: 'Decision: randomize the trial order',
            text: 'Each participant gets their own trial sequence, so learning the game over time doesn’t get mistaken for an effect of the view.',
          },
          {
            type: 'callout',
            tone: 'decision',
            title: 'Decision: comfort comes first',
            text: 'Expanded vision can cause nausea. We check in during every break, and anyone who feels sick skips straight to the post-survey. That’s also data.',
          },
          {
            type: 'p',
            text: 'Every session produces two kinds of data: in-game performance logs for each trial, and survey responses from before and after.',
          },
        ],
      },
      {
        id: 'process',
        heading: 'Analysis so far',
        blocks: [
          {
            type: 'p',
            text: 'I designed and ran 3+ early-stage sessions and analyzed 10+ participant trials, looking across them for three things:',
          },
          {
            type: 'list',
            ordered: true,
            items: ['Usability patterns', 'Motion-perception challenges', 'Interaction trade-offs'],
          },
        ],
      },
      {
        id: 'built',
        heading: 'What I delivered',
        blocks: [
          {
            type: 'p',
            text: '5+ early UX recommendations on spatial awareness, comfort, and field-of-view expansion, used to shape the team’s iteration priorities while testing continues.',
          },
        ],
      },
      {
        id: 'outcome',
        heading: 'Outcome & impact',
        blocks: [
          {
            type: 'stats',
            items: [
              { value: '+50–60%', label: 'effective field of view from the system we’re testing' },
              { value: '3+', label: 'user-testing sessions designed and run' },
              { value: '10+', label: 'participant trials analyzed' },
              { value: '5+', label: 'early UX recommendations' },
            ],
          },
          {
            type: 'p',
            text: 'Still in progress. Testing paused over the summer and resumes this semester, and we’re running more trials before drawing conclusions. After that, the lab plans to build a version that works in real life, outside the headset.',
          },
        ],
      },
    ],
  },

  // ===== 4. ExpressIt (compact card under Other experience) =====
  // CONFIDENTIAL: never add revenue, budget figures, vendor names,
  // competitor names, board discussions, or individual people's names.
  {
    slug: 'expressit',
    tier: 'more',
    title: 'Growth & Discoverability Strategy',
    shortTitle: 'ExpressIt Delivery',
    oneLiner:
      "Working with the owners of a 45-year, family-owned, women-owned B2B same-day delivery company to make their value visible to prospects before they ever become customers.",
    badge: 'In progress',
    tags: ['Discovery', 'Prioritization', 'Growth strategy'],
    theme: 'lilac',
    cover: {
      src: '/images/expressit/team.jpg',
      label: 'ExpressIt: project team with the client',
      alt: 'Vorleak taking a selfie with the project team and client in a bright room with large windows',
      ratio: '16 / 9',
    },
    snapshot: [
      { label: 'Role', value: 'Consultant: discovery lead, analyst & deliverable owner' },
      { label: 'Team', value: "Tufts student team, working directly with the company's owners and COO" },
      { label: 'Context', value: 'Tufts entrepreneurial marketing course, client project' },
      { label: 'Timeline', value: 'Fall 2026. Final plan presented mid-December' },
      { label: 'Status', value: 'In progress' },
    ],
    sections: [
      {
        id: 'problem',
        heading: 'The problem',
        blocks: [
          {
            type: 'p',
            text: 'The company’s service is premium: trained, uniformed employees rather than independent contractors, and a partnership mindset. But prospects compare on price and don’t see the difference until after they become customers.',
          },
          {
            type: 'callout',
            tone: 'insight',
            title: 'The core product question',
            text: 'How do you communicate a premium before someone has experienced it?',
          },
        ],
      },
      {
        id: 'users',
        heading: 'Discovery & research',
        blocks: [
          {
            type: 'p',
            text: 'I led discovery sessions with the owners and COO to map their business, customers, competitors, and growth goals, then synthesized what we heard into six problem areas:',
          },
          {
            type: 'cards',
            items: [
              { title: 'Value perception gap', text: 'Priced above national competitors, and the difference is invisible before purchase.' },
              { title: 'Concentration risk', text: 'Heavy reliance on a single industry.' },
              { title: 'Leaky funnel', text: 'Inbound leads arrive with no automated follow-up or nurture.' },
              { title: 'Discoverability', text: 'Search presence is a long game with noisy signals. Paid search showed a clear, immediate impact on lead volume.' },
              { title: 'Content', text: "Owner-led social posts lack a consistent cadence and rarely reach beyond the owners' existing network." },
              { title: 'Trust signals', text: 'The website under-represents the people and history behind the company.' },
            ],
          },
        ],
      },
      {
        id: 'process',
        heading: 'Prioritization',
        blocks: [
          {
            type: 'p',
            text: "With a small marketing budget and a lean internal team, we're weighing options by impact vs. effort, including:",
          },
          {
            type: 'list',
            items: [
              'An automated lead nurture email sequence, so no inbound lead goes cold.',
              'A homepage refresh focused on trust and search visibility: owner presence, updated visuals, accurate company history.',
              'A low-risk trial offer that lets prospects experience the service before committing.',
              'A consistent content plan with topic ideas and a posting cadence.',
              'Leaning into women-owned positioning and grassroots outreach channels.',
              'Customer testimonials as proof of value.',
            ],
          },
          {
            type: 'callout',
            tone: 'decision',
            title: 'Decision: one success metric',
            text: 'We aligned with the client on inbound lead volume as the primary measure of success, because that matches how the owners already evaluate marketing.',
          },
        ],
      },
      {
        id: 'built',
        heading: 'What we’re delivering',
        blocks: [
          {
            type: 'p',
            text: 'An actionable plan the client can start executing in December, not "someday."',
          },
        ],
      },
      {
        id: 'outcome',
        heading: 'Outcome & impact',
        blocks: [
          {
            type: 'p',
            text: 'In progress. The final plan goes to the client in mid-December, and I’ll update this page with what they adopt and the early results.',
          },
        ],
      },
    ],
  },

];

// ---------- Other experience ----------

export type ExperienceItem = {
  title: string;
  org: string;
  dates: string;
  bullets: string[];
  /** 'research' = "Research & design" section (most relevant). 'other' = "Other experience". */
  tier: 'research' | 'other';
  /** Small labels shown above the bullets: what this role proves */
  focus?: string[];
  /** Optional: links the entry to a case study page */
  caseStudy?: string;
};

// Order inside each tier = order on the page. Most relevant first.
export const experience: ExperienceItem[] = [
  // ----- Research & design (most relevant) -----
  {
    tier: 'research',
    title: 'UI/UX Researcher, Owl Head Project',
    org: 'Tufts IDEA Lab',
    dates: 'Jan 2026 – Present',
    focus: ['User testing', 'Emerging tech (VR)', 'Study design'],
    caseStudy: 'owl-head',
    bullets: [
      'Designed and ran 3+ early-stage sessions of an IRB-approved user study on a VR point-of-view remapping system, combining pre/post surveys with in-game performance data on how people adapt to an expanded field of view.',
      'Analyzed 10+ participant trials to identify usability patterns, motion-perception challenges, and interaction trade-offs.',
      'Turned the findings into 5+ early UX recommendations on spatial awareness, comfort, and field-of-view expansion, informing the team’s iteration priorities.',
    ],
  },
  {
    tier: 'research',
    title: 'Qualitative Research & Data Analyst Intern',
    org: "Brigham and Women's Hospital",
    dates: 'June 2026 – Present',
    focus: ['Qualitative research', 'Thematic analysis', 'Interview data', 'Cross-cultural research'],
    bullets: [
      'Coded 10+ interview transcripts and contributed to thematic analysis for a qualitative healthcare research project in Kratie Province, Cambodia, identifying patterns across participants’ experiences.',
      'Transcribed, translated (Khmer ↔ English), and quality-checked 30+ interview transcripts, coordinating meetings with Cambodian physicians and multidisciplinary researchers to ensure accurate data collection and project execution.',
      'Developed training materials and presentation decks for healthcare teams, supporting research implementation and communication across clinical partners.',
    ],
  },
  {
    tier: 'research',
    title: 'Marketing & Outreach Intern',
    org: 'Tufts StAAR Center',
    dates: 'Aug 2025 – Present',
    focus: ['Usability analysis', 'Accessibility'],
    bullets: [
      'Ran usability analyses of the website and Instagram and implemented UX improvements for accessibility.',
      'Designed and managed 20+ multi-platform campaigns, increasing student engagement and program visibility by 40%.',
      'Partnered with university staff to streamline communication and raise awareness of campus resources.',
    ],
  },

  // ----- Other experience -----
  {
    tier: 'other',
    title: 'Brand & Marketing Lead',
    org: "Sophie Bea's Granola",
    dates: 'Jan 2026 – Present',
    focus: ['Go-to-market'],
    bullets: [
      'Ran a competitive analysis of 15+ granola products at Whole Foods, comparing pricing, packaging, and positioning to find gaps in the market.',
      'Turned consumer research and competitive findings into go-to-market recommendations and strategy decks for client and retail discussions.',
      'Led brand identity development, designing 3+ packaging concepts and consumer-facing marketing assets.',
    ],
  },
  {
    tier: 'other',
    title: 'Sales & Marketing Intern',
    org: 'WASH. (Wash Naturals), Boston',
    dates: 'June 2026 – Present',
    focus: ['Customer insight'],
    bullets: [
      'Generated $3,000+ in direct sales in two months through consultative customer conversations; recognized as Top Performer.',
      'Created and managed 25+ Instagram and TikTok posts, driving 20% organic follower growth in two months.',
      'Gathered direct customer feedback at retail and pop-up events (including SoWa Market), informing promotional materials and event strategy.',
    ],
  },
];

// ---------- Skills ----------

export const skills = [
  {
    group: 'Product & research',
    items: [
      'User research',
      'Usability testing',
      'Design thinking',
      'Competitive analysis',
      'CLIMBER analysis',
      'Qualitative coding & thematic analysis',
      'Prototyping',
      'Go-to-market strategy',
      'Stakeholder communication',
    ],
  },
  { group: 'Design', items: ['Figma', 'Figma Make', 'Canva'] },
  { group: 'Technical', items: ['Python', 'R / RStudio', 'C++', 'Google Analytics', 'Statistics for behavioral sciences', 'Data analytics'] },
  { group: 'Workplace', items: ['Microsoft 365', 'Google Workspace', 'Qualtrics'] },
  {
    group: 'Languages',
    items: ['English (native)', 'Khmer (native)', 'Thai (conversational)', 'French (conversational)'],
  },
];

export const certifications = [
  {
    name: 'Social & Behavioral Research (Human Subjects), Basic Course',
    issuer: 'CITI Program · Tufts University',
    date: 'Sep 2026',
    image: {
      src: '/images/certs/citi-social-behavioral-research.jpg',
      label: 'CITI Program certificate',
      alt: 'CITI Program certificate: Social & Behavioral Research, Basic Course, completed September 14, 2026, under requirements set by Tufts University/Tufts Medical Center',
    } satisfies Media,
  },
  {
    name: 'Inbound Marketing Certified',
    issuer: 'HubSpot Academy',
    date: 'Sep 2026',
    image: {
      src: '/images/certs/hubspot-inbound-marketing.jpg',
      label: 'HubSpot Academy certificate',
      alt: 'HubSpot Academy Inbound Marketing Certified certificate for Vorleak Hak, valid September 16, 2026 to October 15, 2028',
    } satisfies Media,
  },
];

export const coursework = [
  'Human Factors Product Design',
  'Management of Innovation',
  'Consumer Product Ventures',
  'Entrepreneurial Finance & Marketing',
  'Technical & Managerial Communication',
  'Statistics for Behavioral Sciences',
];

// ---------- Contact ----------

export const contact = {
  heading: "Let's *talk.*",
  line: 'Open to APM and product internships for Summer 2027.',
};
