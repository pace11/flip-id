import { Link } from 'react-router-dom'
import styled from 'styled-components'
import theme from '../../common/theme'
import Label from '../label'
import { currency, dateIndonesia } from '../../helpers'

const Container = styled(Link)`
  width: 100%;
  height: auto;
  background: #fff;
  border-radius: 4px;
  border-left: 4px solid ${(props) => StatusColor(props.status)};
  padding: 10px;
  text-decoration: none;
  color: ${theme.colors.grey};
  box-sizing: border-box;
`

const Row = styled.div`
  width: 100%;
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
 * @param {String} props.linkTo
 * @param {Object} props.items
 * @param {Number} props.amount
 * @param {String} props.beneficiaryBank
 * @param {String} props.beneficiaryName
 * @param {String} props.senderBank
 * @param {String} props.completedAt
 * @param {String} props.status
 * @returns <Comp />
 */
export default function Card({
  linkTo,
  items,
  amount,
  beneficiaryBank,
  beneficiaryName,
  senderBank,
  completedAt,
  status,
}) {
  return (
    <Container
      status={status}
      to={{
        pathname: linkTo,
        state: items,
      }}
    >
      <Row>
        <Col>
          <Text
            margin="0"
            fontSize="15px"
            textTransform="uppercase"
            fontWeight="700"
          >
            {beneficiaryBank} <i className="fas fa-long-arrow-alt-right"></i>{' '}
            {senderBank}
          </Text>
          <Text margin="0" fontSize="15px" textTransform="uppercase">
            {beneficiaryName}
          </Text>
          <Text margin="0" fontSize="15px" textTransform="capitalize">
            {currency(amount)} <i className="fas fa-circle"></i>{' '}
            {dateIndonesia(completedAt)}
          </Text>
        </Col>
        <Col>
          <Label status={status} />
        </Col>
      </Row>
    </Container>
  )
}
