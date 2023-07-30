import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './src/components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
 return (
  <div>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/item :id'element={<ItemDetailContainer/>}/>
      </Routes>
      <ItemListContainer/>
      <ItemDetailContainer/>
    </BrowserRouter>

  </div>
 );
}

export default App;
