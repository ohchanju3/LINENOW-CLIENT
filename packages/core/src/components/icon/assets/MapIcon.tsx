import { IconAssetProps } from "../Icon";

const MapIcon = (props: IconAssetProps) => {
  const { color = "black", size = 24 } = props;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 24 24`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 21L9 18.9L4.35 20.7C4.01667 20.8333 3.70833 20.7958 3.425 20.5875C3.14167 20.3792 3 20.1 3 19.75V5.75C3 5.53333 3.0625 5.34167 3.1875 5.175C3.3125 5.00833 3.48333 4.88333 3.7 4.8L9 3L15 5.1L19.65 3.3C19.9833 3.16667 20.2917 3.20417 20.575 3.4125C20.8583 3.62083 21 3.9 21 4.25V18.25C21 18.4667 20.9375 18.6583 20.8125 18.825C20.6875 18.9917 20.5167 19.1167 20.3 19.2L15 21ZM14 18.55V6.85L10 5.45V17.15L14 18.55ZM16 18.55L19 17.55V5.7L16 6.85V18.55ZM5 18.3L8 17.15V5.45L5 6.45V18.3Z"
        fill={color}
      />
    </svg>
  );
};

export default MapIcon;
