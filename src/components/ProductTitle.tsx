import { useContext } from 'react';
import { ProductContext } from "./ProductCard";


export interface Props {
    className?: string 
    title?: string, 
    activeClass?: string;
    style?: React.CSSProperties 
}

export const ProductTitle = ({ title, className, style }: Props) => {

    const { product } = useContext( ProductContext )

    return (
        <p 
            className={className}
            style={ style }
        >
            { title ? title : product.title }
        </p>
    );
}