import React from "react";
import styled from "styled-components";

import "./basic.css";
import Header from "./Header";

const Wrapper = styled.div`
  /* max-width: 1340px;
  margin: 0 auto;
  padding: 60px 40px;
  @media (min-width: 650px) {
    padding: 60px 100px;
  } */
`;

const Layout = ({ children }) => (
  <Wrapper>
    <Header />
    {children}
  </Wrapper>
);

export default Layout;
