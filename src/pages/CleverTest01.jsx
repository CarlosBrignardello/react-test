import React from 'react'
import '../styles/pages/CleverTest.sass'
import Search from '../components/Search'

const CleverTest01 = () => {
  return (
    <>
      <div className="main">
        <h1>Clever Test #1</h1>
        <p>Este ejercicio requeria recrear una interfaz, que es la que se ve a continuación. No se puede interactuar con nada.</p>
        <div className="main__components-container">
          <Search />
          <button className="btn">Add user</button>
        </div>
        <div className="main__grid-container">
          <div className="item">
            <div className="item__title">
              <h3>User Names</h3>
            </div>
            <div className="item__content">
              <p>Johnny Melavo</p>
              <p>Aquiles Bailo</p>
              <p>Jake Weary</p>
              <p>Esteban Quito</p>
              <p>Elber Einstein</p>
            </div>
          </div>
          <div className="item">
            <div className="item__title">
              <h3>User Info</h3>
            </div>
            <div className="item__content">
              <p>"email": "johnny@gmail.com",</p>
              <p>"lastName": "Melavo"</p>
              <p>"name": "Johnny",</p>
              <p>"id": 3</p>  
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default CleverTest01
