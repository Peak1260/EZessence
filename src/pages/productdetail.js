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
      productDescription = "Mepilex Ag - 4\" x 4\" is a soft and conformable foam dressing with antimicrobial properties for advanced wound care.";
      break;
    case 5:
      productDescription = "Mepilex Ag - 4\" x 4\" is a soft and conformable foam dressing with antimicrobial properties for advanced wound care.";
      break;
    case 6:
      productDescription = "Mepilex Ag - 4\" x 4\" is a soft and conformable foam dressing with antimicrobial properties for advanced wound care.";
      break;
    case 7:
      productDescription = "Mepilex Ag - 4\" x 4\" is a soft and conformable foam dressing with antimicrobial properties for advanced wound care.";
      break;
    case 8:
      productDescription = "Mepilex Ag - 4\" x 4\" is a soft and conformable foam dressing with antimicrobial properties for advanced wound care.";
      break;
    case 9:
      productDescription = "Mepilex Ag - 4\" x 4\" is a soft and conformable foam dressing with antimicrobial properties for advanced wound care.";
      break;
    case 10:
      productDescription = "Mepilex Ag - 4\" x 4\" is a soft and conformable foam dressing with antimicrobial properties for advanced wound care.";
      break;
    case 11:
      productDescription = "Mepilex Ag - 4\" x 4\" is a soft and conformable foam dressing with antimicrobial properties for advanced wound care.";
      break;
    case 12:
      productDescription = "Mepilex Ag - 4\" x 4\" is a soft and conformable foam dressing with antimicrobial properties for advanced wound care.";
      break;
    case 13:
      productDescription = "Mepilex Ag - 4\" x 4\" is a soft and conformable foam dressing with antimicrobial properties for advanced wound care.";
      break;
    case 14:
      productDescription = "Mepilex Ag - 4\" x 4\" is a soft and conformable foam dressing with antimicrobial properties for advanced wound care.";
      break;
    case 15:
      productDescription = "Mepilex Ag - 4\" x 4\" is a soft and conformable foam dressing with antimicrobial properties for advanced wound care.";
      break;
    case 16:
      productDescription = "Mepilex Ag - 4\" x 4\" is a soft and conformable foam dressing with antimicrobial properties for advanced wound care.";
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
