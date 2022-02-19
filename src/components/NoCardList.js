import React from "react";
import styled from "styled-components";

const NoCardList = () => {
  return (
    <>
      <NoListBox>
        <NoMessage>
          조건에 맞는 견적 요청이 없습니다.
        </NoMessage>
      </NoListBox>
    </>
  )
}

const NoListBox = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid #C2C2C2;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const NoMessage = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #939FA5;
`

export default NoCardList;