import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavIndex';
import home from './components/home/home';
import Footer from './components/Footer/FooterIndex';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path = '/' exact Component={home}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
