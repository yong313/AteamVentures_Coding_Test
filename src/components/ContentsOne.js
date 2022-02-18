import React, { useCallback, useState } from "react";
import styled from "styled-components";
import SelectBox from "./SelectBox";
import Toggle from "./Toggle";
import { ReactComponent as FilteRingIcon } from "../static/icons/filtering_icon.svg";

const ConTentOne = () => {
  const name = ["가공방식", "재료"];
  const menuList = [
    ["밀링", "선반"],
    ["알루미늄", "탄소강", "구리", "합금강", "강철"],
  ];

  // 체크 된 아이템 상태 관리 및 이벤트 - 가공방식
  const [checkedList, setCheckedList] = useState([]);
  const onCheckedElement = useCallback(
    (checked, item) => {
      if (checked) {
        setCheckedList([...checkedList, item]);
      } else {
        setCheckedList(checkedList.filter((el) => el !== item));
      }
    },
    [checkedList]
  );

  // 체크 된 아이템 상태 관리 및 이벤트 - 재료
  const [checkedListTwo, setCheckedListTwo] = useState([]);
  const onCheckedElementTwo = useCallback(
    (checked, item) => {
      if (checked) {
        setCheckedListTwo([...checkedListTwo, item]);
      } else {
        setCheckedListTwo(checkedListTwo.filter((el) => el !== item));
      }
    },
    [checkedListTwo]
  );

  // 자식요소에 넘겨주기
  const checkedHandler = {
    functions: [onCheckedElement, onCheckedElementTwo],
    listState: [checkedList, checkedListTwo],
  };

  // 필터링 리셋
  const fillterReset = () => {
    setCheckedList([]);
    setCheckedListTwo([]);
  };

  return (
    <>
      <ContentBox>
        <HeadText>들어온 요청</HeadText>
        <SubText>파트너님에게 딱 맞는 요청서를 찾아보세요.</SubText>
      </ContentBox>
      <ContentBoxTwo>
        <LeftBox>
          {menuList.map((item, idx) => {
            return (
              <SelectBox
                key={idx}
                menuList={item}
                name={name[idx]}
                onCheckedElement={checkedHandler.functions[idx]}
                checkedList={checkedHandler.listState[idx]}
              />
            );
          })}
          {checkedList.length || checkedListTwo.length ? (
            <FilteRingReset
              onClick={() => {
                fillterReset();
              }}
            >
              <FilteRingIcon />
              <FilteRingText>필터링 리셋</FilteRingText>
            </FilteRingReset>
          ) : null}
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

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
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

const FilteRingReset = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  margin-left: 24px;
  cursor: pointer;
  animation: fadeInFillterBtn 0.25s;

  @keyframes fadeInFillterBtn {
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

const FilteRingText = styled.p`
  font-size: 12px;
  color: #2196f3;
  padding-top: 3px;
  margin-left: 12px;
`;

export default ConTentOne;
