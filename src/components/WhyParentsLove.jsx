import React from "react";
import SectionHeading from "./SectionHeading";
import { TRUST_CARDS } from "../data/workshopDetails";

export default function WhyParentsLove() {
  return (
    <section className="bg-[#F5F7FF] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Trust"
          title="Why Parents Love This Workshop"
          subtitle="Built with safety, structure, and genuine learning outcomes in mind."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {TRUST_CARDS.map((c, i) => (
            <div
              key={c.title}
              className="anim-pop bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all text-center"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-white shadow-md mb-4">
                <c.icon size={24} />
              </div>
              <h3 className="font-bold text-slate-800">{c.title}</h3>
              <p className="text-sm text-slate-500 mt-2 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}