"use client";
import React from "react";
import { motion } from "framer-motion";
import { sectionTitleVariants, fadeInVariants } from "./page";

const EmittersPage: React.FC = () => {
  return (
    <section className="space-y-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionTitleVariants}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
          Emitters
        </h2>
        <p className="max-w-2xl text-sm text-slate-700 sm:text-base">
          This page is dedicated to Emitters. Add your content here.
        </p>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        transition={{ duration: 0.5, delay: 0.05 }}
      >
        <div className="rounded-2xl border border-rose-200 bg-rose-50/80 p-4 text-xs text-slate-700 sm:text-sm">
          <p className="font-semibold text-rose-800">Emitters details</p>
          <p className="mt-1">Add more details about Emitters here.</p>
        </div>
      </motion.div>
    </section>
  );
};

export default EmittersPage;
