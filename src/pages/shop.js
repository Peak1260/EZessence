import React from 'react';
import '../design/shop.css';

// Sample product data
const products = [
  { id: 1, name: 'Construction Simulator - Day 1 Edition - PS4', price: 49.99, image: 'https://m.media-amazon.com/images/I/6172anu4b7L._AC_UY327_FMwebp_QL65_.jpg' },
  { id: 2, name: 'Babolat VS Touch Natural Gut String', price: 51.99, image: 'https://m.media-amazon.com/images/I/61-pqYJoUTL._AC_UY327_FMwebp_QL65_.jpg' },
  { id: 3, name: 'Mepilex Ag - 4" x 4" (10 x 10cm) - Box of 5', price: 51.99, image: 'https://m.media-amazon.com/images/I/81S6q9nwr3L._AC_UY327_FMwebp_QL65_.jpg' },
  { id: 4, name: 'Stafford 4 Pack Boxer Briefs Big & Tall Blues', price: 47.99, image: 'https://m.media-amazon.com/images/I/61Ot0gn6FeL._AC_SX679_.jpg' },
  { id: 5, name: 'Puritans Pride Magnesium 250 mg', price: 19.99, image: 'https://m.media-amazon.com/images/I/71AQRsWUIwL._AC_UY327_QL65_.jpg' },
  { id: 6, name: 'Killer Hogs Barbecue Steak Rub - Pack of 2 Bottles', price: 39.99, image: 'https://m.media-amazon.com/images/I/81yxnpjX77L._AC_UY327_FMwebp_QL65_.jpg' },
  { id: 7, name: 'Pilon Gourmet Whole Bean Espresso Coffee, 16 Ounce', price: 26.99, image: 'https://m.media-amazon.com/images/I/41iNFfhMHLL._AC_UY327_QL65_.jpg' },
  { id: 8, name: 'Tones Cilantro Lime Seasoning Blend 6.75 oz Bundle of 2', price: 25.99, image: 'https://m.media-amazon.com/images/I/81L453Q9bGL._AC_UY327_QL65_.jpg' },
  { id: 9, name: 'Acure Ultra Hydrating Overnight Dream Facial Cream (Pack of 1)', price: 30.99, image: 'https://m.media-amazon.com/images/I/71mq4sPrVnL._AC_UY327_QL65_.jpg' },
  { id: 10, name: 'Freck The Original Freckle Freck Noir', price: 45.99, image: 'https://m.media-amazon.com/images/I/41FAwGGwaJL._AC_UY327_FMwebp_QL65_.jpg' },
  { id: 11, name: 'BYOMA Clarifying Serum - Barrier Repair Serum - 1.01 fl. oz', price: 26.99, image: 'https://m.media-amazon.com/images/I/61rRZ3tgQWL._AC_UY327_FMwebp_QL65_.jpg' },
  { id: 12, name: 'Ginger Sugar Overnight Lip Mask, 0.3 Ounce', price: 25.99, image: 'https://m.media-amazon.com/images/I/7186xbRKlKL._AC_UY327_FMwebp_QL65_.jpg' },
  { id: 13, name: 'Miller Digital Infinity Helmet Cover Lens, Inside (Pack of 5)', price: 22.99, image: 'https://m.media-amazon.com/images/I/41KPyl1UkzL._AC_UY327_FMwebp_QL65_.jpg' },
  { id: 14, name: 'DirecTV Stream AT&T TV Now RC82V 2nd Generation', price: 29.99, image: 'https://m.media-amazon.com/images/I/61SM41BrVHL._AC_UY327_FMwebp_QL65_.jpg' },
  { id: 15, name: 'Eaton Cutler-Hammer BD2015 Type BR Duplex Twin 2 Pole', price: 39.99, image: 'https://m.media-amazon.com/images/I/71BbX657JBL._AC_UY327_QL65_.jpg' },
  { id: 16, name: 'Zoeller 004892 Effluent Pump | Switch for 53-0001', price: 61.99, image: 'https://m.media-amazon.com/images/I/41kz90hPPIL._AC_UY327_QL65_.jpg' },
];

// Product component
const Product = ({ id, name, price, image }) => (
  <div className="product">
    <img src={image} alt={name} />
    <h3>{name}</h3>
    <p>${price}</p>
    <button className = "addtocart">Add To Cart</button>
  </div>
);

// Shop component
function Shop() {
  return (
    <div className="shop-page">
      <div className="header">
        <div className="header-content">
          <h1>Shop Our Exclusive Deals</h1>
          <p>Bringing the best for less!</p>
        </div>
        <div className="header-image">
          <img src="https://personalfinancebythebook.com/wp-content/uploads/family-clothing.png" alt="Shop Header" />
        </div>
      </div>
      <div className="products-section">
        <div className="products">
          {products.map(product => (
            <Product key={product.id} {...product} />
          ))
          }
        </div>
      </div>
    </div>
  );
}

export default Shop;
