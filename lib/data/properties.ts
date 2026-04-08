export type Property = {
  id: string;
  title: string;
  address: string;
  city: string;
  price: string;
  priceRaw: number;
  rooms: number;
  sqm: number;
  floor: number;
  yearBuilt: number;
  description: string;
  features: string[];
  tags: { label: string; variant: "default" | "exclusive" | "sold" | "new" }[];
  image?: string;
};

export const properties: Property[] = [
  {
    id: "penthouse-beograd-vracar",
    title: "Ekskluzivni penthouse s pogledom na Beograd",
    address: "Bulevar oslobođenja 142",
    city: "Beograd – Vračar",
    price: "€ 195.000",
    priceRaw: 195000,
    rooms: 5.5,
    sqm: 248,
    floor: 7,
    yearBuilt: 2019,
    description:
      "Jedinstveni penthouse u srcu Vračara s predivnim panoramskim pogledom na Beograd. Prostrana, svetla stambena površina uređena je od strane renomiranog arhitekte enterijera korišćenjem skupocenih materijala. Obodne terase pozivaju na uživanje. Potpuna privatnost, najviši kvalitet i jedinstven pogled čine ovu nekretninu retkom ponudom.",
    features: [
      "Panoramska terasa, oko 85 m²",
      "Otvorena kuhinja sa Bulthaup ugradnim uređajima",
      "Primarna zona sa garderoberom",
      "Izrada po meri i parket od hrasta",
      "Podno grejanje",
      "Lift direktno u stan",
      "2 mesta u podzemnoj garaži",
      "Privatna vinska ostava",
      "Smart-Home sistem",
    ],
    tags: [
      { label: "Ekskluzivno", variant: "exclusive" },
      { label: "Pogled na jezero", variant: "default" },
    ],
    image: "https://images.pexels.com/photos/7031405/pexels-photo-7031405.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "vila-dedinje-beograd",
    title: "Velelepna vila na Dedinju",
    address: "Užička 74",
    city: "Beograd – Dedinje",
    price: "€ 380.000",
    priceRaw: 380000,
    rooms: 9.5,
    sqm: 520,
    floor: 1,
    yearBuilt: 1924,
    description:
      "Raskošna vila u najekskluzivnijem beogradskom kraju – Dedinju. Pažljivo renovirani posed spaja istorijski šarm sa najsavremenijim komforom. Uređeni park-vrt i reprezentativno uređenje unutrašnjosti stvaraju izvanredno stambeno iskustvo. Idealno za najzahtevnije klijente koji cene privatnost, istoriju i kvalitet.",
    features: [
      "Direktan pristup parku sa sopstvenom kapijom",
      "Park-vrt oko 1.800 m²",
      "Reprezentativni ulaz sa mermernim podom",
      "Biblioteka i vinska ostava",
      "Zimska bašta s pogledom na vrt",
      "Dupla garaža i više spoljnih parking mesta",
      "Kuća za goste, 2 sobe",
      "Sve moderne instalacije obnovljene (2021)",
    ],
    tags: [
      { label: "Ekskluzivno", variant: "exclusive" },
      { label: "Novo", variant: "new" },
    ],
    image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "maisonet-novi-sad-centar",
    title: "Elegantni maisonet u centru Novog Sada",
    address: "Bulevar Mihajla Pupina 18",
    city: "Novi Sad – Centar",
    price: "€ 95.000",
    priceRaw: 95000,
    rooms: 4.5,
    sqm: 162,
    floor: 3,
    yearBuilt: 2015,
    description:
      "Prostrani maisonet stan u mirnom delu centra Novog Sada. Moderno opremanje na dva nivoa, prostorije ispunjene svetlošću i sunčana terasa čine ovu nekretninu posebnom ponudom u srcu Vojvodine.",
    features: [
      "Sunčana terasa oko 30 m² s pogledom na grad",
      "Otvorena kuhinja s kvalitetnim uređajima",
      "Kupatilo sa slobodnostojećom kadom",
      "Parket od hrasta",
      "Mesto u podzemnoj garaži",
      "Podrum",
    ],
    tags: [
      { label: "Novo", variant: "new" },
    ],
    image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "penthouse-novi-beograd-blok",
    title: "Penthouse s krovnom terasom, Novi Beograd",
    address: "Bulevar Arsenija Čarnojevića 9",
    city: "Beograd – Novi Beograd",
    price: "€ 235.000",
    priceRaw: 235000,
    rooms: 6.5,
    sqm: 290,
    floor: 6,
    yearBuilt: 2020,
    description:
      "Ekskluzivni penthouse na top lokaciji na Novom Beogradu sa prostornom krovnom terasom i širim pogledom na grad i Savu. Najkvalitetniji materijali, otvoren raspored i najsavremenija kućna tehnika.",
    features: [
      "Krovne terasa oko 100 m²",
      "Otvoreni prostor za dnevni boravak i trpezariju",
      "3 kupaonice, 2 kupatila",
      "Smart-Home",
      "2 mesta u podzemnoj garaži",
    ],
    tags: [
      { label: "Ekskluzivno", variant: "exclusive" },
    ],
    image: "https://images.pexels.com/photos/4290722/pexels-photo-4290722.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "kuca-sremska-mitrovica",
    title: "Šarmantna kuća sa vrtom, Sremska Mitrovica",
    address: "Svetog Save 33",
    city: "Sremska Mitrovica",
    price: "€ 165.000",
    priceRaw: 165000,
    rooms: 7.5,
    sqm: 340,
    floor: 1,
    yearBuilt: 2005,
    description:
      "Uređena porodična kuća u mirnom stambenom delu Sremske Mitrovice sa velikim, parkovskim vrtom. Svetle prostorije, moderno opremanje i direktna veza sa prirodom.",
    features: [
      "Vrt oko 900 m²",
      "Dupla garaža",
      "Pomoćne prostorije / Atelje",
      "Uređen podrum",
      "Terasa i sedenje",
    ],
    tags: [
      { label: "Novo", variant: "new" },
    ],
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "stan-nis-centar",
    title: "Stilski stan u centru Niša",
    address: "Obrenovićeva 12",
    city: "Niš – Centar",
    price: "€ 85.000",
    priceRaw: 85000,
    rooms: 3.5,
    sqm: 118,
    floor: 4,
    yearBuilt: 2018,
    description:
      "Visokokvalitetno renoviran stan u srcu Niša. Mirna, sunčana lokacija, elegantno uređenje i blizina restorana, tvrđave i javnog prevoza.",
    features: [
      "Južni balkon",
      "Parket",
      "Ugradna kuhinja",
      "Mesto u podzemnoj garaži",
    ],
    tags: [
      { label: "Ekskluzivno", variant: "exclusive" },
    ],
    image: "https://images.pexels.com/photos/5524239/pexels-photo-5524239.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export function getPropertyById(id: string): Property | undefined {
  return properties.find((p) => p.id === id);
}
