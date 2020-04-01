/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

const Socials = () => (
  <div css={styles} className="socials">
    <i className="fab fa-facebook-f"></i>
    <i className="fab fa-twitter"></i>
    <i className="fab fa-linkedin-in"></i>
    <i className="fab fa-behance"></i>
  </div>
);

const styles = css`
  display: flex;
  align-items: center;
  i {
    margin-right: 18px;
    transition: color 600ms ease-in-out;
    cursor: pointer;
    &:hover {
      color: #ed563b;
    }
  }
`;

export default Socials;
