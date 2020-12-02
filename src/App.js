import React from 'react'
import './styles/App.sass'

function App() {
  return (
    <div className="App">
      <h1>Clever IT - React Test</h1>
      <div className="App__content">
        <p>Hola!, esta prueba esta compuesta por tres ejercicios. Cada uno de estos ejercicios son accesibles mediante los enlaces dispuestos en el componente Header. Para realizar esta prueba utilicé las siguientes herramientas:</p>
        <p>En cada ejercicio se dejaron unas notas en los que se explica un poco el desarrollo y los requisitos. Espero no entorpesca la evaluación de la prueba.</p>
        <div className="grid">
          <div className="App__content__list-container">
            <h3>Herramientas requeridas</h3>
            <ul>
              <li>ES6</li>
              <li>Ciclo de vida React</li>
              <li>Redux</li>
              <li>CSS</li>
              <li>Git</li>
              <li>npm</li>
            </ul>
          </div>
          <div className="App__content__list-container">
            <h3>Herramientas opcionales</h3>
            <ul>
              <li>React Hooks</li>
              <li>Sass</li>
              <li>Jest - Enzyme</li>
            </ul>
          </div>
          <div className="App__content__list-container">
            <h3>Herramientas personales</h3>
            <ul>
              <li>Axios</li>
              <li>React Router</li>
              <li>uuid</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;