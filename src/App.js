import './App.css';
import Wpix from './components/Wpix';
import Features from './components/Features'
import Nav from './components/Nav';
import Team from './components/Team';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="container-fluid">
      <Nav />
      <Wpix />
      <Features />
      <Team />
       <Routes>
       <Route exact path="/nav" element={<Nav />} />
      <Route exact path="/wpix" element={<Wpix />} />
      <Route exact path="/features" element={<Features />} />
      <Route exact path="/team" element={<Team />} />
      </Routes>
    </div>
  );
}

export default App;
