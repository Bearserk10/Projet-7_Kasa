import { Routes, Route, HashRouter } from "react-router-dom"
import House from "./pages/House/House"
import About from "./pages/About/About"
import HouseDetails from "./pages/HouseDetails/HouseDetails"
import Error from "./pages/Error/Error"
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer"
import "./App.module.css"


function App() {
  return(
    <HashRouter>
      <Header/>
      <Routes>
        <Route path="/" element={ <House/> } />
        <Route path="/HouseDetails/:id" element={ <HouseDetails/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="*" element={ <Error/> } />
      </Routes>
      <Footer/>
    </HashRouter>
  )
}

export default App;
