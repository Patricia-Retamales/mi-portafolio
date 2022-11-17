import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

import NavDropdown from 'react-bootstrap/NavDropdown';

const ComponetNavbar = () => {
    return (





        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>

                <Navbar.Brand href="#home">
                    <img style={{ borderRadius: '100px' }}
                        alt=""
                        src="https://i0.wp.com/logaligroup.com/wp-content/uploads/2019/11/32.png?resize=900%2C900&ssl=1"
                        width="70"
                        height="70"

                        classNameNameName="d-inline-block align-top"
                    />{' '}

                </Navbar.Brand>

                <div style={{ displey: "flex", justyContent: 'flex-end' }}>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav classNameNameName="me-auto" >
                            <Link to='/'>
                                <Nav.Link href="#home">Inicio</Nav.Link>
                            </Link>
                            <Link to='/cv'>
                            <Nav.Link href="#features">Sobre mi</Nav.Link>
                            </Link>
                            
                            <Link to='/portafolio'>
                            <Nav.Link href="#pricing">Portafolio</Nav.Link>
                            </Link>
                            
                            <Link to='/contacto'>
                            <Nav.Link href="#pricing">Contacto</Nav.Link>
                            </Link>
                         
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>




        // <Navbar bg="dark" variant="dark">
        //     <Container>
        //         <Navbar.Brand href="#home">
        //             <img style={{borderRadius:'100px'}}
        //                 alt=""
        //                 src="https://i0.wp.com/logaligroup.com/wp-content/uploads/2019/11/32.png?resize=900%2C900&ssl=1"
        //                 width="70"
        //                 height="70"

        //                 classNameNameName="d-inline-block align-top"
        //             />{' '}

        //         </Navbar.Brand>
        //         <div style={{ displey:"flex", justyContent:'flex-end'}}> 
        //             <Nav classNameNameName="me-auto" >
        //                 <Nav.Link href="#home">Inicio</Nav.Link>
        //                 <Nav.Link href="#features">Sobre mi</Nav.Link>
        //                 <Nav.Link href="#pricing">Portafolio</Nav.Link>
        //                 <Nav.Link href="#pricing">Contacto</Nav.Link>
        //             </Nav>
        //         </div>
        //     </Container>
        // </Navbar>


    );
}
export default ComponetNavbar;