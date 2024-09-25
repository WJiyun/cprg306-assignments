export default function Item({name, quantity, category}) {
    return (
    <div className="p-1 border-b border-gray-200">
      <div className="font-bold text-lg">{name}</div>
      <div className="text-sm text-gray-600">Quantity: {quantity}</div>
      <div className="text-sm text-gray-600">Category: {category}</div>
    </div>

    )
}

