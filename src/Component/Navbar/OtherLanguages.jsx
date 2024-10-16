// OtherLanguages.jsx
import React from 'react';
import CourseCard from './CourseCard';

const courses = [
  {
    title: "Boshqa tillar",
    description: "Boshqa tillar kursi haqida batafsil ma'lumot.",
    instructor: "Ali",
    price: "$45.99",
    img: "path_to_your_image7.png",
  },
  // Qo'shimcha boshqa tillar kurslarini qo'shing...
];

function OtherLanguages() {
  return (
    <div className="row">
      {courses.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>
  );
}

export default OtherLanguages;
