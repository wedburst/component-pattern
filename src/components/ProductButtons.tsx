import { useContext } from "react";
import { ProductContext } from "./ProductCard";

export interface Props {
    className?: string;
    style?: React.CSSProperties 
}

export const ProductButtons = ({ className, style }: Props) => {
    const {counter, increaseBy  } = useContext(ProductContext);

    return (
        <div className={className}
        style={ style }>
            <button
                onClick={ () => increaseBy( -1 ) }> - </button>

            <div className="counter"> { counter } </div>

            <button
                onClick={ () => increaseBy( +1 ) }> + </button>
        </div>
    )
}