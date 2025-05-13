/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import Nav from "../Navbar/Nav";
import Video from "./Video";
import Overlay from "./Overlay";
import Info from "./Info";
import ScrollPrompt from "./ScrollPrompt"; // ← Import here

const Main = () => (
  <section css={styles} className="main" id="home">
    <Overlay />
    <Nav />
    <Info />
    <Video />
    <ScrollPrompt /> {/* ← Add here */}
  </section>
);

const styles = css`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

export default Main;
