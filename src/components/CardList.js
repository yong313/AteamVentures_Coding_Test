import React from "react";
import styled from "styled-components";

const CardList = (props) => {
  return (
    <>
      <CardListBox>
        <Title>자동차 시제품 제작</Title>
        <Client>A 고객사</Client>
        <Due>
          2020.12.14 <span>까지 납기</span>
        </Due>
        <Line />
        <BottomBox>
          <BoxLeft>
            <Text>도면개수</Text>
            <Text>총 수량</Text>
            <Text>가공방식</Text>
            <Text>재료</Text>
          </BoxLeft>
          <BoxRight>
            <TextBold>2개</TextBold>
            <TextBold>100개</TextBold>
            <TextBold>밀린, 선반</TextBold>
            <TextBold>알루미늄</TextBold>
          </BoxRight>
        </BottomBox>
        <BtnBox>
          <LeftBtn>요청 내역 보기</LeftBtn>
          <RightBtn>채팅하기</RightBtn>
        </BtnBox>
      </CardListBox>
    </>
  );
};

const CardListBox = styled.div`
  width: 366px;
  height: 356px;
  outline: 1px solid #e5e5e5;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 16px;
  margin-top: 16px;

  &:hover {
    outline: 2px solid #2196f3;
    transition: all 0.1s ease;
  }

  &:not(:hover) {
    outline: 1px solid #e5e5e5;
    transition: all 0.25s ease;
  }
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 8px;
`;

const Client = styled.div`
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 24px;
`;

const Due = styled.div`
  font-size: 14px;
  color: #939fa5;
  margin-bottom: 16px;

  span {
    color: #939fa5;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e5e5e5;
  margin-bottom: 32px;
`;

const BottomBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  margin-bottom: 32px;
`;

const BoxLeft = styled.div`
  display: flex;
  flex-direction: column;

  & > :last-child {
    margin-bottom: 0;
  }
`;

const BoxRight = styled(BoxLeft)`
  margin-left: 32px;
`;

const Text = styled.p`
  font-size: 14px;
  margin-bottom: 17px;
`;

const TextBold = styled(Text)`
  font-weight: bold;
`;

const BtnBox = styled.div`
  width: auto;
  height: auto;
  display: flex;
`;

const LeftBtn = styled.div`
  width: auto;
  height: auto;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  background-color: #2196f3;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 10px;
  border-radius: 4px;
`;

const RightBtn = styled(LeftBtn)`
  color: #2196f3;
  background-color: #fff;
  border: 1px solid #2196f3;
  margin-left: 10px;
`;

export default CardList;
