import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface Props {
  color?: string;
  size?: number;
}

export function EyeIcon(props: Props) {
  return (
    <Svg
      width={props.size ?? 24}
      height={props.size ?? 24}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <Path
        d="M12 9.005a4 4 0 110 8 4 4 0 010-8zm0 1.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM12 5.5c4.613 0 8.596 3.15 9.701 7.564a.75.75 0 11-1.455.365 8.503 8.503 0 00-16.493.004.75.75 0 01-1.455-.363A10.003 10.003 0 0112 5.5z"
        fill={props.color ?? "#fff"}
      />
    </Svg>
  );
}
