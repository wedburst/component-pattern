export const ProductImage = ({img = ''}: {img: string}) => {
    return (
        <div>
        <img src={img} alt="product" />
        </div>
    )
}