// GermanCourses.jsx
import React from 'react';
import CourseCard from './CourseCard';

const courses = [
  {
    title: "Nemis tili",
    description: "Nemis tili kursi haqida batafsil ma'lumot.",
    instructor: "Abdulatif",
    price: "$45.99",
    img: "path_to_your_image2.png",
  },
  // Qo'shimcha Nemis kurslarini qo'shing...
];

function GermanCourses() {
  return (
    <div className="row">
      {courses.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>
  );
}

export default GermanCourses;
