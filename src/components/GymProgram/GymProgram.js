/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Icon from "../GlobalComponents/Icon";
import GymTitle from "./GymTitle";
import GymSubtitle from "./GymSubtitle";
import GymProgramCard from "./GymProgramCard";
import Container from "../GlobalComponents/Container";

const GymProgram = () => (
  <div css={styles} className="gymProgram">
    <GymTitle />
    <Icon />
    <GymSubtitle />
    <Container>
      <GymProgramCard
        title="Basic Fitness"
        desc="Please do not re-distribute this template ZIP file on any template collection website. This is not allowed."
      />
      <GymProgramCard
        title="Advanced Muscle Course"
        desc="You may want to browse through Digital Marketing or Corporate HTML CSS templates on our website."
      />
      <GymProgramCard
        title="New Gym Training"
        desc="If you wish to support TemplateMo website via PayPal, please feel free to contact us. We appreciate it a lot."
      />
      <GymProgramCard
        title="Yoga Training"
        desc="This template is built on Bootstrap v4.3.1 framework. It is easy to adapt the columns and sections."
      />
      <GymProgramCard
        title="Basic Muscle Course"
        desc="Credit goes to Pexels website for images and video background used in this HTML template."
      />
      <GymProgramCard
        title="Body Building Course"
        desc="Suspendisse fringilla et nisi et mattis. Curabitur sed finibus nisi. Integer nibh sapien, vehicula et auctor."
      />
    </Container>
  </div>
);

const styles = css`
  width: 100%;
  min-height: 100vh;
  text-align: center;
  padding: 120px 0;
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 40px 0;
  }
  @media (max-width: 700px) {
    .container {
      flex-direction: column;
      justify-content: flex-start;
    }
  }
  @media (min-width: 701px) and (max-width: 1100px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default GymProgram;
