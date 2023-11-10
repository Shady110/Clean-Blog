import Footer from './components/Footer';
import {Routes , Route} from 'react-router-dom';
import Contact from './Pages/Contact';
import Home from './Pages/Home'
import About from './Pages/About';
import Sample from './Pages/Sample';

function App() {
  return (
    <>
   
    <Routes>

    <Route path='/' element={<Home/>}/>
    
    <Route path='/About' element={<About/>}/>
    
    <Route path='/Sample' element={<Sample/>}/>
    
    <Route path='/Contact' element={<Contact/>}/>

    </Routes>

   <Footer/> 
    
    </>
   

  );
}

export default App;
