import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate import qiling
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignIn.css';

const SignIn = () => {
  const navigate = useNavigate(); // useNavigate hook'ini aniqlash
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login ma\'lumotlari:', formData);
    navigate('/dashboard'); // Kirish muvaffaqiyatli bo'lsa, dasbhoard sahifasiga o'tamiz
  };

  // Ro'yxatdan o'tish tugmachasi bosilganda signup sahifasiga o'tish
  const goToSignUp = () => {
    navigate('/RegistrationForm'); // SignUp sahifasiga o'tadi
  };

  return (
    <div className="signin-container d-flex justify-content-center align-items-center bg-light">
      <div className="card p-4 shadow-lg">
        <h2 className="text-center mb-4">Kirish</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Parol</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Kirish</button>
        </form>
        <p className="text-center mt-3">
          Akkountingiz yo'qmi?{' '}
          <button
            className="btn btn-link p-0"
            style={{ textDecoration: 'underline', color: 'blue' }}
            onClick={goToSignUp} // Ro'yxatdan o'tish tugmasiga hodisa biriktiramiz
          >
            Ro'yxatdan o'tish
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
