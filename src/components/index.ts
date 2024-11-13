import { ProductCard as ProducCardHOC } from './ProductCard';

export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';
export { ProductButtons } from './ProductButtons';

import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductButtons } from './ProductButtons';


export const ProductCard = Object.assign( ProducCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
})

export default ProductCard;
