"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { publications, type Publication } from "@/lib/publications";
import { fadeInVariants, sectionTitleVariants } from "@/app/page";
import Link from "next/link";

// Constants
const coverSrc = (journalTitle: string) =>
  `/journal-covers/${encodeURIComponent(journalTitle)}.jpg`;

// Publication card component - new design with cover on left
const PublicationCard: React.FC<{ p: Publication }> = ({ p }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInVariants}
      transition={{ duration: 0.5 }}
      className="group rounded-2xl border border-orange-200/80 bg-white/90 shadow-md shadow-orange-100/50 hover:shadow-lg hover:shadow-orange-100 transition overflow-hidden"
    >
      <div className="flex flex-col sm:flex-row gap-4 p-4">
        {/* Left: Journal Cover */}
        <div className="flex-shrink-0 w-full sm:w-32">
          <div className="rounded-xl overflow-hidden border border-orange-200/60 bg-gradient-to-br from-orange-50 to-amber-50 h-40 sm:h-44 flex items-center justify-center">
            <img
              src={coverSrc(p.venue || "Journal")}
              alt={`${p.venue} cover`}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget;
                img.style.display = "none";
                // Show placeholder text instead
                const parent = img.parentElement;
                if (parent) {
                  parent.innerHTML = `
                    <div class="flex flex-col items-center justify-center w-full h-full p-3 text-center">
                      <svg class="w-8 h-8 text-orange-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C6.5 6.253 2 10.753 2 16.253s4.5 10 10 10 10-4.5 10-10S17.5 6.253 12 6.253z" />
                      </svg>
                      <p class="text-[0.65rem] font-semibold text-orange-600">${p.venue}</p>
                    </div>
                  `;
                }
              }}
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex-1 space-y-2">
          {/* Type badge */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-amber-800">
              <span className="inline-flex h-3 w-3 items-center justify-center rounded-full bg-gradient-to-tr from-orange-400 to-rose-400"></span>
              {p.year}
            </span>
            {p.citedBy && (
              <span className="inline-flex items-center gap-1 rounded-full bg-rose-100/70 px-2 py-1 text-[0.65rem] font-medium text-rose-700">
                Cited by {p.citedBy}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-base font-semibold leading-snug text-slate-900 sm:text-lg group-hover:text-orange-700 transition">
            {p.title}
          </h3>

          {/* Venue */}
          {p.venue && (
            <p className="text-sm font-medium text-orange-600">
              {p.venue}
            </p>
          )}

          {/* Authors */}
          {p.authors && (
            <p className="text-xs text-slate-600 leading-relaxed">
              {p.authors}...
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Year section component
const YearGroupSection: React.FC<{
  title: string;
  years: number[];
  publications: Publication[];
  delay: number;
}> = ({ title, years, publications: pubs, delay }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
      transition={{ duration: 0.5, delay }}
      className="space-y-4"
    >
      {/* Section header */}
      <div className="flex items-center gap-3 pb-3 border-b-2 border-orange-200/60">
        <div className="flex-1">
          <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-rose-600 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            {pubs.length} publication{pubs.length !== 1 ? "s" : ""}
          </p>
        </div>
        <div className="text-[0.65rem] font-semibold uppercase tracking-wide text-slate-500 px-3 py-1 rounded-full bg-slate-50">
          {years.length === 1 ? years[0] : `${Math.max(...years)} – ${Math.min(...years)}`}
        </div>
      </div>

      {/* Publications grid */}
      <div className="space-y-4 pl-2">
        {pubs.map((p, idx) => (
          <PublicationCard key={`${p.title}-${idx}`} p={p} />
        ))}
      </div>
    </motion.div>
  );
};

// Main page component
export default function PublicationsPage() {
  // Group publications by year ranges
  const groupedBySection = React.useMemo(() => {
    const sections = [
      { title: "2026", years: [2026], range: [2026, 2026] },
      { title: "2025", years: [2025], range: [2025, 2025] },
      { title: "2024", years: [2024], range: [2024, 2024] },
      { title: "2023", years: [2023], range: [2023, 2023] },
      { title: "2022", years: [2022], range: [2022, 2022] },
      { title: "2021", years: [2021], range: [2021, 2021] },
      { title: "2020 – 2016", years: [2020, 2019, 2018, 2017, 2016], range: [2020, 2016] },
      { title: "2015 – 2010", years: [2015, 2014, 2013, 2012, 2011, 2010], range: [2015, 2010] },
    ];

    return sections.map((section) => {
      const sectionPubs = publications
        .filter((p) => section.years.includes(p.year))
        .sort((a, b) => b.year - a.year);

      return {
        ...section,
        publications: sectionPubs,
      };
    });
  }, []);

  const totalPublications = publications.length;

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
        {/* Simple nav for publications page */}
        <header className="sticky inset-x-0 top-0 z-30 border-b border-amber-200/80 bg-orange-50/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="flex items-center gap-2 rounded-full border border-orange-300/90 bg-white/80 px-3 py-1 text-xs font-medium tracking-wide text-orange-700 shadow-sm transition hover:border-orange-400 hover:bg-orange-50"
            >
              ← Back to home
            </Link>
          </div>
        </header>

        <main className="mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-24 pt-12 sm:px-6 lg:px-8">
          {/* Page header */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionTitleVariants}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            <div>
              <h1 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-orange-600 via-amber-500 to-rose-600 bg-clip-text text-transparent">
                Publications
              </h1>
              <p className="max-w-3xl text-sm text-slate-700 sm:text-base mt-3">
                Our complete publication record, organized by year. Each publication shows the journal cover, title, authors, and citation metrics.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6 pt-4 border-t border-amber-100">
              <div className="rounded-xl bg-amber-50/80 p-3 text-center">
                <p className="text-2xl sm:text-3xl font-bold text-orange-600">{totalPublications}</p>
                <p className="text-xs text-slate-600 mt-1">Total Publications</p>
              </div>
              <div className="rounded-xl bg-rose-50/80 p-3 text-center">
                <p className="text-2xl sm:text-3xl font-bold text-rose-600">8</p>
                <p className="text-xs text-slate-600 mt-1">Year Groups</p>
              </div>
              <div className="rounded-xl bg-lime-50/80 p-3 text-center">
                <p className="text-2xl sm:text-3xl font-bold text-lime-600">2010–2026</p>
                <p className="text-xs text-slate-600 mt-1">Year Range</p>
              </div>
            </div>

            <div className="rounded-2xl border border-lime-200 bg-lime-50/80 p-4 text-xs text-slate-700 sm:text-sm">
              <p className="font-semibold text-lime-800">📷 Google Scholar</p>
              <p className="mt-1">
                <a
                  href="https://scholar.google.com/citations?user=zeI8v6YAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono bg-white/60 px-2 py-1 rounded hover:bg-lime-100 transition text-lime-700 hover:text-lime-800 underline"
                >
                  View on Google Scholar
                </a>
              </p>
            </div>
          </motion.div>

          {/* Publication sections */}
          <div className="space-y-12">
            {groupedBySection.map((section, idx) => (
              section.publications.length > 0 && (
                <YearGroupSection
                  key={section.title}
                  title={section.title}
                  years={section.years}
                  publications={section.publications}
                  delay={0.1 + idx * 0.05}
                />
              )
            ))}
          </div>

          {/* Empty state if no publications */}
          {totalPublications === 0 && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-dashed border-amber-300 bg-amber-50/80 p-12 text-center"
            >
              <BookOpen className="mx-auto h-12 w-12 text-amber-600/60 mb-4" />
              <p className="text-lg font-semibold text-amber-900">No publications yet</p>
              <p className="mt-2 text-sm text-amber-800">
                Add your publications to <span className="font-mono">lib/publications.ts</span> to see them here.
              </p>
            </motion.div>
          )}
        </main>

        {/* Footer */}
        <footer className="border-t border-amber-200/80 bg-orange-50/80 py-4">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-4 text-[0.7rem] text-slate-600 sm:flex-row sm:items-center sm:px-6 lg:px-8">
            <p>
              {new Date().getFullYear()} [Your Group Name]. Built to tell the story behind our
              perovskites.
            </p>
            <p>Made by Quadeer Rehman</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
