import styled from 'styled-components'
import theme from '../../common/theme'

const Container = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 10px;
`

const Title = styled.p`
  font-size: 40px;
  font-weight: 300;
  margin: 20px 0;
  padding: 0;
  text-align: center;
  color: ${theme.colors.grey};
`

/**
 *
 * @param {String} props.title
 * @param {String, Any} props.children
 * @returns <Comp />
 */
export default function Section({ title, children }) {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  )
}
