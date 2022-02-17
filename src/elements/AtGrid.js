import React from "react";
import styled from "styled-components";

const AtGrid = (props) => {
  const {
    position,
    children,
    flex,
    align,
    width,
    padding,
    margin,
    marginT,
    marginB,
    height,
    maXheight,
    left,
    right,
    top,
    bottom,
    justify,
    direction,
    is_align,
    wrap,
    bg,
    border,
    radius,
    borderT,
    borderB,
    zIndex,
    cursor,
    shadow,
    _onClick,
    _onKeyDown,
    overFlowY,
    maXwidth,
    miNwidth,
    miNheight,
    overFlow,
  } = props;

  const styles = {
    flex: flex,
    position: position,
    width: width,
    height: height,
    padding: padding,
    margin: margin,
    marginT: marginT,
    marginB: marginB,
    maXheight: maXheight,
    align: align,
    left: left,
    right: right,
    top: top,
    bottom: bottom,
    justify: justify,
    direction: direction,
    is_align: is_align,
    wrap: wrap,
    bg: bg,
    border: border,
    radius: radius,
    borderT: borderT,
    borderB: borderB,
    zIndex: zIndex,
    cursor: cursor,
    shadow: shadow,
    overFlowY: overFlowY,
    maXwidth: maXwidth,
    miNwidth: miNwidth,
    miNheight: miNheight,
    overFlow: overFlow,
  };

  return (
    <>
      <GridBox {...styles} onKeyDown={_onKeyDown} onClick={_onClick}>
        {children}
      </GridBox>
    </>
  );
};

AtGrid.defaultProps = {
  position: false,
  children: null,
  flex: false,
  width: "100%",
  height: "",
  maXheight: "",
  padding: false,
  margin: false,
  align: false,
  left: false,
  right: false,
  top: false,
  bottom: false,
  justify: "center",
  direction: "",
  is_align: "center",
  wrap: "",
  bg: false,
  border: false,
  radius: "",
  borderT: false,
  borderB: false,
  _tabIndex: "0",
  _onClick: () => {},
  _onKeyDown: () => {},
};

const GridBox = styled.div`
  box-sizing: border-box;
  width: ${(props) => props.width};
  max-width: ${(props) => props.maXwidth};
  height: ${(props) => props.height};
  text-align: ${(props) => props.align};
  padding: ${(props) => (props.padding ? `${props.padding}` : "")};
  margin: ${(props) => (props.margin ? `${props.margin}` : "")};
  margin-top: ${(props) => (props.marginT ? `${props.marginT}` : "")};
  margin-bottom: ${(props) => (props.marginB ? `${props.marginB}` : "")};
  max-height: ${(props) => props.maXheight};
  min-height: ${(props) => props.miNheight};
  position: ${(props) => (props.position ? `${props.position}` : "")};
  left: ${(props) => (props.left ? `${props.left}` : "")};
  right: ${(props) => (props.right ? `${props.right}` : "")};
  top: ${(props) => (props.top ? `${props.top}` : "")};
  bottom: ${(props) => (props.bottom ? `${props.bottom}` : "")};
  display: ${(props) => (props.flex ? `${props.flex}` : "")};
  ${(props) => (props.justify ? `justify-content: ${props.justify};` : "")};
  ${(props) => (props.is_align ? `align-items: ${props.is_align};` : "")};
  ${(props) => (props.direction ? `flex-direction: ${props.direction};` : "")};
  ${(props) => (props.wrap ? `flex-wrap: ${props.wrap};` : "")};
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")};
  ${(props) => (props.border ? `border: ${props.border};` : "")};
  ${(props) => (props.radius ? `border-radius: ${props.radius};` : "")};
  ${(props) => (props.borderT ? "border-top: 1px solid #efefef;" : "")};
  ${(props) => (props.borderB ? "border-bottom: 1px solid #efefef;" : "")};
  ${(props) => (props.zIndex ? `z-index: ${props.zIndex};` : "")};
  ${(props) => (props.shadow ? `box-shadow: ${props.shadow};` : "")};
  ${(props) => (props.overFlow ? `overflow: ${props.overFlow};` : "")};
  ${(props) => (props.overFlowY ? `overflow-y: ${props.overFlowY};` : "")};
  cursor: ${(props) => (props.cursor ? `${props.cursor}` : "")};
`;

export default AtGrid;
