import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { ButtonSize } from "./Button";
import { fonts } from "../../styles/fonts";
import { getHoverAnimation } from "../../styles/animation";

export const getSizeStyle = (size: ButtonSize, width: string) => {
  const getStyle = () => {
    switch (size) {
      case "medium":
        return css`
          ${fonts.button2}
          width: ${width};
          padding: 0.75rem;
          height: 2.75rem;
        `;
      case "large":
        return css`
          ${fonts.button1}
          width: ${width};
          padding: 0.875rem 1.25rem;
          height: 3.25rem;
        `;
    }
  };

  return css`
    ${getStyle()}
    border: none;
    border-radius: 0.5rem;
  `;
};

export const getAlignStyle = (childCount: number) => {
  return css`
    display: flex;
    align-items: center;
    justify-content: ${childCount > 1 ? "space-between" : "center"};
  `;
};

export const getAnimation = () => css`
  &:not(:disabled):hover {
    ${getHoverAnimation}
  }
`;
