"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Koliko dugo traje proces prodaje nekretnine?",
    a: "Trajanje zavisi od lokacije, cene i tržišne situacije. Za korektno pozicionirane nekretnine, obično računamo 60 do 120 dana od prvog razgovora do overe ugovora. Zahvaljujući našem predselektovanom registru kupaca, ovaj period često značajno skraćujemo.",
  },
  {
    q: "Koliko košta saradnja sa Nekretninice?",
    a: "Radimo na bazi provizije – plaćate isključivo pri uspeloj prodaji. Visinu provizije transparentno dogovaramo na prvom sastanku i prilagđavamo je tipu nekretnine, cenovnom segmentu i obimu traženih usluga.",
  },
  {
    q: "Kako se utvrđuje tržišna vrednost moje nekretnine?",
    a: "Naša procena zasniva se na kombinaciji hedonskih metoda, aktuelnih uporednih transakcija u regionu i našem dugogodišnjem poznavanju tržišta. Rezultat je realna, tržišna procena – ne uljudnačka brojka.",
  },
  {
    q: "Kako diskretno pristupate prodaji?",
    a: "Diskrecija je ključno obećanje Nekretninice. Po želji, vašu nekretninu vermarktiramo isključivo off-market putem naše mreže kvalifikovanih interesanata – bez javnih oglasa, bez tabli i bez pomena vašeg imena.",
  },
  {
    q: "Koje regione pokrivate?",
    a: "Naš fokus je na Beogradu, Novom Sadu, Nišu i okolini. Aktivni smo i širom Srbije – od Ripnja i Mladenovca do Subotice i Kragujevca. Kontaktirajte nas – rado ćemo proveriti da li imamo pravu mrežu za vašu nekretninu.",
  },
  {
    q: "Da li pomažete i pri kupovini nekretnine?",
    a: "Da. Podržavamo klijente koji traže nekretninu u procesu pretrage, procene i pregovora – diskretno i s jasnim fokusom na vaše interese. Kao registrovani kupac, dobijate pristup nekretninama koje nikada nisu javno oglašene.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-3">
            <h2 className="font-display text-4xl font-black leading-tight text-brand-dark lg:text-5xl">
              Šta želite da
              <br />
              <span className="text-brand-blue">znate.</span>
            </h2>
          </div>
          <p className="max-w-sm font-sans text-sm leading-relaxed text-brand-muted lg:text-right">
            Transparentnost nam je važna. Ovde nalazite odgovore na
            najčešća pitanja o prodaji, proceni i saradnji.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col divide-y divide-brand-border">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="group">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-8 py-7 text-left"
                  aria-expanded={isOpen}
                >
                  {/* Number + Question */}
                  <div className="flex items-start gap-5">
                    <span className="mt-0.5 font-display text-xs font-black tracking-widest text-brand-blue/40 select-none">
                      0{i + 1}
                    </span>
                    <span
                      className={`font-display text-base font-bold leading-snug transition-colors duration-200 lg:text-lg ${
                        isOpen ? "text-brand-blue" : "text-brand-dark group-hover:text-brand-blue"
                      }`}
                    >
                      {item.q}
                    </span>
                  </div>

                  {/* Icon */}
                  <span
                    className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "border-brand-blue bg-brand-blue text-white rotate-45"
                        : "border-brand-border bg-transparent text-brand-dark group-hover:border-brand-blue group-hover:text-brand-blue"
                    }`}
                  >
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="h-3.5 w-3.5"
                    >
                      <line x1="8" y1="2" x2="8" y2="14" />
                      <line x1="2" y1="8" x2="14" y2="8" />
                    </svg>
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-400 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="pb-8 pl-10 font-sans text-sm leading-relaxed text-brand-muted lg:text-base lg:max-w-3xl">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
