import React from "react";

export default function SectionHeading({ eyebrow, title, subtitle, dark }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <span className={`text-xs font-bold uppercase tracking-widest ${dark ? "text-cyan-300" : "text-violet-500"}`}>
        {eyebrow}
      </span>
      <h2 className={`text-3xl sm:text-4xl font-black tracking-tight mt-2 ${dark ? "text-white" : "text-slate-800"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 ${dark ? "text-slate-300" : "text-slate-500"}`}>{subtitle}</p>
      )}
    </div>
  );
}