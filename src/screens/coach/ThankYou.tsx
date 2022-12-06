import React, { useContext, useState, useEffect } from 'react';
import LogoMain from '../assets/img/logo.svg';

function ThankYou() {
    
    return (
        <div className="vh-100">
    <div className="row mx-0">
        <div className="col col-12 col-lg-6 main-limg"></div>
        <div className="col col-12 col-lg-6 d-flex justify-content-center alert">
            <div className="container my-auto mx-md-5">
                <div className="row">
                    <div className="col col-12 mb-4 text-start"><img src={LogoMain} /></div>
                    <div className="col col-12">
                        <p className="f-color f-h mb-0 text-start">Thank you for your email!</p>
                        <p className="text-black-50 l-size mb-0 text-start">We will get back to you within 48 hours</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        );
    }
  
              export default ThankYou;