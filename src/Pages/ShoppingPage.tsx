import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';
import '../App.css';

export const ShoppingPage = () => {

    const { shoppingCart, onProductCountChange } = useShoppingCart();
   

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                columnGap: "32px"
            }}>


                {
                    products.map( product => (
                        <ProductCard 
                            key={ product.id }
                            product={ product }
                            onChange={ onProductCountChange }
                            value={ shoppingCart[product.id]?.count || 0 }
                        >
                            <ProductImage className="custom-image" style={{  width: "200px", height: "200px", objectFit: "cover" }} />
                            <ProductTitle className="text-bold" />
                            <ProductButtons className="custom-buttons" />
                        </ProductCard>
                    ))
                }
            </div>
            
            <div className="shopping-cart" >
                <h2>Shopping Cart</h2>
                { JSON.stringify( shoppingCart, null, 5 ) }
                <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    marginTop: "32px",
                    columnGap: "32px",
                }}>

                {
                    Object.entries( shoppingCart ).map( ([ key, product ]) => (
                        <ProductCard 
                            key={ key }
                            product={ product }
                            onChange={ onProductCountChange }
                            value={ product.count }
                        >
                            <ProductImage className="custom-image" style={{ width: "100px", height: "100px", objectFit: "cover" }} />
                            <ProductButtons 
                                className="custom-buttons"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            />
                        </ProductCard>
                    ))
                }
                </div>

                    
            </div>

        </div>
    )
}