/* eslint-disable react/prop-types */
export default function Item ({item,onDeleteItem,onToggleItem,onSelectItem}) {
    return(
        <li>
            <input type="checkbox" value={item.packed} onChange={()=> onToggleItem(item.id)} />
            <span className={item.packed ? 'line-through': ""}>{item.quantity} {item.description}</span>
            <div>
                <button onClick={()=>onDeleteItem(item.id)}>❌</button>
                <button style={{fontSize:"20px"}} onClick={()=> onSelectItem(item.id)}>📝</button>
            </div>
        </li>
    )
}