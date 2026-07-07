import Link from "next/link";
import { ArrowRight, Stethoscope } from "lucide-react";
import { getDoctors } from "@/lib/sanity/data";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Doctors",
  description: "Explore Iatrics doctor profiles, specialties, consultation types and provider network information.",
  path: "/doctors",
});

export default async function DoctorsPage() {
  const doctors = await getDoctors();

  return (
    <>
      <section className="bg-[linear-gradient(135deg,#f7fcff_0%,#ffffff_55%,#e9fbfb_100%)] py-16 sm:py-20 lg:py-24">
        <div className="section-shell max-w-5xl">
          <p className="eyebrow">Doctors</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-normal text-brand-navy sm:text-6xl">Iatrics provider network</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 sm:text-xl">
            Featured doctors and healthcare professionals will be managed through the Iatrics CMS.
          </p>
        </div>
      </section>
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="section-shell grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <article key={doctor.slug} className="card flex h-full flex-col p-6">
              <Stethoscope className="text-brand-blue" size={26} aria-hidden="true" />
              <h2 className="mt-5 text-2xl font-semibold tracking-normal text-brand-navy">{doctor.fullName}</h2>
              <p className="mt-2 text-sm font-semibold text-brand-teal">{doctor.specialty}</p>
              <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                {doctor.yearsOfExperience ? `${doctor.yearsOfExperience}+ years of experience. ` : ""}
                {doctor.consultationTypes?.join(", ") || "Digital consultation and follow-up care."}
              </p>
              <Link href={`/doctors/${doctor.slug}`} className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full text-sm font-semibold text-brand-blue">
                View profile
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
