import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";


const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 0.5;
  margin-top: -125px;
  text-align: center;
  color: white;
  strong {
    font-size: 1.25em;
  }
  div {
   

    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;

    .main {
      font-size: 50px;
    }

    .sub {
      font-size: 27px;
      letter-spacing: 2px;
    }
  }
`;

const titlemsg = () => {
  return (
    <MyTitleMessage>
      <div className="titleMessage">
        <div className="heading">
          <div className="main text-center mb-3">
            Hi, I am
            <br />
            <span>
              <strong>Ninu V.V</strong>
            </span>
          </div>
          <div className="sub">
            <Typewriter
              options={{
                strings: ["MERN stack Developer", "Learner"],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </div>
        </div>
      </div>

    </MyTitleMessage>
  );
};

export default titlemsg;
