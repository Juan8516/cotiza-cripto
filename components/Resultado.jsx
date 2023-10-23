import React from 'react'

const Resultado = ( {resultado} ) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado
  return (
    <div>
      <p>El precio es: <span>{PRICE}</span></p>
      <p>El precio mas alto del dia es: <span>{HIGHDAY}</span></p>
      <p>El precio mas bajo del dia es: <span>{LOWDAY}</span></p>
      <p>El precio ultimas 24HRS: <span>{CHANGEPCT24HOUR}</span></p>
      <p>Ultima actualizacion: <span>{LASTUPDATE}</span></p>
    </div>
  )
}

export default Resultado
