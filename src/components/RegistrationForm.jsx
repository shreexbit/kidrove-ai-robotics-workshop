import React, { useState } from "react";
import axios from "axios";
import { Rocket, User, Mail, Phone, CheckCircle2 } from "lucide-react";
import Field from "./Field";

export default function RegistrationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (values) => {
    const errs = {};

    if (!values.name.trim()) {
      errs.name = "Please enter your name";
    }

    if (!values.email.trim()) {
      errs.email = "Please enter an email";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)
    ) {
      errs.email = "Enter a valid email";
    }

    if (!values.phone.trim()) {
      errs.phone = "Please enter a phone number";
    } else if (!/^[6-9]\d{9}$/.test(values.phone)) {
      errs.phone = "Enter a valid 10-digit phone number";
    }

    return errs;
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = () => {
    setErrors(validate(form));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    try {
      setLoading(true);

      const response = await axios.post(
        "/api/enquiry",
        form
      );

      console.log(response.data);

      if (response.data.success) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error("ERROR:", error);
      console.error("RESPONSE:", error.response);

      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section
        id="register"
        className="bg-gradient-to-br from-violet-600 to-cyan-500 py-20 px-6"
      >
        <div className="max-w-md mx-auto bg-white rounded-3xl shadow-2xl p-10 text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 flex items-center justify-center mb-4">
            <CheckCircle2
              className="text-emerald-500"
              size={32}
            />
          </div>

          <h3 className="text-2xl font-bold text-slate-800">
            Registration Successful 🎉
          </h3>

          <p className="mt-3 text-slate-500">
            Thank you for enrolling in the AI &
            Robotics Summer Workshop.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="register"
      className="bg-gradient-to-br from-violet-600 to-cyan-500 py-20 px-6"
    >
      <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-slate-800">
            Reserve Your Spot
          </h3>

          <p className="text-slate-500 mt-2">
            Starts 15 July 2026 · ₹2,999 · Online
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <Field
            icon={User}
            label="Name"
            name="name"
            value={form.name}
            placeholder="Enter your name"
            error={errors.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <Field
            icon={Mail}
            label="Email"
            name="email"
            type="email"
            value={form.email}
            placeholder="Enter your email"
            error={errors.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <Field
            icon={Phone}
            label="Phone Number"
            name="phone"
            type="tel"
            value={form.phone}
            placeholder="9876543210"
            error={errors.phone}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-bold py-3 rounded-xl"
          >
            <span className="flex items-center justify-center gap-2">
              <Rocket size={18} />
              {loading
                ? "Submitting..."
                : "Confirm Enrollment"}
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}