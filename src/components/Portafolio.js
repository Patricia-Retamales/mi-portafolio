import ComponetNavbar from "./ComponetNavbar";
import Footer from "./Footer";
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';

const Portafolio = () => {

    return (
        <>
            <ComponetNavbar />

            <div style={{background:'hsla(9, 100%, 64%, 0.4)'}}>
            <br />
            <br />
                <div className="text-align" style={{ display: 'flex', justifyContent: 'center' , }}  >
                    <CardGroup style={{ width: '80%'  }}>
                        <Card style={{ marginRight: '30px', marginLeft: '60px' ,border:'3px solid black', borderRadius:'6px'}} >
                            <Card.Img variant="top" src="https://scontent.fscl17-1.fna.fbcdn.net/v/t39.30808-6/315261803_10230096519665284_5851284521489203021_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=Fy-F89IVoToAX_N-OfD&_nc_ht=scontent.fscl17-1.fna&oh=00_AfAtiJgM2pWT8weIp_AlxG4kTDfe0Ax-dFMLDprJ7hcqqg&oe=6372AD8B"

                            />
                            <Card.Body>
                                <Card.Title>De todo un poco</Card.Title>
                                <Card.Text>
                                    lenguajes que se utilizaron 
                                    reac , css , PYTHON 
                                </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card style={{border:'3px solid black', borderRadius:'6px'}}>
                            <Card.Img variant="top" src="https://scontent.fscl17-1.fna.fbcdn.net/v/t39.30808-6/314725472_10230096495144671_7347447096126294269_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=wCwRcMAeagcAX8gwiWZ&_nc_ht=scontent.fscl17-1.fna&oh=00_AfA5VcAnL062xt7h-NgriQN_31QBaofaSonPem8Q-QOfmQ&oe=63737778" />
                            <Card.Body>
                                <Card.Title>block de starward</Card.Title>
                                <Card.Text>
                                    lenguajes que se utilizaron 
                                    react , css , JAVASCRIPT
                                </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card style={{ marginLeft: '30px', border:'3px solid black', borderRadius:'6px' }}>
                            <Card.Img variant="top" src="https://scontent.fscl17-1.fna.fbcdn.net/v/t39.30808-6/315290951_10230096493664634_7927729672382662446_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=ulJkOjDc5zEAX86ssFG&_nc_ht=scontent.fscl17-1.fna&oh=00_AfDqLwMa11sMhZSGJnZ9xt0iuMmTmAmcoBK2KkVLqLpIFA&oe=63738094" />
                            <Card.Body>
                                <Card.Title>Landing-Page-con-React</Card.Title>
                                <Card.Text>
                                lenguajes que se utilizaron 
                                    react , css , JAVASCRIPT
                                </Card.Text>
                            </Card.Body>

                        </Card>

                    </CardGroup>
                </div>

                <br />
                <br />
                <br />
                <br />

                <div className="text-align" style={{ display: 'flex', justifyContent: 'center' }} >

                    <CardGroup style={{ width: '80%' }}>
                        <Card style={{ marginRight: '30px', marginLeft: '70px' , border:'3px solid black', borderRadius:'6px'}}>
                            <Card.Img variant="top" src="https://scontent.fscl17-1.fna.fbcdn.net/v/t39.30808-6/315249562_10230096493344626_3647934832980954969_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=50Uw8vK8jn4AX9aakEx&_nc_ht=scontent.fscl17-1.fna&oh=00_AfDtOW-shs_bnhGo7b2vuVzsEs-pkcxZ_JjGycG4wCklBg&oe=6372E1E1" />
                            <Card.Body>
                                <Card.Title>contador simple </Card.Title>
                                <Card.Text>
                                lenguajes que se utilizaron 
                                    react , css , JAVASCRIPT
                                </Card.Text>
                            </Card.Body>

                        </Card>

                        <Card style={{border:'3px solid black', borderRadius:'6px'}}>
                            <Card.Img variant="top" src="https://scontent.fscl17-1.fna.fbcdn.net/v/t39.30808-6/315251111_10230096652188597_8356526240996885647_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=WtRC8X-C-hgAX8S62cn&tn=3mI2qUms6FYzhjPx&_nc_ht=scontent.fscl17-1.fna&oh=00_AfCg75jeqnOWwbvwi49WPqjLfonSi7GGC0ybaJMZuVbIqA&oe=637246A3" />
                            <Card.Body>
                                <Card.Title>profile card</Card.Title>
                                <Card.Text>
                                    
                                lenguajes que se utilizaron 
                                   HTML5 ,CSS , JAVASCRIPT
                                </Card.Text>
                            </Card.Body>

                        </Card>

                        <Card style={{ marginLeft: '30px', border:'3px solid black', borderRadius:'6px' }}  >
                            <Card.Img variant="top" src="https://scontent.fscl17-1.fna.fbcdn.net/v/t39.30808-6/315309727_10230096655508680_4195123634282086042_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=hG-MAyVmWi4AX_TKFrA&tn=3mI2qUms6FYzhjPx&_nc_ht=scontent.fscl17-1.fna&oh=00_AfBa5PCIzPogchSyjX28fg7kF6pAQ1JTFue4EU5QT5HMFA&oe=63739C92" />
                            <Card.Body>
                                <Card.Title>instagram </Card.Title>
                                <Card.Text>
                                lenguajes que se utilizaron 
                                   HTML5 ,CSS y bootstrap
                                </Card.Text>
                            </Card.Body>

                        </Card>
                    </CardGroup>

                </div>


                <br />
                <br />
                <br />
                <br />


                <div className="text-align" style={{ display: 'flex', justifyContent: 'center' }} >

                    <CardGroup style={{ width: '80%' }}>
                        <Card style={{ marginRight: '30px', marginLeft: '70px',border:'3px solid black', borderRadius:'6px' }}>
                            <Card.Img variant="top" src="https://scontent.fscl17-1.fna.fbcdn.net/v/t39.30808-6/315362410_10230096654948666_5909788457404721490_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=IOEtxTh3MokAX9O1wE_&tn=3mI2qUms6FYzhjPx&_nc_ht=scontent.fscl17-1.fna&oh=00_AfAINEedQqRU4UTWZbkpMvUH3PpkN6KGPpBOc6HU5115uA&oe=6372AD59" />
                            <Card.Body>
                                <Card.Title>generador de perfil</Card.Title>
                                <Card.Text>
                                lenguajes que se utilizaron 
                                   HTML5 ,CSS , JAVASCRIPT
                                </Card.Text>
                            </Card.Body>

                        </Card>

                        <Card style={{border:'3px solid black', borderRadius:'6px'}}>
                            <Card.Img variant="top" src="https://scontent.fscl17-1.fna.fbcdn.net/v/t39.30808-6/315162419_10230096651708585_6803045374157553390_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=mrdSTs4mZpoAX8mp32j&_nc_ht=scontent.fscl17-1.fna&oh=00_AfAh16TRGGKyHnE7f3va8mnFJczW5C0w7okXPF_9mqD0kw&oe=637290E1" />
                            <Card.Body>
                                <Card.Title>semaforo</Card.Title>
                                <Card.Text>
                                lenguajes que se utilizaron 
                                    react , css , JAVASCRIPT
                                </Card.Text>
                            </Card.Body>

                        </Card>

                        <Card style={{ marginLeft: '30px', border:'3px solid black', borderRadius:'6px' }}>
                            <Card.Img variant="top" src="https://scontent.fscl17-1.fna.fbcdn.net/v/t39.30808-6/315223721_10230096712870114_6382455491733289185_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=M-FF95rOd9QAX9ges7y&_nc_ht=scontent.fscl17-1.fna&oh=00_AfCBHwbrh5Va4qg6D101lBL0A-LKBc8kaJk_Bgq01NIrew&oe=6373400F" />
                            <Card.Body>
                                <Card.Title>instagram</Card.Title>
                                <Card.Text>
                                lenguajes que se utilizaron 
                                   HTML5 ,CSS 
                                </Card.Text>
                            </Card.Body>

                        </Card>
                    </CardGroup>

                </div>



                <br />
                <br />
                <br />
                <Footer />
            </div>
        </>
    );
}

export default Portafolio;