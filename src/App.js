import Cart from "./components/Cart";
import Item from "./components/Item";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div>
      <Item name="apple" price={5} action={setCartItems} />
      <Item name="orange" price={10} action={setCartItems} />
      <Item name="watermelon" price={20} action={setCartItems} />
      <Cart items={cartItems} />
    </div>
  );
}

export default App;
