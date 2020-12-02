import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import '../styles/pages/CreateUser.sass'

const CreateUser = ({ history }) => {

  const [ inputName, setInputName ] = useState('')
  const [ inputLastName, setInputLastName ] = useState('')
  const [ inputEmail, setInputEmail ] = useState('')
  const [ inputProfesion, setInputProfesion ] = useState('')
  
  const handleInputName = e => {
    setInputName( e.target.value )
  }
  const handleInputLastName = e => {
    setInputLastName( e.target.value )
  }
  const handleInputEmail = e => {
    setInputEmail( e.target.value )
  }
  const handleInputProfesion = e => {
    setInputProfesion( e.target.value )
  }

 
 const handleSubmit = e => {
  console.log("Se activo");
  e.preventDefault()
  fetch("https://arsene.azurewebsites.net/User",
  {
    method: "POST",
    headers: {
      'Accept': 'application/json, text/plain, /',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: inputName,
      lastname: inputLastName,
      email: inputEmail,
      profesion: inputProfesion,
      id: uuidv4()
    })
  }
  ).then(res => { return res.json()})
  history.push('/test2')
  }

  return (
    <div className="CreateUser">
      <div className="CreateUser__title-form">
        <p>Add user</p>
      </div>
      <form onSubmit={ handleSubmit }>
        <label>User name</label>
        <input type="text" value={inputName} onChange={ handleInputName } />
        <label>Last name</label>
        <input type="text" value={inputLastName} onChange={ handleInputLastName } />
        <label>Profession</label>
        <input type="text" value={inputEmail} onChange={ handleInputEmail } />
        <label>Email</label>
        <input type="text" value={inputProfesion} onChange={ handleInputProfesion } />
        <small>Se registrarará como: {inputName}</small>
        <button className="btn">Save User</button>
      </form>
    </div>
  )
}

export default CreateUser