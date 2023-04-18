import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home/home';
import About from './components/About/about';
import { Navbar } from 'react-bootstrap';
import NavbarHeader from './components/Navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/HeroSection/hero';
import Boardofgoverners from './components/administration/Boardofgoverners';
import Boardofgovpage from './components/administration/boardofgovpage';
function App() {
  return (
    <>
    <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/boardofgoverners' element = {<Boardofgovpage />} />
        <Route path='/about' element={<About />} />
        <Route path='/' element={<Home/>} />
    </Routes>
    </>
  );
}

export default App;
