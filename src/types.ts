export interface Project {
  id: string;
  title: string;
  location: string;
  year: string;
  category: 'Residential' | 'Hospitality' | 'Architectural';
  heroImage: string;
  gallery: string[];
  description: string;
  quote?: string;
  area: string;
  materials: string[];
}

export interface VillaSuite {
  id: string;
  title: string;
  subtitle: string;
  category: 'Suite' | 'Villa Entière';
  capacity: number;
  size: string;
  bed: string;
  pricePerNight: number;
  heroImage: string;
  gallery: string[];
  description: string;
  amenities: string[];
  highlights: string[];
}

export interface Service {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface StudioInfo {
  name: string;
  founder: string;
  tagline: string;
  location: string;
  instagram: string;
  email: string;
  phone: string;
}

export interface BookingReservation {
  checkIn: string;
  checkOut: string;
  guests: number;
  suiteId: string;
  fullName: string;
  email: string;
  phone: string;
  specialRequests?: string;
  totalNights: number;
  totalPrice: number;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  serviceType: string;
  location: string;
  timeline: string;
  message: string;
}

