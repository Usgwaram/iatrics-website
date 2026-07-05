"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { submitLead } from "@/lib/api";

const audiences = [
  "Patient",
  "Doctor",
  "Hospital",
  "Diagnostic Centre",
  "Corporate Health",
  "Insurance Partner",
  "NGO",
  "Government Agency",
  "Media",
  "Other",
];

export function LeadForm({
  title = "Request early access",
  source = "corporate-site",
}: {
  title?: string;
  source?: string;
}) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("submitting");

    try {
      await submitLead({
        name: String(data.get("name") || ""),
        email: String(data.get("email") || ""),
        phone: String(data.get("phone") || ""),
        organization: String(data.get("organization") || ""),
        audience: String(data.get("audience") || ""),
        message: String(data.get("message") || ""),
        source,
      });
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card p-5 sm:p-6" aria-label={title}>
      <h3 className="text-xl font-semibold text-brand-navy">{title}</h3>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor={`${source}-name`} className="text-sm font-semibold text-brand-navy">Full name</label>
          <input id={`${source}-name`} name="name" required autoComplete="name" className="focus-ring rounded-lg border border-blue-100 px-4 py-3 text-sm" />
        </div>
        <div className="grid gap-2">
          <label htmlFor={`${source}-email`} className="text-sm font-semibold text-brand-navy">Email</label>
          <input id={`${source}-email`} name="email" type="email" required autoComplete="email" className="focus-ring rounded-lg border border-blue-100 px-4 py-3 text-sm" />
        </div>
        <div className="grid gap-2">
          <label htmlFor={`${source}-phone`} className="text-sm font-semibold text-brand-navy">Phone</label>
          <input id={`${source}-phone`} name="phone" autoComplete="tel" className="focus-ring rounded-lg border border-blue-100 px-4 py-3 text-sm" />
        </div>
        <div className="grid gap-2">
          <label htmlFor={`${source}-audience`} className="text-sm font-semibold text-brand-navy">I am contacting as</label>
          <select id={`${source}-audience`} name="audience" required defaultValue="" className="focus-ring rounded-lg border border-blue-100 bg-white px-4 py-3 text-sm">
            <option value="" disabled>Select one</option>
            {audiences.map((audience) => <option key={audience} value={audience}>{audience}</option>)}
          </select>
        </div>
        <div className="grid gap-2 sm:col-span-2">
          <label htmlFor={`${source}-organization`} className="text-sm font-semibold text-brand-navy">Organization</label>
          <input id={`${source}-organization`} name="organization" className="focus-ring rounded-lg border border-blue-100 px-4 py-3 text-sm" />
        </div>
        <div className="grid gap-2 sm:col-span-2">
          <label htmlFor={`${source}-message`} className="text-sm font-semibold text-brand-navy">Message</label>
          <textarea id={`${source}-message`} name="message" rows={4} className="focus-ring rounded-lg border border-blue-100 px-4 py-3 text-sm" />
        </div>
      </div>
      <button type="submit" disabled={status === "submitting"} className="primary-button mt-5 w-full gap-2 sm:w-auto">
        <Send size={18} aria-hidden="true" />
        {status === "submitting" ? "Sending..." : "Submit request"}
      </button>
      {status === "success" ? (
        <p role="status" className="mt-4 rounded-lg bg-teal-50 px-4 py-3 text-sm font-semibold text-teal-800">
          Thank you. Your request has been received by Iatrics.
        </p>
      ) : null}
      {status === "error" ? (
        <p role="alert" className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm font-semibold text-red-800">
          Something went wrong. Please email info@iatrics.ng.
        </p>
      ) : null}
    </form>
  );
}
