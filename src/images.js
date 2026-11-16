import { places } from './data'

export const images = places.map((p) => ({ src: p.img, title: p.name }))