/** @jsx jsx */
import { jsx, css, keyframes } from "@emotion/core";
import { ChevronDown } from "react-feather"; // Optional: install react-feather

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0); 
  }
  40% {
    transform: translateY(10px); 
  }
  60% {
    transform: translateY(5px); 
  }
`;

const ScrollPrompt = () => (
  <div css={styles}>
    <p>Scroll to explore</p>
    <ChevronDown size={24} />
  </div>
);

const styles = css`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: white;
  animation: ${bounce} 2s infinite;

  p {
    margin: 0;
    font-size: 0.9rem;
    font-weight: 500;
  }

  svg {
    margin-top: 5px;
  }
`;

export default ScrollPrompt;
