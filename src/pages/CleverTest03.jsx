import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'
import '../styles/pages/CleverTest.sass'
import Search3 from '../components/Search3'
import { Link } from 'react-router-dom'



const CleverTest03 = ({ userData, fetchUsers }) => {

  const [userDetail, setUserDetail] = useState({
    name: "",
    lastName: "",
    email: "",
    profesion: ""
  })

  const [ searchInputValue, setSearchInputValue ] = useState('')

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <>
      <div className="main">
        <h1>Clever Test #3</h1>
        <p>Finalmente en el último ejercicio se requiere que se puedan filtrar los resultados de los usuarios mediante su busqueda en él Input.</p>
        <div className="main__components-container">
          <Search3 setSearchInputValue={setSearchInputValue}/>
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
                  user.name != null && user.name != "" && searchInputValue == ""  ?
                (
                  <button key={user.id} onClick={ () => setUserDetail( { name: user.name, lastName: user.lastname, email: user.email, profesion: user.profesion } ) }>{user.name}</button>
                )
                : user.name === searchInputValue && user.name != null && user.name != "" ?
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

export default connect(mapStateToProps, mapDispatchToProps)(CleverTest03)
