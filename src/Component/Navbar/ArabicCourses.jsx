// ArabicCourses.jsx
import React from 'react';
import CourseCard from './CourseCard';

const courses = [
  {
    title: "Arab tili",
    description: "Arab tili kursi haqida batafsil ma'lumot.",
    instructor: "Mirzohid",
    price: "$70.99",
    img: "path_to_your_image5.png",
  },
  // Qo'shimcha arab tili kurslarini qo'shing...
];

function ArabicCourses() {
  return (
    <div className="row">
      {courses.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>
  );
}

export default ArabicCourses;
