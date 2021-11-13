
import { toAbsolute } from '../utils/heleprs';

const data = [
  {
    id: 6,
    img: {
      mobile: toAbsolute("/category-speakers/mobile/image-zx9.jpg"),
      tablet: toAbsolute("/category-speakers/tablet/image-zx9.jpg"),
      desktop:toAbsolute("/category-speakers/desktop/image-zx9.jpg"),
    },
    name: 'zx9 speaker',
    text: 'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
    new_label: true,
  },
  {
    id: 5,
    img: {
      mobile: toAbsolute("/category-speakers/mobile/image-zx7.jpg"),
      tablet: toAbsolute("/category-speakers/tablet/image-zx7.jpg"),
      desktop:toAbsolute("/category-speakers/desktop/image-zx7.jpg"),
    },
    name: 'zx7 speaker',
    text: 'Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
    new_label: false,
  },
];
export default data;
