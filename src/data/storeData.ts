/**
 * Centralized Store Data for He "N" She Nx
 * Easily editable business information, contacts, and images.
 */

// Import generated photorealistic images
import storeFrontHero from '../assets/images/store_front_hero_1788191281676.jpg';
import storeInterior from '../assets/images/store_interior_1788191324362.jpg';
import mensFashion from '../assets/images/mens_fashion_1788191343584.jpg';
import womensFashion from '../assets/images/womens_fashion_1788191361212.jpg';
import ethnicWear from '../assets/images/ethnic_wear_1788191381381.jpg';
import fabricDetails from '../assets/images/fabric_details_1788191406594.jpg';

export interface StoreInfo {
  name: string;
  tagline: string;
  businessType: string;
  rating: {
    score: number;
    totalReviews: number;
    source: string;
  };
  location: {
    street: string;
    landmark: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    fullAddress: string;
    googleMapsUrl: string;
    googleMapsEmbedUrl: string;
  };
  hours: {
    status: string;
    displayText: string;
    timing: string;
    days: string;
  };
  contact: {
    whatsappNumber: string;
    displayPhone: string;
    rawPhone: string;
    phoneCallUrl: string;
    whatsappDefaultMessage: string;
    whatsappUrl: string;
  };
  images: {
    hero: string;
    interior: string;
    mens: string;
    womens: string;
    ethnic: string;
    detail: string;
  };
  styleCategories: Array<{
    id: string;
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    image: string;
  }>;
  whyVisit: Array<{
    id: number;
    title: string;
    description: string;
  }>;
}

export const STORE_DATA: StoreInfo = {
  name: 'He "N" She Nx',
  tagline: 'Style. Elegance. You.',
  businessType: 'Fashion & Clothing Store',
  rating: {
    score: 4.4,
    totalReviews: 95,
    source: 'Google Reviews',
  },
  location: {
    street: '21/A, Nagar Nigam Rd',
    landmark: 'Opposite Deshbandhu Complex',
    area: 'Marhatal',
    city: 'Jabalpur',
    state: 'Madhya Pradesh',
    pincode: '482002',
    country: 'India',
    fullAddress: '21/A, Nagar Nigam Rd, Opposite Deshbandhu Complex, Marhatal, Jabalpur, Madhya Pradesh – 482002, India',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=He+N+She+Nx+21%2FA+Nagar+Nigam+Rd+Opposite+Deshbandhu+Complex+Marhatal+Jabalpur+Madhya+Pradesh+482002',
    googleMapsEmbedUrl: 'https://maps.google.com/maps?q=21/A,%20Nagar%20Nigam%20Rd,%20Opposite%20Deshbandhu%20Complex,%20Marhatal,%20Jabalpur,%20Madhya%20Pradesh%20482002&t=&z=16&ie=UTF8&iwloc=&output=embed',
  },
  hours: {
    status: 'Open',
    displayText: 'Open • Closes 10:15 PM',
    timing: '10:30 AM – 10:15 PM',
    days: 'Monday to Sunday',
  },
  contact: {
    whatsappNumber: '919109179992',
    displayPhone: '+91 91091 79992',
    rawPhone: '09109179992',
    phoneCallUrl: 'tel:+919109179992',
    whatsappDefaultMessage: 'Hello He "N" She Nx, I would like to inquire about your fashion collection.',
    whatsappUrl: 'https://wa.me/919109179992?text=Hello%20He%20%22N%22%20She%20Nx%2C%20I%20would%20like%20to%20inquire%20about%20your%20fashion%20collection.',
  },
  images: {
    hero: storeFrontHero,
    interior: storeInterior,
    mens: mensFashion,
    womens: womensFashion,
    ethnic: ethnicWear,
    detail: fabricDetails,
  },
  styleCategories: [
    {
      id: 'mens',
      title: "MEN'S FASHION",
      subtitle: 'Wear confidence.',
      description: 'Refined tailored blazers, smart casuals, contemporary shirts, and elevated wardrobe essentials designed for modern gentlemen.',
      tags: ['Tailored Fits', 'Smart Casuals', 'Formal & Party Wear', 'Premium Fabrics'],
      image: mensFashion,
    },
    {
      id: 'womens',
      title: "WOMEN'S FASHION",
      subtitle: 'Elegance in every detail.',
      description: 'Graceful silhouettes, fusion designs, festive drapes, and statement outfits tailored to celebrate individual style.',
      tags: ['Contemporary Fusion', 'Party & Evening Wear', 'Chic Drapes', 'Fine Craftsmanship'],
      image: womensFashion,
    },
    {
      id: 'ethnic',
      title: 'ETHNIC & OCCASION WEAR',
      subtitle: 'Made for special moments.',
      description: 'Exquisite festive collections, celebratory ensembles, royal sherwanis, and bridal occasion wear crafted for memorable milestones.',
      tags: ['Festive Ensembles', 'Wedding Celebrations', 'Rich Textures', 'Occasion Couture'],
      image: ethnicWear,
    },
  ],
  whyVisit: [
    {
      id: 1,
      title: 'Explore Fashion for Different Occasions',
      description: 'From everyday smart wear to grand festive celebrations, find curated styles all under one roof.',
    },
    {
      id: 2,
      title: 'Discover Styles That Match Your Personality',
      description: 'Diverse silhouettes, cuts, and contemporary trends curated to reflect your unique individual character.',
    },
    {
      id: 3,
      title: 'Conveniently Located in Jabalpur',
      description: 'Prime central location at Marhatal, easily accessible right opposite Deshbandhu Complex.',
    },
    {
      id: 4,
      title: 'Connect Directly on WhatsApp',
      description: 'Instant assistance for store location, current arrivals, and collection inquiries.',
    },
  ],
};

/**
 * Helper to build custom WhatsApp link with specific inquiry text
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || STORE_DATA.contact.whatsappDefaultMessage;
  const encoded = encodeURIComponent(message);
  if (STORE_DATA.contact.whatsappNumber) {
    return `https://wa.me/${STORE_DATA.contact.whatsappNumber}?text=${encoded}`;
  }
  return `https://wa.me/?text=${encoded}`;
}

/**
 * Helper to get phone call url
 */
export function getPhoneCallUrl(): string {
  return STORE_DATA.contact.phoneCallUrl || 'tel:+919109179992';
}
