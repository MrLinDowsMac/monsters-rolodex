import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({placeholder,handleChange}) => { //Son propiedades del JSX deconstruidas
    return <input 
        type="search" 
        placeholder={placeholder}
        onChange={handleChange}
        className="search"
        //   onChange={e => {
        //       this.setState( { searchField: e.target.value }, 
        //         () => console.log(this.state)) //el segundo argumento es un callback para obtener el valor inmediato
        //     }
        // }
    ></input>
}