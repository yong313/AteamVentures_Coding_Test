import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { ReactComponent as AteamLogo } from "../static/logo/ateam_logo.svg";
import { ReactComponent as NavIcon } from "../static/icons/nav_icon.svg";
import { ReactComponent as MobileMenuBar } from "../static/icons/mobile_menu.svg";
import MobileMenu from "./MobileMenu";

const Navigation = () => {
  const wrapperRef = useRef();
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = (event) => {
    if (wrapperRef && !wrapperRef.current.contains(event.target)) {
      setModalOpen(false);
    }
  };

  return (
    <>
      <NavBox ref={wrapperRef}>
        {/* 데스크탑 네비게이션 */}
        <LogoBox>
          {/* 모바일 네비게이션 */}
          <MobileMenuBar id="mb_menu" onClick={openModal} />
          <AteamLogo id="ateam_logo" />
        </LogoBox>
        <AnotherBox>
          <BtnTwo>
            <NavIcon fill="#fff" />
            <NavText>A 가공 업체</NavText>
          </BtnTwo>
          <Line />
          <LogOutBtn>로그아웃</LogOutBtn>
        </AnotherBox>
      </NavBox>
      <MobileMenu open={modalOpen} />
    </>
  );
};

const NavBox = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  position: relative;
  top: 0;
  left: 0;
  background-color: #1565c0;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.24);
  z-index: 8;
`;

const LogoBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 40px;
  cursor: pointer;

  #mb_menu {
    display: none;
    margin-right: 19px;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    padding-left: 23px;

    #ateam_logo {
      width: 91.8px;
      height: 12px;
    }
    #mb_menu {
      display: block;
    }
  }
`;

const AnotherBox = styled(LogoBox)`
  justify-content: flex-end;
  padding-left: 0;
  padding-right: 40px;

  @media screen and (max-width: 500px) {
    display: none;
  }
}
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
