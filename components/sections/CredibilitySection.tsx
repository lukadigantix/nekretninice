const usps = [
  {
    kpi: "12K",
    kpiPrefix: "od €",
    kpiSuffix: "",
    tag: "Honorar",
    title: "Fiksni honorar – bez procenta",
    desc: "Transparentna naknada od €12.000, bez obzira na prodajnu cenu. Bez rizika, bez skrivenih troškova.",
  },
  {
    kpi: "24/7",
    kpiPrefix: "",
    kpiSuffix: "",
    tag: "Tržište",
    title: "Analize tržišta uživo",
    desc: "Uvid u kretanje cena, potražnju i uporedne nekretnine u realnom vremenu – uvek na vašem panelu.",
  },
  {
    kpi: "100%",
    kpiPrefix: "",
    kpiSuffix: "",
    tag: "Uspesi​nost",
    title: "Prodatih nekretnina",
    desc: "Visok procenat uspešno zaključenih prodaja zahvaljujući preciznom pozicioniranju.",
  },
  {
    kpi: "500+",
    kpiPrefix: "",
    kpiSuffix: "",
    tag: "Baza kupaca",
    title: "Proverenih kupaca",
    desc: "Više od 500 aktivnih kupaca u bazi – brže uparivanje ponude sa potražnjom, bez gubljenja vremena.",
  },
];

export function CredibilitySection() {
  return (
    <section className="bg-brand-dark py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Split header */}
        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end">
          <div className="flex flex-col gap-3">
            <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand-teal">
            Zašto Nekretninice
            </span>
            <h2 className="font-display text-4xl font-black leading-tight text-white lg:text-5xl">
              Jasno merljive{" "}
              <span className="text-brand-blue">prednosti.</span>
            </h2>
          </div>
          <p className="font-sans text-sm leading-relaxed text-white/50 lg:text-right lg:max-w-sm lg:ml-auto">
            Spajamo preciznost sa modernom tehnologijom
            i međunarodnom mrežom – za vašu nekretninu.
          </p>
        </div>

        {/* USP cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {usps.map((usp, i) => (
            <div
              key={i}
              className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300 hover:border-brand-blue/50 hover:bg-white/10"
            >
              {/* Top: tag pill */}
              <div className="mb-6 flex items-center justify-between">
                <span className="rounded-full border border-white/15 px-3 py-1 font-sans text-[0.6rem] font-semibold tracking-widest uppercase text-white/40">
                  {usp.tag}
                </span>
                <span className="font-sans text-xs font-medium text-white/20">
                  0{i + 1}
                </span>
              </div>

              {/* KPI */}
              <div className="mb-6 flex flex-col gap-0.5">
                <span className={`font-sans text-xs font-medium tracking-widest uppercase text-brand-blue/70 ${usp.kpiPrefix ? '' : 'invisible'}`}>
                  {usp.kpiPrefix || '\u00A0'}
                </span>
                <span className="font-display text-5xl font-black leading-none text-white lg:text-6xl">
                  {usp.kpi}
                </span>
                <span className={`font-sans text-xs font-medium tracking-widest uppercase text-white/40 mt-1 ${usp.kpiSuffix ? '' : 'invisible'}`}>
                  {usp.kpiSuffix || '\u00A0'}
                </span>
              </div>

              {/* Divider */}
              <div className="mb-5 h-px w-8 bg-brand-blue transition-all duration-300 group-hover:w-full" />

              {/* Text */}
              <div className="flex flex-col gap-2">
                <h3 className="font-display text-sm font-bold leading-snug text-white">
                  {usp.title}
                </h3>
                <p className="font-sans text-xs leading-relaxed text-white/45">
                  {usp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
