import React from 'react'
import styled, { keyframes } from 'styled-components'
import theme from '../../common/theme'

const Section = styled.div`
  width: 100%;
  height: 100%;
  background: ${theme.colors.white};
  padding: 10px;
  border-radius: 10px;
  box-sizing: border-box;
  margin-bottom: 0px;
`

const shimmerAnimation = keyframes`
  0% {
    background-position: -25rem 0;
  }
  100% {
    background-position: 25rem 0;
  }
`

const StyledDivShimmer = styled.div`
  animation-name: ${shimmerAnimation};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  background-color: ${theme.colors.shimmerPrimary};
  background-image: linear-gradient(
    125deg,
    ${() =>
      `${theme.colors.grey3} 5%, ${theme.colors.white2} 100%, ${theme.colors.grey3} 30%`}
  );
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-size: 50rem 10rem;
  margin-bottom: 10px;
  border-radius: ${(props) => props.borderRadius || '5px'};
`

const StyledWrapper = styled.div`
  height: auto;
  width: auto;
`

/**
 *
 * @param {Number} props.number
 * @returns <Comp />
 */
export default function Shimmer({ number }) {
  return (
    <React.Fragment>
      {[...Array(number).keys()].map((index) => (
        <Section key={String(index)}>
          <StyledWrapper>
            <StyledDivShimmer height="1rem" width="30%" />
            <StyledDivShimmer height="1rem" width="40%" />
            <StyledDivShimmer height="1rem" width="50%" />
          </StyledWrapper>
        </Section>
      ))}
    </React.Fragment>
  )
}
