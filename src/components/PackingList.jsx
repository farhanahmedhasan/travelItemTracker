import Item from "./Item.jsx";

/* eslint-disable react/prop-types */
export default function PackingList ({packageItems, onDeleteItem, onToggleItem,onSelectItem}){
    return (
        <div className="list">
            <ul>
                {packageItems.map(item => <Item key={item.id} item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} onSelectItem={onSelectItem}/>)}
            </ul>
        </div>
    )
}