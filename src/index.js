//React faz aqui o import do React DOM e cria o root onde vai ficar o componente principal da aplicação, e o que passamos como argumento para esse createRoot é algo que estamos acostumados, um seletor document.getElementByid, então alguém procurou um elemento com o id root em algum lugar e vamos descobrir daqui a pouco onde é. podemos falar que esse "index.js" é o que chamamos de bootstrap, o ponto de entrada. Esse é o primeiro arquivo que vai ser executado e que vai renderizar o primeiro componente e iniciar um movimento em cascata.



import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


