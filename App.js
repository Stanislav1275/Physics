import './App.css';
import {Header} from "./Components/Header/header";
import {Nav} from "./Components/Nav/nav";
import {Footer} from "./Components/Footer/footer";
import {Main} from "./Components/Main/main";
import {state} from '../src/state/state'
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import "../src/global.css"
import {Kinemath} from "./Components/Themese/kinemtaic/kinemathic";
import {Dynamics} from "./Components/Themese/dynamics/dynamics";
import {Mechanics} from "./Components/Themese/mechanics/mechanics";
import {Energypower} from "./Components/Themese/energypower/energypower";
import {Mkt} from "./Components/Themese/mkt/mkt";
import {Yadern} from "./Components/Themese/yadern/yadern";
import {Astro} from "./Components/Themese/astro/astro";
import s from "./Components/Main/main.module.css";
import tg from "./img/tg.svg";
import vk from "./img/vk.svg";
import {Help} from "./Components/Help/Help";

function App() {


    return (<Router>
    <div className="app">
      <Header></Header>
      <Nav
          themes = {state}
      >

      </Nav>
        <div className="main-wrapper">
            <div className="top"></div>
            <Routes>
                <Route path = '/main' element = {<Main/>}/>
                <Route path = '/kinemath' element = {<Kinemath/>}/>
                <Route path = '/dynamics' element = {<Dynamics/>}/>
                <Route path = '/mechanics' element = {<Mechanics/>}/>
                <Route path = '/energypower' element = {<Energypower/>}/>
                <Route path = '/mkt' element = {<Mkt/>}/>
                <Route path = '/yadern' element = {<Yadern/>}/>
                <Route path = '/astro' element = {<Astro/>}/>

            </Routes>
            <div className="bottom"></div>

        </div>
        <Help></Help>
      <Footer></Footer>
    </div>
    </Router>);
}

export default App;
