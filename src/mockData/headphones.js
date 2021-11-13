import { toAbsolute } from '../utils/heleprs';

const data = [
  {
    id: 4,
    img: {
      mobile: toAbsolute("/category-headphones/mobile/image-xx99-mark-two.jpg"),
      tablet: toAbsolute("/category-headphones/tablet/image-xx99-mark-two.jpg"),
      desktop: toAbsolute("/category-headphones/desktop/image-xx99-mark-two.jpg"),
    },
    name: 'xx99 mark two headphones',
    text: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
    new_label: true,
  },
  {
    id: 3,
    img: {
      mobile: toAbsolute("/category-headphones/mobile/image-xx99-mark-two.jpg"),
      tablet: toAbsolute("/category-headphones/tablet/image-xx99-mark-two.jpg"),
      desktop: toAbsolute("/category-headphones/desktop/image-xx99-mark-two.jpg"),
    },
    name: 'xx99 mark one headphones',
    text: 'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
    new_label: false,
  },
  {
    id: 2,
    img: {
      mobile: toAbsolute("/category-headphones/mobile/image-xx59.jpg"),
      tablet: toAbsolute("/category-headphones/tablet/image-xx59.jpg"),
      desktop: toAbsolute("/category-headphones/desktop/image-xx59.jpg"),
    },
    name: 'xx59 headphones',
    text: `Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.`,
    new_label: false,
  },
];
export default data;
