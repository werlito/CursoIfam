import logo from './logo.svg';
import './App.css';
import styled, {createGlobalStyle} from 'styled-components';

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


function App() {
  return (
    <div>
      <GlobalStyle/>
      <Container>
        <Caixa>
            <h1>sitezin</h1>
            <p>site bala</p>
            <Caixafoto src="tile.jpg" alt="gumball num fundo amarelo"/>
        </Caixa>
      </Container>
    </div>
  )
}

export default App;
