import React from "react";
import '../globals.css';
import { Sparkles } from "lucide-react";

function SiteNav() {
  return (
    <header className="sticky inset-x-0 top-0 z-30 border-b border-amber-200/80 bg-orange-50/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="/"
          className="flex items-center gap-2 rounded-full border border-orange-300/90 bg-white/80 px-3 py-1 text-xs font-medium tracking-wide text-orange-700 shadow-sm transition hover:border-orange-400 hover:bg-orange-50"
        >
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-tr from-orange-400 to-amber-300 text-white">
            <Sparkles className="h-3.5 w-3.5" />
          </span>
          <span className="uppercase">Perovskite Story</span>
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-amber-200/80 bg-orange-50/80 py-4">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-4 text-[0.7rem] text-slate-600 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <p>
          {new Date().getFullYear()} [Your Group Name]. Built to tell the story behind our perovskites.
        </p>
        <p>Made by Quadeer Rehman</p>
      </div>
    </footer>
  );
}

export default function AbsorbersLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen text-slate-900 font-sans relative overflow-hidden">
      <img
        src="/border.png"
        alt="Border Overlay"
        className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none select-none"
        style={{ opacity: 0.8, transform: 'translate(-10px, 20px) scale(0.95)' }}
        aria-hidden="true"
      />
      <div className="relative z-10">
        <SiteNav />
        <main className="mx-auto flex max-w-6xl flex-col gap-24 px-4 pb-24 pt-24 sm:px-6 lg:px-8">
          {/* Absorbers Team Section */}
         
          {/* Children content (if any) */}
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
