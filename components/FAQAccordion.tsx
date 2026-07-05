"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/lib/content";

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
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
              <ChevronDown className={`shrink-0 text-brand-blue transition ${isOpen ? "rotate-180" : ""}`} size={20} aria-hidden="true" />
            </button>
            {isOpen ? (
              <div id={panelId} role="region" aria-labelledby={buttonId} className="px-5 pb-5 sm:px-6">
                <p className="text-sm leading-7 text-slate-600">{faq.answer}</p>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
