import { SectionTitle } from "@/components/ui/SectionTitle";

export function ContactSection() {
  return (
    <section id="kontakt" className="py-24 bg-brand-dark">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
          {/* Text */}
          <div className="flex flex-col gap-8">
            <SectionTitle
              title="Razgovarajmo o vašoj nekretnini"
              subtitle="Bez obzira da li kupujete, prodajete ili samo želite prvu procenu – tu smo za vas. Diskretno, profesionalno i bez obaveza."
              align="left"
              inverted
            />

            <div className="flex flex-col gap-4">
              <ContactItem
                label="Telefon"
                value="+381 63 289 123"
                href="tel:+38163289123"
              />
              <ContactItem
                label="E-pošta"
                value="nekretninice@gmail.com"
                href="mailto:nekretninice@gmail.com"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function ContactItem({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-brand-teal">
        {label}
      </span>
      <a
        href={href}
        className="font-sans text-base text-white/80 hover:text-brand-teal transition-colors"
      >
        {value}
      </a>
    </div>
  );
}
