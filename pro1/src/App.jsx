import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Compone from './component/Compone'
import Home from './Home';
import Compsec from './component/Compsec';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compone" element={<Compone />} />
          <Route path="/compsec" element={<Compsec />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
