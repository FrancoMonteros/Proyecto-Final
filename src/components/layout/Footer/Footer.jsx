import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from "../../../assets/img/logo/Imagen1.png";

//importamos font
import "./footer.css"


const Footer = () => {
    return (


        // <Container fluid  >
        //     <Row className="row bg-dark align-items-center">
        //         <Col className=" text-center" xs={12} md={6} lg={4}>
        //             <img src={logo} alt="logo" width="200" />
        //         </Col>
        //         <Col className=" text-center" xs={12} md={6} lg={4}>
        //             <div className='"d-flex justify-content-between"'>
        //                 <div>
        //                     <h5 className="mb-3 text-white font-weight-bolder mt-3">Nuestras redes Sociales</h5>
        //                     <a href="https://www.facebook.com/login/"
        //                         className=" redes fa-brands fa-facebook text-decoration-none text-center mx-2 mt-2"
        //                         target="_blank"></a>
        //                     <a href="https://www.whatsapp.com/"
        //                         className="fa-brands fa-whatsapp redes text-center text-decoration-none mx-2 mt-2"
        //                         target="_blank"></a>
        //                     <a href="https://twitter.com/i/flow/login"
        //                         className="fa-brands fa-twitter redes text-center text-decoration-none mx-2 mt-2"
        //                         target="_blank"></a>
        //                 </div>
        //                 <div>
        //                     <a href="tel:+549-3813368181"
        //                         className="fa-solid fa-phone redes text-center text-decoration-none mx-2 mt-2" target="_blank"></a>
        //                     <a href="https://www.youtube.com/"
        //                         className="fa-brands fa-youtube redes text-center text-decoration-none mx-2 mt-2"
        //                         target="_blank"></a>
        //                     <a href="https://www.instagram.com/accounts/login/?"
        //                         className="fa-brands fa-instagram redes text-center text-decoration-none mx-2 mt-2"
        //                         target="_blank"></a>
        //                     <div className='mt-3 justify-content-end'>
        //                         <img src="/src/assets/dataFiscal.png" alt="logo" width="50" />
        //                     </div>
        //                 </div>

        //             </div>
        //             <p className="mt-4 text-white font-weight-bolder border-bottom-2">Copyrigth 2022 © TODOS LOS DERECHOS
        //                 RESERVADOS <span className="text-info">Las Fuerzas Especiales Ginyu</span> </p>
        //         </Col>
        //         <Col className="text-center" xs={12} md={6} lg={4}>
        //             <p className="text-white text-center mt-2 mb-2">Los precios cotizados pueden variar sin previo aviso y no
        //                 incluyen IVA - Factura A.
        //                 Todas las imágenes y descripciones comerciales no son contractuales. Las descripciones de todos
        //                 los productos y
        //                 condiciones se encuentran sujetas a modificaciones sin previo aviso, pueden contener errores o
        //                 pueden no contener
        //                 todos los datos descriptivos. A los fines de obtener un asesoramiento completo e integral
        //                 deberán concurrir al
        //                 local.
        //             </p>

        //             <Col className="text-center">
        //                 <a href="/404.html" className="text-center">Terminos y Condiciones</a>
        //             </Col>
        //         </Col>
        //     </Row>
        // </Container>
        <Container fluid>

            <Row className="row bg-dark align-items-center">
                <Col>
                    <Col className=" text-center" xs={12} md={6} lg={4}>
                        <img src={logo} alt="logo" width="200" />
                    </Col>
                </Col>
                <Col className='d-flex align-items-center flex-wrap justify-content-center' xs={12} md={6} lg={3}>
                    <div className='d-flex align-items-center flex-wrap justify-content-center'>
                        <Link className="nav-link text-warning" to="/">Home</Link>
                        <Link className="nav-link text-warning mx-2" to="/contacto">Contact</Link>
                        <Link className="nav-link text-warning" to="/favoritos">Favorites</Link>
                        <Link className="nav-link text-warning mx-2" to="/q">Featured</Link>
                    </div>
                </Col>
                <Col xs={12} md={6} lg={3} >
                    <h5 className="mb-3 text-white font-weight-bolder mt-3">Our social medias</h5>
                    <div className='d-flex flex-wrap justify-content-center align-items-center'>
                        <a href="https://www.facebook.com/login/" className=" redes fa-brands fa-facebook text-decoration-none text-center mx-2 mt-2" target="_blank"></a>
                        <a href="https://www.whatsapp.com/" className="fa-brands fa-whatsapp redes text-center text-decoration-none mx-2 mt-2" target="_blank"></a>
                        <a href="https://twitter.com/i/flow/login" className="fa-brands fa-twitter redes text-center text-decoration-none mx-2 mt-2" target="_blank"></a>
                        <a href="https://www.instagram.com/accounts/login/?" className="fa-brands fa-instagram redes text-center text-decoration-none mx-2 mt-2" target="_blank"></a>
                    </div>
                </Col>
                <Col xs={12} md={6} lg={3} className="my-auto">
                    <Image className='my-3' src={fiscal} alt="fiscal" width="100" />
                </Col>
                <Row className='text-center d-none d-md-block' >
                    <small className="text-white text-center mt-2 mb-2">Quoted prices may vary without prior notice and do not include VAT - Invoice A. All images and commercial descriptions are not contractual. Descriptions of all products and conditions are subject to change without notice, may contain errors, or may not contain all descriptive data. In order to obtain complete and comprehensive advice, they must attend the premises. <Link to='/terminos' className="text-center">Terms and Conditions</Link></small>
                    <p><small className="mt-2 text-white font-weight-bolder border-bottom-2">Copyrigth 2022 © All rights reserved<span className="text-info"> Ginyu force</span></small></p>
                </Row>
            </Row>
        </Container>




    )
}

export default Footer