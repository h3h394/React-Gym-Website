/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

const GymTitle = () => (
  <h2 css={styles}>
    CHOOSE <span>PROGRAM</span>
  </h2>
);

const styles = css`
  color: #232d39;
  font-size: 26px;
  font-weight: 900;
  line-height: 1;
  span {
    color: #ed563b;
  }
`;

export default GymTitle;
