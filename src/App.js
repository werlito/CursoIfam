import logo from './logo.svg';
import './App.css';
import * as S from './style'
import {ItemCard} from './components/ItemCard'
import { useState } from 'react';

function App() {

  const [titulo, setTitulo] = useState("")
  const [descricao, setDescricao] = useState("")
  const [listaTarefa, setListaTarefa] = useState([
    // {
    //   titulo:"isinha",
    //   descricao:"cookie gostozin",
    //   image:"https://www.guiadasemana.com.br/contentFiles/image/opt_w320h320/2020/12/FEA/66526_shutterstock-661622035.jpg",
    //   alt:"isainha num fundo amarelo"
    // }
  ])

  function handleClick(){
    if (titulo === "" || descricao === "" )return
    
    const novaTarefa = {
      titulo:titulo,
      descricao:descricao,
      image:"https://www.guiadasemana.com.br/contentFiles/image/opt_w320h320/2020/12/FEA/66526_shutterstock-661622035.jpg",
      alt:"isainha num fundo amarelo"
    }

    setListaTarefa(prevState => [...prevState, novaTarefa])
    setTitulo("")
    setDescricao("")

    console.log('clicou no botão')
  }


  return (
    <div>
      <S.GlobalStyle/>
    
    <center>
      <input type="text" value={titulo} onChange={(e)=> setTitulo(e.target.value)} placeholder="adicionar titulo"/><br></br>
      <input type="text" value={descricao} onChange={(a)=> setDescricao(a.target.value)} placeholder="adicionar legenda"/><br></br>
      <button onClick={() => handleClick()}>add tarefa</button>
    </center>

    {listaTarefa.map((tarefa, index) => (
        <ItemCard key={index} {...tarefa}/>
      ))}
    </div>
  )
}

export default App;
