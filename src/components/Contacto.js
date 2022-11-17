import ComponetNavbar from "./ComponetNavbar";
import Footer from "./Footer";
import { FaMobileAlt, FaEnvelope, FaGithub, FaLinkedinIn, FaFacebook, FaInstagram } from "react-icons/fa";

const Contacto = () => {

    return (
        <>
            <ComponetNavbar />

            <div style={{backgroun:'hsla(250, 90%, 16%, 0.3)'}}>
                <div style={{ displey: 'flex', justifyContent: 'space-between' }}>
                    <img src="https://www.traveltoursplus.com/wp-content/uploads/2021/06/contact-us-concept-illustration_114360-2299.jpg"
                        alt="mi escritorio"
                        width='50%'
                        height='60%'
                        zIndex='-2'




                    >
                    </img>

                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSapWhpBlAn8f8Op6CoIRmk6tZIsVWmNWlj2sHpSnMj6tI11lYWZTyFfURfo-e6czFDSBQ&usqp=CAU"
                        alt="mi escritorio"
                        width='50%'
                        height='60%'
                        zIndex='-2'




                    >
                    </img>
                </div>

                <div style={{ position: 'absolute', top: '40%', width: '100%', textAlign: 'center', fontSize: '18px',  }}>
                    <h4 style={{ fontFamily: 'cursive', fontSize: '30px' }}>Contacto</h4>
                    <br />
                    <br />

                    <ul >

                        <a href='https://www.linkedin.com/in/patricia-fernanda-retamales-martinez-413805203/' title='desarrolladora full stack' >
                            <i aria-hidden="true" style={{ fontSize: '20px' }} ><FaLinkedinIn /></i>
                        </a>
                        <p style={{ fontFamily: 'cursive', color: 'hsl(292, 30%, 70%)' }}>Linkedin</p>
                    </ul>

                    <ul>

                        <a href='https://github.com/patty258012' title='desarrolladora full stack' >
                            <i aria-hidden="true" style={{ fontSize: '2opx' }} > <FaGithub /></i>
                        </a>
                        <p style={{ fontFamily: 'cursive', color: 'hsl(292, 30%, 70%)' }}>Github</p>
                    </ul>

                    <ul>

                        <a href='https://www.facebook.com/patricia.retamalesm/' title='desarrolladora full stack' >
                            <i aria-hidden="true" style={{ fontSize: '2opx' }} > <FaFacebook /></i>
                        </a>
                        <p style={{ fontFamily: 'cursive', color: 'hsl(292, 30%, 70%)' }}>Facebook</p>
                    </ul>

                    <ul>

                        <a href='https://www.instagram.com/___pathys___/' title='desarrolladora full stack' >
                            <i aria-hidden="true" style={{ fontSize: '2opx' }} > <FaInstagram /></i>
                        </a>
                        <p style={{ fontFamily: 'cursive', color: 'hsl(292, 30%, 70%)' }}>Instagram</p>
                    </ul>

                    <i style={{ fontSize: '20px', fontFamily: 'cursive' }}>< FaMobileAlt /></i>
                    <p style={{ fontFamily: 'cursive', color: 'hsl(292, 30%, 70%)' }}>+56930332559</p>

                    <i style={{ fontSize: '15px', fontFamily: 'cursive' }}><FaEnvelope />
                        <p style={{ fontFamily: 'cursive', color: 'hsl(292, 30%, 70%)' }}>retamalespatricia01@gmail.com</p>
                    </i>

                </div>

                <br />
                <br />
                <br />
                <br />
                <Footer />
            </div>
        </>
    );
}

export default Contacto;