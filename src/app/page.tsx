import Image from "next/image";

type Project = {
  name: string;
  url?: string;
  note?: string;
  shuttered?: boolean;
  screenshot: string;
  problem: string;
  solution: string;
  decisions: string[];
  stack: string[];
};

const projects: Project[] = [
  {
    name: "AI Social Autopilot",
    note: "179 posts published autonomously",
    screenshot: "/screenshots/ai-social.jpg",
    problem:
      "Historical Pen Pals and Prior Lake Events both needed a steady social presence, and I'm one person. A good carousel takes an hour by hand: pick the angle, write the copy, make the art, lay out six slides, write the caption, publish to three platforms. That hour doesn't exist every day, and for a consumer brand the posts were also the best ad unit, so skipping days had a real cost.",
    solution:
      "Two autonomous pipelines that go from nothing to published post with no human in the loop. The Historical Pen Pals pipeline picks a figure and an emotional topic, writes a four-letter exchange in that figure's documented voice, generates scene imagery, composites six 1080x1920 slides with short text overlays, assembles the caption, and publishes the carousel to Instagram, Facebook, and TikTok through the Postiz API. It ran daily from February to mid-July 2026: 179 carousels at roughly 30 cents each. The Prior Lake Events pipeline still runs twice a week, pulling upcoming events from the calendar API and rendering branded 1080x1080 posts through an HTML template family in headless Chromium. The same rendering system produces the sponsor creative sold in PLE's packages.",
    decisions: [
      "Guardrails in code, not in prompt hope. The renderer rejects any text overlay outside 20 to 200 characters, so a wordy generation fails loudly instead of shipping an unreadable slide. Layout is deterministic; the model controls language and scene direction, nothing else.",
      "Likeness safety as a first-class system. Every historical figure carries a safety tier that controls what the image model may depict: full scenes for ancient figures, settings and objects only for the recently deceased, abstract imagery for figures with active estates. The constraint lives in each figure's data file and the renderer enforces it automatically.",
      "No LLM captions for the community brand. Prior Lake Events captions come from a rotating bank of human-written openers instead of a model, because a local events page can't afford to sound like AI slop. Knowing where the model doesn't belong is part of the system design.",
      "Publishing never blocks. Figure imagery is cached per figure, pre-built image banks cover image-API downtime, and every post is saved locally before upload. Each post is logged to a performance file that feeds a weekly review of what actually earned views.",
    ],
    stack: ["Python", "GPT-4o", "gpt-image-1", "PIL", "Playwright", "Postiz API", "cron"],
  },
  {
    name: "ListReady",
    url: "https://trylistready.com",
    screenshot: "/screenshots/listready.png",
    problem:
      "Sellers ask what they should do before listing photos, and the honest answer is a staging consult most of them will never book. So they get generic checklists that say declutter. After 22 years of walking rooms before photo day, I knew what the specific, room-by-room version of that advice sounds like. It just didn't scale past me.",
    solution:
      "An AI room analysis product on two surfaces: a native iOS app, live on the App Store as ListReady: Stager's Punch List, and a web funnel at trylistready.com. Record a 30 to 90 second walkthrough of one room. Frames are extracted with ffmpeg and analyzed by Claude against a locked homestager system prompt. Back comes a prioritized punch list, what to remove, move, clean, or fix, each action with effort, cost, and a one-line reason, and each traceable to the exact video frame it came from. Follow-up questions rewrite a single action instead of regenerating the report. First scan free, then scan packs or a Pro subscription.",
    decisions: [
      "Model selection by testing, not vibes. I ran three Claude models against the same real room footage before launch and landed on the one that delivered stager-grade judgment at about 8 cents per scan. Then I locked the system prompt: iteration happens through the follow-up feature, not prompt drift.",
      "Prompt caching that actually pays. Frame extraction is byte-deterministic (the same video yields the exact same frames every run, verified by hashing them), so follow-up questions on a scan hit the prompt cache and run at a tenth of the input price. I confirmed the economics with live token counts.",
      "A voice document with banned words. The report reads like a working stager: subtract first, then add one or two things back. No stunning, no transform, no exclamation points. The output style is as deliberately designed as the UI, and it's why the product feels like a consult instead of a template.",
    ],
    stack: [
      "Swift/SwiftUI",
      "TypeScript",
      "Next.js",
      "Anthropic API",
      "ffmpeg",
      "Neon Postgres",
      "StoreKit 2",
      "Vercel",
    ],
  },
  {
    name: "OfferPresenter",
    url: "https://offerpresenter.com",
    screenshot: "/screenshots/offerpresenter.png",
    problem:
      "Listing agents drown in PDFs during multi-offer situations. They manually extract terms from each purchase agreement, build comparison spreadsheets by hand, and still miss details. Buyer's agents cobble together offer packages from loose files with no consistent format. I lived this on both sides of hundreds of transactions. The pain was consistent and unaddressed.",
    solution:
      "An AI-powered tool that extracts offer terms from purchase agreement PDFs and generates color-coded comparison grids with net-to-seller calculations. For buyer's agents, it assembles polished offer packages with cover letters, shareable links, and ready-to-paste emails, all in under a minute.",
    decisions: [
      "Scoped the MVP to PDF-in, comparison-out, with no form entry: agents already have the purchase agreements, so the tool reads those instead of asking anyone to retype terms. The AI extraction layer had to handle messy, inconsistent PDFs from dozens of brokerages, so I iterated on prompt design and parsing logic until the extracted terms reliably matched the source documents.",
      "Estimated net to seller on every offer, not just price. The grid puts financial terms, contingencies, and the estimated net side by side, because the highest price isn't always the best offer.",
      "Built shareable comparison links so every output becomes distribution. Each comparison shared with a seller puts the product in front of the listing agent on the other side. Growth is embedded in the workflow, not bolted on.",
    ],
    stack: ["Next.js", "Anthropic API", "PDF Parsing", "Clerk Auth", "Tailwind CSS", "Vercel"],
  },
  {
    name: "Historical Pen Pals",
    url: "https://www.historicalpenpals.com/gift",
    screenshot: "/screenshots/historicalpenpals.png",
    problem:
      "The greeting card market is a $7 disposable experience. Meanwhile, people (especially parents and history enthusiasts) are looking for something more meaningful than a screen. I saw whitespace at the intersection of physical mail, AI personalization, and storytelling. A different kind of product than anything I'd built before, which was the point.",
    solution:
      "Personalized letters from historical figures, written in character by an LLM, drawn in real ink by an automated pen plotter, and delivered by mail. Five letters for $29. Recipients reply via QR code, and the historical figure remembers the conversation. 45+ figures from Einstein to Cleopatra.",
    decisions: [
      "Physical mail, not email. The medium is the product. I tested the concept with a landing page and $50 in ads before building anything. Conversion rates confirmed people would pay for tangible over digital. That signal shaped the entire product.",
      "Two-way correspondence with memory. Early buyers told me the first letter was a novelty but the reply is what hooked them. I built a prompt architecture that maintains character voice and conversation context across multiple exchanges. The AI has to stay in character as Einstein while referencing something a 10-year-old wrote last week. That continuity turned a one-time purchase into ongoing engagement.",
      "Acquisition funnel built around the gift buyer, not the recipient. Ad data showed 70%+ of purchases were gifts. The buyer persona and the user persona are different people, so the landing page, copy, and targeting all speak to the person buying, not the person reading.",
    ],
    stack: ["Next.js", "OpenAI API", "Prompt Engineering", "Pen Plotter", "Meta Ads", "USPS Fulfillment"],
  },
  {
    name: "PLYCMN.com",
    url: "https://plycmn.com",
    screenshot: "/screenshots/plycmn.png",
    problem:
      "The Prior Lake Yacht Club is a members-owned social club on a private island, founded in 1964, that had never had a website. The board hired me to build one. The constraints: the members are non-technical, there's no developer on retainer after handoff, and most of the site had to stay private. Whatever I built had to run itself.",
    solution:
      "A hand-built static site with a brand system derived from the club's actual burgee: I photographed the pennant, sampled its gold for the palette, and composed the lockup used across the site. One public page. Behind a password gate: the season schedule with a calendar view and add-to-calendar downloads, a searchable member directory, officer contact cards, the digitized handbook and by-laws, and party photo galleries the members maintain themselves. Photos upload from a phone, resize in the browser to two sizes, and land in R2 storage. No developer involved, no rebuild.",
    decisions: [
      "Plain HTML and one stylesheet over a framework. The maintainers are board members who edit content once or twice a year. Every clever abstraction I didn't add is a support call that never happens.",
      "Generated, not hand-edited. The schedule, directory, officers, and gallery pages all render from a single Python source of truth, so the roster can't drift out of sync across pages. Edit one list, re-run one script.",
      "Security that respects the audience. A Cloudflare Pages Function gates the members area with a signed cookie, serves a branded login screen, and blocks stray source files at the edge. Members type one shared password and never think about it again.",
    ],
    stack: ["HTML/CSS", "Cloudflare Pages", "Pages Functions", "Cloudflare R2", "Python"],
  },
  {
    name: "Prior Lake Events",
    url: "https://priorlakeevents.com",
    screenshot: "/screenshots/priorlakeevents.png",
    problem:
      "Local events in Prior Lake were scattered across Facebook groups, city websites, church bulletins, and word of mouth. Residents missed things constantly. I kept hearing the same question from neighbors: 'What's happening this weekend?' There was no single answer, and after 40 years in this community, I knew the demand was real.",
    solution:
      "A community events calendar that aggregates local happenings into one searchable hub with multiple views. Paired with a twice-weekly newsletter now reaching 1,100+ subscribers at a 63 to 65% open rate, delivered Monday and Friday so people can plan their weeks. Sponsorships are self-serve with published tiers, and the social feed runs on the autopilot pipeline above.",
    decisions: [
      "WordPress over custom code. I needed to ship in days, not months. The Events Calendar plugin gave me 80% of what I needed immediately, so I could learn from real usage before investing in anything custom.",
      "Newsletter as the core product, calendar as the engine. I tested both and open rates told the story: 63 to 65% consistently. Email is where this audience lives. The calendar feeds the newsletter, not the other way around.",
      "Local business advertising as the revenue model. 1,100+ engaged, hyperlocal subscribers with high open rates is exactly the audience small businesses can't reach through Meta or Google. The unit economics work because the audience is narrow and high-intent.",
    ],
    stack: ["WordPress", "The Events Calendar", "MailPoet", "Meta Pixel", "Google Analytics"],
  },
  {
    name: "priorlake.realestate",
    url: "https://priorlake.realestate",
    screenshot: "/screenshots/priorlake-realestate.png",
    problem:
      "Homeowners and buyers rely on Zillow estimates and national headlines to understand their local market, but both are misleading at the neighborhood level. Agents gate-keep this data behind lead capture forms. Every week, clients asked me questions Zillow couldn't answer accurately. The data existed in MLS. It just wasn't accessible to the people who needed it most.",
    solution:
      "A market dashboard and live MLS listings feed for one town, rebuilt in 2026 on the same editorial brand system as my agent site. Every closed sale and active listing in Prior Lake, pulled from NorthstarMLS twice a day: listing pages with complete photos, open houses for the next ten days mapped day by day, type-in-an-address live estimates, and custom metrics like Bidding War Rate alongside median prices, days on market, and waterfront premiums. All freely accessible, no email required.",
    decisions: [
      "No lead capture wall. I deliberately chose trust over lead gen. The conventional play is to gate data behind a form, but I'd seen how much that frustrates consumers. Making it free generated more inbound calls than any lead form ever did.",
      "One town, complete. Instead of shallow coverage of a metro, the site ingests everything about a single community: every sale since 2021, every active listing, every lake. Depth in a niche is the moat, and it's why the site ranks as the authoritative answer for Prior Lake real estate questions.",
      "Segmented by what locals actually search for. Prior Lake is a lake community, and the 65% waterfront premium is the most-asked question I get. Structuring the dashboard around real user questions, not generic market categories, keeps engagement high.",
      "Useless stats, on purpose. A page of real correlations that mean nothing: homes described as 'charming' sold for $80,000 less, listings with 'dream' in them sat 22 days longer. It's the part of the site people bring up most, and one stat goes out every Friday in the Prior Lake Events newsletter.",
    ],
    stack: ["Next.js", "NorthstarMLS via MLS Grid", "Turso", "Server Components", "Tailwind CSS", "SVG Data Viz", "Vercel"],
  },
  {
    name: "Listings and Solds",
    url: "https://listingsandsolds.com",
    shuttered: true,
    screenshot: "/screenshots/listingsandsolds.png",
    problem:
      "Homebuyers and sellers are stuck using dumbed-down search tools on Zillow and Realtor.com while their agents have access to far more powerful MLS search behind a login. The best filters, the freshest data, the sold history: all gatekept. Consumers get lead capture forms disguised as search engines. I wanted to give the public the same tools I used every day as an agent, with nothing held back.",
    solution:
      "A full MLS consumer search platform with feature parity to professional agent tools, plus something no MLS search offers at any level: computer vision integration that let users search by visual property features. Want homes with white kitchen cabinets, hardwood floors, or stone countertops? Upload a photo or describe what you want and the system matched against MLS listing photos. Built on a real-time MLS data feed with no registration wall.",
    decisions: [
      "No login, no lead capture. Same philosophy as priorlake.realestate: trust over extraction. If the tool is good enough, people come back and eventually pick up the phone. Gatekeeping the data is the problem, not the business model.",
      "Computer vision as the differentiator. Standard MLS search filters are keyword-based and agents barely fill them out. Visual search solved a real gap: buyers know what they want a kitchen to look like but can't describe it in dropdown menus. I built a working prototype using image classification models against MLS photo sets.",
      "Shelved due to unit economics. The CV models worked but the cost of running inference against MLS-volume image datasets didn't scale on a solo budget. The product validated the concept but needed infrastructure investment beyond what I could justify independently. Knowing when to stop is as important as knowing what to build.",
    ],
    stack: ["Next.js", "AWS/S3", "Computer Vision", "NorthstarMLS API", "Vercel"],
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      {/* Header */}
      <header className="mb-16 flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Mark Gores
          </h1>
          <p className="mt-1 text-lg text-zinc-500">AI Product Builder</p>
        </div>
        <a
          href="/mark_gores_resume.pdf"
          download
          className="mt-1 inline-flex items-center gap-1.5 rounded-md border border-zinc-200 px-3.5 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 hover:text-zinc-900"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Resume
        </a>
      </header>

      {/* Intro */}
      <section className="mb-20">
        <p className="text-lg leading-relaxed text-zinc-700">
          22 years in real estate gave me a front-row seat to the problems
          agents and their clients actually have, not the ones software
          companies imagine they have. I started building the solutions myself.
          Now I ship AI products end to end: the code, the design systems, the
          LLM pipelines, and the media they generate. All of it is built
          AI-first, with Claude Code as the primary instrument. Two of the
          systems below publish finished creative on their own schedule with no
          human in the loop.
        </p>
      </section>

      {/* Projects */}
      <section className="space-y-24">
        {projects.map((project) => (
          <article key={project.name}>
            {/* Screenshot */}
            {project.url && !project.shuttered ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-lg border border-zinc-200 transition-shadow hover:shadow-lg"
              >
                <Image
                  src={project.screenshot}
                  alt={`${project.name} screenshot`}
                  width={1200}
                  height={675}
                  className="w-full"
                />
              </a>
            ) : (
              <div className="overflow-hidden rounded-lg border border-zinc-200">
                <Image
                  src={project.screenshot}
                  alt={`${project.name} screenshot`}
                  width={1200}
                  height={675}
                  className="w-full"
                />
              </div>
            )}

            {/* Content */}
            <div className="mt-6">
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-2xl font-semibold">
                  {project.name}
                  {project.shuttered && (
                    <span className="ml-2 align-middle text-xs font-medium uppercase tracking-wide text-zinc-400">
                      Shuttered
                    </span>
                  )}
                </h2>
                {project.url && !project.shuttered ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
                  >
                    {project.url.replace("https://", "").replace("www.", "")} &rarr;
                  </a>
                ) : project.note ? (
                  <span className="shrink-0 text-sm text-zinc-400">
                    {project.note}
                  </span>
                ) : null}
              </div>

              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
                    The Problem
                  </h3>
                  <p className="mt-2 text-zinc-700 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
                    What I Built
                  </h3>
                  <p className="mt-2 text-zinc-700 leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
                    Key Decisions
                  </h3>
                  <ul className="mt-2 space-y-3">
                    {project.decisions.map((decision, i) => (
                      <li
                        key={i}
                        className="text-zinc-700 leading-relaxed pl-4 border-l-2 border-zinc-200"
                      >
                        {decision}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
                    Stack
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Footer */}
      <footer className="mt-24 border-t border-zinc-200 pt-8 pb-12">
        <div className="flex items-center justify-between text-sm text-zinc-500">
          <span>&copy; {new Date().getFullYear()} Mark Gores</span>
          <div className="flex gap-6">
            <a
              href="/mark_gores_resume.pdf"
              download
              className="hover:text-zinc-900 transition-colors"
            >
              Resume
            </a>
            <a
              href="https://www.linkedin.com/in/markgores"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://markgores.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 transition-colors"
            >
              markgores.com
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
