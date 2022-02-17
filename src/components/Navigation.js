import React from "react";
import styled from "styled-components";
// 로고
import { ReactComponent as AteamLogo } from "../static/logo/ateam_logo.svg";
// A 가공 업체 아이콘
import { ReactComponent as NavIcon } from "../static/icons/nav_icon.svg";

const Navigation = (props) => {
  return (
    <>
      <NavBox>
        <LogoBox>
          <AteamLogo />
        </LogoBox>
        <AnotherBox>
          <BtnTwo>
            <NavIcon />
            <NavText>A 가공 업체</NavText>
          </BtnTwo>
          <Line />
          <LogOutBtn>로그아웃</LogOutBtn>
        </AnotherBox>
      </NavBox>
    </>
  );
};

const NavBox = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #1565c0;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.24);
`;

const LogoBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 40px;
  cursor: pointer;
`;

const AnotherBox = styled(LogoBox)`
  justify-content: flex-end;
  padding-left: 0;
  padding-right: 40px;
`;

const LogOutBtn = styled.button`
  font-weight: 200;
  font-size: 14px;
  color: #fff;
`;

const Line = styled.div`
  width: 1px;
  height: 16px;
  margin: 0 32px;
  background: #fff;
`;

const BtnTwo = styled.div`
  display: flex;
  align-items: center;
`;

const NavText = styled(LogOutBtn)`
  margin-left: 8px;
`;

export default Navigation;
