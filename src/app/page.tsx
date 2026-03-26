import Image from "next/image";

const projects = [
  {
    name: "OfferPresenter",
    url: "https://offerpresenter.com",
    screenshot: "/screenshots/offerpresenter.png",
    problem:
      "Listing agents drown in PDFs during multi-offer situations. They manually extract terms from each purchase agreement, build comparison spreadsheets by hand, and still miss details. Buyer's agents cobble together offer packages from loose files with no consistent format. I lived this on both sides of hundreds of transactions. The pain was consistent and unaddressed.",
    solution:
      "An AI-powered tool that extracts offer terms from purchase agreement PDFs and generates color-coded comparison grids with net-to-seller calculations. For buyer's agents, it assembles polished offer packages with cover letters, shareable links, and ready-to-paste emails, all in under a minute.",
    decisions: [
      "Scoped the MVP to PDF-in, comparison-out, with no form entry. I tested the idea with 10 agents first: every one said they'd use it if it read their existing documents. That validated the core bet before writing a line of code. The AI extraction layer had to handle messy, inconsistent PDFs from dozens of brokerages, so I iterated on prompt design and parsing logic until accuracy was high enough that agents trusted the output over their own manual process.",
      "Free early access to de-risk adoption. Agents are notoriously resistant to new tools. Rather than guess at pricing, I launched free to measure actual usage patterns and identify which features drive repeat sessions.",
      "Built shareable comparison links so every output becomes distribution. Each comparison shared with a seller puts the product in front of the listing agent on the other side. Growth is embedded in the workflow, not bolted on.",
    ],
    stack: ["Next.js", "OpenAI API", "PDF Parsing", "Clerk Auth", "Tailwind CSS", "Vercel"],
  },
  {
    name: "Prior Lake Events",
    url: "https://priorlakeevents.com",
    screenshot: "/screenshots/priorlakeevents.png",
    problem:
      "Local events in Prior Lake were scattered across Facebook groups, city websites, church bulletins, and word of mouth. Residents missed things constantly. I kept hearing the same question from neighbors: 'What's happening this weekend?' There was no single answer, and after 40 years in this community, I knew the demand was real.",
    solution:
      "A community events calendar that aggregates local happenings into one searchable hub with multiple views. Paired with a twice-weekly newsletter now reaching 800+ subscribers, delivered Monday and Friday so people can plan their weeks.",
    decisions: [
      "WordPress over custom code. I needed to ship in days, not months. The Events Calendar plugin gave me 80% of what I needed immediately, so I could learn from real usage before investing in anything custom.",
      "Newsletter as the core product, calendar as the engine. I tested both and open rates told the story: 55%+ consistently. Email is where this audience lives. The calendar feeds the newsletter, not the other way around.",
      "Local business advertising as the revenue model. 800+ engaged, hyperlocal subscribers with high open rates is exactly the audience small businesses can't reach through Meta or Google. The unit economics work because the audience is narrow and high-intent.",
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
      "A real-time market intelligence dashboard analyzing 6,000+ MLS records updated every 15 minutes. Covers median prices, days on market, bidding war rates, waterfront premiums, neighborhood comparisons, seasonal patterns, and seller strategy guidance. All freely accessible, no email required.",
    decisions: [
      "No lead capture wall. I deliberately chose trust over lead gen. The conventional play is to gate data behind a form, but I'd seen how much that frustrates consumers. Making it free generated more inbound calls than any lead form ever did.",
      "15-minute MLS refresh cycle. I tracked which pages had the highest bounce rates and stale data was the common factor. Freshness became the core quality metric. If a number doesn't match what someone's agent told them yesterday, they won't come back.",
      "Segmented by what locals actually search for. Prior Lake is a lake community, and the 65% waterfront premium is the most-asked question I get. Structuring the dashboard around real user questions, not generic market categories, keeps engagement high.",
    ],
    stack: ["Next.js", "NorthstarMLS API", "Server Components", "Tailwind CSS", "SVG Data Viz", "Vercel"],
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
  {
    name: "Historical Pen Pals",
    url: "https://www.historicalpenpals.com/gift",
    screenshot: "/screenshots/historicalpenpals.png",
    problem:
      "The greeting card market is a $7 disposable experience. Meanwhile, people (especially parents and history enthusiasts) are looking for something more meaningful than a screen. I saw whitespace at the intersection of physical mail, AI personalization, and storytelling. A different kind of product than anything I'd built before, which was the point.",
    solution:
      "Personalized, handwritten letters from historical figures delivered by mail. Five letters for $29, written in character with real ink on premium paper. Recipients reply via QR code, and the historical figure remembers the conversation. 45+ figures from Einstein to Cleopatra.",
    decisions: [
      "Physical mail, not email. The medium is the product. I tested the concept with a landing page and $50 in ads before building anything. Conversion rates confirmed people would pay for tangible over digital. That signal shaped the entire product.",
      "Two-way correspondence with memory. Early buyers told me the first letter was a novelty but the reply is what hooked them. I built a prompt architecture that maintains character voice and conversation context across multiple exchanges. The AI has to stay in character as Einstein while referencing something a 10-year-old wrote last week. That continuity turned a one-time purchase into ongoing engagement.",
      "Acquisition funnel built around the gift buyer, not the recipient. Ad data showed 70%+ of purchases were gifts. The buyer persona and the user persona are different people, so the landing page, copy, and targeting all speak to the person buying, not the person reading.",
    ],
    stack: ["Next.js", "OpenAI API", "Prompt Engineering", "Meta Ads", "Tailwind CSS", "USPS Fulfillment"],
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
          <p className="mt-1 text-lg text-zinc-500">Product Builder</p>
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
          22 years in real estate gave me a front-row seat to the problems agents
          and their clients actually have, not the ones software companies
          imagine they have. I started building solutions myself, scoping each
          one around a specific pain point I could validate firsthand. Now I ship
          AI-powered products, learn from real usage, and iterate fast.
        </p>
      </section>

      {/* Projects */}
      <section className="space-y-24">
        {projects.map((project) => (
          <article key={project.name}>
            {/* Screenshot */}
            {project.screenshot ? (
              project.shuttered ? (
                <div className="overflow-hidden rounded-lg border border-zinc-200">
                  <Image
                    src={project.screenshot}
                    alt={`${project.name} screenshot`}
                    width={1200}
                    height={675}
                    className="w-full"
                  />
                </div>
              ) : (
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
              )
            ) : null}

            {/* Content */}
            <div className={project.screenshot ? "mt-6" : ""}>
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-2xl font-semibold">
                  {project.name}
                  {project.shuttered && (
                    <span className="ml-2 align-middle text-xs font-medium uppercase tracking-wide text-zinc-400">
                      Shuttered
                    </span>
                  )}
                </h2>
                {!project.shuttered && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
                  >
                    {project.url.replace("https://", "")} &rarr;
                  </a>
                )}
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
