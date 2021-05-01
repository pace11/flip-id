import styled from 'styled-components'
import Button from '../../components/button'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Text = styled.p`
  ${(props) => props}
`

export default function ErrorPage() {
  return (
    <Container>
      <img
        src={require('../../assets/flip-logo.png').default}
        alt=""
        width="80px"
        height="80px"
      />
      <Text fontSize="16px">Something Error</Text>
      <Button to={`#`} onClick={() => window.location.reload()}>
        Refresh
      </Button>
    </Container>
  )
}
