import './App.css';
import Contador from './components/Contador';
import Saludo from './components/saludo';

function App() {
  
  return (
    <>
    
    <Saludo name={prompt("¿What's your name?")}/>
    <Contador/>
    </>
  );
}

export default App;
