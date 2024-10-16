import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css'; // Maxsus style yozish uchun
import HeroSection from '../HeroSection/HeroSection';
import Teacher1 from './teacher1.png'
import Teacher from './Teacher2.png'

const courses = [
  {
    title: "Ingliz tili",
    description: "This course delves deep into understanding user needs, behaviors, and motivations.",
    instructor: "Shoxruhbek",
    price: "$45.99",
    img: Teacher, // O'rinbosar rasm URLi
  },
  {
    title: "Arab tili",
    description: "This course typically covers the entire video production pipeline, from pre-production to post-production.",
    instructor: "Mirzohid",
    price: "$70.99",
    img: Teacher,
  },
  {
    title: "Koreys tili",
    description: "This course is designed for individuals with no prior programming experience.",
    instructor: "Mirjalol",
    price: "$50.99",
    img: Teacher,
},
  {
    title: "Yapon tili",
    description: "This course delves deep into understanding user needs, behaviors, and motivations.",
    instructor: "Umidjon",
    price: "$39.99",
    img: Teacher,
  },
  {
    title: "Fransus tili ",
    description: "This course typically covers the entire video production pipeline, from pre-production to post-production.",
    instructor: "Naima",
    price: "$25.99",
    img: Teacher,
  },
  {
    title: "Nemis tili",
    description: "This course is designed for individuals with no prior programming experience.",
    instructor: "Abdulatif",
    price: "$45.99",
    img: Teacher,
  },
  {
    title: "Boshqa  tillar",
    description: "This course is designed for individuals with no prior programming experience.",
    instructor: "Ali",
    price: "$45.99",
    img: Teacher,
  }
];

function CourseCard({ course }) {
    return (
      <div className="col-lg-4 col-md-6 col-12 mb-4 d-flex justify-content-between align-items-center teacherCard">
        <div className="card h-100 text-center p-0">
          <img src={course.img} alt={course.title} className="card-img-top mx-auto  teacherImg" />
          <div className="card-body">
            <h5 className="card-title">{course.title}</h5>
            <p className="card-text">{course.description}</p>
            <p className="card-text"><strong>O'qituvchi:</strong> {course.instructor}</p>
          </div>
          {/* Footer qismi */}
          <div className="card-footer d-flex justify-content-between align-items-center bg-white">
            <a href="#" className="btn btn-primary">Batafsil</a>
            <p className="card-text mb-0"><strong>Narxi:</strong> {course.price}</p>
          </div>
        </div>
      </div>
    );
  }
  
  // Asosiy App komponenti barcha kurslarni ko'rsatadi
  function AppCard() {
    return (
      <div className="container mt-5 bg-light">
        <div className="row cradasl">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
        <div>
      {/* showHeroSection qiymatiga qarab HeroSectionni ko'rsatamiz */}
      {/* {showHeroSection && <HeroSection courses={courses} />}
    */}
    </div>
      </div>
    );}

export default AppCard;
