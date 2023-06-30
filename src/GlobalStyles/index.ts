import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: sans-serif;
  }
`

export const Container = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
`

export const Main = styled.main`
  padding: 40px;
  margin: 64px;
  background-color: #ccc;
  border-radius: 4px;
  overflow-y: auto;

  @media (max-width: 767px) {
    margin: 30px;
    padding: 8px;
    padding-bottom: 50px;
  }
`

export const Input = styled.input`
  padding: 8px 40px;
  display: block;
  border: none;
  border-radius: 8px;
  margin: 8px 0;
`

export const Button = styled.button`
  background-color: #000;
  color: #fff;
  cursor: pointer;
  padding: 8px;
  border: none;
  border-radius: 8px;
  margin-left: 8px;
  font-weight: bold;
`

export default EstiloGlobal
