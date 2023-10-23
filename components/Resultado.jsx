import React from 'react'
import styled from '@emotion/styled'

const Contenedor = styled.div`
    color: #fff;
    font-family: 'Lato', sans-serif;
    text-align: center;

`

const Texto = styled.p`
    font-size: 18px;
    text-align: start;
    span {
        font-weight: 700;
        color: #D4AF37;
    }
`

const Precio = styled.p`
    font-size: 30px;
    span {
        font-weight: 700;
        color: #D4AF37;
    }
`


const Resultado = ( {resultado} ) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado
  return (
    <Contenedor>
      <Precio>El precio es: <span>{PRICE}</span></Precio>
      <Texto>El precio mas alto del dia es: <span>{HIGHDAY}</span></Texto>
      <Texto>El precio mas bajo del dia es: <span>{LOWDAY}</span></Texto>
      <Texto>El precio ultimas 24HRS: <span>{CHANGEPCT24HOUR}</span></Texto>
      <Texto>Ultima actualizacion: <span>{LASTUPDATE}</span></Texto>
    </Contenedor>
  )
}

export default Resultado
