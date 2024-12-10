export default function Item({ name, quantity, category, onSelect }) {
  return (
    <div
      className="item p-4 m-2 bg-black "
      onClick={() => onSelect(name)}
    >
      <h3 className="text-lg font-bold">{name}</h3>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </div>
  );
}

