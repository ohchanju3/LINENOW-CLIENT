import * as S from "./WaitingCard.styled";

import { Waiting } from "@interfaces/waiting";
import { useNavigate } from "react-router-dom";

import { Button, Flex } from "@linenow/core/components";
import BoothThumbnailCompact from "@components/booth/BoothThumbnailCompact";
import EnteringButton from "@components/button/EnteringButton";
import WaitingTeamsAheadButton from "@components/button/WaitingTeamsAheadButton";
import { ROUTE } from "@constants/route";

export interface WaitingCardProps
  extends Pick<
    Waiting,
    | "waitingID"
    | "waitingStatus"
    | "waitingTeamsAhead"
    | "booth"
    | "confirmedAt"
  > {
  isOpacity?: boolean;
}

interface Config {
  type?: "black" | "white";
  disabled?: boolean;
  button?: React.ReactNode;
}

const WaitingCard = (props: WaitingCardProps) => {
  const {
    waitingID,
    waitingStatus,
    waitingTeamsAhead,
    booth,
    confirmedAt,
    isOpacity = true,
  } = props;

  const getConfig = (): Config => {
    switch (waitingStatus) {
      case "entering":
        return {
          button: <EnteringButton confirmedAt={confirmedAt} />,
        };
      case "waiting":
        return {
          button: (
            <WaitingTeamsAheadButton waitingTeamsAhead={waitingTeamsAhead} />
          ),
        };
      case "canceled":
        return {
          disabled: true,
          button: (
            <Button
              variant="grayLight"
              children="대기가 취소 되었어요"
              disabled={true}
            />
          ),
        };
      case "time_over":
        return {
          disabled: true,
          button: (
            <Button
              variant="grayLight"
              children="대기가 시간이 초과 되었어요"
              disabled={true}
            />
          ),
        };
      case "entered":
        return {
          disabled: true,
          button: (
            <Button
              variant="lime"
              children="입장을 완료했어요"
              disabled={true}
            />
          ),
        };
      default:
        return {};
    }
  };

  const { disabled = false, type = "white", button } = getConfig();

  const navigate = useNavigate();
  const navigateWaitingDetail = () => {
    navigate(ROUTE.WAITING_DETAIL(waitingID));
  };
  return (
    <Flex
      as="section"
      direction="column"
      gap="0.75rem"
      css={[S.getWaitingCardStyle(type, isOpacity && disabled)]}
      onClick={navigateWaitingDetail}
    >
      <BoothThumbnailCompact css={[S.getBoothThumbnailStyle()]} {...booth} />
      {button}
    </Flex>
  );
};
export default WaitingCard;
