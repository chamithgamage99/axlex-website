export interface Part {
  id: string;
  name: string;
  slug: string;
  model: 'Subaru WRX' | 'Honda Civic' | 'Lancer Evo' | 'General' | 'Mercedes Benz C200';
  price: number;
  description: string;
  imageUrl?: string; // This is from our previous step, it's fine
}

export const partsData: Part[] = [
  {
    id: 'AX-001',
    name: 'Universal Splitter',
    slug: 'universal-front-splitter',
    model: 'General',
    price: 150.00,
    description: 'Coming Soon..',
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
