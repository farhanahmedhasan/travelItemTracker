import Item from "./Item.jsx";

/* eslint-disable react/prop-types */
export default function PackingList ({packageItems, onDeleteItem, onToggleItem}){
    return (
        <div className="list">
            <ul>
                {packageItems.map(item => <Item key={item.id} item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem}/>)}
            </ul>
        </div>
    )
}