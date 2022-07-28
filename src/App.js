import logo from './logo.svg';
import './App.css';
import * as S from './style'
import {ItemCard} from './components/ItemCard'
import { useState } from 'react';

function App() {

  const [inputValue, setInputValue] = useState()
  const [listaTarefa, setListaTarefa] = useState([
    // {
    //   titulo:"isinha",
    //   descricao:"cookie gostozin",
    //   image:"https://www.guiadasemana.com.br/contentFiles/image/opt_w320h320/2020/12/FEA/66526_shutterstock-661622035.jpg",
    //   alt:"isainha num fundo amarelo"
    // }
  ])

  function handleChange (value) {
    setInputValue(value)
  }

  function handleClick(){
    if (inputValue === "") return

    const novaTarefa = {
      titulo:inputValue,
      descricao:"cookie gostozin",
      image:"https://www.guiadasemana.com.br/contentFiles/image/opt_w320h320/2020/12/FEA/66526_shutterstock-661622035.jpg",
      alt:"isainha num fundo amarelo"
    }

    setListaTarefa(prevState => [...prevState, novaTarefa])
    setInputValue("")

    console.log('clicou no botão')
  }


  return (
    <div>
      <S.GlobalStyle/>
      {listaTarefa.map((tarefa, index) => (
        <ItemCard key={index} {...tarefa}/>
      ))}
    
    <center>
      <input type="text" value={inputValue} onChange={(e)=> handleChange(e.target.value)}/>
      <button onClick={() => handleClick()}>add tarefa</button>
    </center>
    </div>
  )
}

export default App;
