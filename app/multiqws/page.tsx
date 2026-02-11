
import React from "react";
import { multiqws } from "@/content/topics";

export default function MultiQWsPage() {
  return (
    <div className="min-h-screen">
      <section className="py-12">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-indigo-400 to-indigo-700 bg-clip-text text-transparent mb-4">
          {multiqws.title}
        </h1>
        <p className="text-lg text-slate-700 mb-6">{multiqws.subtitle}</p>
        <img src={multiqws.heroFigure.src} alt={multiqws.heroFigure.alt} className="w-64 h-auto rounded-2xl border border-indigo-200 mb-4" />
        <div className="text-xs text-slate-600 mb-2">
          <strong>What you see:</strong> {multiqws.heroFigure.captionWhat}<br />
          <strong>Why it matters:</strong> {multiqws.heroFigure.captionWhy}
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-indigo-700 mb-2">Why it matters</h2>
        <ul className="list-disc pl-6 text-slate-700">
          {multiqws.whyItMatters.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-indigo-700 mb-2">What we build</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {multiqws.whatWeBuild.map((item, idx) => (
            <div key={idx} className="rounded-2xl border border-indigo-200 bg-white/90 p-4 shadow">
              <h3 className="text-lg font-bold text-indigo-700 mb-1">{item.title}</h3>
              <p className="text-slate-700 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-indigo-700 mb-2">Knobs we control</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {multiqws.knobs.map((item, idx) => (
            <div key={idx} className="rounded-xl border border-indigo-200 bg-indigo-50/80 p-3">
              <h4 className="font-semibold text-indigo-700 mb-1">{item.title}</h4>
              <p className="text-xs text-slate-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-indigo-700 mb-2">How we measure</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {multiqws.metrics.map((item, idx) => (
            <div key={idx} className="rounded-xl border border-indigo-200 bg-white/90 p-3">
              <h4 className="font-semibold text-indigo-700 mb-1">{item.title}</h4>
              <p className="text-xs text-slate-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-indigo-700 mb-2">Flagship projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {multiqws.projects.map((item, idx) => (
            <div key={idx} className="rounded-2xl border border-indigo-200 bg-white/90 p-4 shadow">
              <h3 className="text-lg font-bold text-indigo-700 mb-1">{item.title}</h3>
              <p className="text-xs text-slate-700"><strong>Claim:</strong> {item.claim}</p>
              <p className="text-xs text-slate-700"><strong>Mechanism:</strong> {item.mechanism}</p>
              <p className="text-xs text-slate-700"><strong>Consequence:</strong> {item.consequence}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-indigo-700 mb-2">Figure gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {multiqws.figures.map((fig, idx) => (
            <div key={idx} className="rounded-xl border border-indigo-200 bg-white/90 p-3">
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
        <h2 className="text-xl font-semibold text-indigo-700 mb-2">Join / Collaborate</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-indigo-200 bg-white/90 p-4">
            <h4 className="font-semibold text-indigo-700 mb-1">{multiqws.ctaJoin.title}</h4>
            <p className="text-xs text-slate-700">{multiqws.ctaJoin.description}</p>
          </div>
          <div className="rounded-xl border border-indigo-200 bg-indigo-50/80 p-4">
            <h4 className="font-semibold text-indigo-700 mb-1">{multiqws.ctaCollaborate.title}</h4>
            <p className="text-xs text-slate-700">{multiqws.ctaCollaborate.description}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
