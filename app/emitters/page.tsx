
import React from "react";
import { emitters } from "@/content/topics";

export default function EmittersPage() {
  return (
    <div className="min-h-screen">
      <section className="py-12">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-600 via-pink-400 to-pink-700 bg-clip-text text-transparent mb-4">
          {emitters.title}
        </h1>
        <p className="text-lg text-slate-700 mb-6">{emitters.subtitle}</p>
        <img src={emitters.heroFigure.src} alt={emitters.heroFigure.alt} className="w-64 h-auto rounded-2xl border border-pink-200 mb-4" />
        <div className="text-xs text-slate-600 mb-2">
          <strong>What you see:</strong> {emitters.heroFigure.captionWhat}<br />
          <strong>Why it matters:</strong> {emitters.heroFigure.captionWhy}
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-pink-700 mb-2">Why it matters</h2>
        <ul className="list-disc pl-6 text-slate-700">
          {emitters.whyItMatters.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-pink-700 mb-2">What we build</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {emitters.whatWeBuild.map((item, idx) => (
            <div key={idx} className="rounded-2xl border border-pink-200 bg-white/90 p-4 shadow">
              <h3 className="text-lg font-bold text-pink-700 mb-1">{item.title}</h3>
              <p className="text-slate-700 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-pink-700 mb-2">Knobs we control</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {emitters.knobs.map((item, idx) => (
            <div key={idx} className="rounded-xl border border-pink-200 bg-pink-50/80 p-3">
              <h4 className="font-semibold text-pink-700 mb-1">{item.title}</h4>
              <p className="text-xs text-slate-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-pink-700 mb-2">How we measure</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {emitters.metrics.map((item, idx) => (
            <div key={idx} className="rounded-xl border border-pink-200 bg-white/90 p-3">
              <h4 className="font-semibold text-pink-700 mb-1">{item.title}</h4>
              <p className="text-xs text-slate-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-pink-700 mb-2">Flagship projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {emitters.projects.map((item, idx) => (
            <div key={idx} className="rounded-2xl border border-pink-200 bg-white/90 p-4 shadow">
              <h3 className="text-lg font-bold text-pink-700 mb-1">{item.title}</h3>
              <p className="text-xs text-slate-700"><strong>Claim:</strong> {item.claim}</p>
              <p className="text-xs text-slate-700"><strong>Mechanism:</strong> {item.mechanism}</p>
              <p className="text-xs text-slate-700"><strong>Consequence:</strong> {item.consequence}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-pink-700 mb-2">Figure gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {emitters.figures.map((fig, idx) => (
            <div key={idx} className="rounded-xl border border-pink-200 bg-white/90 p-3">
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
        <h2 className="text-xl font-semibold text-pink-700 mb-2">Join / Collaborate</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-pink-200 bg-white/90 p-4">
            <h4 className="font-semibold text-pink-700 mb-1">{emitters.ctaJoin.title}</h4>
            <p className="text-xs text-slate-700">{emitters.ctaJoin.description}</p>
          </div>
          <div className="rounded-xl border border-pink-200 bg-pink-50/80 p-4">
            <h4 className="font-semibold text-pink-700 mb-1">{emitters.ctaCollaborate.title}</h4>
            <p className="text-xs text-slate-700">{emitters.ctaCollaborate.description}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
