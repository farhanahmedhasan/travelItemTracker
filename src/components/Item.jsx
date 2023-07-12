/* eslint-disable react/prop-types */
export default function Item ({item,onDeleteItem}) {
    return(
        <li>
            <span className={item.packed ? 'line-through': ""}>{item.quantity} {item.description}</span>
            <button onClick={()=>onDeleteItem(item.id)}>❌</button>
        </li>
    )
}