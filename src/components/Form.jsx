import {useState} from "react";

const initItemData = {description: "", quantity: 1}

export default function Form () {
    const [itemData,setItemData] = useState(initItemData)

    function handleSubmit(e) {
        e.preventDefault();
        if (!itemData.description) return

        console.log({...itemData, id: Date.now(), packed: false})
        setItemData(initItemData)
    }

    function handleChange(e){
        const name = e.target.name
        let value = e.target.value

        if(e.target.tagName === 'SELECT'){
            value = +e.target.value
        }

        setItemData({...itemData, [name]: value})
    }

    return(
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your 😍 trip?</h3>
            <select name="quantity" value={itemData.quantity} onChange={handleChange}>
                {
                    Array.from({length: 20}, (_, i) => i + 1)
                    .map(i=> <option key={i} value={i}>{i}</option>)
                }
            </select>
            <input type="text" name="description" value={itemData.description} onChange={handleChange} placeholder="Item..."/>
            <button type="submit">Add</button>
        </form>
    )
}