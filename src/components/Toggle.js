import React from "react";
import styled from "styled-components";

const Toggle = () => {
  const [toggle, setToggle] = React.useState(false);

  return (
    <ToggleContainer>
      <ToggleSwitch
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <ToggleBgColor bgColor={toggle}></ToggleBgColor>
        <ToggleBtn position={toggle} bgColor={toggle}></ToggleBtn>
      </ToggleSwitch>
    </ToggleContainer>
  );
};

const ToggleContainer = styled.div`
  width: auto;
`;

const ToggleSwitch = styled.div`
  width: 34px;
  height: 14px;
  background-color: #c2c2c2;
  border-radius: 20px;
  margin: 0 auto;
  position: relative;
  overflow: visible;
`;

const ToggleBgColor = styled.div`
  height: 100%;
  display: inline-block;
  background-color: #bbdefb;
  border-radius: 20px;
  ${(props) => (props.bgColor ? "width: 34px" : "width: 0")};
`;

const ToggleBtn = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.24);
  ${(props) => (!props.position ? "left: -3px" : "left: 17px")};
  ${(props) => (props.bgColor ? "background: #2196F3" : "background: #f5f5f5")};
  transition: all 0.25s ease-out;
`;

export default Toggle;
