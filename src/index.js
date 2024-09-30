import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => {
  const numeroParaAdivinhar = Math.floor(Math.random() * 100) + 1;

  const manipularPalpite = () => {
    const palpite = parseInt(document.getElementById('entradaPalpite').value);
    const elementoMensagem = document.getElementById('mensagem');
    if (isNaN(palpite)){
      elementoMensagem.innerText = 'Insira um numero!'
    } else if (palpite < 1 || palpite > 100) {
      elementoMensagem.innerText = 'Por favor, digite um número entre 1 e 100.';
    } else if (palpite === numeroParaAdivinhar) {
      elementoMensagem.innerText = 'Parabéns! Você adivinhou o número!';
    } else if (palpite < numeroParaAdivinhar) {
      elementoMensagem.innerText = 'Tente um número maior!';
    } else {
      elementoMensagem.innerText = 'Tente um número menor!';
    }
    document.getElementById('entradaPalpite').value = ''; 
  };

  return (
    <div className='container'>
      <h1>Adivinhe o Número!</h1>
      <input 
        type="number" 
        id="entradaPalpite" 
        placeholder="Digite um número entre 1 e 100" 
      />
      <button onClick={manipularPalpite}>Adivinhar</button>
      <p id="mensagem"></p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
