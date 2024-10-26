import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

export function LoginPasswordIcon(props) {
  return (
    <Svg
      width={34}
      height={35}
      viewBox="0 0 34 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={17.1953} cy={17.4727} r={16.75} fill="#E8F5EF" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.682 13.376a5.513 5.513 0 0111.027 0v1.472a3.377 3.377 0 011.388 2.732v6.381a.676.676 0 01-.677.677H10.97a.676.676 0 01-.676-.677V17.58c0-1.122.546-2.117 1.388-2.732v-1.472zm1.67.838c.106-.01.214-.016.324-.016h7.039c.11 0 .218.005.324.016v-1.149a3.844 3.844 0 00-7.688 0v1.149zm4.932 5.482c.348-.274.568-.678.568-1.129 0-.826-.742-1.497-1.657-1.497s-1.657.67-1.657 1.497c0 .45.22.855.569 1.129.213.168.384.403.384.674v1.21c0 .374.303.677.676.677h.056a.676.676 0 00.677-.677v-1.21c0-.271.17-.506.384-.674z"
        fill="#4EE486"
      />
    </Svg>
  );
}
