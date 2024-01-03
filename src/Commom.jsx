import React from 'react'
import { NavLink } from 'react-router-dom'

const Commom = (props) => {
    return (
        <>
            <section id='header' className='d-flex align-items-center'>
                <div className='container-fluid '>
                    <div className="row">
                        <div className='col-10 mx-auto'>
                            <div className="row">
                                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1'>
                                    <h1>{props.name} <strong className='brand-name'>VineetVerma</strong></h1>
                                    <h2 className='my-3 fw-lighter'>
                                        we are the team of talented devoloper making websites
                                    </h2>
                                    <div className='mt-2'>
                                        <NavLink to={props.visit} className='btn-get-started'>{props.btnName}</NavLink>
                                    </div>
                                </div>
                                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                                    <img src={props.imgsrc} className='img-fluid animated' alt="/" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Commom
