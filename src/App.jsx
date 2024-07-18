import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Portada from './components/Portada';

import './App.css'

function App() {
  return (
    <>
      <header>
        <NavBar />
        <Portada />
      </header>
      <main>
        <ItemListContainer greeting="¡Bienvenido a nuestra tienda de zapatillas!" />
      </main>
    </>
  );
}

export default App;
