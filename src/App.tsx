import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Writings from './pages/Writings';
import Journal from './pages/Journal';


function App() {
  return (
    <Router>
      <main className='relative min-h-screen w-screen overflow-x-hidden'>
        <NavBar />
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/writings" element={<Writings />} />
          <Route path="/journal" element={<Journal />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
