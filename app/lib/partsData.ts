export interface Part {
  id: string;
  name: string;
  slug: string;
  model: 'Subaru WRX' | 'Honda Civic' | 'Lancer Evo' | 'General';
  price: number;
  description: string;
  imageUrl?: string;
}

export const partsData: Part[] = [
  {
    id: 'AX-001',
    name: 'Custom V1 Spoiler',
    slug: 'custom-v1-spoiler-wrx',
    model: 'Subaru WRX',
    price: 350.00,
    description: 'A high-performance, 3D-printed rear spoiler designed in-house for the 2015-2021 Subaru WRX. Improves downforce and aesthetics.',
  },
  {
    id: 'AX-002',
    name: 'Widebody Fender Flares',
    slug: 'widebody-fenders-civic-fk8',
    model: 'Honda Civic',
    price: 800.50,
    description: 'Full 4-piece widebody fender flare kit for the Honda Civic Type R (FK8). Adds 50mm of width.',
  },
  {
    id: 'AX-003',
    name: 'Vented Hood (Carbon)',
    slug: 'vented-hood-evo-x',
    model: 'Lancer Evo',
    price: 1200.00,
    description: 'Lightweight carbon fiber vented hood for the Lancer Evolution X. Improves cooling and reduces weight.',
  },
  {
    id: 'AX-004',
    name: 'Universal Splitter',
    slug: 'universal-front-splitter',
    model: 'General',
    price: 150.00,
    description: 'A universal-fit front splitter. 3D-printed from durable ABS composite. Hardware included.',
  },
];

export const getUniqueModels = () => {
  const models = partsData.map(part => part.model);
  return ['All', ...new Set(models)];
};

export const getPartBySlug = (slug: string) => {
  return partsData.find(part => part.slug === slug);
};