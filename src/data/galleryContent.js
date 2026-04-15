import heroPoster from '../assets/hero.png'
import image1 from '../assets/image-1.jpg'
import image2 from '../assets/image-2.jpg'
import image3 from '../assets/image-3.jpg'
import image4 from '../assets/image-4.jpg'
import bedroomVideo from '../assets/bedroom.mp4'
import fireplaceVideo from '../assets/fireplace.mp4'

export const galleryFilters = ['All', 'Kitchens', 'Islands', 'Details', 'Motion']

export const galleryMetrics = [
  { value: '24', label: 'bespoke schemes in the latest collection' },
  { value: '6', label: 'signature materials layered into every brief' },
  { value: '1:1', label: 'design collaboration from first sketch to install' },
]

export const galleryItems = [
  {
    id: 'peninsula-dusk',
    title: 'Peninsula at Dusk',
    category: 'Kitchens',
    location: 'Hale Barns',
    description: 'Smoked oak joinery, warm stone and softly lit shelving shaped for long evenings.',
    longDescription:
      'This scheme balances a sculpted island with discreet storage and a tonal material palette that feels architectural without becoming cold. Every surface is designed to hold light softly through the day.',
    image: image1,
    alt: 'Dark oak kitchen with stone worktop and pendant lighting',
    layout: 'hero',
    type: 'image',
  },
  {
    id: 'atelier-island',
    title: 'Atelier Island',
    category: 'Islands',
    location: 'Alderley Edge',
    description: 'A monolithic centerpiece with softened edges and deeply integrated preparation zones.',
    longDescription:
      'The island is treated as a freestanding furniture piece, bringing together prep, seating and storage in one calm gesture. The detailing is deliberately restrained so the materials do the talking.',
    image: image2,
    alt: 'Contemporary kitchen island with matte cabinetry and metal detailing',
    layout: 'tall',
    type: 'image',
  },
  {
    id: 'residence-frame',
    title: 'Residence Framing',
    category: 'Kitchens',
    location: 'Knutsford',
    description: 'Gallery-like sightlines connect cooking, dining and entertaining with ease.',
    longDescription:
      'This project was designed to feel open from every approach, with layered joinery and carefully edited contrast helping the room read as one unified composition.',
    image: image3,
    alt: 'Luxury open-plan kitchen with strong architectural framing',
    layout: 'standard',
    type: 'image',
  },
  {
    id: 'sanctuary-detail',
    title: 'Sanctuary Detail',
    category: 'Details',
    location: 'Wilmslow',
    description: 'Warm metallic accents and tactile finishes bring softness to a minimalist brief.',
    longDescription:
      'Detailing is intentionally quiet, with tactile materials and softened reflections adding depth. The result is a refined finish that feels deeply considered at close range.',
    image: image4,
    alt: 'Warm-toned kitchen detail with layered materials and sculpted forms',
    layout: 'standard',
    type: 'image',
  },
  {
    id: 'material-study',
    title: 'Material Study',
    category: 'Details',
    location: 'Design Studio',
    description: 'Tone-on-tone layering keeps the palette restrained while letting texture carry the story.',
    longDescription:
      'Materiality leads this composition, with timber grain, brushed metal and honed stone working together to create a calm but tactile backdrop for everyday life.',
    image: image2,
    alt: 'Close-up material study of contemporary luxury kitchen surfaces',
    layout: 'wide',
    type: 'image',
  },
  {
    id: 'living-motion',
    title: 'Living Motion',
    category: 'Motion',
    location: 'Signature Film',
    description: 'A moving look at layered joinery, ambient light and fireplace moments.',
    longDescription:
      'This motion study captures how our spaces transition through the day, revealing warmth, reflectivity and rhythm that still imagery only hints at.',
    image: heroPoster,
    alt: 'Preview frame from a cinematic kitchen and living space video',
    layout: 'wide',
    type: 'video',
    src: fireplaceVideo,
  },
  {
    id: 'bedroom-brief',
    title: 'Atmosphere Study',
    category: 'Motion',
    location: 'Editorial Cut',
    description: 'A softer, slower read on how calm materials shape an interior mood.',
    longDescription:
      'Our interior direction extends beyond the kitchen itself, embracing the wider atmosphere of the home. This short film focuses on silhouette, softness and spatial calm.',
    image: heroPoster,
    alt: 'Preview frame from a soft, architectural interior video',
    layout: 'standard',
    type: 'video',
    src: bedroomVideo,
  },
  {
    id: 'entertaining-line',
    title: 'Entertaining Line',
    category: 'Islands',
    location: 'Prestbury',
    description: 'Extended worktop lines and seamless storage support effortless hosting.',
    longDescription:
      'This island composition was designed for gathering, with wide preparation zones and hidden appliance storage helping the room stay composed even at its busiest.',
    image: image1,
    alt: 'Long kitchen island designed for entertaining and social cooking',
    layout: 'standard',
    type: 'image',
  },
]
