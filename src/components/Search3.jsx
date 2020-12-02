import React, { useState } from 'react'
import '../styles/components/Search.sass'

const Search = ({ setSearchInputValue }) => {

  const [inputValue, setInputValue] = useState("")

  return (
    <div className="Search">
      <input placeholder="Ingrese un nombre de usuario completo" type="text" value={ inputValue } onChange={ e => setInputValue( e.target.value ) }/>
      <button className="btn" onClick={setSearchInputValue(inputValue)}>Search</button>
    </div>
  )
}

export default Search
