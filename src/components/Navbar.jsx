import { useState } from 'react';

const Navbar = ({ cartItems, onRemove }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <nav className="navbar container">
      <div className="nav-left">
        <button className="burger-btn">☰</button>
        <div className="logo">sneakers</div>
        <ul className="nav-links">
          <li>Collections</li><li>Men</li><li>Women</li><li>About</li>
        </ul>
      </div>
      <div className="nav-right" style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
        <div className="cart-container" onClick={() => setIsCartOpen(!isCartOpen)}>
          🛒 {cartItems > 0 && <span className="cart-badge">{cartItems}</span>}
          {isCartOpen && (
            <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
              <div className="cart-title">Cart</div>
              <div className="cart-content">
                {cartItems === 0 ? <p>Your cart is empty.</p> : (
                  <div style={{ width: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                      <span>Sneakers x {cartItems}</span>
                      <button onClick={onRemove} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>🗑️</button>
                    </div>
                    <button className="add-btn" style={{ width: '100%', padding: '15px' }}>Checkout</button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <img src="https://i.pravatar.cc/40" style={{ borderRadius: '50%' }} alt="avatar" />
      </div>
    </nav>
  );
};

export default Navbar;