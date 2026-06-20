import React from "react";

export default function Field({
  icon: Icon,
  label,
  name,
  value,
  placeholder,
  error,
  onChange,
  onBlur,
  type = "text",
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-slate-700 mb-1.5">
        {label}
      </label>
      <div
        className={`flex items-center gap-2 rounded-xl border px-3.5 py-2.5 transition-colors ${
          error ? "border-rose-400 bg-rose-50" : "border-slate-200 focus-within:border-violet-400 bg-slate-50"
        }`}
      >
        <Icon size={18} className={error ? "text-rose-400" : "text-slate-400"} />
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          className="w-full bg-transparent outline-none text-sm text-slate-800 placeholder:text-slate-400"
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
        />
      </div>
      {error && (
        <p id={`${name}-error`} className="text-rose-500 text-xs mt-1.5 font-medium">
          {error}
        </p>
      )}
    </div>
  );
}