import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'
import '../styles/pages/CleverTest.sass'
import Search from '../components/Search'
import { Link } from 'react-router-dom'



const CleverTest02 = ({ userData, fetchUsers }) => {

  const [userDetail, setUserDetail] = useState({
    name: "",
    lastName: "",
    email: "",
    profesion: ""
  })

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <>
      <div className="main">
        <h1>Clever Test #2</h1>
        <p>Este ejercicio indicaba que se debía consumir un API. <strong>Se filtraron los resultados del API para obtener solo aquellos que tuvieran la clave "name"</strong>. Se utilizo Redux para almacenar el estado y Axios para realizar el Action de la petición. Tambíen se indicaba que con el Botón "Add user" se pudiera guardar un registro en la API, para ello se utilizo Fetch. En Ambos casos se utilizaron Hooks para el estado y el ciclo de vida.</p>
        <p>Tambíen se pedia que se puediera mostrar información detallada de cada usuario en el Card de la derecha.</p>
        <p>Destacar que la interacción con el buscador es parte del ejercicio 3.</p>
        <div className="main__components-container">
          <Search />
          <Link className="btn" to="/create-user">Add user</Link>
        </div>
        <div className="main__grid-container">
          <div className="item">
            <div className="item__title">
              <h3>User Names</h3>
            </div>
            <div className="item__content">
             
             {
              userData.loading ? (
                <p>Loading...</p> 
              )
              :
              (
                userData.users.map(user =>  
                  user.name != null && user.name != "" ?
                (
                  <button key={user.id} onClick={ () => setUserDetail( { name: user.name, lastName: user.lastname, email: user.email, profesion: user.profesion } ) }>{user.name}</button>
                )
                :
                (
                  null
                ))
              )
                  
              }
            </div>
          </div>
          <div className="item">
            <div className="item__title">
              <h3>User Info</h3>
            </div>
            <div className="item__content">
              {
                userDetail.name == "" ?
                (
                  <h2>Selecciona un usuario</h2>
                ) :
                (
                  <div>
                    <h2>{userDetail.name} {userDetail.lastName}</h2>
                    <p>{userDetail.email}</p>
                    <p>{userDetail.profesion}</p>
                  </div>
                ) 
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    userData: state.user,
  }
} 

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CleverTest02)
