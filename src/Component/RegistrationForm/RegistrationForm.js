import React, { useState } from 'react';
import './SignUp.css'; // Stil faylini qo'shish
import { Container } from 'react-bootstrap';

const RegistrationForm = () => {
  const [formType, setFormType] = useState('student'); // 'teacher' yoki 'student'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    experience: '', // O'qituvchilar uchun
    subject: '',    // O'qituvchilar uchun
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Formani yuborish uchun kerakli logika
    console.log('Form ma\'lumotlari:', formData);
    // Qo'shimcha ishlov berish
  };

  return (
    <div className="signup-container d-flex justify-content-center align-items-center">
      <div className="registration-form">
        <h2 className="text-center">Ro'yxatdan o'tish</h2>
        <div className="form-toggle text-center mb-3">
          <div
            className={`toggle-button ${formType === 'student' ? 'active' : ''}`}
            onClick={() => setFormType('student')}
          >
            O'quvchi
          </div>
          <div className="divider"></div>
          <div
            className={`toggle-button ${formType === 'teacher' ? 'active' : ''}`}
            onClick={() => setFormType('teacher')}
          >
            O'qituvchi
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Ism</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Parol</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Parolni tasdiqlash</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>

          {formType === 'teacher' && (
            <>
              <div className="mb-3">
                <label htmlFor="experience" className="form-label">Tajribangiz (yil)</label>
                <input
                  type="number"
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">Fan nomi</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </div>
            </>
          )}

          <button type="submit" className="btn btn-primary w-100">Ro'yxatdan o'tish</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
