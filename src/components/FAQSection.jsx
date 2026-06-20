import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { FAQS } from "../data/workshopDetails";

function FAQItem({ q, a, isOpen, onClick }) {
  return (
    <div className="border border-slate-100 rounded-xl bg-white overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-slate-800">{q}</span>
        <ChevronDown
          size={20}
          className={`text-violet-500 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className="transition-all duration-300 ease-in-out overflow-hidden"
        style={{ maxHeight: isOpen ? "200px" : "0px" }}
      >
        <p className="px-5 pb-4 text-slate-500 text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeading eyebrow="Questions" title="Frequently Asked Questions" subtitle="" />
        <div className="space-y-3 mt-10">
          {FAQS.map((f, i) => (
            <FAQItem
              key={f.q}
              {...f}
              isOpen={openIdx === i}
              onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}