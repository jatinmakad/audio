import { toAbsolute } from './heleprs';

export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'headphones',
    url: '/headphones',
  },
  {
    id: 3,
    text: 'speakers',
    url: '/speakers',
  },
  {
    id: 4,
    text: 'earphones',
    url: '/earphones',
  },
];

export const categories = [
  {
    id: 1,
    img: toAbsolute("/shared/desktop/image-headphones.png"),
    text: 'headphones',
    url: '/headphones',
  },
  {
    id: 2,
    img: toAbsolute("/shared/desktop/image-speakers.png"),
    text: 'speakers',
    url: '/speakers',
  },
  {
    id: 3,
    img: toAbsolute("/shared/desktop/image-earphones.png"),
    text: 'earphones',
    url: '/earphones',
  },
];
