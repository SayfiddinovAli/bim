// KoreanCourses.jsx
import React from 'react';
import CourseCard from './CourseCard';

const courses = [
  {
    title: "Koreys tili",
    description: "Koreys tili kursi haqida batafsil ma'lumot.",
    instructor: "Mirjalol",
    price: "$50.99",
    img: "path_to_your_image3.png",
  },
  // Qo'shimcha koreys tili kurslarini qo'shing...
];

function KoreanCourses() {
  return (
    <div className="row">
      {courses.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>
  );
}

export default KoreanCourses;
