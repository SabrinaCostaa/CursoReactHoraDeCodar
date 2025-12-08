import './App.css';
import HelloWorld from './components/HelloWord';

function App() {

  const name = "Sabrina";
  const newName = name.toUpperCase();
  const url = 'https://via.placeholder.com/150'

  function sum(a,b){
    return a+b;
  }

  return (
    <div className="App">
      <h2>Alternado JSX</h2>
      <p>Olá {name}!</p>
      <p>Olá {newName}!</p>
      <p>Soma : {sum(1,2)}</p>
      <img src = {url} alt = "Minha Imagem" />
      <HelloWorld/>
    </div>
  );
}

export default App;
