function Cart(props) {
  const borderStyle = { borderColor: "grey", borderStyle: "solid" };
  return (
    <div style={borderStyle}>
      cart
      <br />
      {props.items}
    </div>
  );
}

export default Cart;
