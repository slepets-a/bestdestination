import { Fragment } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "../configs/theme";
import Index from "../components/Index";

const GlobalStyle = createGlobalStyle`
html {
min-height: 100%;
}
    body {
      background: ${props =>
        props.theme.color
          .primary} url("static/featured-img.jpg") center/cover no-repeat fixed;
      font-family: ${props => props.theme.typography.font};
      margin: 0;
      min-height: 100%;
    }
    * {
      margin-top: 0 !important;
    }
    div {
      overflow: auto;
    }
`;

export default () => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <Index />
      <GlobalStyle />
    </Fragment>
  </ThemeProvider>
);
