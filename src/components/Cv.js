import ComponetNavbar from "./ComponetNavbar";
import Card from 'react-bootstrap/Card';
import Footer from './Footer';


const Cv = () => {

    return (
        <>
            <ComponetNavbar />
            <div style={{ background: 'hsla(9, 100%, 64%, 0.2)' }}>
                <div className="text-center">
                    <h2>Patricia Retamales Martinez</h2>
                    <p style={{ fontSize: '20px' }}> desarroladora full stack</p>
                    <br />
                </div>

                <div className="text-align" style={{ display:'flex' , justifyContent:'center' }} >
                    <Card border="primary" style={{ width: '25rem', background: 'rgba(255, 99, 71, 0.2)' , marginRight:'20px' }}>
                        <Card.Header>Perfil</Card.Header>
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                                Me considero una persona responsable, dinámica y creativa, con facilidad de adaptación y capacidad de trabajar en equipo y
                                autoaprendizaje con iniciativa para resolver problemas eficientemente.
                                Tengo como objetivo poner en practica todos los conocimientos adquiridos durante mi formación en 4Geeks y poder formar
                                parte de un equipo de trabajo que me permita desarrollarme personal y profesionalmente.

                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />



                    <Card border="secondary" style={{ width: '18rem', background: 'rgba(209, 145, 103, 0.6)' }}>
                        <Card.Header>Tecnologias y lenguajes de programacion </Card.Header>
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                                • HTML5          • BOOTSTRAP      •DOM          •GIT
                                •REACTBOOTSTRAP   •CSS            • PYTHON      •PIPENV
                                •PAQUETES NPM     • JAVASCRIPT    •SQLALCHEMY   • REACT
                                • GITHUB          • REST API      • FLASK       •SQL

                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />





                    <Card border="success" style={{ width: '18rem', background: 'rgba(204, 199, 224, 1)', marginLeft:'20px' }}>
                        <Card.Header>Idiomas</Card.Header>
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                                Ingles        basico
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />



                </div>
                <br />

                <div className="text-center">
                    <p class="curriculum">
                        <a href="file:///C:/Users/Administrator/Downloads/Patrica_Retamales_Resume_07-11-2022-18-09-02.pdf" title="Curriculum - Desarrollador full stack patricia retamales martinez"
                            target="_blank">
                            <i class="fas fa-arrow-alt-circle-down descargar"></i>
                            Descargar CV
                        </a>
                    </p>
                </div>

                <Footer />
            </div>
        </>
    );
}

export default Cv;