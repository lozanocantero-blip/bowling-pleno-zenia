"use client";

import { useLocale } from "next-intl";
import legal from "./legalData.json";

type Block = { h?: string; p?: string; ul?: string[] };
type Doc = { title: string; blocks: Block[] };

export function LegalArticle({ docKey }: { docKey: "aviso" | "privacidad" | "cookies" }) {
  const locale = useLocale();
  const store = legal as unknown as {
    updated: Record<string, string>;
    data: Record<string, Record<string, Doc>>;
  };
  const byLocale = store.data[locale] ?? store.data.es;
  const doc: Doc = byLocale[docKey] ?? store.data.es[docKey];
  const updated = store.updated[locale] ?? store.updated.es;

  return (
    <article className="bg-white px-[5%] pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto max-w-3xl">
        <h1 className="font-heading text-4xl font-bold uppercase text-brand-navy md:text-5xl">
          {doc.title}
        </h1>
        <p className="mt-2 text-sm text-black/50">{updated}</p>
        <div className="mt-8">
          {doc.blocks.map((b, i) => (
            <div key={i}>
              {b.h && (
                <h2 className="mb-2 mt-8 font-heading text-2xl font-bold text-brand-navy">
                  {b.h}
                </h2>
              )}
              {b.p && <p className="mt-3 text-base leading-relaxed text-black/75">{b.p}</p>}
              {b.ul && (
                <ul className="mt-3 list-disc space-y-1 pl-6 text-base text-black/75">
                  {b.ul.map((li, j) => (
                    <li key={j}>{li}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
