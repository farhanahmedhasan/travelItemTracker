// eslint-disable-next-line react/prop-types
export default function Item ({item}) {
    return(
        <li>
            <span className={item.packed ? 'line-through': ""}>{item.quantity} {item.description}</span>
            <button>❌</button>
        </li>
    )
}