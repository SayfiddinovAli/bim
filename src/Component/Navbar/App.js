// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import EnglishCourses from './EnglishCourses';
import GermanCourses from './GermanCourses';
import KoreanCourses from './KoreanCourses';
import JapaneseCourses from './JapaneseCourses'; // Yapon tili komponenti
import ArabicCourses from './ArabicCourses'; // Arab tili komponenti
import TurkishCourses from './TurkishCourses'; // Turk tili komponenti
import OtherLanguages from './OtherLanguages'; // Boshqa tillar komponenti

function NavApp() {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/English" element={<EnglishCourses />} />
            <Route path="/German" element={<GermanCourses />} />
            <Route path="/Korean" element={<KoreanCourses />} />
            <Route path="/Japanese" element={<JapaneseCourses />} />
            <Route path="/Arabic" element={<ArabicCourses />} />
            <Route path="/Turkish" element={<TurkishCourses />} />
            <Route path="/Boshqa" element={<OtherLanguages />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default NavApp;
