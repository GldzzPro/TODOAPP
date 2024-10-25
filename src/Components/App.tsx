import { useState } from 'react';
import './App.css';
import { NewToDOForm } from './NewToDoForm';

export interface Item {
  id : number;
  texte : string;
  isDone :false;
}

function App() {
  
  const  [items, setItems] = useState<Item[]>([]);

  const handelAddItems = (text : string) => {     

    const newItem : Item = {
      id: items.length + 1,
      isDone: false,
      texte: text
    };

    setItems ((prevItems) => [... prevItems, newItem]);

    console.log(items.length);
  }

return (
  <>
    <NewToDOForm handelAddItems={handelAddItems} />
  </>
)

}
export default App;
