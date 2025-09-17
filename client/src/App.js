import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';

import Home from './components/Home/Home';
import CatCards from './components/CatCards/CatCards';
import Details from './components/Details/Details';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import SearchbarMobile from './components/SearchbarMobile/SearchbarMobile';


function App() {

  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="App">

      {
        pathname !== '/search'
        && <nav className='navbar'>
          <Navbar />
        </nav>
      }

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/breeds' element={<CatCards />} />
        <Route path='/breeds/:id' element={<Details />} />
        <Route path='/search' element={<SearchbarMobile />} />
      </Routes>

      {
        pathname !== '/search'
        && <footer className='footer'>
          <Footer />
        </footer>
      }
    </div>
  );
}

export default App;
