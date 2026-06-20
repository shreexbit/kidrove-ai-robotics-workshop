import React from "react";
import SectionHeading from "./SectionHeading";
import { DETAILS } from "../data/workshopDetails";

function DetailCard({ icon: Icon, label, value, i }) {
  return (
    <div
      className="anim-pop group relative bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 p-6 flex flex-col items-start gap-3"
      style={{ animationDelay: `${i * 90}ms` }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative z-10 w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-white shadow-md">
        <Icon size={22} />
      </div>
      <div className="relative z-10">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{label}</p>
        <p className="text-lg font-bold text-slate-800 mt-0.5">{value}</p>
      </div>
    </div>
  );
}

export default function WorkshopDetails() {
  return (
    <section className="bg-[#F5F7FF] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="At a Glance"
          title="Everything you need to know"
          subtitle="Simple, transparent, and built for busy parents."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-10">
          {DETAILS.map((d, i) => (
            <DetailCard key={d.label} {...d} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}