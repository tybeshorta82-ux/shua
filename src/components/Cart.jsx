import { useState } from "react";

function Cart() {
  const [count, setCount] = useState(0);

  return (
    <div className="cart">
      <h2>Sneaker</h2>
      <p>$125.00</p>

      <div className="actions">
        <button onClick={() => setCount(count - 1)}>-</button>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>

      <button className="add-btn">Add to cart</button>

      {count > 0 && (
        <button className="clear" onClick={() => setCount(0)}>
          Clear Cart
        </button>
      )}
    </div>
  );
}

export default Cart;