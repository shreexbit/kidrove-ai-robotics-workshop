import React, { useState, useEffect } from "react";
import { Bot, X } from "lucide-react";
import { ROBOT_MESSAGES } from "../data/workshopDetails";

export default function RobotAssistant() {
  const [msgIndex, setMsgIndex] = useState(0);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setMsgIndex((i) => (i + 1) % ROBOT_MESSAGES.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="fixed bottom-5 right-4 sm:right-6 z-50 flex flex-col items-end gap-2">
      {open && (
        <div
          key={msgIndex}
          className="anim-pop max-w-[230px] sm:max-w-[260px] bg-white text-slate-800 rounded-2xl rounded-br-sm shadow-2xl px-4 py-3 text-sm font-medium border border-violet-100 relative"
        >
          <button
            onClick={() => setOpen(false)}
            aria-label="Dismiss robot assistant"
            className="absolute -top-2 -right-2 bg-slate-800 text-white rounded-full p-1 hover:bg-slate-700"
          >
            <X size={12} />
          </button>
          {ROBOT_MESSAGES[msgIndex]}
        </div>
      )}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle robot assistant"
        className="anim-float relative"
      >
        <div className="absolute inset-0 rounded-full bg-cyan-400 blur-xl anim-pulse-glow" />
        <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center shadow-2xl border-2 border-white/30">
          <Bot className="text-white" size={30} />
        </div>
      </button>
    </div>
  );
}
