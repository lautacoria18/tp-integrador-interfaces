import React from 'react'
import '../Styles/Footer.css';
const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <hr />
        <p className="col-sm">
          &copy;{new Date().getFullYear()} {"Desarrollada por Lautaro Coria para la materia Construccion de Interfaces"}
       
           
        </p>
      </div>
    </div>
  )
}

export default Footer;
