import {useState} from "react";

import Logo from "./components/Logo.jsx";
import Form from "./components/Form.jsx";
import PackingList from "./components/PackingList.jsx";
import Stats from "./components/Stats.jsx";

function App() {
    const [packingItems, setPackingItems] = useState([])
    const [selectedItem, setSelectedItem] = useState({})

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

    function handleSelectItem(id) {
        setSelectedItem(packingItems.find(item=> item.id === id))
    }

    function handleEdit(editedItem){
        setPackingItems(items => items.map(item => {
            return item.id === selectedItem.id ? editedItem : item
        }))

        setSelectedItem({})
    }

  return (
    <div className="app">
        <Logo/>
        <Form onAddItems={handleItems} selectedItem={selectedItem} onEditItem={handleEdit}/>
        <PackingList packageItems={packingItems} onDeleteItem={handleItemDelete} onToggleItem={handleToggleItem} onSelectItem={handleSelectItem} />
        <Stats items={packingItems}/>
    </div>
  )
}

export default App
