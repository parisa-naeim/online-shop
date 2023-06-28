function Item(props) {
  const borderStyle = { borderColor: "grey", borderStyle: "solid" };

  function addToCart() {
    props.action((oldArray) => [...oldArray, props.name]);
  }

  return (
    <div style={borderStyle}>
      <p>{props.name}</p>
      <p>${props.price}</p>
      <div>
        <label>quantity</label>
        <input type="number" />
      </div>
      <button onClick={addToCart}>add to cart</button>
    </div>
  );
}

export default Item;
