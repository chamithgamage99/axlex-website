import { notFound } from 'next/navigation';
import { getPartBySlug, partsData } from '../../lib/partsData';
import Image from 'next/image';
import type { Metadata } from 'next';
import { FaCar, FaWhatsapp } from 'react-icons/fa'; // <-- 1. IMPORTED WHATSAPP ICON

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const part = getPartBySlug(params.slug);

  if (!part) {
    return { title: 'Part Not Found' };
  }

  const metadata: Metadata = {
    title: `${part.name} | AxleX Parts`,
    description: part.description,
  };

  if (part.imageUrl) {
    metadata.openGraph = {
      title: `${part.name} | AxleX Parts`,
      description: part.description,
      images: [part.imageUrl],
    };
  }

  return metadata;
}

export async function generateStaticParams() {
  return partsData.map(part => ({
    slug: part.slug,
  }));
}

export default function PartDetailPage({ params }: Props) {
  const part = getPartBySlug(params.slug);

  if (!part) {
    notFound();
  }

  // 2. CREATED DYNAMIC WHATSAPP LINK
  // Remember to replace 'YOUR_NUMBER' with your actual WhatsApp number (e.g., 94771234567)
  const whatsappMessage = `I'd like to place an order for: ${part.name} (ID: ${part.id})`;
  const whatsappUrl = `https://wa.me/YOUR_NUMBER?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="relative w-full aspect-square rounded-lg overflow-hidden border border-gray-800">
          {part.imageUrl ? (
            <Image
              src={part.imageUrl}
              alt={part.name}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-800">
              <FaCar className="text-9xl text-gray-700" />
            </div>
          )}
        </div>

        <div>
          <p className="text-sm font-medium text-red-500 mb-2">{part.model}</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            {part.name}
          </h1>
          <p className="text-4xl font-bold text-red-600 mb-6">
            ${part.price.toFixed(2)}
          </p>
          <p className="text-lg text-gray-400 mb-8">
            {part.description}
          </p>

          {/* 3. REPLACED THE BUTTON */}
          <a
            href={whatsappUrl}
            target="_blank" // Opens WhatsApp in a new tab
            rel="noopener noreferrer"
            // Changed styles to green for WhatsApp
            className="inline-flex items-center justify-center gap-3 bg-green-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            <FaWhatsapp size={20} />
            Place Order via WhatsApp
          </a>
          <p className="text-xs text-gray-600 mt-4">Part ID: {part.id}</p>
        </div>
      </div>
    </div>
  );
}