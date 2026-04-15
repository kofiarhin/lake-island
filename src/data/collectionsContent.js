import image1 from '../assets/image-1.jpg'
import image2 from '../assets/image-2.jpg'
import image3 from '../assets/image-3.jpg'
import image4 from '../assets/image-4.jpg'

export const collectionsContent = [
  {
    id: 'peninsula',
    tag: 'Signature',
    name: 'The Peninsula',
    image: image1,
    tone: 'Smoked oak cabinetry, veined stone and seamless integrated storage.',
    accent: 'rgba(208, 167, 106, 0.36)',
    longDescription:
      'The Peninsula balances statement geometry with practical flow, creating an entertaining-first kitchen that still feels deeply calm for daily life.',
    features: ['Floating peninsula prep zone', 'Integrated pantry wall', 'Hidden appliance garage'],
    materials: ['Smoked oak veneer', 'Arabescato stone', 'Antique bronze hardware'],
    idealFor: 'Open-plan homes where hosting and family living happen in the same space.',
    ctaHref: '#contact',
  },
  {
    id: 'atelier',
    tag: 'Modern',
    name: 'The Atelier',
    image: image2,
    tone: 'Soft matte finishes, sculpted islands and warm metallic detailing.',
    accent: 'rgba(132, 172, 187, 0.3)',
    longDescription:
      'The Atelier is a gallery-inspired composition with sculpted volumes and soft texture shifts that keep minimalist layouts warm and inviting.',
    features: ['Sculpted island with seating recess', 'Handleless linear storage', 'Task-lit display shelving'],
    materials: ['Mist matte lacquer', 'Brushed brass accents', 'Ribbed glass feature doors'],
    idealFor: 'Clients who want a refined modern look with tactile material layering.',
    ctaHref: '#contact',
  },
  {
    id: 'residence',
    tag: 'Bespoke',
    name: 'The Residence',
    image: image3,
    tone: 'Statement entertaining spaces with gallery-like restraint and depth.',
    accent: 'rgba(134, 122, 176, 0.28)',
    longDescription:
      'The Residence pairs architectural lines with generous proportions, delivering an elegant social kitchen anchored by precision craftsmanship.',
    features: ['Full-height appliance integration', 'Island bar and wine storage', 'Layered ambient lighting plan'],
    materials: ['Dark walnut timber', 'Charcoal porcelain slab', 'Patinated steel details'],
    idealFor: 'Larger properties seeking a dramatic kitchen that remains timeless.',
    ctaHref: '#contact',
  },
  {
    id: 'sanctuary',
    tag: 'Curated',
    name: 'The Sanctuary',
    image: image4,
    tone: 'Warm, layered detailing with a sculptural silhouette and a softer contemporary finish.',
    accent: 'rgba(170, 138, 112, 0.32)',
    longDescription:
      'The Sanctuary introduces softer curves, warm materials and gentle contrast to build an intimate, wellness-led kitchen atmosphere.',
    features: ['Curved island joinery', 'Concealed breakfast station', 'Soft-close hidden utility zone'],
    materials: ['Honey oak', 'Travertine-inspired stone', 'Champagne metal trims'],
    idealFor: 'Homes that prioritize calm rituals, family breakfasts and relaxed evenings.',
    ctaHref: '#contact',
  },
]
