import { Fragment } from "react";
import Head from "next/head";
import styled from "styled-components";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.container.maxWidth};
`;

const Index = () => (
  <Fragment>
    <Head>
      <title>The Best City Guides - The Best Rates in Travel</title>
    </Head>
    <Wrapper>
      <Header />
      <Main />
    </Wrapper>
    <Footer />
  </Fragment>
);

export default Index;
