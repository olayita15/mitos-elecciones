import type { Category } from '../types/content'

export const categories: Category[] = [
  { slug: 'economia', name: 'Economía', description: 'Impuestos, gasto y actividad económica.' },
  { slug: 'corrupcion', name: 'Corrupción', description: 'Investigaciones, sanciones y contratación.' },
  { slug: 'seguridad', name: 'Seguridad', description: 'Orden público, crimen y defensa.' },
  { slug: 'salud', name: 'Salud', description: 'Hospitales, aseguramiento y cobertura.' },
  { slug: 'educacion', name: 'Educación', description: 'Colegios, universidades y formación.' },
  { slug: 'trabajo', name: 'Trabajo', description: 'Empleo, salarios y formalización.' },
  { slug: 'medio-ambiente', name: 'Medio Ambiente', description: 'Clima, agua y territorio.' },
  {
    slug: 'relaciones-internacionales',
    name: 'Relaciones Internacionales',
    description: 'Diplomacia, comercio exterior y geopolítica.'
  },
  { slug: 'pensiones', name: 'Pensiones', description: 'Jubilación, ahorro y subsidios.' },
  { slug: 'energia', name: 'Energía', description: 'Tarifas, petróleo, gas y transición.' },
  { slug: 'infraestructura', name: 'Infraestructura', description: 'Vías, transporte y obra pública.' },
  {
    slug: 'derechos-humanos',
    name: 'Derechos Humanos',
    description: 'Garantías, libertades y protección ciudadana.'
  },
  { slug: 'justicia', name: 'Justicia', description: 'Cortes, reformas y sistema judicial.' }
]
