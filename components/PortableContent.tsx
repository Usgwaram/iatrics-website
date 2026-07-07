import Image from "next/image";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "next-sanity";
import { urlForImage } from "@/lib/sanity/client";

export function PortableContent({ value }: { value?: PortableTextBlock[] }) {
  if (!value?.length) {
    return (
      <p className="text-base leading-8 text-slate-700">
        Full content will be published here by the Iatrics editorial team.
      </p>
    );
  }

  return (
    <div className="space-y-6 text-slate-700">
      <PortableText
        value={value}
        components={{
          block: {
            h2: ({ children }) => <h2 className="pt-4 text-3xl font-semibold tracking-normal text-brand-navy">{children}</h2>,
            h3: ({ children }) => <h3 className="pt-3 text-2xl font-semibold tracking-normal text-brand-navy">{children}</h3>,
            normal: ({ children }) => <p className="text-base leading-8">{children}</p>,
          },
          list: {
            bullet: ({ children }) => <ul className="ml-5 list-disc space-y-2 text-base leading-8">{children}</ul>,
            number: ({ children }) => <ol className="ml-5 list-decimal space-y-2 text-base leading-8">{children}</ol>,
          },
          types: {
            image: ({ value: imageValue }) => {
              const imageUrl = urlForImage(imageValue)?.width(1200).height(700).fit("crop").url();

              if (!imageUrl) {
                return null;
              }

              return (
                <div className="relative my-8 aspect-[16/9] overflow-hidden rounded-lg border border-blue-100">
                  <Image src={imageUrl} alt={imageValue?.alt || ""} fill className="object-cover" sizes="(min-width: 1024px) 900px, 100vw" />
                </div>
              );
            },
          },
        }}
      />
    </div>
  );
}
