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
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  margin: 20px 0;
`

export default function ComponentHome() {
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
        <Card
          linkTo="/detail"
          status="SUCCESS"
          beneficiaryBank="bca"
          beneficiaryName="Michael"
          senderBank="bni"
          completedAt="2021-04-30 23:43:20"
        />
        <Card
          linkTo="/detail"
          status="PENDING"
          beneficiaryBank="muamalat"
          beneficiaryName="Tom Cruise"
          senderBank="bni"
          completedAt="2021-04-30 23:43:20"
        />
      </ListTransaction>
    </Section>
  )
}
