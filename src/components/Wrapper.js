import React from 'react'
import styled from 'styled-components'
import grass from '../img/grass.jpg';

const Content = styled.div`
  position: relative;

  &:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 150px;
      width: 100%;
      background-image: url(${grass});
      background-color: #446b25;
      z-index: 0;
    }
`

const StyledWrapper = styled.div`
  position: relative;
  z-index: 1;
  background-color: #FFFFFF;
  box-shadow: 0 2px 9px rgba(0, 0, 0, 0.25);
  width: 75%;
  margin: 0 auto;
  padding: 1.5em 2.5em;
  border-radius: 5px;
`

export default function Wrapper({ children }) {
  return (
    <Content>
      <StyledWrapper>
        { children }
      </StyledWrapper>
    </Content>
  )
}
