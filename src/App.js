import './App.css';
import { useState } from 'react';

function App() {

  const [cep, setCep] = useState()
  const [endereco,setEndereco] = useState({})
  console.log(cep)
  console.log(endereco)
  
function manipularEndereco(){
  if(cep && cep.length ===8){
    //obter o endereco
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(resposta => resposta.json())
      .then(dados =>{
        setEndereco({
          cep: dados.cep,
          rua: dados.logradouro,
          bairro: dados.bairro,
          cidade: dados.localidade,
          estado: dados.uf

        })
      })
  }
}

  return (
    <div className="App">
      <header className="App-header">
      <h1>Buscador de endereços</h1>
      <input type='number' value={cep} onChange={(e)=>setCep(e.target.value)} placeholder='Digite seu cep'/>
      <button onClick={manipularEndereco}>Buscar</button>
      
        {endereco.cep && (<ul> 

          <li>Cep: {endereco.cep}</li>
          <li>Rua: {endereco.rua}</li>
          <li>Bairro: {endereco.bairro}</li>
          <li>Cidade: {endereco.cidade}</li>
          <li>Estado: {endereco.estado}</li>
        
        </ul>)}
      </header>
    </div>
  );
}

export default App;
