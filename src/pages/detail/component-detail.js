import Section from '../../components/section'
import CardStatus from '../../components/card-status'
import CardDetail from '../../components/card-detail'
import Button from '../../components/button'

export default function ComponentDetail({ data }) {
  return (
    <Section title="Detail Transaksi">
      <CardStatus
        idTransaction={data && data.id}
        status={data && data.status}
      />
      <CardDetail
        amount={data && data.amount}
        uniqueCode={data && data.unique_code}
        senderBank={data && data.sender_bank}
        accountNumber={data && data.account_number}
        beneficiaryName={data && data.beneficiary_name}
        beneficiaryBank={data && data.beneficiary_bank}
        remark={data && data.remark}
        createdAt={data && data.created_at}
      />
      <Button linkTo={`/`}>Kembali</Button>
    </Section>
  )
}
