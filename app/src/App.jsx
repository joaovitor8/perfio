import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from "./components/Header"
import { Home } from "./pages/Home"
import { Sobre } from "./pages/Sobre"
import { Projetos } from "./pages/Projetos"
import { Footer } from "./components/Footer"
import "./App.css"
import { Perfio } from './perfio/Perfio'


export default function App() {
  return (
    <div className="App">
      {/* <Router>
        <Header></Header>
              
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/sobre' element={<Sobre/>} />
          <Route path='/projetos' element={<Projetos/>} />
        </Routes>

        <Footer />
      </Router> */}

      <Perfio />
    </div>
  )
}
