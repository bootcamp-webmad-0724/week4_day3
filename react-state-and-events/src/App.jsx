import { useState } from 'react';
import './App.css'
import Counter from './components/Counter/Counter';
import LikeButton from './components/LikeButton/LikeButton';

function App() {

  const [activeTheme, setActiveTheme] = useState('light')

  const handleTheme = event => {
    const { value } = event.target
    setActiveTheme(value)
  }

  return (

    <div className={`App ${activeTheme}`}>

      <h3>Tema activo:</h3>

      <select onChange={handleTheme}>
        <option value="light">Claro</option>
        <option value="dark">Oscuro</option>
        <option value="contrast">Alto contraste</option>
      </select>

      <hr />

      <Counter />
      <LikeButton />

    </div>

  )

}

export default App;
