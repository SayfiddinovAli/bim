import React, { useState } from 'react';
// Maxsus style yozish uchun
import Sidebar from './SideBar';
import Teacher from '../card/Teacher2.png';
import CoursesSection from '../CorsesSection/CorsesSection';

const courses = [
    // Ingliz tili
    { title: "Ingliz tili", description: "Kurs ta'rifi", instructor: "Shoxruhbek", price: "$45.99", img: Teacher },
    { title: "Ingliz tili", description: "Kurs ta'rifi", instructor: "Shoxruhbek", price: "$45.99", img: Teacher },
    { title: "Ingliz tili", description: "Kurs ta'rifi", instructor: "Shoxruhbek", price: "$45.99", img: Teacher },
    { title: "Ingliz tili", description: "Kurs ta'rifi", instructor: "Shoxruhbek", price: "$45.99", img: Teacher },
    { title: "Ingliz tili", description: "Kurs ta'rifi", instructor: "Shoxruhbek", price: "$45.99", img: Teacher },
    { title: "Ingliz tili", description: "Kurs ta'rifi", instructor: "Shoxruhbek", price: "$45.99", img: Teacher },
    { title: "Ingliz tili", description: "Kurs ta'rifi", instructor: "Shoxruhbek", price: "$45.99", img: Teacher },
    { title: "Ingliz tili", description: "Kurs ta'rifi", instructor: "Shoxruhbek", price: "$45.99", img: Teacher },
    { title: "Ingliz tili", description: "Kurs ta'rifi", instructor: "Shoxruhbek", price: "$45.99", img: Teacher },
  
    // Turk tili
    { title: "Turk tili", description: "Kurs ta'rifi", instructor: "Ali", price: "$45.99", img: Teacher },
    { title: "Turk tili", description: "Kurs ta'rifi", instructor: "Ali", price: "$45.99", img: Teacher },
    { title: "Turk tili", description: "Kurs ta'rifi", instructor: "Ali", price: "$45.99", img: Teacher },
    { title: "Turk tili", description: "Kurs ta'rifi", instructor: "Ali", price: "$45.99", img: Teacher },
    { title: "Turk tili", description: "Kurs ta'rifi", instructor: "Ali", price: "$45.99", img: Teacher },
    { title: "Turk tili", description: "Kurs ta'rifi", instructor: "Ali", price: "$45.99", img: Teacher },
    { title: "Turk tili", description: "Kurs ta'rifi", instructor: "Ali", price: "$45.99", img: Teacher },
    { title: "Turk tili", description: "Kurs ta'rifi", instructor: "Ali", price: "$45.99", img: Teacher },
    { title: "Turk tili", description: "Kurs ta'rifi", instructor: "Ali", price: "$45.99", img: Teacher },
  
    // Arab tili
    { title: "Arab tili", description: "Kurs ta'rifi", instructor: "Mirzohid", price: "$70.99", img: Teacher },
    { title: "Arab tili", description: "Kurs ta'rifi", instructor: "Mirzohid", price: "$70.99", img: Teacher },
    { title: "Arab tili", description: "Kurs ta'rifi", instructor: "Mirzohid", price: "$70.99", img: Teacher },
    { title: "Arab tili", description: "Kurs ta'rifi", instructor: "Mirzohid", price: "$70.99", img: Teacher },
    { title: "Arab tili", description: "Kurs ta'rifi", instructor: "Mirzohid", price: "$70.99", img: Teacher },
    { title: "Arab tili", description: "Kurs ta'rifi", instructor: "Mirzohid", price: "$70.99", img: Teacher },
    { title: "Arab tili", description: "Kurs ta'rifi", instructor: "Mirzohid", price: "$70.99", img: Teacher },
    { title: "Arab tili", description: "Kurs ta'rifi", instructor: "Mirzohid", price: "$70.99", img: Teacher },
    { title: "Arab tili", description: "Kurs ta'rifi", instructor: "Mirzohid", price: "$70.99", img: Teacher },
  
    // Koreys tili
    { title: "Koreys tili", description: "Kurs ta'rifi", instructor: "Dilmurod", price: "$50.99", img: Teacher },
    { title: "Koreys tili", description: "Kurs ta'rifi", instructor: "Dilmurod", price: "$50.99", img: Teacher },
    { title: "Koreys tili", description: "Kurs ta'rifi", instructor: "Dilmurod", price: "$50.99", img: Teacher },
    { title: "Koreys tili", description: "Kurs ta'rifi", instructor: "Dilmurod", price: "$50.99", img: Teacher },
    { title: "Koreys tili", description: "Kurs ta'rifi", instructor: "Dilmurod", price: "$50.99", img: Teacher },
    { title: "Koreys tili", description: "Kurs ta'rifi", instructor: "Dilmurod", price: "$50.99", img: Teacher },
    { title: "Koreys tili", description: "Kurs ta'rifi", instructor: "Dilmurod", price: "$50.99", img: Teacher },
    { title: "Koreys tili", description: "Kurs ta'rifi", instructor: "Dilmurod", price: "$50.99", img: Teacher },
    { title: "Koreys tili", description: "Kurs ta'rifi", instructor: "Dilmurod", price: "$50.99", img: Teacher },
  
    // Yapon tili
    { title: "Yapon tili", description: "Kurs ta'rifi", instructor: "Umidjon", price: "$39.99", img: Teacher },
    { title: "Yapon tili", description: "Kurs ta'rifi", instructor: "Umidjon", price: "$39.99", img: Teacher },
    { title: "Yapon tili", description: "Kurs ta'rifi", instructor: "Umidjon", price: "$39.99", img: Teacher },
    { title: "Yapon tili", description: "Kurs ta'rifi", instructor: "Umidjon", price: "$39.99", img: Teacher },
    { title: "Yapon tili", description: "Kurs ta'rifi", instructor: "Umidjon", price: "$39.99", img: Teacher },
    { title: "Yapon tili", description: "Kurs ta'rifi", instructor: "Umidjon", price: "$39.99", img: Teacher },
    { title: "Yapon tili", description: "Kurs ta'rifi", instructor: "Umidjon", price: "$39.99", img: Teacher },
    { title: "Yapon tili", description: "Kurs ta'rifi", instructor: "Umidjon", price: "$39.99", img: Teacher },
    { title: "Yapon tili", description: "Kurs ta'rifi", instructor: "Umidjon", price: "$39.99", img: Teacher },
  
    // Fransuz tili
    { title: "Fransuz tili", description: "Kurs ta'rifi", instructor: "Naima", price: "$25.99", img: Teacher },
    { title: "Fransuz tili", description: "Kurs ta'rifi", instructor: "Naima", price: "$25.99", img: Teacher },
    { title: "Fransuz tili", description: "Kurs ta'rifi", instructor: "Naima", price: "$25.99", img: Teacher },
    { title: "Fransuz tili", description: "Kurs ta'rifi", instructor: "Naima", price: "$25.99", img: Teacher },
    { title: "Fransuz tili", description: "Kurs ta'rifi", instructor: "Naima", price: "$25.99", img: Teacher },
    { title: "Fransuz tili", description: "Kurs ta'rifi", instructor: "Naima", price: "$25.99", img: Teacher },
    { title: "Fransuz tili", description: "Kurs ta'rifi", instructor: "Naima", price: "$25.99", img: Teacher },

    { title: "Nemis tili", description: "Kurs ta'rifi", instructor: "Abdulatif", price: "$45.99", img: Teacher },
  { title: "Nemis tili", description: "Kurs ta'rifi", instructor: "Abdulatif", price: "$45.99", img: Teacher },
  { title: "Nemis tili", description: "Kurs ta'rifi", instructor: "Abdulatif", price: "$45.99", img: Teacher },
  { title: "Nemis tili", description: "Kurs ta'rifi", instructor: "Abdulatif", price: "$45.99", img: Teacher },
  { title: "Nemis tili", description: "Kurs ta'rifi", instructor: "Abdulatif", price: "$45.99", img: Teacher },
  { title: "Nemis tili", description: "Kurs ta'rifi", instructor: "Abdulatif", price: "$45.99", img: Teacher },
  { title: "Nemis tili", description: "Kurs ta'rifi", instructor: "Abdulatif", price: "$45.99", img: Teacher },
  { title: "Nemis tili", description: "Kurs ta'rifi", instructor: "Abdulatif", price: "$45.99", img: Teacher },
  { title: "Nemis tili", description: "Kurs ta'rifi", instructor: "Abdulatif", price: "$45.99", img: Teacher },

  // Boshqa tillar
  { title: "Boshqa tillar", description: "Kurs ta'rifi", instructor: "Ali", price: "$45.99", img: Teacher },
  { title: "Boshqa tillar", description: "Kurs ta'rifi", instructor: "Ali", price: "$45.99", img: Teacher },
  { title: "Boshqa tillar", description: "Kurs ta'rifi", instructor: "Ali", price: "$45.99", img: Teacher },
  { title: "Boshqa tillar", description: "Kurs ta'rifi", instructor: "Ali", price: "$45.99", img: Teacher },
  { title: "Boshqa tillar", description: "Kurs ta'rifi", instructor: "Ali", price: "$45.99", img: Teacher },
  { title: "Boshqa tillar", description: "Kurs ta'rifi", instructor: "Ali", price: "$45.99", img: Teacher },
  { title: "Boshqa tillar", description: "Kurs ta'rifi", instructor: "Ali", price: "$45.99", img: Teacher },
  { title: "Boshqa tillar", description: "Kurs ta'rifi", instructor: "Ali", price: "$45.99", img: Teacher },
  { title: "Boshqa tillar", description: "Kurs ta'rifi", instructor: "Ali", price: "$45.99", img: Teacher },
]
function CourseCard({ course }) {
  return (
    <div className="col-lg-4 col-md-6 col-12 mb-4">
      <div className="card h-100 text-center">
        <img src={course.img} alt={course.title} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{course.title}</h5>
          <p className="card-text">{course.description}</p>
          <p className="card-text"><strong>O'qituvchi:</strong> {course.instructor}</p>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center bg-white">
          <a href="#" className="btn btn-primary">Batafsil</a>
          <p className="card-text mb-0"><strong>Narxi:</strong> {course.price}</p>
        </div>
      </div>
    </div>
  );
}

const AppCard = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleSelectCourse = (course) => {
    console.log(`Tanlangan Kurs: ${course}`); // Debug log
    setSelectedCourse(course);
  };

  const filteredCourses = selectedCourse ? 
    courses.filter(course => course.title === selectedCourse) : 
    courses;

  return (
    <div className="container mt-5 bg-light">
      <div className="row">
        <Sidebar onSelectCourse={handleSelectCourse} />
        <div className="col">
          <div className="row">
            {filteredCourses.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
