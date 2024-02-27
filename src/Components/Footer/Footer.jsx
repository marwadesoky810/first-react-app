import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div className='Footer text-center text-white'>
    <div className='FooterUp'>
        <div className='container'>
            <div className='CardGroup'>
                <div className='Card'>
                    <div className='CardBody'>
                        <h3>LOCATION</h3>
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>
                </div>
                <div className='Card'>
                    <div className='CardBody'>
                        <h3>AROUND THE WEB</h3>
                        <div className='FooterUpIcons'>
                        <i class="fa-brands fa-facebook me-2"></i>
                        <i class="fa-brands fa-twitter me-2"></i>
                        <i class="fa-brands fa-linkedin me-2"></i>
                        <i class="fa-solid  fa-globe me-2"></i>
                        </div>
                    </div>
                </div>
                <div className='Card'>
                    <div className='CardBody'>
                        <h3>ABOUT FREELANCER</h3>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <p className='FooterDown'>Copyright © Your Website 2021</p>
</div>
  )
}
