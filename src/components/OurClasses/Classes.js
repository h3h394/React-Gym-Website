/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState } from "react";
import Icon from "../GlobalComponents/Icon";
import LinksContainer from "./LinksContainer";
import Results from "./Results";
import Container from "../GlobalComponents/Container";

// Dummy descriptions for each class
const classDescriptions = {
  FirstClass: "This is the beginner class focused on foundational strength and cardio.",
  SecondClass: "Advanced class with HIIT routines and intensive strength circuits.",
  ThirdClass: "Yoga-based class for flexibility, mental calm, and body balance.",
};

const Classes = ({ text }) => {
  const [training, setTraining] = useState("FirstClass");
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return (
    <section css={styles} className="ourClasses" id="ourClasses">
      <h2>
        OUR <span>CLASSES</span>
      </h2>
      <Icon />
      <p>
        Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra
        <br />
        ipsum dolor, ultricies fermentum massa consequat eu.
      </p>
      <Container>
        <LinksContainer
          setTraining={(classType) => {
            setTraining(classType);
            handleModalOpen();
          }}
          training={training}
        />
        <Results training={training} />
      </Container>

      {/* Modal */}
      {modalOpen && (
        <div css={modalStyles}>
          <div className="modal-content">
            <h3>{training}</h3>
            <p>{classDescriptions[training]}</p>
            <button onClick={handleModalClose}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

const styles = css`
  width: 100%;
  padding: 100px 0;
  text-align: center;
  h2 {
    color: #232d39;
    font-size: 26px;
    font-weight: 900;
    line-height: 1;
    span {
      color: #ed563b;
    }
  }
  p {
    color: #7a7a7a;
    font-size: 15px;
    line-height: 1.7;
  }
  .container {
    display: flex;
    justify-content: space-between;
    padding: 80px 0 0 0;
  }
  @media (max-width: 900px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
  @media (max-width: 580px) {
    p {
      padding: 0 20px;
      br {
        display: none;
      }
    }
  }
  @media (min-width: 901px) and (max-width: 1226px) {
    .container {
      justify-content: space-between;
      max-width: 90%;
    }
  }
`;

const modalStyles = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  .modal-content {
    background: white;
    padding: 30px;
    border-radius: 10px;
    width: 90%;
    max-width: 400px;
    text-align: center;
  }

  button {
    margin-top: 20px;
    background-color: #ed563b;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    cursor: pointer;
  }
`;

export default Classes;
