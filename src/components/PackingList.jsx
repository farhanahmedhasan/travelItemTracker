import Item from "./Item.jsx";
import PackingFilter from "./PackingFilter.jsx";
import {useState} from "react";

/* eslint-disable react/prop-types */
export default function PackingList ({packingItems, onDeleteItem, onToggleItem,onSelectItem}){
    const [sortBy, setSortBy] = useState("input")

    let sortedItems;

    if(sortBy === "input") sortedItems = packingItems

    if(sortBy === "description") {
        sortedItems = packingItems.slice().sort((a,b) => a.description.localeCompare(b.description))
    }

    if(sortBy === "packed") {
        sortedItems = packingItems.slice().sort((a,b) => Number(a.packed) - Number(b.packed))
    }

    return (
        <div className="list">
            <ul>
                {sortedItems.map(item => <Item key={item.id} item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} onSelectItem={onSelectItem}/>)}
            </ul>

            <PackingFilter sortBy={sortBy} setSortBy={setSortBy}/>
        </div>
    )
}
