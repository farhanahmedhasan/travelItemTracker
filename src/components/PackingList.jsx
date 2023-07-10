import Item from "./Item.jsx";

const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: true },
    { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function PackingList (){
    return (
        <div className="list">
            <ul>
                {initialItems.map(item => <Item key={item.id} item={item}/>)}
            </ul>
        </div>
    )
}