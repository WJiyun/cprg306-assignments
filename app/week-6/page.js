import ItemList from './item-list';

export default function Page() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
            <ItemList className="p-4 m-4 bg-white shadow-md rounded-lg" />
        </div>
    );
}