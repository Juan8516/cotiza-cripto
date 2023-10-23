import React from 'react'
import styled from '@emotion/styled'

const Contenedor = styled.div`
    color: #fff;
    font-family: 'Lato', sans-serif;

    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`

const Imagen = styled.img`
    display: block;
    width: 120px;
`

const Texto = styled.p`
    font-size: 18px;
    text-align: start;
    span {
        font-weight: 400;
        font-size: medium;
        color: #D4AF37;
    }
`

const Precio = styled.p`
    font-size: 24px;
    span {
        font-weight: 700;
        color: #D4AF37;
    }
`

const Resultado = ( {resultado} ) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado
  return (
    <Contenedor>
        <Imagen 
            src={`https://www.cryptocompare.com/${IMAGEURL}`} 
            alt='imagen cripto'
        />
        <div>
            <Precio>El precio es: <span>{PRICE}</span></Precio>
            <Texto>El precio + alto del dia: <span>{HIGHDAY}</span></Texto>
            <Texto>El precio + bajo del dia: <span>{LOWDAY}</span></Texto>
            <Texto>Variacion ultimas 24HRS: <span>${CHANGEPCT24HOUR}</span></Texto>
            <Texto>Ultima actualizacion: <span>{LASTUPDATE}</span></Texto>
        </div>
    </Contenedor>
  )
}

export default Resultado
