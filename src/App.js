
import './App.css';
import Header from './components/header/header';
import Home from './pages/home';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Curiosidades from './pages/curiosidades/curiosidades';
import Fotos from './pages/Fotos/fotos';
import História from './pages/historia/historia';



function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Fotos' element={<Fotos />}/>
      <Route path='/Curiosidades' element={<Curiosidades />}/>
      <Route path='/História' element={<História />}/>
     </Routes>
     
    </BrowserRouter>
    
    
  );
}

export default App;
