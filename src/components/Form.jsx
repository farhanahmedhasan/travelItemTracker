import {useEffect, useState} from "react";

/* eslint-disable react/prop-types */
export default function Form ({onAddItems,selectedItem,onEditItem}) {
    const [item,setItem] = useState({description: "", quantity: 1})
    const [isEditing, setIsEditing] = useState(false)

    useEffect(()=>{
         setIsEditing(Object.keys(selectedItem).length !== 0)

        if (isEditing){
            setItem({description: selectedItem.description || "", quantity:selectedItem.quantity || 1})
        }

        if(!isEditing){
            setItem({description: "", quantity:1})
        }

    },[isEditing, selectedItem])

    function handleSubmit(e) {
        e.preventDefault();
        if (!item.description) return

        if(!isEditing){
            const newItem = {...item, packed:false, id:Date.now()}
            onAddItems(newItem)
        }

        if(isEditing){
            const newItem = {...item, packed:selectedItem.packed, id:Date.now()}
            onEditItem(newItem)
        }

        setItem({description: "", quantity: 1})
    }

    function handleChange(e){
        const name = e.target.name
        let value = e.target.value

        if(e.target.tagName === 'SELECT'){
            value = +e.target.value
        }

        setItem({...item, [name]: value})
    }

    return(
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your 😍 trip?</h3>
            <select name="quantity" value={item.quantity} onChange={handleChange}>
                {
                    Array.from({length: 20}, (_, i) => i + 1)
                    .map(num=> <option key={num} value={num}>{num}</option>)
                }
            </select>
            <input type="text" name="description" value={item.description} onChange={handleChange} placeholder="Item..."/>
            <button type="submit">{isEditing ? "Edit" : "Add"}</button>
        </form>
    )
}