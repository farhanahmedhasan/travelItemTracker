import Item from "./Item.jsx";

// eslint-disable-next-line react/prop-types
export default function PackingList ({packageItems}){
    return (
        <div className="list">
            <ul>
                {/* eslint-disable-next-line react/prop-types */}
                {packageItems.map(item => <Item key={item.id} item={item}/>)}
            </ul>
        </div>
    )
}