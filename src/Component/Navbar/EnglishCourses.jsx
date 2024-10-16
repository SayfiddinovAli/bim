// EnglishCourses.jsx
import React from 'react';
import CourseCard from './CourseCard';

const courses = [
  {
    title: "Ingliz tili",
    description: "Bu kurs foydalanuvchilarning ehtiyojlarini, xulq-atvorini va motivlarini chuqur o'rganishga qaratilgan.",
    instructor: "Shoxruhbek",
    price: "$45.99",
    img: "path_to_your_image1.png",
  },
  // Qo'shimcha Ingliz kurslarini qo'shing...
];

function EnglishCourses() {
  return (
    <div className="row">
      {courses.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>
  );
}

export default EnglishCourses;

