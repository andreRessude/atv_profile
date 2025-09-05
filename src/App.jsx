import './App.css'
import image from './assets/profile.png'
import Profile from './components/Profile'

function App() {

  return (
    <>
      <Profile 
        image = {image}
        nome = "André Ressude"
        carrer = "Tecnico em Informática"
        phone = "+55 19 99503-1304"
        email = "ressude.andre@aluno.ifsp.edu.br" 
      />
    </>
  )
}

export default App
