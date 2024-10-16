import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EnglishCourses from './EnglishCourses'; // Manzilni to'g'rilab o'zgartiring
import GermanCourses from './GermanCourses'; // Manzilni to'g'rilab o'zgartiring
import KoreanCourses from './KoreanCourses'; // Manzilni to'g'rilab o'zgartiring
import JapaneseCourses from './JapaneseCourses'; // Manzilni to'g'rilab o'zgartiring
import ArabicCourses from './ArabicCourses'; // Manzilni to'g'rilab o'zgartiring
import TurkishCourses from './TurkishCourses'; // Manzilni to'g'rilab o'zgartiring
import OtherLanguages from './OtherLanguages'; // Manzilni to'g'rilab o'zgartiring

const MainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/English" element={<EnglishCourses />} />
        <Route path="/German" element={<GermanCourses />} />
        <Route path="/Korean" element={<KoreanCourses />} />
        <Route path="/Japanese" element={<JapaneseCourses />} />
        <Route path="/Arabic" element={<ArabicCourses />} />
        <Route path="/Turkish" element={<TurkishCourses />} />
        <Route path="/Boshqa" element={<OtherLanguages />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
