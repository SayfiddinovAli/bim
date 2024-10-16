// CourseCard.js
import React from 'react';

function CourseCard({ course }) {
  return (
    <div className="col-12 col-sm-6 col-lg-4 mb-3">
      <div className="card h-100 text-center">
        <img src={course.img} alt={course.title} className="card-img-top mx-auto mt-3" />
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

export default CourseCard;

