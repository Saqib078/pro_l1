import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Compone from './component/Compone'
import Home from './Home';
import Compsec from './component/Compsec';
import Compthird from './component/Compthird';
import Compfour from './component/Compfour';
import Compfive from './component/usecallback/Compfive';
import Compsix from './component/Compsix';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compone" element={<Compone />} />
          <Route path="/compsec" element={<Compsec />} />
          <Route path="/compthird" element={<Compthird />} />
          <Route path="/compfour" element={<Compfour />} />
          <Route path="/compfive" element={<Compfive />} />
          <Route path="/compsix" element={<Compsix />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
