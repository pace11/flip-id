import styled from 'styled-components'
import Section from '../../components/section'
import Card from '../../components/card'

const Description = styled.div`
  h2,
  p {
    margin: 0;
  }
  p {
    span {
      color: rgb(253, 101, 66);
      font-weight: 700;
    }
  }
`

const ListTransaction = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  margin: 20px 0;
  height: calc(100vh - 210px);
  overflow-y: scroll;
`

/**
 *
 * @param {Object, Array} props.data
 * @returns <Comp />
 */
export default function ComponentHome({ data, isSuccess, isLoading }) {
  return (
    <Section title="Daftar Transaksi">
      <Description>
        <h2>Halo Kak!</h2>
        <p>
          Kamu telah melakukan transaksi sebesar <span>Rp5.000.000</span> sejak
          menggunakan Flip.
        </p>
      </Description>
      <ListTransaction>
        {isLoading && <p>Loading ...</p>}
        {isSuccess &&
          Object.entries(data)?.map((item, idx) => (
            <Card
              key={String(idx)}
              linkTo={`/detail/${item[1].id}`}
              items={item[1]}
              amount={item[1].amount}
              status={item[1].status}
              beneficiaryBank={item[1].beneficiary_bank}
              beneficiaryName={item[1].beneficiary_name}
              senderBank={item[1].sender_bank}
              completedAt={item[1].completed_at}
            />
          ))}
      </ListTransaction>
    </Section>
  )
}
