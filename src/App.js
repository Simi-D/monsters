import { useState, useEffect } from 'react';

import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  
  const [searchField, setSearchField] = useState(''); //[value, setvalue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  console.log('rerendered')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users) );
  },[]);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  


  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
    
  };



  return (
    <div className='App'>
      <h1 className='app-title'> Monsters Robohash</h1>
      <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className='monsters-search-box'/>

      <CardList monsters={filteredMonsters}/>

    </div>
  );
};


export default App;