import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavIndex';
import Footer from './components/Footer/FooterIndex';
import Home from './components/home/home';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path = '/' exact Component={Home}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
