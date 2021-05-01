import { useLocation } from 'react-router-dom'
import Section from '../../components/section'
import CardStatus from '../../components/card-status'
import CardDetail from '../../components/card-detail'
import Button from '../../components/button'

export default function Detail() {
  const location = useLocation()

  return (
    <Section title="Detail Transaksi">
      <CardStatus
        idTransaction={location.state && location.state.id}
        status={location.state && location.state.status}
      />
      <CardDetail
        amount={location.state && location.state.amount}
        uniqueCode={location.state && location.state.unique_code}
        senderBank={location.state && location.state.sender_bank}
        accountNumber={location.state && location.state.account_number}
        beneficiaryName={location.state && location.state.beneficiary_name}
        beneficiaryBank={location.state && location.state.beneficiary_bank}
        remark={location.state && location.state.remark}
        createdAt={location.state && location.state.created_at}
      />
      <Button linkTo={`/`}>Kembali</Button>
    </Section>
  )
}
