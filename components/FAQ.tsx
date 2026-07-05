"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Is Iatrics available now?",
    answer:
      "Iatrics is preparing for launch. You can join the waiting list to receive updates.",
  },
  {
    question: "Can doctors register?",
    answer:
      "Yes. Doctors and healthcare providers can apply for onboarding and verification.",
  },
  {
    question: "Will consultations be private?",
    answer:
      "Yes. Iatrics is designed around secure and confidential digital healthcare interactions.",
  },
  {
    question: "Can patients upload test results?",
    answer:
      "Yes. The platform is designed to support upload of investigation results, images, and relevant documents.",
  },
  {
    question: "Will Iatrics replace hospitals?",
    answer:
      "No. Iatrics supports convenient consultation and follow-up care, but emergencies and cases requiring physical examination or procedures should be managed in appropriate health facilities.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal text-brand-navy sm:text-4xl">
            Common questions before launch.
          </h2>
        </div>
        <div className="divide-y divide-blue-100 rounded-lg border border-blue-100 bg-white shadow-sm">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div key={faq.question}>
                <button
                  type="button"
                  id={buttonId}
                  aria-controls={panelId}
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="focus-ring flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-semibold text-brand-navy sm:px-6"
                >
                  {faq.question}
                  <ChevronDown
                    className={`shrink-0 text-brand-blue transition ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    size={20}
                    aria-hidden="true"
                  />
                </button>
                {isOpen ? (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-5 pb-5 sm:px-6"
                  >
                    <p className="text-sm leading-7 text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
