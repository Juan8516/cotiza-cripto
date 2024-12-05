import { useEffect, useState } from 'react'
import { monedas } from '../data/monedas'
import styled from '@emotion/styled'
import  Error from './Error'
import useSelectMonedas from '../hooks/useSelectMonedas'


const InputSubmit = styled.input`
    background-color: #ff9800;
    border: none;
    width: 100%;
    padding: 10px;
    color:#FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;
    margin-bottom: 30px;
    &:hover {
        background-color: #e68a00;
        cursor: pointer;
    }
`
const Formulario = ( {setMonedas} ) => {

  const [criptos, setCriptos] = useState([])
  const [error, setError] = useState(false)

  const [ moneda, SelectMonedas ] = useSelectMonedas('Elige tu Moneda', monedas)
  const [ criptomonedas, SelectCriptomonedas ] = useSelectMonedas('Elige tu Criptomoneda', criptos)

  useEffect(() => {
    const consultarApi = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()

        const arrayCriptos = resultado.Data.map( cripto => {
            const objeto = {
              id: cripto.CoinInfo.Name,
              nombre: cripto.CoinInfo.FullName
            }
            return objeto
        })

        setCriptos(arrayCriptos)
    }
    consultarApi()
  }, [])

  const handleSubmit = e => {
    e.preventDefault()

    if([moneda, criptomonedas].includes('')) {
      setError(true)

      return
    }
    setError(false)
    setMonedas({
      moneda,
      criptomonedas
    })
  }

  return (
    <>
        <form
          onSubmit={handleSubmit}
        >
            <SelectMonedas />
            <SelectCriptomonedas />
            
            <InputSubmit 
                type="submit" 
                value='Cotizar'
            />
            {error && <Error>Los campos son obligatorios</Error>}
        </form>
    </>
  )
}

export default Formulario
