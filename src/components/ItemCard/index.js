import * as S from './style'

export const ItemCard = ({titulo, descricao, image, alt}) =>{

  return (
    <S.Container>
    <S.Caixa>
        <h1>{titulo}</h1>
        <p>{descricao}</p>
        <S.Caixafoto src={image} alt= {alt}/>
    </S.Caixa>
  </S.Container>
  )
}