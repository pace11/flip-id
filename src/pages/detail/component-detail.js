import Section from '../../components/section'
import CardStatus from '../../components/card-status'
import CardDetail from '../../components/card-detail'
import Button from '../../components/button'

export default function ComponentDetail() {
  return (
    <Section title="Detail Transaksi">
      <CardStatus idTransaction="FT23967" status="SUCCESS" />
      <CardDetail
        amount={1751366}
        uniqueCode={246}
        senderBank="bni"
        accountNumber="5637896854"
        beneficiaryName="Shanice Harwood"
        beneficiaryBank="mandiri"
        remark="sample remark"
        createdAt="2021-05-01 15:16:09"
      />
      <Button linkTo={`/`}>Kembali</Button>
    </Section>
  )
}
