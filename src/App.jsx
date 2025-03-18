import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Button from "./Button"
import Effect from "./Effect"

function App() {

  return (
    <>
    
  <BrowserRouter>
  
  
  <Routes>


<Route path="/home" element={<Home />}/>
<Route path="/about" element={<About />}/>
<Route path="/contact" element={<Contact />}/>
<Route path="/button" element={<Button />}/>
<Route path="/effect" element={<Effect/>}/>




  </Routes>
  </BrowserRouter>
      
    </>
  )
}

export default App
