import './App.css';
import Item from './components/Item';
import NewForm from './components/NewForm';
import { useState } from 'react';

function App() {
  const [add, showAdd] = useState(false);
  const [selectItem, setSelectItem] = useState(-1);
  const [items, editItems] = useState([
    {
      title: "Something to do",
      completed: false,
      notes: "must be completed before Thursday",
      dueBy: ""
    },
    {
      title: "Other thing to do",
      completed: false,
      notes: "doesn't actually need to be completed",
      dueBy: ""
    }
  ]);

  const addItem = (item) => {
    editItems([...items, item]);
  }
  const deleteItem = (index) => {
    editItems(items.filter(i => i !== items[index]));
  }

  return (
    <div className="App">
      <span className='title'>Todo</span>
      <div className='content'>
        <div className='content-top'>
          <div style={{textAlign: 'right'}}><button onClick={() => showAdd(!add)} className='new-btn'>New Item</button></div>
          {add && <NewForm addItem={addItem} close={() => showAdd(false)} /> }
        </div>
        {items.map((item, ind) => (
          <Item details={item} ind={ind} select={setSelectItem} clicked={ind === selectItem} onDelete={deleteItem}  />
        ))}

      </div>
    </div>
  );
}

export default App;
