import { useState, useCallback } from "react"
import React from 'react';
/**
 * Renders an array of strings passed in that can be filtered and added to as an
 * unordered list.
 * @returns Component
 */
export default function Sidebar() {
  let [newMenuItem, setNewMenuItem] = useState("")
  // TODO: 2 Using a state hook, maintain the current menu items as an array state.
  // let [menuItems, setMenuItems] = useState(initialMenuItems)
  let [filter, setFilter] = useState("")
  import React, {useState} from 'react';
  function Menu({initialMenuItems}) {
    const[menuItems, setMenuItems] = useState(initialMenuItems);
    return(
      );
  }
  // Adds a single string passed in as parameter to the state element
  // "menuItems" that holds the set of current menu items.
  let addMenuItem = useCallback(() => {
    console.log("Added menu item")
    //   // TODO: 3. Add a new menu item to the correct variable associated with this class.
    //   // This involves adding a parameter and changing a class instance variable (props).
    //   setMenuItems([item, ...menuItems])
  }, [])
  function MenuNew({children}){
    const [menuItems, setItems] = useState([]);
    const addMenuItem = (item) => {
      setMenuItems([item, ...menuItems]);
    };
    return (
      <div>
        {}
      <button onClick=() => admenuItem({ name: 'New Item'})}>Add Item</div>button>
      <ul>
        {menuItems.map((item, index)=> (
        <li key=(index)>(item.name)</li>
        ))}
        </ul>
      </div>
      );
  }
  export default MenuNew;
  // TODO: 4. Display ONLY the menu items that contain the filter element value
  // "term" in them. Each menu item should be an unordered list item wrapped in an unordered list (ul) element.
function FilterableMenu({ menuItems }) {
  const [filterText, setFilterText] = useState('');

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };

  const filteredItems = menuItems.filter((item) => {
    const regex = new RegExp(filterText, 'i'); 
    return regex.test(item.label); 
  });

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search menu items" 
        value={filterText} 
        onChange={handleFilterChange} 
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>{item.label}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilterableMenu;
  // TODO: 1 Render inside the outer div an unordered list of the menu items, with each string in the array
  // its own item.
  import React from 'react';
  function MenuList({ initialMenuItems }) {
    return (
      <ul>
        {intialMenuItems.map((item, index =>(
        <li key={index}>{item}</li>
        ))}
      </ul>
      );
  }
  
  export default MenuList;
  return (
    <div>
      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
      ></input>
      <br />
      <button
        onClick={() => {
          /* TODO: 3 */
        }}
      >
        Add Item
      </button>
      <br />
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      ></input>
    </div>
  )
}
