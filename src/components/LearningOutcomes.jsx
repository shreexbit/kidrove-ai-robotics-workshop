import React from "react";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { OUTCOMES } from "../data/workshopDetails";

export default function LearningOutcomes() {
  return (
    <section className="bg-gradient-to-br from-[#0A0E27] to-[#161B45] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="By the End of Week 4"
          title="What your child will walk away with"
          subtitle="Real, transferable skills — not just a certificate."
          dark
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {OUTCOMES.map((o, i) => (
            <div
              key={i}
              className="anim-pop flex gap-3 bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <CheckCircle2 className="text-cyan-300 shrink-0 mt-0.5" size={20} />
              <p className="text-sm text-slate-200 leading-relaxed">{o}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}