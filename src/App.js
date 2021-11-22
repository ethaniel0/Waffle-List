import './App.css';
import Item from './components/Item';
import { useState } from 'react';

function App() {
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
  return (
    <div className="App">
      <span className='title'>Todo</span>
      <div className='content'>
        <button className='new-btn'>New Item</button>
        {items.map(item => (
          <Item details={item} />
        ))}

      </div>
    </div>
  );
}

export default App;
