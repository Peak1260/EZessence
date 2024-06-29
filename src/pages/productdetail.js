import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/shop-context';
import { products } from './shop';
import '../design/productdetail.css';

export const ProductDetail = () => {
  const { id } = useParams(); // Extract the product ID from the URL
  const product = products.find((p) => p.id === parseInt(id)); // Find the product by ID
  const { addToCart, cartItems } = useContext(ShopContext);

  if (!product) {
    return <div>Product not found</div>; // Handle invalid product IDs
  }

  const cartItemCount = cartItems[product.id] || 0;

  // Define product description based on the product ID
  let productDescription = "";

  switch (product.id) {
    case 1:
      productDescription = "Experience construction like never before with Construction Simulator - Day 1 Edition for PS4. Build your dream structures and manage heavy machinery.";
      break;
    case 2:
      productDescription = "The Babolat VS Touch Natural Gut String offers superior control and feel for tennis players looking to up their game.";
      break;
    case 3:
      productDescription = "Mepilex Ag - 4\" x 4\" is a soft and conformable foam dressing with antimicrobial properties for advanced wound care.";
      break;
    case 4:
      productDescription = "Get the comfort and support you want in a size that fits properly with our tag-free boxer briefs. new improved fit; we improved our fit for optimum comfort.";
      break;
    case 5:
      productDescription = "Puritan's Pride Vitamins supports healthy immune function and promotes well-being. Products are made with the highest quality ingredients available.";
      break;
    case 6:
      productDescription = "CHAMPIONSHIP BBQ RUB - HOT BBQ rub was developed and is used by the Killer Hogs Championship BBQ team. Provides a consistent and delicious flavor you can count on.";
      break;
    case 7:
      productDescription = "Freshly roasted, rich, dark, espresso roast whole bean cuban coffee since 1865. Served in the best and most popular restaurants in South Florida.";
      break;
    case 8:
      productDescription = "Cilantro lime seasoning brings an extra zest to a variety of meals. Brings out flavor in seafood, rice and chicken. High-quality seasoning made from various fresh spices.";
      break;
    case 9:
      productDescription = "Dive into daily intense hydration with our Ultra Hydrating Dream Cream. The ultimate hydration therapy for your dry skin. Our overnight cream works tirelessly while you sleep.";
      break;
    case 10:
      productDescription = "Spice Up Your Daily Look: whether you wish to draw a patch of flirty freckles across your nose bridge and cheeks or give an extra tint to your natural marks.";
      break;
    case 11:
      productDescription = "BARRIER BOOSTING: This clarifying serum for acne prone skin features our barrier boosting Tri-Ceramide Complex (ceramides, cholesterol, fatty acids).";
      break;
    case 12:
      productDescription = "Increased 17.5% of the moisture on lips. Before going to bed to apply as the sleeping pack on lips. Containing the high-moisturizing natural Shea Butter.";
      break;
    case 13:
      productDescription = "Inside cover lens' for Miller Digital Infinity Series Helmets. These are sold as a package of 5.";
      break;
    case 14:
      productDescription = "Replace your broken AT&T TV Now Remote or DirecTV Stream Remote with this original replacement. Once paired, voice recognition is also available with the RC82V Remote Control.";
      break;
    case 15:
      productDescription = "Cutler Hammer BD2015 thermal magnetic, duplex, independent trip; 2 pole; 120 vac; 20 ampere (outside pole), 15 ampere (inside pole); interrupting rating 10 kiloampere;";
      break;
    case 16:
      productDescription = "Zoeller 004892 Replacement Mechanical Switch Assembly with Gasket. Replace your worn out switch and bring your pump back to life. Includes Switch & Mounting Hardware & Gasket";
      break;
    default:
      productDescription = "No description available for this product.";
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2>{product.name}</h2>
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>{productDescription}</p> {/* Display the product description */}
      <button onClick={() => addToCart(product.id)}>
        Add to Cart {cartItemCount > 0 && `(${cartItemCount})`}
      </button>
    </div>
  );
};

export default ProductDetail;
