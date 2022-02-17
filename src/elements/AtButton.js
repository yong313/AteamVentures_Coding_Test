import React from "react";
import styled from "styled-components";

const AtButton = (props) => {
  const {
    position,
    width,
    height,
    text,
    _onClick,
    margin,
    bg,
    size,
    color,
    radius,
    display,
    padding,
    category,
  } = props;

  const styles = {
    position: position,
    width: width,
    height: height,
    margin: margin,
    padding: padding,
    bg: bg,
    color: color,
    size: size,
    radius: radius,
    display: display,
    category: category,
  };

  return (
    <BtnBasic {...styles} onClick={_onClick}>
      {text}
    </BtnBasic>
  );
};

AtButton.defaultProps = {
  position: false,
  width: "100%",
  height: "false",
  margin: "",
  padding: "",
  bg: false,
  color: "#555",
  size: "1rem",
  radius: "",
  display: "",
  _onClick: () => {},
  _onChange: () => {},
  _disabled: () => {},
};

const BtnBasic = styled.button`
  font-family: "KOTRAHOPE";
  position: ${(props) => props.position};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border: none;
  cursor: pointer;
  ${(props) => (props.radius ? `border-radius: ${props.radius};` : "")};
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")};
  ${(props) => (props.color ? `color: ${props.color};` : "")};
  ${(props) => (props.size ? `font-size: ${props.size};` : "")};
  ${(props) => (props.display ? `display: ${props.display};` : "")};
  ${(props) => (props.border ? `border: ${props.border};` : "")};
`;

export default AtButton;
