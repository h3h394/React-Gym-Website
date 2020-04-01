/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

const Link = ({ name, linkTo }) => (
  <a css={styles} href={linkTo}>
    {name}
  </a>
);

const styles = css`
  text-decoration: none;
  display: inline-block;
  font-size: 13px;
  font-weight: 400;
  color: #fff;
  transition: color 600ms ease-in-out;
  &:first-of-type,
  &:hover {
    color: #ed563b;
  }
  @media (max-width: 1000px) {
    padding: 14px 0;
    width: 100%;
    font-size: 18px;
  }
`;

export default Link;
