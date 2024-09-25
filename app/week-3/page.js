import ItemList from "./item-list.js";

export default function Page() {
    return (
        <main>
            <h1 className="font-bold text-lg text-center">Shopping List</h1>
            <ItemList />
        </main>
    )
}