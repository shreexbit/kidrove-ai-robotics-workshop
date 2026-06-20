import React from "react";
import { Sparkles, Rocket, Cpu, Users, Clock, IndianRupee, Wrench, Zap } from "lucide-react";

export default function Hero({ onEnroll, onExplore }) {
  return (
    <section className="relative overflow-hidden bg-[#0A0E27] text-white">
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_30%,black,transparent)]" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-violet-600/30 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-24 w-80 h-80 bg-cyan-500/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 pt-14 pb-20 sm:pt-20 sm:pb-28 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-white/5 border border-cyan-400/30 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide text-cyan-300 mb-6">
            <Sparkles size={14} /> ENROLLMENTS OPEN · STARTS 15 JULY 2026
          </div>
          <h1 className="font-black tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
            Build Robots.
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
              Think Like an AI.
            </span>
          </h1>
          <p className="mt-6 text-slate-300 text-lg max-w-md">
            A 4-week online summer workshop where kids aged 8–14 go from
            curious beginners to confident young roboticists — one sensor,
            one circuit, one idea at a time.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <button
              onClick={onEnroll}
              className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 font-bold text-[#0A0E27] shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all hover:scale-[1.03]"
            >
              <Rocket size={18} /> Enroll Now
            </button>
            <button
              onClick={onExplore}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/20 bg-white/5 backdrop-blur font-semibold hover:bg-white/10 transition-all"
            >
              <Cpu size={18} /> Explore Curriculum
            </button>
          </div>

          <div className="mt-8 flex items-center gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-1.5"><Users size={16} className="text-cyan-300" /> 8–14 yrs</div>
            <div className="flex items-center gap-1.5"><Clock size={16} className="text-cyan-300" /> 4 Weeks</div>
            <div className="flex items-center gap-1.5"><IndianRupee size={16} className="text-cyan-300" /> 2,999 only</div>
          </div>
        </div>

        {/* Illustration area: child building a robot, built from CSS shapes */}
        <div className="relative h-[420px] sm:h-[480px] flex items-center justify-center">
          <div className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-violet-500/20 to-cyan-400/20 blur-2xl" />
          <div className="relative scanline-wrap w-72 sm:w-80 h-80 sm:h-96 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="scanline" />
            {/* "Child" silhouette */}
            <div className="absolute bottom-6 left-6 anim-float-slow">
              <div className="w-14 h-14 rounded-full bg-amber-200" />
              <div className="w-20 h-24 rounded-t-3xl bg-violet-400 mt-1 -ml-3" />
            </div>
            {/* Robot under construction */}
            <div className="absolute bottom-8 right-8 sm:right-10 anim-float">
              <div className="relative w-24 sm:w-28">
                {/* head */}
                <div className="w-16 h-14 mx-auto rounded-xl bg-gradient-to-b from-slate-100 to-slate-300 border-2 border-cyan-400 relative flex items-center justify-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 eye-blink" />
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 eye-blink" />
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-1 h-3 bg-cyan-400" />
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-fuchsia-400 anim-pulse-glow" />
                </div>
                {/* body */}
                <div className="w-20 h-16 mx-auto -mt-1 rounded-lg bg-gradient-to-b from-violet-300 to-violet-500 border-2 border-white/40 flex items-center justify-center">
                  <Wrench className="text-white/80" size={20} />
                </div>
                {/* arms */}
                <div className="absolute top-16 -left-3 w-3 h-10 rounded bg-slate-300 anim-wiggle" />
                <div className="absolute top-16 -right-3 w-3 h-10 rounded bg-slate-300" />
                {/* legs */}
                <div className="flex justify-center gap-2 mt-1">
                  <div className="w-4 h-8 rounded bg-slate-400" />
                  <div className="w-4 h-8 rounded bg-slate-400" />
                </div>
              </div>
            </div>
            {/* floating gears/sparks */}
            <Zap className="absolute top-8 left-10 text-cyan-300 anim-float" size={20} />
            <Cpu className="absolute top-10 right-12 text-violet-300 anim-float-slow" size={22} />
            <Sparkles className="absolute bottom-24 left-1/2 text-fuchsia-300 anim-pulse-glow" size={18} />
          </div>
        </div>
      </div>
    </section>
  );
}