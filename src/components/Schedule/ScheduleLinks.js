/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

const ScheduleLinks = ({ setDay , day}) => {
  return (
    <div className="links" css={styles}>
      <button className={day === 'Monday' ? 'active' : ''} onClick={() => setDay("Monday")}>
        Monday
      </button>
      <span>/</span>
      <button className={day === 'Tuesday' ? 'active' : ''} onClick={() => setDay("Tuesday")}>
        Tuesday
      </button>
      <span>/</span>
      <button className={day === 'Wednesday' ? 'active' : ''} onClick={() => setDay("Wednesday")}>
        Wednesday
      </button>
      <span>/</span>
      <button className={day === 'Thursday' ? 'active' : ''} onClick={() => setDay("Thursday")}>
        Thursday
      </button>
      <span>/</span>
      <button className={day === 'Friday' ? 'active' : ''} onClick={() => setDay("Friday")}>
        Friday
      </button>
    </div>
  );
};

const styles = css`
  padding: 40px 0 0 0;
  button {
    color: #fff;
    text-decoration: none;
    background: none;
    border: none;
    font-size: 20px;
    outline: none;
    cursor: pointer;
    &.active {
      color: #ed563b;
    }
  }
  span {
    color: #fff;
    padding: 0 16px;
  }
  @media(max-width: 640px) {
    button{
      font-size: 14px;
    }
  }
`;

export default ScheduleLinks;
