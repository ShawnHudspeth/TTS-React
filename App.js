import './App.js';
import Navbar from './Componets/Navbar';
import Movie from './Componets/Movie';
import Movies from './Componets/Movies';
function App() {
  return (
    <div className= "App">
      <Navbar />
      <div className= "content">
      <Movie />
        <h1>App Componet</h1>
      <Movies />
        </div>
    </div>
  )
}



export default App
