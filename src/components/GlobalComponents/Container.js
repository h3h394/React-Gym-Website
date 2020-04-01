/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

const Container = ({ children }) => (
  <div className="container" css={styles}>
    {children}
  </div>
);

const styles = css`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;

  @media (max-width: 1225px) {
    max-width: 90%;
  }
`;

export default Container;
