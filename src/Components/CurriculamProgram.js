import React from "react";
const curriculamProgrames = [
  {
    stepNumber: "1",
    date: "24 May 2021",
    step: [
      {
        firstStepHeading: "Psychoanalytic Couple Theraphy",
        firstStepText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      },
    ],
  },
  {
    stepNumber: "2",
    date: "25 May 2021",
    step: [
      {
        firstStepHeading: "Head and Neck Couple Theraphy",
        firstStepText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      },
      {
        secondStepHeading: "Psychoanalytic Couple Theraphy",
        secondStepText:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      },
    ],
  },
];
const CurriculamProgram = () => {
  return (
    <>
      <div className="curriculam-section">
        <div className="curriculam-step">
          <p>
            Step<br></br>
            <span
              style={{
                fontWeight: "bold",
                color: "black",
                fontSize: "16px",
              }}
            >
              1
            </span>
            <br></br>24 May 2021<br></br>
            <a href="#">create appoinment</a>
          </p>
          <div className="about-curriculam-step">
            <div className="first-step">
              <h4>Psychoanalytic Couple Theraphy</h4>
              <span style={{ fontSize: "12px", color: "#858585" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurriculamProgram;
