import './App.css';
import NavbarComponent from './components/NavbarComponent';
import Home from './containers/Home';
import About from './containers/About';
import Projects from './containers/Projects';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Marko from './containers/Marko';

function App() {

  // const [selectMarko, setSelectMarko] = useState(false)

  return (
    <>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/marko" element={<Marko />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
