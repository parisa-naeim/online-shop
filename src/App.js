import Item from "./components/Item";

function App() {
  return (
    <div>
      <Item name="apple" price={5} />
      <Item name="orange" price={10} />
      <Item name="watermelon" price={20} />
    </div>
  );
}

export default App;
