import { useState } from "react";

function ShoppingCart() {
    const [products, setProducts] = useState([
        {name: "Rice", price: 2500, quantity: 20},
        {name: "Beans", price: 1500, quantity: 30},
        {name: "Garri", price: 1000, quantity: 50}
    ]);

    function increase(index) {
        const updatedQuantity = [...products]
        updatedQuantity[index].quantity += 1;
        setProducts(updatedQuantity)
    }

    function decrease(index) {
        const updatedQuantity = [...products]
        if (updatedQuantity[index].quantity > 1) {
            updatedQuantity[index].quantity -= 1;
        }
        setProducts(updatedQuantity)
    }

    const total = products.reduce((sum, product) => sum + product.price * product.quantity, 0);

    function removeProduct(index) {
        const updatedProduct = products.filter((product) => product.index !== index)
        setProducts(updatedProduct)
    }

    function clearCart() {
        return setProducts([])
    }

    return(
        <div className="body">
            <h1>🛒 Shopping Cart</h1>
           
            {products.map((product, index) => (
                <div className="main" key={product.name}>
                    
                    <h3>{product.name} - ₦{(product.price).toLocaleString()} x {product.quantity} = ₦{(product.price * product.quantity).toLocaleString()}</h3>
                    <div className="buttons">
                        <button onClick={() => increase(index)} type="button">+</button>
                        <button onClick={() => decrease(index)} type="button">-</button>
                        <button onClick={() => removeProduct(index)} className="remove" type="button">Remove</button>
                        
                    </div>
                        
                </div>
           
            
            ))}
            <div><h1>Total: ₦{total.toLocaleString()}</h1></div>
            <button onClick={clearCart} className="clearCart" >Clear Cart</button>
        </div>
    )
}


export default ShoppingCart;