import React from "react";
import styled from "styled-components";
import AteamLogoBlue from "../static/logo/ateam_logo_blue.png";
import { ReactComponent as NavIcon } from "../static/icons/nav_icon.svg";

const MobileMenu = (props) => {
  const { open } = props;
  return (
    <>
      <ModalBox className={open ? "openModal modal" : "modal"}>
        {open ? (
          <ModalBackground>
            <ModalContents>
              <ModalHead>
                <LogoBlue />
              </ModalHead>
              <ModalBody>
                <BtnTwo>
                  <NavIcon fill="#323D45" />
                  <NavText>A 가공 업체</NavText>
                </BtnTwo>
                <LogOutBtn>로그아웃</LogOutBtn>
              </ModalBody>
            </ModalContents>
          </ModalBackground>
        ) : null}
      </ModalBox>
    </>
  );
};

const ModalBox = styled.div`
  width: auto;
  height: auto;
`;

const ModalBackground = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: rgba(50, 61, 69, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;

  animation: fadeInBackground 0.25s;

  @keyframes fadeInBackground {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalContents = styled.div`
  width: 75%;
  height: 100vh;
  overflow: hidden;
  background-color: #fff;
  animation: fadeInModal 0.45s;

  @keyframes fadeInModal {
    from {
      opacity: 0;
      margin-left: -600px;
    }
    to {
      opacity: 1;
      margin-left: 0;
    }
  }
`;

const ModalHead = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  border-bottom: 1px solid #e5e5e5; ;
`;

const LogoBlue = styled.div`
  width: 92px;
  height: 12px;
  background-image: url(${AteamLogoBlue});
`;

const ModalBody = styled.div`
  width: 100%;
  height: auto;
  padding: 38.5px 10%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;

const LogOutBtn = styled.button`
  font-weight: 400;
  font-size: 14px;
`;

const BtnTwo = styled.div`
  display: flex;
  align-items: flex-start;
`;

const NavText = styled(LogOutBtn)`
  margin: 0 0 24px 8px;
`;

export default MobileMenu;
