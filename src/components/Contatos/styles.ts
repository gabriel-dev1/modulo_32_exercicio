import styled from 'styled-components'
import { Button } from '../../GlobalStyles'

export const Card = styled.div`
  background-color: gray;
  color: #fff;
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
`

export const Paragraph = styled.p`
  font-weight: 600;
  font-size: 16px;
  margin: 12px 0;
`

export const Span = styled.span`
  padding: 8px 0;
  font-weight: bold;
  font-size: 18px;
`

export const RemoveButton = styled(Button)`
  background-color: red;
`

export const SaveButton = styled(Button)`
  background-color: green;
`

export const Actions = styled.div`
  padding-top: 16px;
  border-radius: 0 0 8px 8px;
  border-top: 1px solid #000;
`
