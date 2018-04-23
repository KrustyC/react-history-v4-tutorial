import styled from 'styled-components'

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.primaryColor};
`

const Message = styled.span`
  margin-top: 20px;
  font-size: 13px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.primaryColor};
  text-align: center;
`

const Title = styled.h3`
  color: ${({ theme }) => theme.darkGreyColor};
`

const Button = styled.button`
  margin-top: 15px;
`

export { Button, Form, Message, Title }
