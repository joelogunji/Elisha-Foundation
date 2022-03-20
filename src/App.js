import NavBar from "./Components/NavBar/NavBar"
import GlobalStyle from "./GlobalStyle";
import Home from "./Components/Home/Home"
import Contact from "./Components/Contact/Contact"
import Services from "./Components/Services/Services"
import Blog from "./Components/Blog/Blog"

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
    <Router>
    <GlobalStyle/>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/serve' element={<Services/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
