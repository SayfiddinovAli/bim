import React from 'react';
import Teacher from '../card/Teacher2.png';
import './HeroSection.css';

const courses = [
  {
    title: "Ingliz tili",
    description: "Bu kurs foydalanuvchilarning ehtiyojlarini, xulq-atvorini va motivatsiyalarini chuqur tushunishga qaratilgan.",
    instructor: "Shoxruhbek",
    price: "$45.99",
    img: Teacher,
  },
  {
    title: "Arab tili",
    description: "Bu kurs odatda barcha video ishlab chiqarish jarayonlarini o'z ichiga oladi.",
    instructor: "Mirzohid",
    price: "$70.99",
    img: Teacher,
  },
  {
    title: "Koreys tili",
    description: "Bu kurs dasturlash bo'yicha hech qanday tajribaga ega bo'lmaganlar uchun mo'ljallangan.",
    instructor: "Mirjalol",
    price: "$50.99",
    img: Teacher,
  },
  {
    title: "Yapon tili",
    description: "Bu kurs foydalanuvchilarning ehtiyojlarini, xulq-atvorini va motivatsiyalarini chuqur tushunishga qaratilgan.",
    instructor: "Umidjon",
    price: "$39.99",
    img: Teacher,
  },
  {
    title: "Fransus tili",
    description: "Bu kurs odatda barcha video ishlab chiqarish jarayonlarini o'z ichiga oladi.",
    instructor: "Naima",
    price: "$25.99",
    img: Teacher,
  },
  {
    title: "Nemis tili",
    description: "Bu kurs dasturlash bo'yicha hech qanday tajribaga ega bo'lmaganlar uchun mo'ljallangan.",
    instructor: "Abdulatif",
    price: "$45.99",
    img: Teacher,
  },
  {
    title: "Boshqa tillar",
    description: "Bu kurs dasturlash bo'yicha hech qanday tajribaga ega bo'lmaganlar uchun mo'ljallangan.",
    instructor: "Ali",
    price: "$45.99",
    img: Teacher,
  }
];

const HeroSection = () => {
  return (
    <section className="hero-section bg-light rounded">
      <div className="container py-5">
        <div className="row align-items-start">
          {/* Matnli kontent */}
          <div className="col-lg-6 col-md-12 mb-4">
            <div className="about">
              <h1 className="display-4">
                Siz <span className="text-primary">Bilib ol</span> orqali bilim bering va bilim oling
              </h1>
              <div className="accordion accordion-flush mt-4" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      <span>Ma'lumot uchun</span>
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p className="text-start">
                        <span className="fw-bold">1. O'qituvchi qidirish &mdash; </span>
                        O'quvchilar kerakli fan bo'yicha o'qituvchini qidirishlari va ular bilan muloqot qilishlari mumkin.
                      </p>
                      <p className="text-start">
                        <span className="fw-bold">2. Darslarni rejalashtirish &mdash; </span>
                        Foydalanuvchilar o'zlari uchun qulay vaqtni tanlab, darslarni rejalashtirishlari mumkin.
                      </p>
                      <p className="text-start">
                        <span className="fw-bold">3. Zoom orqali jonli darslar &mdash; </span>
                        Har bir dars Zoom platformasi orqali jonli ravishda o'tkaziladi.
                      </p>
                      <p className="text-start">
                        <span className="fw-bold">4. O'qituvchilar uchun profil yaratish &mdash; </span>
                        O'qituvchilar o'z fanlari, tajribalari va dars o'tish uslublari haqida to'liq ma'lumot beruvchi profil yaratishlari mumkin.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Karusel bo'limi */}
          <div className="col-lg-6 col-md-12 mb-4 mt-2">
            <div id="carouselExampleCards" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {courses.map((course, index) => (
                  <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                    <div className="card h-100 text-center mx-auto" style={{ width: '18rem' }}>
                      <img src={course.img} className="card-img-top img-fluid" style={{ height: '180px', objectFit: 'cover' }} alt={course.title} />
                      <div className="card-body">
                        <h5 className="card-title">{course.title}</h5>
                        <p className="card-text">{course.description}</p>
                        <p className="card-text"><strong>O'qituvchi:</strong> {course.instructor}</p>
                        <div className="card-footer d-flex justify-content-between align-items-center bg-white">
                          <a href="#" className="btn btn-primary me-5">Batafsil</a>
                          <p className="card-text mb-0"><strong>Narxi:</strong> {course.price}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCards"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCards"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" id="carousel" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          {/* Karusel bo'limi tugadi */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
