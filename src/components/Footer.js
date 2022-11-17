import React from 'react';
import {FaGithub ,FaLinkedinIn ,FaMobileAlt ,FaEnvelope} from "react-icons/fa";

const Footer = () => {
    return (



        <footer className="footer mt-auto py-1 " style={{ displey: "flex", justifyContent: "flex-end", color: 'white' }}>



            <div className="footer row p-2 bg- " style={{ background: "black", border: "##9b9b9b 5px solid", }}>

                <div className=" col-lg-2" style={{ marginLeft: '5%'  ,display:'flex',justifyContent:'flex-end' , flexDirection:'column' }}>
                    <h6 className="h6"> Redes Sociales </h6>
                    <div className="mb-2">
                        <ul>

                            <a href='https://www.linkedin.com/in/patricia-fernanda-retamales-martinez-413805203/' title='desarrolladora full stack' >
                                <i aria-hidden="true" style={{ fontSize: '20px' }} ><FaLinkedinIn /></i>
                            </a>
                            <p style={{ fontFamily: 'cursive' }}>Linkedin</p>
                        </ul>
                    </div>
                    <ul>

                        <a href='https://github.com/patty258012' title='desarrolladora full stack' >
                            <i aria-hidden="true" style={{ fontSize: '2opx' }} > <FaGithub /></i>
                        </a>
                        <p style={{ fontFamily: 'cursive' }}>Github</p>
                    </ul>
                </div>



                <div className=" col-lg-2 " style={{ marginLeft: '50%', fontSize: '13px', display:'flex',justifyContent:'flex-start' , flexDirection:'column' }}>
                    <h5 className="h6 mb-2" style={{ fontFamily: 'cursive' }}> Contacto </h5>
                    <div className="mb-2">

                        <i style={{ fontSize: '20px', fontFamily: 'cursive' }}>< FaMobileAlt /></i>
                        <p style={{ fontFamily: 'cursive' }}>+56930332559</p>

                        <i style={{ fontSize: '15px', fontFamily: 'cursive' }}><FaEnvelope />
                            <p style={{ fontFamily: 'cursive' }}>retamalespatricia01@gmail.com</p>
                        </i>

                    </div>


                </div>

                <div className='text-white text-center col-xs-1 pt-2' style={{displey:'flex', justifyContent:'center', aliegnItems:'center'}}>
                    <p className="" style={{ fontSize: '10px', fontFamily: 'cursive' }}>
                        Patricia Retamales Martinez - desarrolladora full stack
                    </p>
                    <p className="" style={{ fontSize: '10px', fontFamily: 'cursive' }}>
                        Todos los derechos reservados © 2022
                    </p>

                </div>


            </div>

        </footer>


    );
}
export default Footer;