import React, { useState } from 'react';
import './CorsesSection.css';
import { SiBrandfolder } from "react-icons/si";
import England from './england1.webp';
import Arab from './arab.webp';
import Turk from './turkey.webp';
import Korea from './korea.webp';
import German from './german.webp';
import Japan from './japan.webp';
import Frans from './fransiya.webp';
import World from './world.webp';

const courses = [
  { title: 'Arab tili', img: Arab },
  { title: 'Turk tili', img: Turk },
  { title: 'Ingliz tili', img: England },
  { title: 'Koreys tili', img: Korea },
  { title: 'Nemis tili', img: German },
  { title: 'Yapon tili', img: Japan },
  { title: 'Fransuz tili', img: Frans },
  { title: 'Boshqa tillar', img: World },
];

const CoursesSection = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  return (
    <section className="courses-section py-5 bg-light mt-3 mb-3">
      <div className="container" id='Corses'>
        <h2 className="text-center mb-5">
          <a className="navbar-brand text-primary fw-bold" href="#">
            <span><SiBrandfolder size={32} /></span> Bilib olda mavjud kurslar
          </a>
        </h2>
        <div className="row">
          {courses.map((course, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-3 mb-3 ">
              <div className="card h-100 text-center p-3" onClick={() => handleCourseClick(course)}>
                <img src={course.img} alt={course.title} className="card-img-top mx-auto fanImg" style={{ width: '80%' }} />
                <div className="card-body">
                  <h4 className="card-title fw-bold">{course.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tanlangan kursni ko'rsatish */}
      {selectedCourse && (
        <div className="selected-course mt-5">
          <h3 className="text-center">{selectedCourse.title} haqida</h3>
          <img src={selectedCourse.img} alt={selectedCourse.title} className="img-fluid mx-auto d-block" style={{ width: '50%' }} />
          <p className="text-center">Bu kurs haqida qo'shimcha ma'lumot.</p>
          {/* Boshqa ma'lumotlarni qo'shishingiz mumkin */}
        </div>
      )}
    </section>
  );
};

export default CoursesSection;
