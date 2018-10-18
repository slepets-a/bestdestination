import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${props => props.theme.color.warning};
  font-size: 9px;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.container.maxWidth};
  text-align: center;
`;

const Footer = () => (
  <Wrapper>
    <Container>
      © {new Date().getFullYear()} Best-Destination. All rights reserved
    </Container>
  </Wrapper>
);

export default Footer;
