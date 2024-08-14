import './App.css'
import NavBar from './components/NavBar'
import Principal from './components/principal'
import Proposito  from './components/Proposito'
import Slider from './components/Slider'
import Sobre from './components/Sobre'
import ParaVoce from './components/ParaVoce'
import Footer from './components/Footer'
import Perguntas from './components/Perguntas'

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Principal/>
      <Proposito/>
      <Sobre/>
      <Slider/>
      <ParaVoce/>
      <Perguntas/>
      <Footer/>
    </div> 
  )
}

export default App
