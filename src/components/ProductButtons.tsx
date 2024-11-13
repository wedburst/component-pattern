import { useProduct } from "../hooks/useProduct";

export const ProductoButtons = () => {
    const {counter, incrementBy } = useProduct();
    return (
        <div>
            <button onClick={ () => incrementBy(1) }> +1 </button>
            <div>{counter}</div>
        </div>
    )
}