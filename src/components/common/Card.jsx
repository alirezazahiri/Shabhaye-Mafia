import React, { useState } from "react";
import styled from "styled-components";

const Card = ({
  title,
  description,
  type,
  icon,
  p_name,
  have_status = false,
}) => {
  const color = type === "citizen" ? "#66DE93" : "#DA0037";
  const [value, setValue] = useState(null);

  const handleChange = (e) => {
    setValue(e.target.value);
    const text = e.target.value
    let all = JSON.parse(localStorage.getItem("s_p"));
    let current_player_status = JSON.parse(localStorage.getItem("s_p"))[p_name];
    current_player_status = text
    all[p_name] = current_player_status;
    localStorage.setItem('s_p', JSON.stringify(all))
  };

  const clearText = (e) => {
    let all = JSON.parse(localStorage.getItem("s_p"));
    let current_player_status = JSON.parse(localStorage.getItem("s_p"))[p_name];
    current_player_status = ""
    all[p_name] = current_player_status;
    localStorage.setItem('s_p', JSON.stringify(all))
    setValue("");
  }
  return (
    <Content
      className="grid items-center justify-center"
      style={{ border: `1px solid ${color}` }}
    >
      <div id="info-container">
        {!have_status && (
          <>
            <Icon style={{ color: color }}>
              <i className={icon + " fa-2x"} aria-hidden="true"></i>
            </Icon>{" "}
            <h1 className="text-xl font-bold mb-2" style={{ color: color }}>
              {title}
            </h1>
          </>
        )}
        <CardInfo>
          {have_status && (
            <>
              <PlayerName style={{ color: color }}>
                {p_name && p_name}
              </PlayerName>
              <Icon style={{ color: color }}>
                <i className={icon + " fa-2x"} aria-hidden="true"></i>
              </Icon>
              <h1 className="text-xl font-bold mb-2" style={{ color: color }}>
                {title}
              </h1>
            </>
          )}
        </CardInfo>
        {have_status ? (
          <StatContainer>
          <PlayerStatus
            style={{ color }}
            onChange={handleChange}
            value={JSON.parse(localStorage.getItem("s_p"))[p_name]}
          />
          <button className="btn btn-danger btn-sm" onClick={clearText}>Clear</button>
          </StatContainer>
        ) : (
          <p className="w-100 text-sm">{description}</p>
        )}
      </div>
    </Content>
  );
};

const Content = styled.div`
  margin: 30px;
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;
  backdrop-filter: blur(10px);
  border-radius: 15px;
  cursor: pointer;
  padding: 10px;
  display: flex;
  flex-direction: column;
  h1 {
    color: rgba(119, 172, 241, 0.5);
    text-align: center;
  }
  p {
    color: rgba(206, 229, 208, 0.9);
    text-align: center;
  }

  #info-container {
    width: 85%;
    font-family: "Cairo", "sans-serif";
  }
`;

const StatContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const Icon = styled.div`
  i {
    width: 40px;
    height: 40px;
  }
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  h1 {
    font-family: "Cairo", sans-serif;
  }

  p {
    font-family: "Cairo", sans-serif;
    letter-spacing: 1px;
  }
`;

const PlayerName = styled.h3`
  font-family: "Cairo", sans-serif;
  font-size: 20px;
`;

const PlayerStatus = styled.textarea`
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 60px;
  padding: 5px 10px;
  font-family: "Cairo", "sans-serif";
  border-radius: 6px;
`;

export default Card;
