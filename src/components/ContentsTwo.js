import React from "react";
import styled from "styled-components";
import CardList from "./CardList";
import NoCardList from "./NoCardList";

const ContentsTwo = (props) => {
  return (
    <>
      <ContentsBox>
        <CardList />
        {/* <NoCardList /> */}
      </ContentsBox>
    </>
  );
};

const ContentsBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  & > :nth-child(-n + 3) {
    margin-top: 0;
  }

  @media screen and (max-width: 500px) {
    & > :nth-child(n) {
      margin-top: 16px;
    }
    & > :first-child {
      margin-top: 0;
    }
  }
`;

export default ContentsTwo;
