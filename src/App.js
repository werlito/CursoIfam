import logo from './logo.svg';
import './App.css';
import styled, {createGlobalStyle} from 'styled-components';
import image from './images/gumball.jpg'

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

`


const Container = styled.div `


`
const Caixa = styled.div `
  font-size: 20px;
  padding-left: 30px;
  padding-top: 30px;
  border-radius: 25px; 
  margin: 0 auto;
  margin-botton: 10px;
  width: 1000px;
  height: 250px;
  background-image: linear-gradient(to left, rgb(252, 217, 65), rgb(253, 245, 170));

`
const Caixafoto = styled.img `
float: right;
width: 150px;
height: 150px;
border-radius: 100%;
margin-top: -68px;
margin-right: 50px;
`

const ItemCard = ({titulo, descricao, image, alt}) =>{

  return (
    <Container>
    <Caixa>
        <h1>{titulo}</h1>
        <p>{descricao}</p>
        <Caixafoto src={image} alt= {alt}/>
    </Caixa>
  </Container>
  )
}
function App() {

  const ListaTarefa = [
    {
      titulo:"Gumball",
      descricao:"fundo amarelo",
      image:"https://www.petz.com.br/blog/wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg",
      alt:"gumball num fundo amarelo"
  
    },
    {
      titulo:"wes",
      descricao:"fundo amarelo",
      image:"https://www.petz.com.br/blog/wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg",
      alt:"wes num fundo amarelo"
  
    },
    {
      titulo:"isinha",
      descricao:"fundo amarelo",
      image:"https://www.petz.com.br/blog/wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg",
      alt:"isainha num fundo amarelo"
  
    },
    {
      titulo:"Gumball",
      descricao:"fundo amarelo",
      image:"https://www.petz.com.br/blog/wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg",
      alt:"gumball num fundo amarelo"
  
    },
    {
      titulo:"wes",
      descricao:"fundo amarelo",
      image:"https://www.petz.com.br/blog/wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg",
      alt:"wes num fundo amarelo"
  
    },
    {
      titulo:"isinha",
      descricao:"fundo amarelo",
      image:"https://www.petz.com.br/blog/wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg",
      alt:"isainha num fundo amarelo"
  
    }

  ]
  return (
    <div>
      <GlobalStyle/>
      
      {
        ListaTarefa.map((tarefa) => (
          <ItemCard {...tarefa}/>
        ))
      }
    </div>
  )
}

export default App;
