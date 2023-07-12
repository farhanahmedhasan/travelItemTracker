/* eslint-disable react/prop-types */
export default function Item ({item,onDeleteItem,onToggleItem}) {
    return(
        <li>
            <input type="checkbox" value={item.packed} onChange={()=> onToggleItem(item.id)} />
            <span className={item.packed ? 'line-through': ""}>{item.quantity} {item.description}</span>
            <button onClick={()=>onDeleteItem(item.id)}>❌</button>
        </li>
    )
}