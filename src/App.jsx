import { useState } from 'react';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import Modal from './components/Modal';
import { productData } from './data';
import './index.css';

function App() {
  const [quantity, setQuantity] = useState(0);
  const [cartItems, setCartItems] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = () => {
    if (quantity > 0) {
      setCartItems(cartItems + quantity);
      setQuantity(0);
    }
  };

  return (
    <div className="App">
      <Navbar cartItems={cartItems} onRemove={() => setCartItems(0)} />
      
      <main className="container product-grid">
        <Gallery images={productData.images} onMainClick={() => setIsModalOpen(true)} />
        
        <div className="product-info">
          <p style={{ color: 'var(--orange)', fontWeight: 'bold', letterSpacing: '1px' }}>{productData.brand}</p>
          <h1 style={{ fontSize: '45px', margin: '20px 0' }}>{productData.title}</h1>
          <p style={{ color: 'var(--dark-gray)', lineHeight: '1.6', marginBottom: '30px' }}>{productData.description}</p>
          
          <div className="price-section">
            <div className="price-row">
              <span className="current-price">${productData.price.toFixed(2)}</span>
              <span className="discount">{productData.discount}%</span>
            </div>
            <p className="old-price">${productData.originalPrice.toFixed(2)}</p>
          </div>

          <div className="actions">
            <div className="counter">
              <button onClick={() => setQuantity(Math.max(0, quantity - 1))}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <button className="add-btn" onClick={handleAddToCart}>🛒 Add to cart</button>
          </div>
        </div>
      </main>

      {isModalOpen && <Modal images={productData.images} onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

export default App;
