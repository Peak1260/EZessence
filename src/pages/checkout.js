import React, { useContext, useState } from "react";
import { ShopContext } from "../context/shop-context";
import "../design/checkout.css";
import '../context/shop-context';
import { useNavigate } from "react-router-dom";
import { products } from "./shop";

export const Checkout = (props) => {
    const { cartItems, getTotalCartAmount, checkout} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();
    const [sameAsBilling, setSameAsBilling] = useState(true); // Default to same as billing
    const [billingAddress, setBillingAddress] = useState({
        name: "",
        address: "",
        city: "",
        state: "",
        zip: "",
    });
    const [shippingAddress, setShippingAddress] = useState({
        name: "",
        address: "",
        city: "",
        state: "",
        zip: "",
    });
    const [creditCard, setCreditCard] = useState({
        number: "",
        expiration: "",
        cvc: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission and validation
        const checkoutData = {
            billing: billingAddress,
            shipping: sameAsBilling ? billingAddress : shippingAddress,
            payment: creditCard,
        };
        console.log("Form submitted", checkoutData);
        // Process the order or send data to the server
    };

    return (
        <div className="checkout-page">
            <h1>Checkout</h1>
            <form id="checkoutForm" onSubmit={handleSubmit}>
                {/* Billing Address */}
                <div className="section">
                    <h2 className="section-title">Billing Address</h2>
                    <div className="form-group">
                        <label htmlFor="billingName">Name:</label>
                        <input
                            type="text"
                            id="billingName"
                            name="billingName"
                            required
                            value={billingAddress.name}
                            onChange={(e) =>
                                setBillingAddress({ ...billingAddress, name: e.target.value })
                            }
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="billingAddress">Address:</label>
                        <input
                            type="text"
                            id="billingAddress"
                            name="billingAddress"
                            required
                            value={billingAddress.address}
                            onChange={(e) =>
                                setBillingAddress({ ...billingAddress, address: e.target.value })
                            }
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="billingCity">City:</label>
                        <input
                            type="text"
                            id="billingCity"
                            required
                            value={billingAddress.city}
                            onChange={(e) =>
                                setBillingAddress({ ...billingAddress, city: e.target.value })
                            }
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="billingState">State:</label>
                        <input
                            type="text"
                            id="billingState"
                            required
                            value={billingAddress.state}
                            onChange={(e) =>
                                setBillingAddress({ ...billingAddress, state: e.target.value })
                            }
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="billingZip">ZIP Code:</label>
                        <input
                            type="text"
                            id="billingZip"
                            required
                            value={billingAddress.zip}
                            onChange={(e) =>
                                setBillingAddress({ ...billingAddress, zip: e.target.value })
                            }
                        />
                    </div>
                </div>

                {/* Same As Billing Checkbox */}
                <div className="form-group">
                    <label>
                        <input
                            type="checkbox"
                            id="sameAsBilling"
                            name="sameAsBilling"
                            checked={sameAsBilling}
                            onChange={(e) => setSameAsBilling(e.target.checked)}
                        />
                        Same as billing address
                    </label>
                </div>

                {/* Shipping Address */}
                {!sameAsBilling && (
                    <div className="section">
                        <h2 className="section-title">Shipping Address</h2>
                        <div className="form-group">
                            <label htmlFor="shippingName">Name:</label>
                            <input
                                type="text"
                                id="shippingName"
                                value={shippingAddress.name}
                                onChange={(e) =>
                                    setShippingAddress({ ...shippingAddress, name: e.target.value })
                                }
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="shippingAddress">Address:</label>
                            <input
                                type="text"
                                id="shippingAddress"
                                value={shippingAddress.address}
                                onChange={(e) =>
                                    setShippingAddress({ ...shippingAddress, address: e.target.value })
                                }
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="shippingCity">City:</label>
                            <input
                                type="text"
                                id="shippingCity"
                                value={shippingAddress.city}
                                onChange={(e) =>
                                    setShippingAddress({ ...shippingAddress, city: e.target.value })
                                }
                            />
                        </div>
                        <div class="form-group">
                            <label htmlFor="shippingState">State:</label>
                            <input
                                type="text"
                                id="shippingState"
                                value={shippingAddress.state}
                                onChange={(e) =>
                                    setShippingAddress({ ...shippingAddress, state: e.target.value })
                                }
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="shippingZip">ZIP Code:</label>
                            <input
                                type="text"
                                id="shippingZip"
                                value={shippingAddress.zip}
                                onChange={(e) =>
                                    setShippingAddress({ ...shippingAddress, zip: e.target.value })
                                }
                            />
                        </div>
                    </div>
                )}

                {/* Payment Details */}
                <div className="section">
                    <h2 class="section-title">Payment Details</h2>
                    <div className="form-group">
                        <label htmlFor="creditCardNumber">Card Number:</label>
                        <input
                            type="text"
                            id="creditCardNumber"
                            name="creditCardNumber"
                            required
                            value={creditCard.number}
                            onChange={(e) =>
                                setCreditCard({ ...creditCard, number: e.target.value })
                            }
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="creditCardExpiration">Expiration:</label>
                        <input
                            type="text"
                            id="creditCardExpiration"
                            name="creditCardExpiration"
                            required
                            value={creditCard.expiration}
                            onChange={(e) =>
                                setCreditCard({ ...creditCard, expiration: e.target.value })
                            }
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="creditCardCVC">CVC:</label>
                        <input
                            type="text"
                            id="creditCardCVC"
                            name="creditCardCVC"
                            required
                            value={creditCard.cvc}
                            onChange={(e) =>
                                setCreditCard({ ...creditCard, cvc: e.target.value })
                            }
                        />
                    </div>
                </div>

                <div className="cart">
                    {/* Order Summary */}
                        <div className="checkout-summary">
                            <h2>Order Summary</h2>
                            {/* Loop through products to display details */}
                            {products.map((product) => {
                                if (cartItems[product.id] > 0) {
                                    return (
                                        <div key={product.id} className="summary-item">
                                            <img src={product.image} alt={product.name} />
                                            <p>
                                                {product.name} - {cartItems[product.id]} x ${product.price}
                                            </p>
                                        </div>
                                    );
                                }
                                return null;
                            })}
                            <p>Subtotal: ${totalAmount.toFixed(2)}</p>
                            <p>Tax: ${(totalAmount * 0.0975).toFixed(2)}</p>
                            <p>Total: ${(totalAmount + totalAmount * 0.0975).toFixed(2)}</p>
                        </div>
                </div>

                {/* Submit Button */}
                <button type="submit" class="button" onClick={() => {checkout(); navigate("/");}}>Complete Purchase</button>
            </form>
        </div>
    );
};

export default Checkout;