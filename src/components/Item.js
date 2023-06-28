function Item(props) {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.price}</p>
      <p>quantity</p>
      <button>add to cart</button>
    </div>
  );
}

export default Item;
