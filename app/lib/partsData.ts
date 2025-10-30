export interface Part {
  id: string;
  name: string;
  slug: string;
  model: 'Subaru WRX' | 'Honda Civic' | 'Lancer Evo' | 'General';
  price: number;
  description: string;
  imageUrl?: string; // This is from our previous step, it's fine
}

export const partsData: Part[] = [
  {
    id: 'AX-001',
    name: 'Custom V1 Spoiler',
    slug: 'custom-v1-spoiler-wrx',
    model: 'Subaru WRX',
    price: 350.00,
    description: 'A high-performance, 3D-printed rear spoiler designed in-house...',
  },
  {
    id: 'AX-002',
    name: 'Widebody Fender Flares',
    slug: 'widebody-fenders-civic-fk8',
    model: 'Honda Civic',
    price: 800.50,
    description: 'Full 4-piece widebody fender flare kit...',
  },
  {
    id: 'AX-003',
    name: 'Vented Hood (Carbon)',
    slug: 'vented-hood-evo-x',
    model: 'Lancer Evo',
    price: 1200.00,
    description: 'Lightweight carbon fiber vented hood...',
  },
  {
    id: 'AX-004',
    name: 'Universal Splitter',
    slug: 'universal-front-splitter',
    model: 'General',
    price: 150.00,
    description: 'A universal-fit front splitter...',
  },
];

// Helper function to get all unique models for our filter
export const getUniqueModels = () => {
  const models = partsData.map(part => part.model);
  // THIS IS THE ONE-LINE FIX:
  return ['All', ...Array.from(new Set(models))];
};

// Helper function to get a single part by its slug (for the detail page)
export const getPartBySlug = (slug: string) => {
  return partsData.find(part => part.slug === slug);
};