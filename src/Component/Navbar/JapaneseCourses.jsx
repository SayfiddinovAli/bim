// JapaneseCourses.jsx
import React from 'react';
import CourseCard from './CourseCard';

const courses = [
  {
    title: "Yapon tili",
    description: "Yapon tili kursi haqida batafsil ma'lumot.",
    instructor: "Umidjon",
    price: "$39.99",
    img: "path_to_your_image4.png",
  },
  // Qo'shimcha yapon tili kurslarini qo'shing...
];

function JapaneseCourses() {
  return (
    <div className="row">
      {courses.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>
  );
}

export default JapaneseCourses;
