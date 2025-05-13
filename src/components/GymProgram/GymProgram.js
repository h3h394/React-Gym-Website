/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState } from "react";

import Icon from "../GlobalComponents/Icon";
import GymTitle from "./GymTitle";
import GymSubtitle from "./GymSubtitle";
import GymProgramCard from "./GymProgramCard";
import Container from "../GlobalComponents/Container";

const GymProgram = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const programs = [
    {
      title: "Basic Fitness",
      desc: "General fitness training suitable for beginners.",
      category: "Fitness",
    },
    {
      title: "Advanced Muscle Course",
      desc: "Intensive muscle growth program.",
      category: "Muscle",
    },
    {
      title: "New Gym Training",
      desc: "Latest training techniques and routines.",
      category: "General",
    },
    {
      title: "Yoga Training",
      desc: "Relaxing and strength-building yoga sessions.",
      category: "Yoga",
    },
    {
      title: "Basic Muscle Course",
      desc: "Introductory course for muscle development.",
      category: "Muscle",
    },
    {
      title: "Body Building Course",
      desc: "Body transformation and competition prep.",
      category: "Muscle",
    },
  ];

  const filteredPrograms = selectedCategory === "All"
    ? programs
    : programs.filter(p => p.category === selectedCategory);

  return (
    <div css={styles} className="gymProgram">
      <GymTitle />
      <Icon />
      <GymSubtitle />

      <div className="filterBar">
        {["All", "Fitness", "Muscle", "Yoga", "General"].map((cat) => (
          <button
            key={cat}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <Container>
        {filteredPrograms.map((program, index) => (
          <GymProgramCard
            key={index}
            title={program.title}
            desc={program.desc}
          />
        ))}
      </Container>
    </div>
  );
};

const styles = css`
  width: 100%;
  min-height: 100vh;
  text-align: center;
  padding: 120px 0;

  .filterBar {
    margin-top: 20px;
    margin-bottom: 40px;
  }

  .filterBar button {
    background: #222;
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 5px;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.3s ease;
  }

  .filterBar button.active,
  .filterBar button:hover {
    background: #f13a11;
    color: white;
  }

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
