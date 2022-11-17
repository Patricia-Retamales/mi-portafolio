import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import injectContext from './store/AppContext';
import Portafolio from "./components/Portafolio";
import Cv from "./components/Cv";
import Contacto from './components/Contacto';

const App = () =>{

    return(

<BrowserRouter>
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cv" element={ < Cv/>} />
    <Route path="/portafolio" element={< Portafolio />} />
    <Route path="/contacto" element={<Contacto/>}/>
</Routes>
</BrowserRouter>
    );
}
export default injectContext(App);
