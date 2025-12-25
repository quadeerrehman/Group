"use client";

// Perovskite Story – Single-file React site
// Tech: React + Tailwind CSS + shadcn/ui + lucide-react + framer-motion
// You can edit everything directly in this file. Look for TODO markers where you’ll later
// plug in real content (group photo, publications, member list, etc.).

import React from "react";
import { motion } from "framer-motion";
import {
  FlaskConical,
  Layers,
  SunMedium,
  Users,
  BookOpen,
  Sparkles,
  Mail,
  ArrowDown,
  Microscope,
  Atom,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Helper to scroll to sections
const scrollToId = (id: string) => {
  if (typeof document === "undefined") return;
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const sectionTitleVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState<'home' | 'full-team' | 'publications'>('home');

  return (
    <div className="min-h-screen text-slate-900 font-sans relative overflow-hidden">
      {/* Overlay border.png as a full-page background image */}
      <img
        src="/border.png"
        alt="Border Overlay"
        className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none select-none"
        style={{ opacity: 0.8, transform: 'translate(-10px, 20px) scale(0.95)' }}
        aria-hidden="true"
      />
      <div className="relative z-10">
        <SiteNav setPage={setCurrentPage} />
        <main className="mx-auto flex max-w-6xl flex-col gap-24 px-4 pb-24 pt-24 sm:px-6 lg:px-8">
          {currentPage === 'home' && (
            <>
              <HeroSection />
              <StorySection />
              <ResearchMapSection />
              <MethodsSection />
              <PeopleSection setPage={setCurrentPage} />
              <OutputsSection setPage={setCurrentPage} />
              <JoinSection />
              <ContactSection />
            </>
          )}
          {currentPage === 'full-team' && <FullTeamPage setPage={setCurrentPage} />}
          {currentPage === 'publications' && <PublicationsPage setPage={setCurrentPage} />}
        </main>
        <Footer />
      </div>
    </div>
  );
};

// NAVBAR – warm, light, slightly translucent
const SiteNav: React.FC<{ setPage: (page: 'home' | 'full-team' | 'publications') => void }> = ({ setPage }) => {
  const navItems = [
    { id: "story", label: "Story" },
    { id: "research", label: "Research" },
    { id: "methods", label: "Methods" },
    { id: "people", label: "People" },
    { id: "outputs", label: "Papers" },
    { id: "join", label: "Join" },
    { id: "contact", label: "Contact" },
  ];


  return (
    <header className="sticky inset-x-0 top-0 z-30 border-b border-amber-200/80 bg-orange-50/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <button
          onClick={() => setPage('home')}
          className="flex items-center gap-2 rounded-full border border-orange-300/90 bg-white/80 px-3 py-1 text-xs font-medium tracking-wide text-orange-700 shadow-sm transition hover:border-orange-400 hover:bg-orange-50"
        >
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-tr from-orange-400 to-amber-300 text-white">
            <Sparkles className="h-3.5 w-3.5" />
          </span>
          <span className="uppercase">Perovskite Story</span>
        </button>

        <nav className="hidden items-center gap-4 text-xs font-medium text-amber-900 sm:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToId(item.id)}
              className="rounded-full px-3 py-1 tracking-wide text-amber-900/80 transition hover:bg-orange-100 hover:text-orange-800"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

// HERO – "Sunny Day" with citrus accent
const HeroSection: React.FC = () => {
  return (
    <section id="top" className="flex flex-col gap-10 pt-6 sm:pt-10 lg:flex-row lg:items-center">
      <motion.div
        className="flex-1 space-y-6"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-100/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-800">
          <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-orange-500 text-white">
            <Atom className="h-3 w-3" />
          </span>
          We grow, stack & tune perovskites
        </p>

        <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          From ions in a flask to devices on glass:{" "}
          <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-rose-500 bg-clip-text text-transparent">
            our perovskite story
          </span>
          .
        </h1>

        <p className="max-w-xl text-sm leading-relaxed text-slate-700 sm:text-base">
          We are a research group exploring how to turn soft, ionic semiconductors into
          precision-engineered optoelectronic materials. We co-evaporate hybrid perovskite
          thin films, engineer interfaces and stacks, and push them into high-efficiency
          solar cells, mini-modules and other light-harvesting and light-emitting devices.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <Button
            size="lg"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-rose-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-300/60 hover:from-orange-400 hover:via-amber-400 hover:to-rose-400"
            onClick={() => scrollToId("story")}
          >
            Start the story
            <ArrowDown className="h-4 w-4" />
          </Button>

        <button
            onClick={() => scrollToId("research")}
            className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-4 py-2 text-xs font-medium text-rose-700 transition hover:bg-rose-50"
          >
            <SunMedium className="h-4 w-4" />
            See applications
          </button>

          <button
            onClick={() => scrollToId("people")}
            className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-4 py-2 text-xs font-medium text-rose-700 transition hover:bg-rose-50"
          >
            <Users className="h-4 w-4" />
            Meet the group
          </button>
        </div>

        <dl className="mt-4 grid max-w-xl grid-cols-3 gap-4 text-xs text-slate-700 sm:text-sm">
          <div>
            <dt className="text-[0.65rem] uppercase tracking-wide text-amber-700/80">Materials</dt>
            {/* TODO: Replace with your actual material systems */}
            <dd className="mt-1 font-medium">Perovksites</dd>
          </div>
          <div>
            <dt className="text-[0.65rem] uppercase tracking-wide text-amber-700/80">Devices we build</dt>
            <dd className="mt-1 font-medium">Solar cells · mini-modules · LEDs</dd>
          </div>
          <div>
            <dt className="text-[0.65rem] uppercase tracking-wide text-amber-700/80">Home base</dt>
            {/* TODO: Update with your actual institute / city */}
            <dd className="mt-1 font-medium">Energy Research Institute @ NTU, Singapore</dd>
          </div>
        </dl>
      </motion.div>

      {/* Right: materials + applications mini-map */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        {/* pvk image above the applications overview box */}
        <div className="mx-auto mb-2 max-w-md text-center" style={{ transform: 'translateY(-80px) scale(2.5)', opacity: 1 }}>
          <img
            src="/pvk.png"
            alt="Perovskite graphic"
            className="mx-auto h-32 w-auto object-contain"
          />
        </div>

        <div className="relative mx-auto max-w-md rounded-3xl border border-orange-200 bg-white/90 p-4 shadow-2xl shadow-orange-200 sm:p-5">
          <div className="mb-3 flex items-center justify-between text-xs text-slate-700">
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-1 text-[0.65rem] text-amber-800">
              <FlaskConical className="h-3.5 w-3.5 text-orange-500" />
              Materials → devices
            </span>
            <span className="text-[0.65rem] text-rose-500">applications overview</span>
          </div>

          {/* Three wedges: Emitters / Absorbers / MQWs */}
          <div className="grid grid-cols-3 gap-2 text-[0.65rem] sm:text-xs">
            <div className="col-span-1 space-y-2 rounded-2xl bg-rose-50 p-2">
              <p className="text-[0.6rem] font-semibold uppercase tracking-wide text-rose-700">
                Emitters
              </p>
              <p className="text-slate-800">
                LEDs, superfluorescence, Quantum Emitters.
              </p>
            </div>
            <div className="col-span-1 space-y-2 rounded-2xl bg-lime-50 p-2">
              <p className="text-[0.6rem] font-semibold uppercase tracking-wide text-lime-700">
                Absorbers
              </p>
              <p className="text-slate-800">
                Solar cells, photodetectors.
              </p>
            </div>
            <div className="col-span-1 space-y-2 rounded-2xl bg-cyan-50 p-2">
              <p className="text-[0.6rem] font-semibold uppercase tracking-wide text-cyan-700">
                Multi QWs
              </p>
              <p className="text-slate-800">
                Multi-quantum-well stacks for photodetectors and Solar cells.
              </p>
            </div>
          </div>

          <div className="mt-3 rounded-2xl border border-dashed border-orange-200 bg-amber-50/60 p-2 text-[0.65rem] text-slate-700">
            <p className="text-[0.6rem] font-semibold uppercase tracking-wide text-amber-800">
              TODO: Put some graphics
            </p>
            <p className="mt-1">
              Need to put image here. 
              <code>&lt;img /&gt;</code> that shows people + projects.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

// STORY SECTION – warm cards
const StorySection: React.FC = () => {
  const steps = [
    {
      title: "We evaporate and spin coat perovskite films",
      icon: <FlaskConical className="h-4 w-4" />,
      text: "Thermally evaporated and co-evaporated layers let us control composition and thickness across large areas.",
    },
    {
      title: "We engineer device stacks & interfaces",
      icon: <Layers className="h-4 w-4" />,
      text: "Transport layers, contacts and interfaces are tuned for voltage, current and long-term stability.",
    },
    {
      title: "We study properties to guide desogn ",
      icon: <SunMedium className="h-4 w-4" />,
      text: "Optoelectronic measurements and device physics help us connect spectra, microstructure and performance. Those insights feed back into how we choose compositions, interfaces and layouts for the next generation of devices and mini-modules.",
    },
  ];

  return (
    <section id="story" className="space-y-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionTitleVariants}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
          01 · From evaporator to mini-module
        </h2>
        <p className="max-w-2xl text-sm text-slate-700 sm:text-base">
          Our story starts in the vacuum chamber rather than the beaker. We design evaporated
          perovskite films, stack them into devices, and then learn how to wire many of those
          pixels together into robust mini-modules.
        </p>
      </motion.div>

      <motion.div
        className="grid gap-4 sm:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInVariants}
        transition={{ duration: 0.5, delay: 0.05 }}
      >
        {steps.map((step, idx) => (
          <Card
            key={step.title}
            className="border border-orange-200/80 bg-white/90 shadow-sm shadow-orange-100"
          >
            <CardHeader className="space-y-1 pb-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-amber-800/90">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-orange-400/90 to-rose-400/90 text-white">
                  {step.icon}
                </span>
                <span>Act {idx + 1}</span>
              </div>
              <CardTitle className="mt-1 text-sm font-semibold text-slate-900">
                {step.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">{step.text}</p>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      <div className="rounded-2xl border border-rose-200 bg-rose-50/70 p-4 text-xs text-slate-700 sm:text-sm">
        <p className="font-semibold text-rose-800">Where do we fit into this story?</p>
        <p className="mt-1">
          We want thermally evaporated and hybrid perovskite devices to move beyond beautiful lab demonstrations into reliable, manufacturable technologies. That means combining careful materials design, robust processing windows and realistic device architectures, so that efficiency and stability survive when devices grow from single pixels to many square centimetres. Our story sits at this intersection of fundamental understanding and practical device engineering.
        </p>
      </div>
    </section>
  );
};

// RESEARCH MAP – "Citrus Burst" accents
const ResearchMapSection: React.FC = () => {
  const areas = [
    {
      title: "Evaporated single-junction solar cells",
      icon: <SunMedium className="h-4 w-4" />,
      text: "We co-evaporate high-quality perovskite absorber layers and transport stacks to push efficiency and voltage.",
      bullets: [
        "Composition and bandgap engineering by co-evaporation",
        "Optimised transport layers and contacts for high Voc",
      ],
    },
    {
      title: "Mini-modules & scalable architectures",
      icon: <Layers className="h-4 w-4" />,
      text: "We pattern and interconnect many cells to form efficient, uniform mini-modules on larger areas.",
      bullets: [
        "Interconnection and layout design for mini-modules",
        "Process windows for uniform large-area deposition",
      ],
    },
    {
      title: "Perovskite emitters & optoelectronic devices",
      icon: <Sparkles className="h-4 w-4" />,
      text: "We also explore perovskites as light emitters in LEDs and other advanced optoelectronic structures.",
      bullets: [
        "Perovskite LEDs and light-emitting devices",
        "Mixed-dimensional and quantum-well inspired stacks",
      ],
    },
    {
      title: "Spectroscopy & device physics",
      icon: <Microscope className="h-4 w-4" />,
      text: "We use spectroscopy and electrical characterisation to understand recombination, defects and stability.",
      bullets: [
        "Time-resolved and steady-state spectroscopy",
        "Linking device metrics to microscopic mechanisms",
      ],
    },
  ];

  return (
    <section id="research" className="space-y-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionTitleVariants}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
          02 · What our evaporated perovskites do
        </h2>
        <p className="max-w-2xl text-sm text-slate-700 sm:text-base">
          Our main focus is on thermally evaporated hybrid perovskites for high-efficiency solar
          cells and mini-modules, with parallel threads on emitters and fundamental device
          physics.
        </p>
      </motion.div>

      <motion.div
        className="grid gap-4 md:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInVariants}
        transition={{ duration: 0.5, delay: 0.05 }}
      >
        {areas.map((area) => (
          <Card
            key={area.title}
            className="flex h-full flex-col border border-amber-200/90 bg-white/90 shadow-sm shadow-amber-100"
          >
            <CardHeader className="flex flex-row items-start justify-between gap-3 pb-2">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-amber-800">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-tr from-orange-400 to-rose-400 text-white">
                    {area.icon}
                  </span>
                  Focus area
                </div>
                <CardTitle className="mt-2 text-sm font-semibold text-slate-900 sm:text-base">
                  {area.title}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-1 space-y-3 text-xs text-slate-700 sm:text-sm">
              <p>{area.text}</p>
              <ul className="list-disc space-y-1 pl-4 text-[0.7rem] text-slate-600 sm:text-xs">
                {area.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </section>
  );
};

// METHODS / TOOLBOX – softer neutrals
const MethodsSection: React.FC = () => {
  const methods = [
    {
      label: "Synthesis",
      tools: [
        "Thermal evaporation and co-evaporation of perovskite layers",
        "Vacuum deposition of transport and contact layers",
        "Hybrid deposition with both Evaporation and Solution",
        "Complementary solution processing when it is the right tool",
        "Hot injection method for Nanocrystals"
      ],
    },
    {
      label: "Characterization",
      tools: [
        "Optical spectroscopy (UV–Vis, PL, TRPL)",
        "Structural probes (XRD, GIWAXS)",
        "Device testing (JV, EQE, stability)",
      ],
    },
    {
      label: "Modelling & data",
      tools: [
        "Optical simulations",
        "Statistical design of experiments",
        "Machine learning for process optimization",
      ],
    },
  ];

  return (
    <section id="methods" className="space-y-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionTitleVariants}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
          03 · How we do the work
        </h2>
        <p className="max-w-2xl text-sm text-slate-700 sm:text-base">
          We think in terms of tools and knobs: what we can control, and what we can measure.
        </p>
      </motion.div>

      <motion.div
        className="grid gap-4 md:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInVariants}
        transition={{ duration: 0.5, delay: 0.05 }}
      >
        {methods.map((block) => (
          <Card
            key={block.label}
            className="border border-amber-100 bg-white/90 shadow-sm shadow-amber-100/80"
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold text-slate-900 sm:text-base">
                {block.label}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-slate-700 sm:text-sm">
              <ul className="list-disc space-y-1 pl-4">
                {block.tools.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              {/* TODO: Replace tools with your actual lab techniques & software */}
            </CardContent>
          </Card>
        ))}
      </motion.div>

      <div className="rounded-2xl border border-dashed border-rose-200 bg-rose-50/70 p-4 text-xs text-slate-700 sm:text-sm">
        <p className="font-semibold text-rose-800">What does a normal day look like in the lab</p>
        <p className="mt-1">
           A typical day starts with checking overnight measurements and deciding which recipes to push forward. We plan evaporation runs, prepare substrates and load new stacks, then spend the afternoon characterising fresh films and devices – from UV–Vis and PL all the way to JV and stability tests. Between runs we compare notes, sketch ideas on the whiteboard and decide which results are robust enough or try in a new architecture. 
        </p>
      </div>
    </section>
  );
};

// PEOPLE – "Earthy Rose" vibe
const PeopleSection: React.FC<{ setPage: (page: 'home' | 'full-team' | 'publications') => void }> = ({ setPage }) => {
  // TODO: Replace these with your actual people. You can expand this list or fetch from JSON.
  const people = [
    {
      name: "Annalisa Bruno",
      role: "Principal Investigator",
      image: "/Annalisa.png",
      focus: "My research interests range from hybrid halide perovskite materials' optical and electrical properties to their implementation in a variety of optoelectronic devices. Recently I mostly focused on the development of highly efficient  single junctions solar cells and minimodules by thermal evaporation..",
    },
  
  ];

  return (
    <section id="people" className="space-y-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionTitleVariants}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
          04 · The people behind the spectra
        </h2>
        <p className="max-w-2xl text-sm text-slate-700 sm:text-base">
          We are an interdisciplinary team of chemists, physicists, materials scientists and
          engineers. The group is more than any individual CV.
        </p>
      </motion.div>

      <motion.div
        className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInVariants}
        transition={{ duration: 0.5, delay: 0.05 }}
      >
        {/* Left: group-focused text + group photo placeholder */}
        <div className="space-y-4">
          <div className="rounded-2xl border border-rose-200 bg-rose-50/80 p-4 text-xs text-slate-700 sm:text-sm">
            <p className="font-semibold text-rose-800">Our group in one paragraph</p>
            <p className="mt-1">
              We like messy whiteboards,
              carefully labelled vials, and experiments that challenge our assumptions.
              We like messy whiteboards, carefully labelled vials and experiments that
               challenge our assumptions. Our backgrounds span physics, chemistry, materials science and engineering,
                but we meet in the lab around the same questions: how to make perovskite devices that are beautiful in 
                the data and robust in the real world. We tend to work in small, collaborative clusters rather than silos,
                 and we learn a lot from each other’s spectra and failed devices.
            </p>
          </div>

          <div className="rounded-2xl border border-dashed border-orange-200 bg-white/80 p-4 text-xs text-slate-700 sm:text-sm">
            <p className="font-semibold text-amber-900">Group photo / collage</p>
            <div className="mt-2">
              <img
                src="/Group.jpg"
                alt="Group photo"
                className="mx-auto h-108 w-auto rounded-xl border border-orange-200/80 object-cover shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* Right: people list */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-amber-900/90">
            <Users className="h-4 w-4 text-rose-500" />
            
          </div>

          <div className="space-y-3">
            {people.map((person) => (
              <div
                key={person.name}
                className="rounded-2xl border border-amber-200/80 bg-white/90 p-3 text-xs text-slate-800 sm:text-sm"
              >
                <div>
                  <p className="text-sm font-semibold text-slate-900 sm:text-base">
                    {person.name}
                  </p>
                  <p className="text-[0.7rem] uppercase tracking-wide text-orange-600">
                    {person.role}
                  </p>
                  {person.image && (
                    <div className="mt-3">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="mx-auto h-72 w-auto rounded-xl border border-rose-200/70 object-contain shadow-sm"
                      />
                    </div>
                  )}
                </div>
                <p className="mt-2 text-[0.75rem] text-slate-700 sm:text-xs">
                  {person.focus}
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={() => setPage('full-team')}
            className="w-full rounded-2xl border border-amber-200/80 bg-white/90 p-4 text-center transition hover:bg-amber-50/90"
          >
            <p className="text-lg font-semibold uppercase tracking-wide text-rose-700 sm:text-xl">
              Visit full team
            </p>
          </button>

          <p className="pt-1 text-[0.7rem] text-slate-600">
              
          </p>
        </div>
      </motion.div>
    </section>
  );
};

// OUTPUTS / PAPERS / TOOLS – warm cards
const OutputsSection: React.FC<{ setPage: (page: 'home' | 'full-team' | 'publications') => void }> = ({ setPage }) => {
  // TODO: Replace placeholder entries with real publications / tools
  const outputs = [
    {
      type: "Paper",
      title: "[Title of a flagship paper]",
      where: "Journal · Year",
      blurb: "TODO: One-line summary in plain language about what this work changed or showed.",
      link: "#",
    },
    {
      type: "Paper",
      title: "[Title of a recent paper]",
      where: "Journal name",
      blurb: "TODO: A short description of why this paper matters.",
      link: "#",
    },
    {
      type: "Patents",
      title: "[Name of a code, dataset, or protocol]",
      where: "",
      blurb: "TODO: Describe any patents.",
      link: "#",
    },
  ];

  return (
    <section id="outputs" className="space-y-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionTitleVariants}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
          05 · Publications &amp; 
        </h2>
        <p className="max-w-2xl text-sm text-slate-700 sm:text-base">
          Some important and recent papers
        </p>
      </motion.div>

      <motion.div
        className="space-y-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInVariants}
        transition={{ duration: 0.5, delay: 0.05 }}
      >
        {outputs.map((o, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-3 rounded-2xl border border-orange-200/80 bg-white/90 p-4 text-xs text-slate-700 sm:flex-row sm:items-center sm:justify-between sm:text-sm"
          >
            <div className="space-y-1">
              <p className="text-[0.7rem] font-semibold uppercase tracking-wide text-orange-600">
                {o.type}
              </p>
              <p className="text-sm font-semibold text-slate-900 sm:text-base">{o.title}</p>
              <p className="text-[0.75rem] text-slate-500">{o.where}</p>
              <p className="max-w-2xl text-[0.8rem] text-slate-700">{o.blurb}</p>
            </div>
            <div className="flex items-center gap-3">
              {o.link && o.link !== "#" ? (
                <a
                  href={o.link}
                  className="inline-flex items-center gap-2 rounded-full border border-amber-300 px-3 py-1 text-[0.75rem] font-medium text-amber-800 transition hover:bg-amber-50"
                >
                  <BookOpen className="h-3.5 w-3.5" />
                  View
                </a>
              ) : (
                <span className="text-[0.7rem] text-slate-500">TODO: Add link</span>
              )}
            </div>
          </div>
        ))}
      </motion.div>

      <div className="rounded-2xl border border-dashed border-amber-200 bg-amber-50/80 p-4 text-xs text-slate-700 sm:text-sm">
        <p className="font-semibold text-amber-900">Full publication list</p>
        <p className="mt-1">See everything we have published.</p>
        <button
          onClick={() => setPage('publications')}
          className="mt-3 inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white/90 px-4 py-2 text-[0.8rem] font-semibold text-amber-800 transition hover:bg-amber-50"
        >
          <BookOpen className="h-4 w-4" />
          View publications
        </button>
      </div>
    </section>
  );
};

// JOIN / OPENINGS – inviting warm block
const JoinSection: React.FC = () => {
  return (
    <section id="join" className="space-y-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionTitleVariants}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
          06 · Join the story
        </h2>
        <p className="max-w-2xl text-sm text-slate-700 sm:text-base">
          If you&apos;re excited about perovskites and like thinking across chemistry, physics and
          engineering, we&apos;d love to hear from you.
        </p>
      </motion.div>

      <motion.div
        className="grid gap-4 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInVariants}
        transition={{ duration: 0.5, delay: 0.05 }}
      >
        <div className="space-y-3 rounded-2xl border border-orange-200 bg-white/90 p-4 text-xs text-slate-700 sm:text-sm">
          <p className="font-semibold text-orange-700">Who we&apos;re looking for</p>
          <ul className="mt-1 list-disc space-y-1 pl-4">
            <li> Students and researchers with backgrounds in physics, chemistry, materials science, electrical engineering or related fields.</li>
            <li> People who enjoy working hands-on with experiments and data, are comfortable learning new tools, and like to connect device performance back to fundamental mechanisms.</li>
            <li> Depending on funding and timing, we host PhD students, postdocs, research associates and visiting students or interns interested in evaporated perovskites and related optoelectronic devices.</li>
          </ul>
        </div>

        <div className="space-y-3 rounded-2xl border border-dashed border-rose-200 bg-rose-50/80 p-4 text-xs text-slate-700 sm:text-sm">
          <p className="font-semibold text-rose-800">How to apply / contact</p>
          <p className="mt-1">
            If you are interested in joining, please email the PI with your CV, a short statement of your research interests and how you see yourself fitting into the group. It helps if you mention one or two of our papers that resonated with you and why, as this gives us a sense of what you like to think about. We may not be able to respond to every enquiry immediately, but we do read them carefully.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

// CONTACT – simple, warm
const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="space-y-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionTitleVariants}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
          07 · Get in touch
        </h2>
        <p className="max-w-2xl text-sm text-slate-700 sm:text-base">
          Collaboration ideas, questions about our work, or interest in joining? Reach out.
        </p>
      </motion.div>

      <motion.div
        className="grid gap-4 md:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInVariants}
        transition={{ duration: 0.5, delay: 0.05 }}
      >
        <div className="space-y-3 rounded-2xl border border-amber-200 bg-white/90 p-4 text-xs text-slate-700 sm:text-sm">
          <p className="font-semibold text-amber-900">Primary contact</p>
          <dl className="mt-1 space-y-1">
            <div>
              <dt className="text-[0.7rem] uppercase tracking-wide text-slate-500">Name</dt>
              <dd className="text-sm font-medium text-slate-900">Annalisa Bruno</dd>
            </div>
            <div>
              <dt className="text-[0.7rem] uppercase tracking-wide text-slate-500">Email</dt>
              <dd className="flex items-center gap-1">
                <Mail className="h-3.5 w-3.5 text-orange-500" />
                <span>annalisa@ntu.edu.sg</span>
              </dd>
            </div>
            <div>
              <dt className="text-[0.7rem] uppercase tracking-wide text-slate-500">Address</dt>
              <dd>Energy Research Institute @ NTU (ERI@N), Research Techno Plaza – X-Frontier Block, 50 Nanyang Drive, Singapore 637553</dd>
            </div>
          </dl>
        </div>

        <div className="space-y-3 rounded-2xl border border-dashed border-rose-200 bg-rose-50/80 p-4 text-xs text-slate-700 sm:text-sm">
          <p className="font-semibold text-rose-800">Links</p>
          <ul className="mt-1 list-disc space-y-1 pl-4">
            <li>
              <a
                href="https://dr.ntu.edu.sg/entities/person/Annalisa-Bruno"
                className="text-rose-700 underline hover:text-rose-600"
              >
                NTU profile
              </a>
            </li>
            <li>
              <a
                href="https://scholar.google.co.in/citations?hl=en&user=zeI8v6YAAAAJ&view_op=list_works&sortby=pubdate"
                className="text-rose-700 underline hover:text-rose-600"
              >
                Google Scholar
              </a>
            </li>
            <li>
              <a
                href="https://sg.linkedin.com/in/annalisa-bruno-phd-2938a93"
                className="text-rose-700 underline hover:text-rose-600"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

// FOOTER – subtle, not heavy
const Footer: React.FC = () => {
  return (
    <footer className="border-t border-amber-200/80 bg-orange-50/80 py-4">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-4 text-[0.7rem] text-slate-600 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <p>
           {new Date().getFullYear()} [Your Group Name]. Built to tell the story behind our
          perovskites.
        </p>
        <p>Made by Quadeer Rehman</p>
      </div>
    </footer>
  );
};

// FULL TEAM PAGE
const FullTeamPage: React.FC<{ setPage: (page: 'home' | 'full-team' | 'publications') => void }> = ({ setPage }) => {
  return (
    <section className="space-y-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionTitleVariants}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
            Full Team
          </h2>
          <button
            onClick={() => setPage('home')}
            className="rounded-full border border-rose-200 bg-white/80 px-4 py-2 text-xs font-medium text-rose-700 transition hover:bg-rose-50"
          >
            ← Back to home
          </button>
        </div>
        <p className="max-w-2xl text-sm text-slate-700 sm:text-base">
          Meet our research group – chemists, physicists, materials scientists and engineers
          working together to advance perovskite science and technology.
        </p>
      </motion.div>

      <div className="rounded-2xl border border-amber-200/80 bg-white/90 p-6 text-sm text-slate-700">
        <p className="font-semibold text-slate-900 mb-4">
          TODO: Add full team member list with photos, roles, and research interests.
        </p>
        <p>
          This page will display all current group members, alumni, and visiting researchers with their bios and contact information.
        </p>
      </div>
    </section>
  );
};

// PUBLICATIONS PAGE
const PublicationsPage: React.FC<{ setPage: (page: 'home' | 'full-team' | 'publications') => void }> = ({ setPage }) => {
  return (
    <section className="space-y-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionTitleVariants}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
            Full Publications
          </h2>
          <button
            onClick={() => setPage('home')}
            className="rounded-full border border-rose-200 bg-white/80 px-4 py-2 text-xs font-medium text-rose-700 transition hover:bg-rose-50"
          >
            ← Back to home
          </button>
        </div>
        <p className="max-w-2xl text-sm text-slate-700 sm:text-base">
          TODO: Add full publication list here.
        </p>
      </motion.div>

      <div className="rounded-2xl border border-dashed border-amber-200 bg-amber-50/80 p-6 text-sm text-slate-700">
        <p className="font-semibold text-amber-900">Placeholder</p>
        <p className="mt-2 text-slate-700">
          <a
            href="https://scholar.google.co.in/citations?hl=en&user=zeI8v6YAAAAJ&view_op=list_works&sortby=pubdate"
            className="text-amber-800 underline hover:text-amber-700"
          >
            Google Scholar – full list
          </a>
        </p>
      </div>
    </section>
  );
};

export default App;
