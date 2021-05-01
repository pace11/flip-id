import styled from 'styled-components'
import theme from '../../common/theme'
import { ClipLoader } from 'react-spinners'

const Container = styled.div`
  position: relative;
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

const Spinner = styled.span`
  position: absolute;
  width: auto;
  height: auto;
  right: 0;
`

/**
 *
 * @param {String} props.title
 * @param {Boolean} props.isFetching
 * @param {Any} props.children
 * @returns <Comp />
 */
export default function Section({ title, isFetching, children }) {
  return (
    <Container>
      {isFetching && (
        <Spinner>
          <ClipLoader size="15px" color={theme.colors.orange} />
        </Spinner>
      )}
      <Title>{title}</Title>
      {children}
    </Container>
  )
}
