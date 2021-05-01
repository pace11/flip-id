import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  padding: 5px 0;
  i {
    position: absolute;
    left: 7px;
    top: 10px;
  }
`

const Input = styled.input`
  width: 100%;
  height: 25px;
  box-sizing: border-box;
  padding-left: 35px;
  border: none;
  outline: none;
  background: none;
`

/**
 *
 * @param {Any} props.otherProps
 * @returns <Comp />
 */
export default function InputSearch({ ...otherProps }) {
  return (
    <Container>
      <Input placeholder="Cari nama atau bank" {...otherProps} />
      <i className="fas fa-search"></i>
    </Container>
  )
}
