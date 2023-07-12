import {useState} from "react";

import Logo from "./components/Logo.jsx";
import Form from "./components/Form.jsx";
import PackingList from "./components/PackingList.jsx";
import Stats from "./components/Stats.jsx";

function App() {
    const [packageItems, setPackingItems] = useState([{ id: 1, description: "Passports", quantity: 2, packed: false }])

    function handleItems(item) {
        setPackingItems(prevItems => [...prevItems, item])
    }

    function handleItemDelete(id){
        setPackingItems(items => items.filter(item => item.id !== id))
    }

    function handleToggleItem(id) {
        setPackingItems(items => items.map(item => {
            return item.id === id ? {...item, packed: !item.packed} : item
        }))
    }

  return (
    <div className="app">
        <Logo/>
        <Form onAddItems={handleItems}/>
        <PackingList packageItems={packageItems} onDeleteItem={handleItemDelete} onToggleItem={handleToggleItem}/>
        <Stats/>
    </div>
  )
}

export default App
