import styled from 'styled-components'
import Label from '../label'
import theme from '../../common/theme'

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  background: ${theme.colors.white};
  padding: 10px;
  border-radius: 4px;
`

const Col = styled.div`
  width: auto;
`

const Text = styled.p`
  ${(props) => props}
`

/**
 *
 * @param {String} props.idTransaction
 * @param {String} props.status
 * @returns <Comp />
 */
export default function CardStatus({ idTransaction, status }) {
  return (
    <Container>
      <Col>
        <Text margin="0" fontWeight="600">
          ID TRANSAKSI: #{idTransaction}
        </Text>
      </Col>
      <Col>
        <Label status={status} />
      </Col>
    </Container>
  )
}
