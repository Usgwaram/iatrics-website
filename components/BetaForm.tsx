"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";

const audienceTypes = [
  "Patient",
  "Doctor",
  "Health organization",
  "Partner",
];

export function BetaForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Later, connect this form to an API route, Google Sheets, Airtable,
    // Brevo, Mailchimp, or the Iatrics backend at api.iatrics.ng.
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <section id="beta" className="bg-brand-navy py-16 text-white sm:py-20 lg:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
        <div>
          <p className="eyebrow text-brand-cyan">Beta access</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">
            Be among the first to experience Iatrics.
          </h2>
          <p className="mt-5 text-base leading-8 text-blue-50">
            We are inviting early patients and healthcare providers to join the
            Iatrics beta launch.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-lg bg-white p-5 text-brand-ink shadow-soft sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="grid gap-2">
              <label htmlFor="fullName" className="text-sm font-semibold text-brand-navy">
                Full name
              </label>
              <input
                id="fullName"
                required
                name="fullName"
                autoComplete="name"
                className="focus-ring rounded-lg border border-blue-100 px-4 py-3 text-sm font-normal text-brand-ink"
                placeholder="Your full name"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-semibold text-brand-navy">
                Email
              </label>
              <input
                id="email"
                required
                type="email"
                name="email"
                autoComplete="email"
                className="focus-ring rounded-lg border border-blue-100 px-4 py-3 text-sm font-normal text-brand-ink"
                placeholder="you@example.com"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="phone" className="text-sm font-semibold text-brand-navy">
                Phone number
              </label>
              <input
                id="phone"
                required
                name="phone"
                autoComplete="tel"
                className="focus-ring rounded-lg border border-blue-100 px-4 py-3 text-sm font-normal text-brand-ink"
                placeholder="+234"
              />
            </div>
            <div className="grid gap-2">
              <label
                htmlFor="audienceType"
                className="text-sm font-semibold text-brand-navy"
              >
                I am a
              </label>
              <select
                id="audienceType"
                required
                name="audienceType"
                defaultValue=""
                className="focus-ring rounded-lg border border-blue-100 bg-white px-4 py-3 text-sm font-normal text-brand-ink"
              >
                <option value="" disabled>
                  Select one
                </option>
                {audienceTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid gap-2 sm:col-span-2">
              <label htmlFor="city" className="text-sm font-semibold text-brand-navy">
                City
              </label>
              <input
                id="city"
                required
                name="city"
                autoComplete="address-level2"
                className="focus-ring rounded-lg border border-blue-100 px-4 py-3 text-sm font-normal text-brand-ink"
                placeholder="Abuja, Kano, Port Harcourt..."
              />
            </div>
            <div className="grid gap-2 sm:col-span-2">
              <label htmlFor="message" className="text-sm font-semibold text-brand-navy">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="focus-ring rounded-lg border border-blue-100 px-4 py-3 text-sm font-normal text-brand-ink"
                placeholder="Tell us what you are looking for"
              />
            </div>
          </div>
          <button
            type="submit"
            className="focus-ring mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-navy sm:w-auto"
          >
            <Send size={18} aria-hidden="true" />
            Request Early Access
          </button>
          {submitted ? (
            <p
              className="mt-4 rounded-lg bg-teal-50 px-4 py-3 text-sm font-semibold text-teal-800"
              role="status"
            >
              Thank you. Your early access request has been received.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
