function Item(props) {
  const borderStyle = { borderColor: "grey", borderStyle: "solid" };
  return (
    <div style={borderStyle}>
      <p>{props.name}</p>
      <p>${props.price}</p>
      <div>
        <label>quantity</label>
        <input type="number" />
      </div>
      <button>add to cart</button>
    </div>
  );
}

export default Item;
