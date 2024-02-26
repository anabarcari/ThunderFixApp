import { BrowserRouter } from "react-router-dom";
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
// App.jsx
import Footer from './components/Footer';

const App=()=> {
  

  
  return (
  
     <BrowserRouter>
      <div className='relative z-0 bg-primary xs:bg-contain'>
        <div className='bg-hero-pattern  bg-primary bg-cover bg-center bg-fixed xs:bg-cover '>
          <Navbar />
          <Hero />
        
     
        <About />
      
        <Tech />
        
        <Experience />
      
        
        <Works /> 
       
        <Feedbacks />
          </div>
          <div className='bg-night bg-cover bg-center relative z-0'>
          <Contact />
          <StarsCanvas />
          
          <Footer /></div>
        </div>
     
    </BrowserRouter>
  );
}

export default App
