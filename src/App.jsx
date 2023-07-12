import {useState} from "react";

import Logo from "./components/Logo.jsx";
import Form from "./components/Form.jsx";
import PackingList from "./components/PackingList.jsx";
import Stats from "./components/Stats.jsx";

const initItems = [
    { id: 1, description: "Passports", quantity: 2, packed: true },
    { id: 2, description: "Socks", quantity: 12, packed: false },
];

function App() {
    const [packageItems, setPackingItems] = useState(initItems)

    function handleItems(item) {
        setPackingItems(prevItems => [...prevItems, item])
    }

  return (
    <div className="app">
        <Logo/>
        <Form onAddItems={handleItems}/>
        <PackingList packageItems={packageItems}/>
        <Stats/>
    </div>
  )
}

export default App
