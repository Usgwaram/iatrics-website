const steps = [
  {
    title: "Register",
    text: "Create a patient or provider account.",
  },
  {
    title: "Choose your service",
    text: "Book a doctor, request consultation, or upload medical information.",
  },
  {
    title: "Consult securely",
    text: "Connect through video, chat, and structured clinical workflow.",
  },
  {
    title: "Continue care",
    text: "Receive prescriptions, advice, referrals, and follow-up where appropriate.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal text-brand-navy sm:text-4xl">
            A simple path from registration to follow-up care.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-lg border border-blue-100 bg-white p-6 shadow-sm"
            >
              <span className="flex size-11 items-center justify-center rounded-lg bg-brand-blue text-sm font-bold text-white">
                {index + 1}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-brand-navy">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
