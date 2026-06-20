import React from "react";
import SectionHeading from "./SectionHeading";
import { WEEKS } from "../data/workshopDetails";

export default function CurriculumTimeline() {
  return (
    <section id="curriculum" className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="4-Week Journey"
          title="Curriculum Timeline"
          subtitle="A guided path from first idea to working robot."
        />

        <div className="relative mt-14">
          <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-300 via-cyan-300 to-fuchsia-300" />
          <div className="space-y-10 sm:space-y-0">
            {WEEKS.map((w, i) => (
              <div
                key={w.week}
                className={`relative sm:flex sm:items-center sm:mb-16 ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                <div className={`sm:w-1/2 ${i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
                  <div className="anim-pop inline-block bg-slate-50 border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow text-left max-w-md">
                    <span className="text-xs font-bold uppercase tracking-wider text-violet-500">{w.week}</span>
                    <h3 className="text-xl font-extrabold text-slate-800 mt-1">{w.title}</h3>
                    <p className="text-slate-500 mt-2 text-sm leading-relaxed">{w.desc}</p>
                  </div>
                </div>
                <div className="hidden sm:flex sm:w-0 sm:justify-center relative">
                  <div className="absolute w-11 h-11 rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-white shadow-lg ring-4 ring-white">
                    <w.icon size={18} />
                  </div>
                </div>
                <div className="hidden sm:block sm:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}