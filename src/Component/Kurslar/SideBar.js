import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ onSelectCourse }) => {
  return (
    <div className="bg-light border-end" id="sidebar">
      <h5 className="p-3">Tillarning Tanlovi</h5>
      <div className="nav-container">
        <Link className="nav-link custom-link" onClick={() => onSelectCourse("Ingliz tili")}>Ingliz Tili</Link>
        <Link className="nav-link custom-link" onClick={() => onSelectCourse("Nemis tili")}>Nemis Tili</Link>
        <Link className="nav-link custom-link" onClick={() => onSelectCourse("Koreys tili")}>Koreys Tili</Link>
        <Link className="nav-link custom-link" onClick={() => onSelectCourse("Yapon tili")}>Yapon Tili</Link>
        <Link className="nav-link custom-link" onClick={() => onSelectCourse("Arab tili")}>Arab Tili</Link>
        <Link className="nav-link custom-link" onClick={() => onSelectCourse("Turk tili")}>Turk Tili</Link>
        <Link className="nav-link custom-link" onClick={() => onSelectCourse("Fransuz tili")}>Fransus Tili</Link>
        <Link className="nav-link custom-link" onClick={() => onSelectCourse("Boshqa tillar")}>Boshqa tillar</Link>
      </div>
    </div>
  );
};

export default Sidebar;
