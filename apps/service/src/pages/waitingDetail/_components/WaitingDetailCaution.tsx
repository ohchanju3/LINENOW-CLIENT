import { Flex } from "@linenow/core/components";
import * as S from "./WaitingDetailComponents.styled";
import WaitingDetailCautionItem from "./WaitingDetailCautionItem";
import SectionTitle from "@components/title/SectionTitle";

const WaitingDetailCaution = () => {
  const contents = [
    {
      text: "부스에 입장하지 않으신다면 반드시 대기를 취소해 주세요. 대기 취소 없이 입장하지 않으시면 부스 운영에 피해가 발생해요.\n노쇼가 확인될 경우, 라인나우 사용이 제한됩니다.",
      imgSrc: "/images/image_waitingDetailCaution1.png",
    },
    {
      text: "동시에 최대 3개의 부스만 대기할 수 있어요. 새로운 부스에 대기하시려면 기존 대기 중인 부스 중 하나를 반드시 취소해 주세요.",
      imgSrc: "/images/image_waitingDetailCaution2.png",
    },
    {
      text: "입장 차레 시 부스 입장 가능 시간이 부여됩니다. 반드시 10분 이내로 부스에 입장해주세요.\n10분이 지나면 입장이 제한됩니다.",
      imgSrc: "/images/image_waitingDetailCaution2.png",
    },
  ];

  const sectionStyle: React.ComponentProps<typeof Flex> = {
    as: "section",
    direction: "column",
    gap: "0.5rem",
    padding: "1.25rem 1rem 1.75rem 1rem",
  };

  return (
    <>
      <Flex {...sectionStyle}>
        <SectionTitle
          title={`라인나우 대기 유의사항`}
          description={`입장 시간을 준수하지 않으면 대기가 자동 취소됩니다.\n아래 유의사항을 꼭 읽어주세요.`}
        />
        <S.WaitingDetailCautionItemContainer>
          {contents.map((content, index) => (
            <WaitingDetailCautionItem
              key={index}
              content={content.text}
              imgSrc={content.imgSrc}
            />
          ))}
        </S.WaitingDetailCautionItemContainer>
      </Flex>
    </>
  );
};

export default WaitingDetailCaution;
