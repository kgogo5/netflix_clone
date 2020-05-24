import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Footer = styled.footer`
  padding: 50px 30px;
  background-color: #999;
`;
const Inner = styled.div`
  color: #333;
`;
const Slink = styled(Link)`
  color: #333;
`;

export default withRouter(() => (
  <Footer>
    <>
      <Inner>내용</Inner>
      <Slink to="/">Home</Slink>
    </>
  </Footer>
));
