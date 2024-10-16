import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TeachersCard = ({ course }) => {
  return (
    <div className="card" style={{ width: '100%' }}>
      <div className="card-header">
        <button className="btn btn-primary mx-1">1. Jonli darslar</button>
        <button className="btn btn-primary mx-1">2. Resurs fayllari</button>
        <button className="btn btn-primary mx-1">3. Imtihon/ Testlar</button>
      </div>
      <img src={course.img} className="card-img-top" alt={course.title} />
      <div className="card-body">
        <h5 className="card-title">{course.title}</h5>
        <p className="card-text">{course.description}</p>
        <p className="card-text"><strong>O'qituvchi:</strong> {course.instructor}</p>
        <p className="card-text"><strong>Narxi:</strong> {course.price}</p>
      </div>
    </div>
  );
};

export default TeachersCard;
