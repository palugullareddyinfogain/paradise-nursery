import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import "../styles.css";

const CartPage = () => {
    const { cart } = useContext(CartContext);

    const totalCost = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="cart-page">
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? <p>Your cart is empty.</p> : (
                <div>
                    {cart.map(item => <CartItem key={item.id} item={item} />)}
                    <h3>Total: ${totalCost.toFixed(2)}</h3>
                    <button>Checkout</button>
                </div>
            )}
        </div>
    );
};

export default CartPage;
