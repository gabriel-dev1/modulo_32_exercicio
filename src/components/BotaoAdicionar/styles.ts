import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Button = styled(Link)`
  background-color: steelblue;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  padding: 8px 32px;
  position: absolute;
  right: 660px;
  text-decoration: none;

  @media (max-width: 767px) {
    position: relative;
    left: 55px;
    top: 30px;
  }
`
