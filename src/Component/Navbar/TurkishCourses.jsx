// TurkishCourses.jsx
import React from 'react';
import CourseCard from './CourseCard';

const courses = [
  {
    title: "Turk tili",
    description: "Turk tili kursi haqida batafsil ma'lumot.",
    instructor: "Ali",
    price: "$45.99",
    img: "path_to_your_image6.png",
  },
  // Qo'shimcha turk tili kurslarini qo'shing...
];

function TurkishCourses() {
  return (
    <div className="row">
      {courses.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>
  );
}

export default TurkishCourses;
