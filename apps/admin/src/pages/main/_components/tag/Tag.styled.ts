// Tag.styled.ts
import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface TagWrapperProps {
  isSelected?: boolean;
}

export const TagWrapper = styled.div<TagWrapperProps>`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  padding: 0.5rem 0.75rem;
  border-radius: 1.375rem;

  background-color: ${({ theme }) => theme.backgroundColors.black};
  color: ${({ theme }) => theme.fontColors.gray};
  cursor: pointer;

  ${({ isSelected }) =>
    isSelected &&
    css`
      box-shadow: 0 0 0 1px white;
      color: white;
    `}
`;

export const TagImage = styled.img`
  width: 1.25rem;
  height: 1.25rem;
`;

export const TagListWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  width: 100%;
  padding: 1rem 2rem 1.25rem 2rem;
  overflow-x: scroll;
  justify-content: space-between;
`;

export const TagListContainer = styled.section`
  display: flex;
  gap: 0.75rem;
`;

export const TagRefreshContainer = styled.section`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const TagListRefresh = styled.section`
  display: flex;
  align-items: center;
`;
