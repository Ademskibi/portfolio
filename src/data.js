// Screenshots are optimised .webp files in src/assets/<project>/<name>.webp
const files = import.meta.glob('./assets/**/*.webp', { eager: true, query: '?url', import: 'default' })
const shot = (folder, name, caption) => ({ src: files[`./assets/${folder}/${name}.webp`], caption })

export const profile = {
  name: 'Adem Mokhtar Khadheri',
  title: 'Full Stack Web & Mobile App Developer',
  email: 'khadheri.adem@gmail.com',
  phone: '+216 99 121 400',
  github: 'https://github.com/Ademskibi',
  linkedin: 'https://www.linkedin.com/in/adem-mokhtar-khadheri-693155297/',
}

export const nav = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

export const skills = {
  Frontend: ['React', 'Tailwind CSS', 'JavaScript (ES6)', 'HTML / CSS', 'Bootstrap'],
  Backend: ['Node.js', 'Express.js', 'PHP', 'RESTful APIs', 'Python', 'Java'],
  Databases: ['MongoDB', 'PostgreSQL', 'MongoDB Compass'],
  Mobile: ['Flutter', 'Dart'],
  Tools: ['Git', 'GitHub', 'Docker', 'Postman', 'VS Code', 'UML', 'Scrum'],
}

export const projects = [
  {
    title: 'BaliusCar',
    kind: 'web',
    description:
      'A full-stack platform for managing vehicle maintenance and service workflows: customer and vehicle records, appointments, repairs, parts, service history and invoice generation.',
    features: [
      'Customer and vehicle management',
      'Appointment and service booking',
      'Repair history and parts tracking',
      'Invoice generation and admin dashboard',
    ],
    tech: ['React.js', 'PHP', 'Tailwind CSS', 'MySQL'],
    github: 'https://github.com/Ademskibi',
    demo: 'https://baliuscar.tn',
    shots: [
      shot('BaliusCar', 'services', 'Services overview'),
      shot('BaliusCar', 'booking', 'Fast service booking'),
      shot('BaliusCar', 'claims', 'Claims and warranty form'),
      shot('BaliusCar', 'landing', 'Landing page'),
    ],
  },
  {
    title: 'An-Nour',
    kind: 'mobile',
    description:
      'A Flutter mobile app for prayer times, Qibla direction and daily quotes in Arabic and English, with geolocation, local notifications and offline-ready data.',
    features: ['Geolocation and Google Maps', 'Local notifications', 'Light and dark themes', 'Offline-ready data'],
    tech: ['Flutter', 'Dart', 'Geolocator', 'Shared Preferences'],
    github: 'https://github.com/Ademskibi',
    demo: '',
    shots: [
      shot('An-Nour', 'prayer-times', 'Prayer times'),
      shot('An-Nour', 'light-theme', 'Light theme'),
      shot('An-Nour', 'daily-inspiration', 'Daily inspiration'),
      shot('An-Nour', 'quran-reader', 'Quran reader'),
      shot('An-Nour', 'surah-index', 'Surah index'),
      shot('An-Nour', 'settings', 'Settings'),
    ],
  },
  {
    title: 'ETAP Stock Management System',
    kind: 'web',
    description:
      'A MERN application that digitizes ETAP office-supply ordering and inventory: role-based access, order approvals, real-time notifications, stock tracking and reporting.',
    features: [
      'Role-based authentication and authorization',
      'Ordering with shopping cart and live tracking',
      'Manager approval and rejection of orders',
      'Inventory, waiting list and statistics',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'Tailwind CSS', 'Cloudinary', 'WebSockets'],
    github: 'https://github.com/Ademskibi/Project_PFE',
    demo: '',
    shots: [
      shot('etap', 'cart', 'Shopping cart'),
      shot('etap', 'search', 'Search products by name'),
      shot('etap', 'categories', 'Filter by category'),
      shot('etap', 'orders', 'Manager: pending orders'),
      shot('etap', 'edit-product', 'Edit a product'),
      shot('etap', 'users', 'Admin: user management'),
      shot('etap', 'login', 'Sign in'),
    ],
  },
]

// Pictures used in the hero collage
export const heroShots = {
  web: shot('baliuscar', 'services', 'BaliusCar'),
  webAlt: shot('etap', 'cart', 'ETAP Stock Management'),
  phone: shot('an-nour', 'prayer-times', 'An-Nour'),
}

export const experience = [
  { role: 'Developer', org: 'Techmind Solution', date: 'Nov 2025 – Present', points: ['Building responsive web and mobile apps with React, Flutter and Node.js.', 'Shipping features such as real-time notifications, e-commerce carts and location-aware services.', 'Working with cross-functional teams to deliver scalable solutions.'] },
  { role: 'Engineering Degree in Computer Science (Alternance)', org: 'ESPRIT', date: '2025 – Present', points: ['Work-study program combining engineering studies with professional practice.'] },
  { role: 'End-of-Studies Intern, MERN Stack', org: 'ETAP', date: 'Feb 4 – May 31, 2025', points: ['Built a full-stack inventory and workflow management app.', 'Integrated a real-time notification system.'] },
  { role: 'Intern', org: 'CNTE', date: '2024', points: ['Built the An-Nour web app with React and Bootstrap, focusing on UI design.'] },
  { role: 'Full-Stack Developer', org: 'BaliusCar', date: 'Jan 11 – Feb 4, 2024', points: ['Developed the Car History Manager desktop application for auto workshops.'] },
  { role: 'Bachelor’s Degree in Information Technology', org: 'ISET Zaghouan', date: '2022 – 2025', points: ['Member of the SecuriNets Club.'] },
]
