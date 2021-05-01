import { Link } from 'react-router-dom'
import styled from 'styled-components'
import theme from '../../common/theme'
import Label from '../label'

const Container = styled(Link)`
  width: 100%;
  height: auto;
  background: #fff;
  border-radius: 4px;
  border-left: 4px solid ${(props) => StatusColor(props.status)};
  padding: 10px;
  text-decoration: none;
  color: ${theme.colors.grey};
`

const Row = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Col = styled.div`
  p:last-child {
    i {
      font-size: 7px;
    }
  }
`

const Text = styled.p`
  ${(props) => props}
`

const StatusColor = (status) => {
  const type = {
    pending: theme.colors.orange,
    success: theme.colors.green,
  }
  return type[status.toLowerCase()]
}

/**
 *
 * @param {String} props.beneficiaryBank
 * @param {String} props.beneficiaryName
 * @param {String} props.senderBank
 * @param {String} props.completedAt
 * @param {String} props.status
 * @returns <Comp />
 */
export default function Card({
  linkTo,
  beneficiaryBank,
  beneficiaryName,
  senderBank,
  completedAt,
  status,
}) {
  return (
    <Container status={status} to={linkTo}>
      <Row>
        <Col>
          <Text margin="0" textTransform="uppercase" fontWeight="700">
            {beneficiaryBank} <i className="fas fa-long-arrow-alt-right"></i>{' '}
            {senderBank}
          </Text>
          <Text margin="0" textTransform="uppercase">
            {beneficiaryName}
          </Text>
          <Text margin="0" textTransform="capitalize">
            Rp1.000.000 <i className="fas fa-circle"></i>{' '}
            {new Date(completedAt).toDateString()}
          </Text>
        </Col>
        <Col>
          <Label status={status} />
        </Col>
      </Row>
    </Container>
  )
}
