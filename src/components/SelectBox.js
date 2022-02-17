import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { ReactComponent as ArrowDown } from "../static/icons/arrow_drop_down.svg";

const SelectBox = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("");

  const wrapperRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = (event) => {
    if (wrapperRef && !wrapperRef.current.contains(event.target)) {
      setIsActive(false);
    }
  };

  return (
    <DropDown ref={wrapperRef}>
      <DropDownBtn
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        가공방식 {selected} <ArrowDown fill="#939FA5" className="ArrowCss" />
      </DropDownBtn>
      {isActive ? (
        <DropDownContent>
          <Option>
            <input type="checkbox" id="one" className="check" />
            <label htmlFor="one" className="check">
              밀링
            </label>
          </Option>
          <OptionEnd>
            <input type="checkbox" id="two" className="check" />
            <label htmlFor="two" className="check">
              선반
            </label>
          </OptionEnd>
        </DropDownContent>
      ) : null}
    </DropDown>
  );
};

const DropDown = styled.div`
  width: auto;
  height: auto;
  margin-right: 8px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const DropDownBtn = styled.div`
  width: auto;
  height: 32px;
  padding: 0 12px 0 12px;
  margin-bottom: 4px;
  background-color: #fff;
  border: 1.3px solid #939fa5;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    border: 1px solid #2196f3;
    transition: all 0.25s ease-out;
  }

  &:hover > .ArrowCss {
    fill: #2196f3;
    transition: all 0.25s ease-out;
  }

  &:not(hover) {
    border: 1px solid #939fa5;
    transition: all 0.25s ease-out;
  }

  .ArrowCss {
    margin-left: 12px;
  }
`;

const DropDownContent = styled.div`
  width: 130px;
  height: auto;
  background-color: #fff;
  border: 1.3px solid rgba(147, 159, 165, 1);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 18px 12px;
  animation: fadeInDropDown 0.25s;
  position: absolute;

  @keyframes fadeInDropDown {
    from {
      opacity: 0;
      margin-top: -20px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
`;

const Option = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  margin-bottom: 14px;

  .check {
    cursor: pointer;
  }

  input[type="checkbox"] {
    margin: 0;
    position: relative;
    top: -4px;
    &:checked:before {
      content: "";
      position: absolute;
      left: 5px;
      top: 0px;
      width: 5px;
      height: 10px;
      border: 2.9px solid #ffffff;
      border-width: 0 2.9px 2.9px 0;
      transform: rotate(45deg);
      background-color: #2196f3;
      z-index: 1;
    }
    &:before {
      content: "";
      position: absolute;
      width: 14px;
      height: 14px;
      border: 2px solid #939fa5;
      border-radius: 2px;
      background: #ffffff;
    }
    &:checked:after {
      content: "";
      position: absolute;
      width: 14px;
      height: 14px;
      border: 2px #2196f3 solid;
      border-radius: 2px;
      background: #2196f3;
    }
  }

  label {
    padding-top: 1px;
    margin-left: 14px;
    font-size: 14px;
    font-weight: 400;
  }
`;

const OptionEnd = styled(Option)`
  margin-bottom: 0;
`;

export default SelectBox;
