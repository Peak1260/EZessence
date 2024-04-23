import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Shop from './pages/shop';
import Signin from './pages/signin';
import Cart from './pages/cart';
import Checkout from './pages/checkout'
import { ShopContextProvider } from './context/shop-context';

function App() {
  return (
    <Router>
    <div className="App">
      <ShopContextProvider>
          {/* Logo */}
          <Link to="/">
            <img src="./images/logo.png" alt="Logo" className="logo" />
          </Link>

          {/* Navigation */}
          <NavigationBar />

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
      </ShopContextProvider>
    </div>
    </Router>
  );
}

function NavigationBar() {
  return (
    <nav className="navigation">
      <Link to="/shop" className="navigation-link">Shop</Link>
      <Link to="/signin" className="navigation-link">Sign in</Link>
      <Link to="/cart" className="navigation-link"><img src="./images/cart_icon.png" alt="cart" style={{ width: '20px' }}></img>Cart</Link>
    </nav>
  );
}

function Home() {
  return (
    <div className="content">
      <img src="./images/mainimage.png" alt="Main" />
      <div className="title">
        <h1>Welcome To EZessence</h1>
      </div>
      <div className="card">
        <p>At EZessence, we are a team of dedicated professionals who specialize in finding the highest quality products. Our goal is to offer a range of services to ensure our clients make informed decisions about their purchases. We use a wide variety of tools and techniques to identify and secure the best deals without sacrificing quality. We are always looking for new opportunities to expand our product offerings.</p>
        <br></br>
        <p>The delivery will vary depending on the product and the delivery location, but we ensure you that everything will be sent in a timely manner. Feel free to contact us about any questions or if the delivered item is damaged or the wrong product.</p>
      </div>
      <div className="title2">
        <h3>Not Just Another Online Store</h3>
      </div>
      {/* Four columns */}
      <div className="columns-container">
        <div className="column">
          <img src="./images/icon1.png" alt="Icon 1" />
          <h5>Affordable Quality Products</h5>
          <p>Price is an important factor so we work hard to select our suppliers and products that are both affordable and of high quality.</p>
        </div>
        <div className="column">
          <img src="./images/icon2.png" alt="Icon 2" />
          <h5>Customer Satisfaction Guaranteed</h5>
          <p>Each customer has unique needs and preferences so we want you to feel confident in your purchases and know we support your queries.</p>
        </div>
        <div className="column">
          <img src="./images/icon3.png" alt="Icon 3" />
          <h5>Easy Return Policy</h5>
          <p>If for any reason you are not happy with your product, we offer an easy 30-day return policy, no questions asked to make the process fair.</p>
        </div>
        <div className="column">
          <img src="./images/icon4.png" alt="Icon 4" />
          <h5>Secure Payment Options</h5>
          <p>We offer a range of seamless payment options to make it easy for our customers by accepting all major credit/debit cards.</p>
        </div>
      </div>
      <div className="title3">
        <div className="side-image">
          {/* Image is on the left side */}
          <img
            src="https://media.istockphoto.com/id/1149067970/photo/many-kind-of-shampoo-and-shower-gel-bottles-and-sponge-on-the-table.jpg?s=612x612&w=0&k=20&c=nv1nY2LPazJtLwyf-i55LmlFXKfNTcVaXzXdmSlHIUo="
            alt="Side"
          />
        </div>

        <div className="title3-text">
          {/* Text content is on the right side, with header on top and paragraph below */}
          <h6>FREE DELIVERY WITH ORDERS OVER $80</h6>
          <h3>Delivered Straight To Your Door</h3>
          <p>The delivery will vary depending on the product and the delivery location, but we ensure you that everything will be sent in a timely manner. Feel free to contact us about any questions or if the delivered item is damaged or the wrong product.</p>
        </div>
      </div>
      {/* Footer */}
      <footer className="footer">
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>Email: ezessence16@gmail.com</p>
          <p>Phone: +1(510)513-5593</p>
        </div>
        <div className="icon">
          <img src="./images/instagram_icon.png" alt="instagram"></img>
          <img src="./images/whatsapp_icon.png" alt="whatsapp"></img>
          <img src="./images/pinterest_icon.png" alt="pinterest"></img>
        </div>
        <div className="copyright">
          <p>Copyright @ 2024, EZessence - All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
