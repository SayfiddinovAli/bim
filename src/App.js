import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router
import Header from './Component/Header/Header';
import HeroSection from './Component/HeroSection/HeroSection';
import CoursesSection from './Component/CorsesSection/CorsesSection';
import TextAnimation from './Component/TextAnimation/TextAnimation';
import Footer from './Component/Footer/Footer';
import Card from './Component/card/Card';
import RegistrationForm from './Component/RegistrationForm/RegistrationForm';
import SignIn from './Component/RegistrationForm/SignIn';
import { UserProvider } from './context/Context';


function App() {
  return (
    <Router>
<UserProvider>
<div className="App container">
        <Header />
        <Routes>
          {/* Home sahifasida barcha komponentlarni chiqarish */}
          <Route 
            path="/" 
            element={
              <>
                <HeroSection />
                <TextAnimation />
                <CoursesSection />
                
              </>
            } 
          />
          {/* Kurslar sahifasi uchun alohida komponent */}
          <Route path="/Kurslar" element={< Card/>} />
          <Route path="/Maqolalar" element={<TextAnimation />} />
          <Route path="/Contact" element={<Card/>} />
          <Route path="/SignIn" element={<SignIn/>} />
          <Route path="/RegistrationForm" element={<RegistrationForm/>} />
          
          
        </Routes>
        <Footer />
      </div>

</UserProvider>
      
    </Router>
  );
}

export default App;
