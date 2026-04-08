const services = [
  {
    number: "01",
    title: "Prodaja i marketing",
    description:
      "Profesionalna priprema, ciljani marketing i diskretna blizina tržištu — za najbolju moguću prodajnu cenu vaše nekretnine.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /><path d="M11 8v6M8 11h6" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Procena nekretnine",
    description:
      "Solidna analiza tržišne vrednosti zasnovana na aktuelnim podacima i višegodišnjem iskustvu. Iskreno, realno i pouzdano.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Savetovanje i podrška",
    description:
      "Od prve ideje do potpisivanja ugovora: lično, stručno savetovanje koje vas sigurno vodi kroz svaku fazu.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
];

export function ServicesSectionV2() {
  return (
    <section id="usluge" className="bg-[#F5F7FA] py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Header */}
        <div className="mb-20 text-center">
          <h2 className="font-sans text-4xl font-black tracking-tight text-brand-dark md:text-5xl">
            Usluge prilagođene vama
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-sans text-base leading-relaxed text-brand-muted">
            Nekretnine su više od četiri zida — one su deo životnih priča.
            Pratim vas s kompetencijom, diskrecijom i empatijom.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map(({ number, title, description, icon }) => (
            <div
              key={number}
              className="group relative flex flex-col gap-8 overflow-hidden rounded-2xl bg-white p-6 transition-shadow hover:shadow-lg md:p-10"
            >
              {/* Faint number watermark */}
              <span className="pointer-events-none absolute -right-3 -top-4 select-none font-sans text-[7rem] font-black leading-none text-brand-border/50 transition-colors group-hover:text-brand-blue/5">
                {number}
              </span>

              {/* Icon */}
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                {icon}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-3">
                <h3 className="font-sans text-lg font-bold text-brand-dark">
                  {title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-brand-muted">
                  {description}
                </p>
              </div>

              {/* Bottom line accent */}
              <div className="mt-auto h-px w-8 bg-brand-blue/30 transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
