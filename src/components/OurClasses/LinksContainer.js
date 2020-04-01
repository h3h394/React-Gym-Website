/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import DumbbellBg from "../Image/dumbbellOrange.png";
import Button from "../GlobalComponents/Button";

const LinksContainer = ({ setTraining, training }) => (
  <div css={styles} className="linksContainer">
    <button
      className={training === "FirstClass" ? "active" : ""}
      onClick={() => setTraining("FirstClass")}
    >
      <img src={DumbbellBg} alt="dumbbell" /> First Training Class
    </button>
    <button
      className={training === "SecondClass" ? "active" : ""}
      onClick={() => setTraining("SecondClass")}
    >
      <img src={DumbbellBg} alt="dumbbell" /> Second Training Class
    </button>
    <button
      className={training === "ThirdClass" ? "active" : ""}
      onClick={() => setTraining("ThirdClass")}
    >
      <img src={DumbbellBg} alt="dumbbell" /> Third Training Class
    </button>
    <button
      className={training === "FourthClass" ? "active" : ""}
      onClick={() => setTraining("FourthClass")}
    >
      <img src={DumbbellBg} alt="dumbbell" /> Fourth Training Class
    </button>
    <Button text="View All Schedules" />
  </div>
);

const styles = css`
  width: 100%;
  max-width: 33%;
  display: flex;
  flex-direction: column;
  button {
    width: 100%;
    padding: 28px 36px;
    color: #232d39;
    font-weight: 500;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    margin-bottom: 36px;
    border: none;
    outline: none;
    font-size: 20px;
    &.active {
      color: #ed563b;
    }
    img {
      margin-right: 20px;
    }
  }
  .btn {
    padding: 24px 0;
    border-radius: 4px;
  }
  @media (max-width: 900px) {
    max-width: 590px;
  }
  @media (min-width: 901px) and (max-width: 1226px) {
    max-width: 280px;
  }
`;

export default LinksContainer;
