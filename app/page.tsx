import { AudienceSections } from "@/components/AudienceSections";
import { BetaForm } from "@/components/BetaForm";
import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { ProblemSolution } from "@/components/ProblemSolution";
import { Security } from "@/components/Security";
import { TrustBar } from "@/components/TrustBar";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <ProblemSolution />
        <Features />
        <AudienceSections />
        <HowItWorks />
        <Security />
        <BetaForm />
        <FAQ />
        <section
          id="final-cta"
          className="bg-brand-navy py-16 text-white sm:py-20 lg:py-24"
        >
          <div className="section-shell text-center">
            <p className="eyebrow text-brand-cyan">Early access</p>
            <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold tracking-normal sm:text-4xl lg:text-5xl">
              Healthcare access is changing. Be part of it.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-blue-50 sm:text-lg">
              Join the Iatrics waiting list today or apply to become one of our
              early healthcare providers.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#beta"
                className="focus-ring inline-flex items-center justify-center rounded-full bg-brand-cyan px-6 py-3 text-sm font-semibold text-brand-navy shadow-soft transition hover:bg-white"
              >
                Join Waiting List
              </a>
              <a
                href="#doctors"
                className="focus-ring inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Become a Provider
              </a>
              <a
                href="mailto:info@iatrics.ng"
                className="focus-ring inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Contact Iatrics
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
