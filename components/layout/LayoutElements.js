import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: ${(props) => props.textAlign};
  position: ${(props) => props.position};

  @media screen and (min-width: 768px) {
    padding: 0 2rem;
  }
`

export const Row = styled.div`
  text-align: ${(props) => props.textAlign};
  position: ${(props) => props.position};

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: ${(props) => props.flexDirection};
    justify-content: ${(props) => props.justifyContent};
    align-items: ${(props) => props.alignItems};
  }
`

export const Col = styled.div`
  text-align: ${(props) => props.textAlign};
  position: ${(props) => props.position};

  @media screen and (min-width: 768px) {
    flex: ${(props) => props.flex};
  }
`
