import { useState } from 'react';
import './App.css';
import { puppyList } from './data';

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  
  return (
    <>
      {
        puppyList.map((puppy) => {
          return <p key={puppy.id}>{puppy.name}</p>
        })
      }
    </>
  )
}

export default App
