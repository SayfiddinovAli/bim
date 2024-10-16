// Sidebar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-light border-end" id="sidebar">
      <h5 className="p-3">Tillarning Tanlovi</h5>
      <div className="nav-container">
        <button className="btn btn-link custom-link" onClick={() => navigate('/English')}>Ingliz Tili</button>
        <button className="btn btn-link custom-link" onClick={() => navigate('/German')}>Nemis Tili</button>
        <button className="btn btn-link custom-link" onClick={() => navigate('/Korean')}>Koreys Tili</button>
        <button className="btn btn-link custom-link" onClick={() => navigate('/Japanese')}>Yapon Tili</button>
        <button className="btn btn-link custom-link" onClick={() => navigate('/Arabic')}>Arab Tili</button>
        <button className="btn btn-link custom-link" onClick={() => navigate('/Turkish')}>Turk Tili</button>
        <button className="btn btn-link custom-link" onClick={() => navigate('/Boshqa')}>Boshqa tillar</button>
      </div>
    </div>
  );
};

export default Sidebar;
