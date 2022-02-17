import React from "react";
import styled from "styled-components";
import SelectBox from "./SelectBox";
import SelectBoxTwo from "./SelectBoxTwo";
import Toggle from "./Toggle";

const ConTentOne = (props) => {
  return (
    <>
      {/* 상단 텍스트 */}
      <ContentBox>
        <HeadText>들어온 요청</HeadText>
        <SubText>파트너님에게 딱 맞는 요청서를 찾아보세요.</SubText>
      </ContentBox>
      {/* 하단 필터 */}
      <ContentBoxTwo>
        <LeftBox>
          <SelectBox />
          <SelectBoxTwo />
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
  align-items: flex-start;
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
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 500px) {
    justify-content: flex-start;
  }
`;

const ToggleText = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-left: 16px;
`;

export default ConTentOne;
