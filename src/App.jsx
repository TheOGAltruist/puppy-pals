import { useState } from 'react';
import './App.css';
import { puppyList } from './data';

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  console.log(featuredPup);
  

  return (
    <div className='App'>
      {
        featPupId && (
        <div className='featuredPuppyDiv'>
          <h2>{featuredPup.name}</h2>
          <ul className='featuredPuppyUL'>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )} {
        puppyList.map((puppy) => {
          return <p key={puppy.id} onClick={()=>{setFeatPupId(puppy.id)}}>{puppy.name}</p>
        })
      }

    </div>
  );
}

export default App
