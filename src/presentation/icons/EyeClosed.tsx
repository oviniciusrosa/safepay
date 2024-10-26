import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface Props {
  color?: string;
  size?: number;
}

export function EyeClosedIcon(props: Props) {
  return (
    <Svg
      width={props.size ?? 24}
      height={props.size ?? 24}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <Path
        d="M2.22 2.22a.75.75 0 00-.073.976l.073.084 4.034 4.035a9.986 9.986 0 00-3.955 5.75.75.75 0 001.455.364 8.49 8.49 0 013.58-5.034l1.81 1.81A4 4 0 0014.8 15.86l5.919 5.92a.75.75 0 001.133-.977l-.073-.084-6.113-6.114.001-.002-1.2-1.198-2.87-2.87h.002l-2.88-2.877.001-.002-1.133-1.13L3.28 2.22a.75.75 0 00-1.06 0zm7.984 9.045l3.535 3.536a2.5 2.5 0 01-3.535-3.535zM12 5.5c-1 0-1.97.148-2.889.425l1.237 1.236a8.503 8.503 0 019.899 6.272.75.75 0 001.455-.363A10.003 10.003 0 0012 5.5zm.195 3.51l3.801 3.8a4.003 4.003 0 00-3.801-3.8z"
        fill={props.color ?? "#fff"}
      />
    </Svg>
  );
}
