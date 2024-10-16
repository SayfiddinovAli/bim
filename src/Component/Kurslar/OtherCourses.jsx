// OtherCourses.jsx
import React from 'react';
import CourseCard from './CourseCard';

function OtherCourses({ courses }) {
  return (
    <div className="row">
      {courses.filter(course => course.title === 'Boshqa tillar').map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>
  );
}

export default OtherCourses;
