import { useContext } from 'react';
import { ProductContext } from './ProductCard';

export interface Props {
    img?: string;
    className?: string;
    style?: React.CSSProperties 
}


export const ProductImage = ({ img, className, style }: Props ) => {

    const { product } = useContext( ProductContext );
    let imgToShow: string;

    if ( img ) {
        imgToShow = img;
    } else if ( product.img ) {
        imgToShow = product.img
    } else {
        imgToShow = "https://placehold.co/600x400/EEE/31343C";
    }


    return (
        <img 
            className={ className } 
            src={ imgToShow } 
            style={ style }
            alt="Product" 
        />
    );
}