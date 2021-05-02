import styled from 'styled-components'
import theme from '../../common/theme'
import InputSearch from '../../components/input-search'
import Select from '../../components/select'

const Container = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 65% 35%;
  border: 1px solid ${theme.colors.grey3};
  background: ${theme.colors.white};
  border-radius: 4px;
  div:last-child {
    border-left: 1px solid ${theme.colors.grey3};
  }
`

export default function SearchSorting({
  onChangeInput,
  selectValue,
  selectActive,
}) {
  return (
    <Container>
      <InputSearch onChange={onChangeInput} />
      <Select
        active={selectActive}
        value={(val) => selectValue(val)}
        items={[
          { id: 'a-z', text: 'Nama A-Z' },
          { id: 'z-a', text: 'Nama Z-A' },
          { id: 'new-date', text: 'Tanggal Terbaru' },
          { id: 'old-date', text: 'Tanggal Terlama' },
        ]}
      />
    </Container>
  )
}
