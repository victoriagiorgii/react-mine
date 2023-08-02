import './App.css';
import { NavBar } from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
 return (
  <div>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/categoria/:categoriaId'element={<ItemListContainer/>}/>
        <Route path='/item/:id'element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>

  </div>
 );
}

export default App;
