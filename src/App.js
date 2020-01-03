import React, { Component } from 'react';
//import logo from './logo.svg';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {

  constructor(){
    super(); //Manda llamar el consturctor en Component

    this.state = {
      searchField: "",
      monsters: [
          // {
          //   name: 'Frankestein',
          //   id: 'asc1'
          // },
          // {
          //   name: 'Dracula',
          //   id: 'ascr2',
          // },
          // {
          //   name: 'HombreLobo',
          //   id: 'ascr4'
          // }  
      ]
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  }

  render(){
    const { monsters, searchField } = this.state; //ES6 destructuring
    //const monsters = this.state.monsters
    //const searchField = this.state.searchField
    const filteredMonsters = monsters.filter ( monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase() )
      );

    return (
    <div className="App">
          
          <h1>Monsters Rolodex</h1>

          <SearchBox placeholder="search monster"
            handleChange={ e => {
              this.setState( { searchField: e.target.value } ) }
            }
          />
          {/* <input type="search" placeholder="search monster" 
          onChange={e => {
              this.setState( { searchField: e.target.value }, 
                () => console.log(this.state)) //el segundo argumento es un callback para obtener el valor inmediato
            }
          } 
         /> */}
          {/* <CardList monsters={this.state.monsters} /> */}
          <CardList monsters={filteredMonsters} />
          
          {/* <CardList name='Yihua' >
            {this.state.monsters.map(monster => (
              <h1 key={monster.id}>{monster.name}</h1>
            ))}
          </CardList> */}
        
        {/* <button onClick={()=> this.setState({monsters: "Hola John"}) }>Cambia texto</button> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
    </div>
    );
  } 
}

export default App;
