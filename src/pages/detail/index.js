import ComponentDetail from './component-detail'
import { useLocation } from 'react-router-dom'

export default function Detail() {
  const location = useLocation()

  return <ComponentDetail data={location.state} />
}
