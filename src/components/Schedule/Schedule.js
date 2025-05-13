/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState } from "react";

import Icon from "../GlobalComponents/Icon";
import scheduleBg from "../Image/scheduleBg.jpg";
import ScheduleLinks from "./ScheduleLinks";
import Table from "./Table";
import Container from "../GlobalComponents/Container";

// Dummy data for export - replace with actual schedule info if dynamic
const scheduleData = {
  Monday: ["Yoga - 8:00 AM", "Cardio - 10:00 AM", "Strength - 6:00 PM"],
  Tuesday: ["Pilates - 9:00 AM", "Crossfit - 12:00 PM", "Zumba - 5:00 PM"],
  // Add other days as needed
};

const Schedule = () => {
  const [hidden, setHidden] = useState(false);
  const [day, setDay] = useState("Monday");

  const handleDownload = () => {
    const text = `Schedule for ${day}:\n` + (scheduleData[day]?.join("\n") || "No classes available.");
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement("a");
    a.href = url;
    a.download = `${day}_Schedule.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section css={styles} className="schedule" id="schedule">
      <h2>
        CLASSES <span>SCHEDULE</span>
      </h2>
      <Icon />
      <p>
        Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra
        <br />
        ipsum dolor, ultricies fermentum massa consequat eu.
      </p>

      <div css={buttonGroupStyles}>
        <button css={buttonStyles} onClick={() => setHidden(!hidden)}>
          {hidden ? "Show Schedule" : "Hide Schedule"}
        </button>
        <button css={buttonStyles} onClick={handleDownload}>
          Download Schedule
        </button>
      </div>

      {!hidden && (
        <Container>
          <ScheduleLinks setDay={setDay} day={day} />
          <Table day={day} />
        </Container>
      )}
    </section>
  );
};

const styles = css`
  width: 100%;
  padding: 120px 0;
  min-height: 100vh;
  text-align: center;
  background: url('${scheduleBg}') no-repeat center/cover;

  h2 {
    color: #fff;
    font-weight: 900;
    font-size: 36px;
    letter-spacing: 1.3px;
    line-height: 1;
    span {
      color: #ed563b;
    }
  }

  p {
    color: #fff;
    font-size: 16px;
    line-height: 1.7;
    margin: 20px 0;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    p {
      padding: 0 30px;
      br {
        display: none;
      }
    }
    .container {
      max-width: 92%;
    }
  }
`;

const buttonStyles = css`
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  background: #ed563b;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #ff765b;
  }
`;

const buttonGroupStyles = css`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export default Schedule;
