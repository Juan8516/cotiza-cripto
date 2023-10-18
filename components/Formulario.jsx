import { useState } from 'react'
import { monedas } from '../data/monedas'
import useSelectMonedas from '../hooks/useSelectMonedas'
import styled from '@emotion/styled'

const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color:#FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .2s ease;
    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }
`

const Formulario = () => {



  const [ SelectMonedas ] = useSelectMonedas('Elige tu Moneda', monedas)

  return (

    <form>

        <SelectMonedas />

        <InputSubmit 
            type="submit" 
            value='Cotizar'
        />
    </form>
  )
}

export default Formulario
