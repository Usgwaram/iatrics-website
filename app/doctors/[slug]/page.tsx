import { notFound } from "next/navigation";
import { PortableContent } from "@/components/PortableContent";
import { getDoctorBySlug, getDoctors } from "@/lib/sanity/data";
import { createMetadata, siteConfig } from "@/lib/site";

export async function generateStaticParams() {
  const doctors = await getDoctors();
  return doctors.map((doctor) => ({ slug: doctor.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doctor = await getDoctorBySlug(slug);

  if (!doctor) {
    return createMetadata({ title: "Doctor Profile", path: `/doctors/${slug}` });
  }

  return createMetadata({
    title: doctor.fullName,
    description: `${doctor.fullName}${doctor.specialty ? `, ${doctor.specialty}` : ""} on the Iatrics provider network.`,
    path: `/doctors/${slug}`,
  });
}

export default async function DoctorDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doctor = await getDoctorBySlug(slug);

  if (!doctor) {
    notFound();
  }

  return (
    <>
      <section className="bg-[linear-gradient(135deg,#f7fcff_0%,#ffffff_55%,#e9fbfb_100%)] py-16 sm:py-20 lg:py-24">
        <div className="section-shell max-w-5xl">
          <p className="eyebrow">Doctor Profile</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-normal text-brand-navy sm:text-6xl">{doctor.fullName}</h1>
          <p className="mt-5 text-lg font-semibold text-brand-teal">{doctor.specialty}</p>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-700">{siteConfig.serviceAreaStatement}</p>
        </div>
      </section>
      <section className="bg-white py-16 sm:py-20">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="card p-6">
            <h2 className="text-2xl font-semibold tracking-normal text-brand-navy">Profile details</h2>
            <div className="mt-5 grid gap-4 text-sm leading-6 text-slate-700">
              {doctor.qualifications?.length ? <p><span className="font-semibold text-brand-navy">Qualifications:</span> {doctor.qualifications.join(", ")}</p> : null}
              {doctor.yearsOfExperience ? <p><span className="font-semibold text-brand-navy">Experience:</span> {doctor.yearsOfExperience}+ years</p> : null}
              {doctor.languages?.length ? <p><span className="font-semibold text-brand-navy">Languages:</span> {doctor.languages.join(", ")}</p> : null}
              {doctor.consultationTypes?.length ? <p><span className="font-semibold text-brand-navy">Consultation types:</span> {doctor.consultationTypes.join(", ")}</p> : null}
            </div>
          </aside>
          <article className="card p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-normal text-brand-navy">Biography</h2>
            <div className="mt-5">
              <PortableContent value={doctor.bio} />
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
