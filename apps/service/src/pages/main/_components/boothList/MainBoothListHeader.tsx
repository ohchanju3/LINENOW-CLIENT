import * as S from "./MainBoothList.styled";
import { Label } from "@linenow/core/components";

import useMainViewType from "@pages/main/_hooks/useMainViewType";

const MainBoothListHeader = (props: React.PropsWithChildren) => {
  const { children } = props;
  const { viewType } = useMainViewType();
  return (
    <section css={S.getHeaderWrapperStyle(viewType)}>
      <Label font={viewType === "list" ? "head2" : "head3"} color="black">
        2025년 동국대학교 봄 축제
      </Label>
      {children}
    </section>
  );
};

export default MainBoothListHeader;
