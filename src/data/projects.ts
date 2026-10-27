export type Tone = 'sky' | 'sun' | 'coral' | 'leaf' | 'lilac' | 'white';

export interface Project {
  slug: string;
  name: string;
  /** GitHub repo name under github.com/johnkg */
  repo: string;
  /** Private repos still link to GitHub, but only the owner can open them. */
  private: boolean;
  /** Short description for cards. */
  summary: string;
  /** Longer description for the detail page. */
  blurb: string;
  points: string[];
  kicker: string;
  stack: string[];
  /** Live webpage or demo. Leave null until it is deployed; the UI shows "soon". */
  live: string | null;
  /** Shown instead of "Live site: soon" when there is no webpage by design. */
  liveNote?: string;
  tone: Tone;
  updated: string;
  /** Shows a "Being built" badge. */
  building?: boolean;
  /** Bento width (of 12 columns) in the featured grid. Omit for the compact grid. */
  span?: number;
}

export const site = {
  name: 'johnkg',
  github: 'https://github.com/johnkg',
  /** Set to an address to show an email button in the footer. */
  email: null as string | null,
};

export const projects: Project[] = [
  {
    slug: 'chess-technique-teacher',
    name: 'Chess Technique Teacher',
    repo: 'chess_solver',
    private: false,
    summary: 'Learn chess from scratch and see why a move is good.',
    blurb:
      'Most chess apps give you the best move. This one explains it. A small engine searches the position and an explainer names the idea behind it: a fork, a pin, a back-rank mate. Wrong moves get an explanation too.',
    points: [
      'Explains forks, pins, skewers, mates and 8 more ideas',
      '26 lessons, each with a board example the engine must confirm',
      '24 rated puzzles with hints and wrong-move feedback',
      'Runs in Chrome; 165 tests pass',
    ],
    kicker: 'Flutter · Learning',
    stack: ['Flutter', 'Dart', 'Python checks'],
    live: 'https://johnkg.github.io/chess_solver/',
    tone: 'sky',
    updated: '2026-10-27',
    span: 7,
  },
  {
    slug: 'sudoku-technique-teacher',
    name: 'Sudoku Technique Teacher',
    repo: 'sudoku-solver',
    private: false,
    summary: 'A Sudoku solver that teaches real techniques, easiest first.',
    blurb:
      'Not a black box that spits out the answer. The solver keeps pencil marks for every cell, tries techniques from easiest to hardest and explains each step in plain language.',
    points: [
      'Each step names the technique, the cells and the digits involved',
      'Difficulty is the hardest technique a puzzle needs',
      'Backtracking only checks a puzzle has one solution, never teaches',
      'Engine is plain Dart, testable without Flutter',
    ],
    kicker: 'Flutter · Puzzles',
    stack: ['Flutter', 'Dart'],
    live: 'https://johnkg.github.io/sudoku-solver/',
    tone: 'sun',
    updated: '2026-10-27',
    span: 5,
  },
  {
    slug: 'system-design-academy',
    name: 'System Design Academy',
    repo: 'system-design-academy',
    private: false,
    summary: 'Visual, interactive lessons on system design and design patterns.',
    blurb:
      'System design taught with things you can watch and poke at: diagrams, step-by-step animations, simulations and code. Patterns get a before and after view.',
    points: [
      'Each concept has a step-through animation and a playground',
      'Code samples in JavaScript, Python and C#, all run by a check script',
      'Content is plain JSON, so adding a lesson is quick',
    ],
    kicker: 'Astro · Learning',
    stack: ['Astro', 'TypeScript', 'JavaScript', 'Python', 'C#'],
    live: 'https://johnkg.github.io/system-design-academy/',
    tone: 'lilac',
    updated: '2026-10-26',
    span: 4,
  },
  {
    slug: 'bus-escape',
    name: 'Bus Escape',
    repo: 'bus-escape-game',
    private: false,
    summary: 'A bus-jam puzzle game for phones and the web.',
    blurb:
      'A parking lot is jammed with buses. Tap one to drive it out; it can only leave if nothing is in front of it, and it parks in a small loading lane. Passengers board the leftmost parked bus of their color. No timer.',
    points: [
      'Web demo is playable',
      'Levels, boosters, sound, haptics and animations, covered by tests',
      'All art is drawn in code, no asset files',
      'Not yet run on a phone or simulator',
    ],
    kicker: 'Flutter + Flame · Game',
    stack: ['Flutter', 'Flame', 'Dart'],
    live: 'https://bus-escape-b8m.pages.dev/',
    tone: 'coral',
    updated: '2026-10-26',
    span: 8,
  },
  {
    slug: 'grow-buddy',
    name: 'Grow Buddy',
    repo: 'grow-buddy',
    private: false,
    summary: 'Beginner plant grower helper: guide, sun-fit check, plant debugger, sales tracker.',
    blurb:
      'Everything a first-time grower needs in one app: what to do, whether a plant will like the light where you want it, what went wrong when it looks sick, and what you sold.',
    points: [
      'Step-by-step grow guide',
      'Sun-fit check and plant debugger',
      'Sales tracker for selling cuttings',
      'Flutter client with a JavaScript server',
    ],
    kicker: 'Flutter · Hobby',
    stack: ['Flutter', 'Dart', 'JavaScript'],
    live: 'https://johnkg.github.io/grow-buddy/',
    tone: 'leaf',
    updated: '2026-10-27',
    span: 5,
  },
  {
    slug: 'doodle-time',
    name: 'Doodle Time',
    repo: 'doodle_time',
    private: true,
    summary: 'Drawing and coloring app for kids aged 4 to 7.',
    blurb:
      'A gentle drawing and coloring app for young kids, with guided lessons. Built web first, phone next.',
    points: [
      '12 coloring pages and 24 lessons',
      '27 tests pass; runs in the browser',
      'Not yet run on a phone',
    ],
    kicker: 'Flutter · Kids',
    stack: ['Flutter', 'Dart'],
    live: null,
    tone: 'sun',
    updated: '2026-10-27',
    span: 7,
  },
  {
    slug: 'articulation-coach',
    name: 'Articulation Coach',
    repo: 'articulation-coach',
    private: true,
    summary: 'A small-talk sparring game that trains clear, warm conversation openers.',
    blurb:
      'Pick the best icebreaker for a realistic situation, learn why it works, rewrite it in your own voice, then practice a short Point, Reason, Example, Point answer. Sessions take three to five minutes.',
    points: [
      'Feedback is short and specific, never just "wrong"',
      'Keeps your personality while improving clarity',
      'Next.js app with end-to-end tests',
    ],
    kicker: 'TypeScript · Game',
    stack: ['TypeScript', 'Next.js', 'Playwright'],
    live: 'https://articulation-coach.johnkg.workers.dev/',
    tone: 'sky',
    updated: '2026-10-26',
  },
  {
    slug: 'school-assistant',
    name: 'School Assistant',
    repo: 'SchoolAssistant',
    private: false,
    summary: 'Turns school announcements shared to a Telegram bot into Google Calendar events.',
    blurb:
      'Share an announcement (text, photo or PDF) to a private Telegram bot and an LLM extracts the events: quizzes, exams, deadlines, birthdays. They land on a Google Calendar. A tracker sheet syncs hourly too.',
    points: [
      'Asks before adding when a similar event already exists',
      'LLM sits behind an adapter: OpenAI or Anthropic',
      'Azure Functions on .NET 10 with Table Storage',
    ],
    kicker: 'C# · Automation',
    stack: ['C#', '.NET 10', 'Azure Functions', 'Telegram', 'Google Calendar'],
    live: null,
    liveNote: 'Private tool',
    tone: 'white',
    updated: '2026-10-25',
  },
  {
    slug: 'vouch',
    name: 'Vouch',
    repo: 'vouch',
    private: true,
    building: true,
    summary: 'A trusted local marketplace for skilled workers. Being built.',
    blurb:
      'Working name for a marketplace that connects people with trusted local skilled workers, starting with plumbing, A/C and appliance repair. Product discovery and planning are done; the build is underway.',
    points: [
      'Status: being built, not launched',
      'MVP requirements drafted',
      'Name kept in one config file so it is easy to change',
    ],
    kicker: 'In progress · Marketplace',
    stack: ['Planning', 'HTML prototypes'],
    live: null,
    tone: 'sun',
    updated: '2026-10-25',
  },
  {
    slug: 'job-search',
    name: 'Job Search',
    repo: 'job-search',
    private: true,
    summary: 'A job-search workspace: save jobs, check fit, tailor CVs, track applications.',
    blurb:
      'Keeps truthful career facts in one place, saves jobs, reviews how well they fit, drafts tailored CVs and cover letters, and tracks every application.',
    points: [
      'Draft history and exports',
      'Application tracker with search metrics and stale nudges',
      'Skills-gap view',
    ],
    kicker: 'JavaScript · Extension',
    stack: ['JavaScript', 'TypeScript', 'Next.js', 'Drizzle'],
    live: null,
    liveNote: 'Browser extension',
    tone: 'lilac',
    updated: '2026-10-25',
  },
  {
    slug: 'second-brain',
    name: 'Second Brain',
    repo: 'second-brain',
    private: true,
    summary: 'Browser extension and local service that capture web pages into a knowledge library.',
    blurb:
      'Send a useful page from Chrome or Firefox into a capture pipeline. A local worker verifies the source, categorizes it, summarizes it and logs it to Notion once the saved page checks out.',
    points: [
      'One Manifest V3 extension for Chrome and Firefox',
      'Authenticated, deduplicated server-side queue',
      'Keeps reported claims separate from verified facts',
    ],
    kicker: 'JavaScript · Extension',
    stack: ['JavaScript', 'Manifest V3', 'Node', 'Notion'],
    live: null,
    liveNote: 'Browser extension',
    tone: 'leaf',
    updated: '2026-10-25',
  },
  {
    slug: 'deal-radar',
    name: 'Deal Radar',
    repo: 'deal-radar',
    private: true,
    summary: 'Searches for deals on games and alerts you on your Mac.',
    blurb:
      'A small watcher that looks for game deals and sends a desktop notification when one turns up. No dependencies and no build step, so it survives being copied to another machine.',
    points: [
      'Node 20+, no dependencies, no API keys',
      'macOS desktop notifications',
      'Cloudflare worker included',
    ],
    kicker: 'JavaScript · Tool',
    stack: ['JavaScript', 'Node', 'Cloudflare Workers'],
    live: 'https://deal-radar.johnkg.workers.dev/',
    tone: 'coral',
    updated: '2026-10-25',
  },
  {
    slug: 'release-tool',
    name: 'Release Tool',
    repo: 'ReleaseTool',
    private: false,
    summary: 'Fills a Confluence release approvals table and cuts deployment branches, preview first.',
    blurb:
      'Filling an approvals table by hand means opening every ticket, finding the pull request comment and typing mentions. This does it, lines up the pull requests, and cuts and populates the deployment branches, showing its working before it writes anything.',
    points: [
      'Four tabs: Atlassian, Azure DevOps, Deployment, Settings',
      'Reads ticket keys from Confluence inline cards',
      'Every site, project and repo name is configuration',
    ],
    kicker: 'C# · Dev tool',
    stack: ['C#', 'TypeScript', 'Confluence', 'Azure DevOps'],
    live: null,
    liveNote: 'Private tool',
    tone: 'white',
    updated: '2026-10-06',
  },
  {
    slug: 'ticket-cloner',
    name: 'Ticket Cloner',
    repo: 'ticket-cloner',
    private: false,
    summary: 'Copies a Jira ticket between Atlassian tenants, preview first.',
    blurb:
      'Reads an issue from one Atlassian tenant and creates a counterpart in another, with a preview step before anything is written. Copies are one-shot snapshots.',
    points: [
      'OAuth 2.0 sign-in with an account-level grant',
      'Field mapping between tenants',
      'Scaffolding, read side, mapping, apply and UI are built',
    ],
    kicker: 'C# · Dev tool',
    stack: ['C#', 'TypeScript', 'Jira', 'OAuth 2.0'],
    live: null,
    liveNote: 'Private tool',
    tone: 'sky',
    updated: '2026-10-06',
  },
  {
    slug: 'playlist-cleaner',
    name: 'YouTube Playlist Cleaner',
    repo: 'yt-cleaner-extension',
    private: false,
    summary: 'Chrome extension that removes old videos from YouTube playlists.',
    blurb:
      'A Manifest V3 Chrome extension that removes videos older than an age you choose from your playlists, with a preview step before anything is deleted.',
    points: ['Preview before delete', 'Uses the YouTube Data API with OAuth'],
    kicker: 'JavaScript · Extension',
    stack: ['JavaScript', 'Chrome MV3', 'YouTube API'],
    live: null,
    liveNote: 'Browser extension',
    tone: 'leaf',
    updated: '2026-09-03',
  },
];

export const githubUrl = (p: Project) => `${site.github}/${p.repo}`;
export const featured = projects.filter((p) => p.span);
export const more = projects.filter((p) => !p.span);
export const building = projects.find((p) => p.building)!;
