"use client";


import { absorbers } from "@/content/topics";

export default function AbsorbersPage() {
  return (
    <div className="min-h-screen">
      <section className="py-12">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-lime-600 via-lime-400 to-lime-700 bg-clip-text text-transparent mb-4">
          {absorbers.title}
        </h1>
        <p className="text-lg text-slate-700 mb-6">{absorbers.subtitle}</p>
        <img src={absorbers.heroFigure.src} alt={absorbers.heroFigure.alt} className="w-64 h-auto rounded-2xl border border-lime-200 mb-4" />
        <div className="text-xs text-slate-600 mb-2">
          <strong>What you see:</strong> {absorbers.heroFigure.captionWhat}<br />
          <strong>Why it matters:</strong> {absorbers.heroFigure.captionWhy}
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-lime-700 mb-2">Why it matters</h2>
        <ul className="list-disc pl-6 text-slate-700">
          {absorbers.whyItMatters.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-lime-700 mb-2">What we build</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {absorbers.whatWeBuild.map((item, idx) => (
            <div key={idx} className="rounded-2xl border border-lime-200 bg-white/90 p-4 shadow">
              <h3 className="text-lg font-bold text-lime-700 mb-1">{item.title}</h3>
              <p className="text-slate-700 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-lime-700 mb-2">Knobs we control</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {absorbers.knobs.map((item, idx) => (
            <div key={idx} className="rounded-xl border border-lime-200 bg-lime-50/80 p-3">
              <h4 className="font-semibold text-lime-700 mb-1">{item.title}</h4>
              <p className="text-xs text-slate-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-lime-700 mb-2">How we measure</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {absorbers.metrics.map((item, idx) => (
            <div key={idx} className="rounded-xl border border-lime-200 bg-white/90 p-3">
              <h4 className="font-semibold text-lime-700 mb-1">{item.title}</h4>
              <p className="text-xs text-slate-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-lime-700 mb-2">Flagship projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {absorbers.projects.map((item, idx) => (
            <div key={idx} className="rounded-2xl border border-lime-200 bg-white/90 p-4 shadow">
              <h3 className="text-lg font-bold text-lime-700 mb-1">{item.title}</h3>
              <p className="text-xs text-slate-700"><strong>Claim:</strong> {item.claim}</p>
              <p className="text-xs text-slate-700"><strong>Mechanism:</strong> {item.mechanism}</p>
              <p className="text-xs text-slate-700"><strong>Consequence:</strong> {item.consequence}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-lime-700 mb-2">Figure gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {absorbers.figures.map((fig, idx) => (
            <div key={idx} className="rounded-xl border border-lime-200 bg-white/90 p-3">
              <img src={fig.src} alt={fig.alt} className="w-full h-32 object-contain mb-2" />
              <div className="text-xs text-slate-700">
                <strong>What you see:</strong> {fig.captionWhat}<br />
                <strong>Why it matters:</strong> {fig.captionWhy}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-lime-700 mb-2">Join / Collaborate</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-lime-200 bg-white/90 p-4">
            <h4 className="font-semibold text-lime-700 mb-1">{absorbers.ctaJoin.title}</h4>
            <p className="text-xs text-slate-700">{absorbers.ctaJoin.description}</p>
          </div>
          <div className="rounded-xl border border-lime-200 bg-lime-50/80 p-4">
            <h4 className="font-semibold text-lime-700 mb-1">{absorbers.ctaCollaborate.title}</h4>
            <p className="text-xs text-slate-700">{absorbers.ctaCollaborate.description}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
