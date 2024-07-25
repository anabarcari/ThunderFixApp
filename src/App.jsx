import { BrowserRouter } from "react-router-dom";
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
// App.jsx
import Footer from './components/Footer';

const App=()=> {
  

  
  return (
  
     <BrowserRouter>
   <div className='bg-gradient-to-br from-[#413d4c] from-10% via-[#59434f]] via-30% to-[#594753] to-90% ... md:bg-primary md:bg-cover bg-top-0 bg-left-0 md:bg-primary  md:bg-cover md:bg-center md:bg-fixed relative z-0 '>
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
       
     
    </BrowserRouter>
  );
}

export default App
