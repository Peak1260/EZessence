import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import { useNavigate } from "react-router-dom";
import { products } from "./shop"
import "../design/cart.css";

export const CartItem = (props) => {
    const { id, name, price, image } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
        useContext(ShopContext);

    return (
        <div className="cartItem">
            <img src={image} alt="product" />
            <div className="description">
                <p>
                    <b>{name}</b>
                </p>
                <p> Price: ${price}</p>
                <div className="countHandler">
                    <button onClick={() => removeFromCart(id)}> - </button>
                    <input
                        value={cartItems[id]}
                        onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
                    />
                    <button onClick={() => addToCart(id)}> + </button>
                </div>
            </div>
        </div>
    );
};

export const Cart = () => {
    const { cartItems, getTotalCartAmount} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate();

    return (
        <div className="cart">
            <div>
                <h2>Your Cart Items</h2>
            </div>
            <div className="cart">
                {products.map((product) => {
                    // If the cart item count is not zero, return the CartItem component
                    if (cartItems[product.id] !== 0) {
                        return <CartItem key={product.id} data={product} />; // Always provide a key to mapped components
                    } else {
                        return null; // Explicitly return null when condition is not met
                    }
                })}
            </div>

            {totalAmount > 0 ? (
                <div className="checkout">
                    <p> Subtotal: ${totalAmount} </p>
                    <button onClick={() => navigate("/shop")}> Continue Shopping </button>
                    <button
                        onClick={() => {
                            navigate("/checkout");
                        }}
                    >
                        {" "}
                        Checkout{" "}
                    </button>
                </div>
            ) : (
                <h4> Your Shopping Cart is Empty</h4>
            )}
        </div>
    );
};

export default Cart;