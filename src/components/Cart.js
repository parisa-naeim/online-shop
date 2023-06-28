function Cart(props) {
  const borderStyle = { borderColor: "grey", borderStyle: "solid" };
  return (
    <div style={borderStyle}>
      cart
      <br />
      <ul>
        {props.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
