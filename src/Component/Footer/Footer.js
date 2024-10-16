import React, { Component } from 'react';
import { SiBrandfolder } from "react-icons/si";
import TextAnimation from '../TextAnimation/TextAnimation';
import './Footer.css'

export class Footer extends Component {
  render() {
    return (
      <div className='footer bg-light p-4 text-center'>
        <h5 className="navbar-brand text-primary fw-bold">
          <span><SiBrandfolder size={42} /></span> Bilib ol
        </h5>
        <small className='d-block mb-3 text-muted'>© 2024 Ali Sayfiddinov</small>
      </div>
    )
  }
}

export default Footer;
