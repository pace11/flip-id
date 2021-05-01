import styled from 'styled-components'
import theme from '../common/theme'

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.blueCloud};
`

const Row = styled.div`
  width: 480px;
  height: 100vh;
  @media (max-width: 425px) {
    width: 100%;
  }
`

/**
 *
 * @param {Any} props.children
 * @returns <Comp />
 */
export default function Layout({ children }) {
  return (
    <Container>
      <Row>{children}</Row>
    </Container>
  )
}
