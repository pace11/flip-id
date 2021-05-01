import ComponentHome from './component-home'
import { useQuery } from 'react-query'
import { getTransactions } from '../../api'

export default function Home() {
  const { data, isError, isLoading, isFetching, isSuccess } = useQuery(
    'transactions',
    getTransactions,
  )

  return (
    <ComponentHome data={data} isSuccess={isSuccess} isLoading={isLoading} />
  )
}
