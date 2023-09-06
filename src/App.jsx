
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Accueil from './pages/accueil';

import Propos from './pages/propos';

import Projet from './pages/Projet';
import Contact from './pages/Contact';
import Resume from './pages/resume';
import Header from './components/herder';
import Page404 from './pages/page404';
import ProjetWeb from './pages/projetWeb';
import DetailleMelano from './pages/detailleMelano';

function App() {
  return (
    
        <Routes>

          <Route path='/' element={<><Header /><Accueil /></>}></Route>
          <Route path='/propos' element={<><Header /><Propos /></>}></Route>
         
          <Route path='/Projet' element={<><Header /><Projet /></>}></Route>
          <Route path='/Contact' element={<><Header /><Contact /></>}></Route>
          <Route path='/Resume' element={<><Header /><Resume /></>}></Route>
          <Route path='/projetweb' element={<><Header /><ProjetWeb/></>}></Route>
          <Route path='/detailleMelano' element={<><Header /><DetailleMelano/>/</>}></Route>
          
          <Route path="*" element={<Page404 />}></Route>
          

        </Routes>
    
    
  );
}

export default App;
