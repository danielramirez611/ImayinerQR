import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Usar Routes en lugar de Switch
import Navbar from '../src/componets/Navbar';
import HeroSection from '../src/componets/HeroSection';
import FeaturesSection from '../src/componets/FeaturesSection';
import WorkflowSection from '../src/componets/WorkflowSection';
import Footer from '../src/componets/Footer';
function App() {
  return (
      <Router>
          <Navbar />
          <Routes>  {/* Cambiado de Switch a Routes */}
              <Route path="/" element={
                  <>
                      <HeroSection />
                      <FeaturesSection />
                      <WorkflowSection />
                  </>
              } />
              {/* Puedes añadir más rutas según sea necesario */}
          </Routes>
          <Footer />
      </Router>
  );
}

export default App;