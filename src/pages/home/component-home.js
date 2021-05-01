import styled from 'styled-components'
import Section from '../../components/section'
import Card from '../../components/card'
import Shimmer from '../../components/shimmer'
import ErrorPage from './error-page'
import ResultNotFound from './result-not-found'
import SearchSorting from './search-sorting'

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
  margin-bottom: 15px;
`

const ListTransaction = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(min-content, max-content);
  grid-gap: 10px;
  margin: 20px 0;
  height: calc(100vh - 280px);
  overflow-y: scroll;
`

/**
 *
 * @param {Object} props.data
 * @param {Boolean} props.isSuccess
 * @param {Boolean} props.isFetching
 * @param {Boolean} props.isError
 * @param {Function} props.onChangeInput
 * @param {Function} props.selectValue
 * @param {String} props.selectActive
 * @returns <Comp />
 */
export default function ComponentHome({
  data,
  isSuccess,
  isFetching,
  isError,
  onChangeInput,
  selectValue,
  selectActive,
}) {
  if (isError) {
    return <ErrorPage />
  }
  return (
    <Section title="Daftar Transaksi" isFetching={isFetching}>
      <Description>
        <h2>Halo Kak!</h2>
        <p>
          Kamu telah melakukan transaksi sebesar <span>Rp5.000.000</span> sejak
          menggunakan Flip.
        </p>
      </Description>
      <SearchSorting
        onChangeInput={onChangeInput}
        selectValue={selectValue}
        selectActive={selectActive}
      />
      <ListTransaction>
        {isFetching && <Shimmer number={3} />}
        {isSuccess && data.length > 0 ? (
          data.map((item, idx) => (
            <Card
              key={String(idx)}
              linkTo={`/detail/${item.id}`}
              items={item}
              amount={item.amount}
              status={item.status}
              beneficiaryBank={item.beneficiary_bank}
              beneficiaryName={item.beneficiary_name}
              senderBank={item.sender_bank}
              completedAt={item.completed_at}
            />
          ))
        ) : (
          <ResultNotFound />
        )}
      </ListTransaction>
    </Section>
  )
}
