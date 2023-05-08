import './App.css';
import { useState, useEffect } from 'react';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
function App() {

  const [monsters, setMonsters ] = useState([]);
  const [searchField, setSearchField] = useState('');



  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setMonsters(users))
  }, []) 

 
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase()
    setSearchField(searchFieldString)
    
  }

 

  const newMonster =  monsters.filter( (monster) => {
    return monster.name.toLowerCase().includes(searchField)
  })
 

  return (
    
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox onSearchChange={onSearchChange}/>
      <CardList monsters={newMonster} />
    </div>
  );
}

export default App;
