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
  title: 'Plateforme Infirmière',
  kind: 'mobile',
  description:
    'A mobile app for nursing care management: nurses follow their assigned patients, record vital signs, medications and care notes, and track each patient with charts and history.',
  features: [
    'Secure login for nursing staff',
    'Patient records with allergies and care team',
    'Vital signs history with charts and alert levels',
    'Medication and care notes tracking',
  ],
  tech: ['Flutter'], // <- put your real stack here
  github: 'https://github.com/Ademskibi/YOUR-REPO', // <- real repo URL
  demo: '',
  shots: [
     shot('nursing', 'login', 'Sign in'),

    shot('nursing', 'home', 'Home dashboard'),
        shot('nursing', 'new-patient', 'New patient form'),

    shot('nursing', 'patients', 'Patient list'),
    shot('nursing', 'vitals-history', 'Vital signs history'),
    shot('nursing', 'vitals-chart', 'Temperature chart'),
    shot('nursing', 'menu', 'Profile menu'),
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
      shot('etap', 'login', 'Sign in'),
      shot('etap', 'admin-add-user', 'Admin: add user'),
      shot('etap', 'users', 'Admin: user management'),

      shot('etap', 'admin-add-product', 'Admin: add product'),
      shot('etap', 'admin-dashboard', 'Admin: dashboard'),
      shot('etap', 'search', 'Search products by name'),
      shot('etap', 'categories', 'Filter by category'),
      shot('etap', 'orders', 'Manager: pending orders'),
      shot('etap', 'cart', 'Shopping cart'),
  
      shot('etap', 'employee-order-history', 'Edit a product'),
      shot('etap', 'manager-pending-orders', 'Admin: user management'),
        shot('etap', 'storekeeper-order-details', 'Storekeeper: prepare an order'),
  shot('etap', 'storekeeper-products', 'Storekeeper: product management'),


    ],
  },
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
    title: 'BaliusCar - History Manager',
    kind: 'desktop',
    description:
      'A desktop application for managing each vehicle’s complete service history, including arrival details, mileage, interventions performed, before-service videos, replaced parts and their suppliers and costs, labor costs, and the total cost charged to the client.',
    features: [
      'Customer and vehicle management',
      'service history management',
      'facture genration',
      'take note of the replaced parts and their suppliers and costs, labor costs, and the total cost charged to the client.',
    ],
    tech: ['Flutter','SQLite '],
    github: 'https://github.com/Ademskibi',
    shots: [
      shot('BaliusCar HistoryManager', 'addClient', 'add a new client'),
      shot('BaliusCar HistoryManager', 'addVihicle', 'add a new vehicle'),
      shot('BaliusCar HistoryManager', 'addVihicle2', 'add a new vehicle'),
      shot('BaliusCar HistoryManager', 'intervention', 'intervention'),
    ],
  },
]

// Pictures used in the hero collage
export const heroShots = {
  web: shot('BaliusCar', 'services', 'BaliusCar'),
  webAlt: shot('etap', 'login', 'ETAP Stock Management'),
  phone: shot('An-Nour', 'prayer-times', 'An-Nour'),
}

export const experience = [
  { role: 'Developer', org: 'Techmind Solution', date: 'Nov 2025 – Present', points: ['Building responsive web and mobile apps with React, Flutter and Node.js.', 'Shipping features such as real-time notifications, e-commerce carts and location-aware services.', 'Working with cross-functional teams to deliver scalable solutions.'] },
  { role: 'Engineering Degree in Computer Science (Alternance)', org: 'ESPRIT', date: '2025 – Present', points: ['Work-study program combining engineering studies with professional practice.'] },
  { role: 'End-of-Studies Intern, MERN Stack', org: 'ETAP', date: 'Feb 4 – May 31, 2025', points: ['Built a full-stack inventory and workflow management app.', 'Integrated a real-time notification system.'] },
  { role: 'Intern', org: 'CNTE', date: '8 jan 2024 , 2 fev 2024 / 9 jan 2023 , 6 fev 230', points: ['Rebuild a responsive backend web application using react and bootstrap.'] },
  { role: 'Bachelor’s Degree in Information Technology', org: 'ISET Zaghouan', date: '2022 – 2025', points: ['Member of the SecuriNets Club.'] },
]
