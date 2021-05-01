import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Text = styled.p`
  ${(props) => props}
`

export default function ResultNotFound() {
  return (
    <Container>
      <img
        src={require('../../assets/flip-logo.png').default}
        alt=""
        width="80px"
        height="80px"
      />
      <Text fontSize="16px">Keyword not found</Text>
    </Container>
  )
}
