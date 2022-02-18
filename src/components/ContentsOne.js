import React from "react";
import styled from "styled-components";
import SelectBox from "./SelectBox";
import Toggle from "./Toggle";

const ConTentOne = (props) => {
  const menuList = [
    ["밀링", "선반"],
    ["알루미늄", "탄소강", "구리", "합금강", "강철"],
  ];

  const name = ["가공방식", "재료"];

  return (
    <>
      <ContentBox>
        <HeadText>들어온 요청</HeadText>
        <SubText>파트너님에게 딱 맞는 요청서를 찾아보세요.</SubText>
      </ContentBox>
      <ContentBoxTwo>
        <LeftBox>
          {menuList.map((item, idx) => {
            return <SelectBox key={idx} menuList={item} name={name[idx]} />;
          })}
        </LeftBox>
        <RightBox>
          <Toggle />
          <ToggleText>상담 중인 요청만 보기</ToggleText>
        </RightBox>
      </ContentBoxTwo>
    </>
  );
};

const ContentBox = styled.div`
  width: 100%;
  height: auto;
  margin: 40px 0 32px 0;
`;

const HeadText = styled.p`
  font-size: 20px;
  font-weight: bold;
  line-height: 32px;
  color: rgba(50, 61, 69, 1);
`;
const SubText = styled(HeadText)`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

const ContentBoxTwo = styled.div`
  width: 100%;
  height: auto;
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const LeftBox = styled.div`
  width: 50%;
  height: auto;
  display: flex;

  @media screen and (max-width: 500px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const RightBox = styled(LeftBox)`
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 500px) {
    justify-content: flex-start;
  }
`;

const ToggleText = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-left: 16px;
  padding-top: 2px;
`;

export default ConTentOne;
