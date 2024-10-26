import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

export function LoginEmailIcon(props) {
  return (
    <Svg
      width={34}
      height={34}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={17.1953} cy={16.9727} r={16.75} fill="#E8F5EF" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.836 10.858c.266 0 .498.143.624.356l-5.776 4.526-2.462 2.005a.722.722 0 01-.345.154.45.45 0 01-.296-.015.723.723 0 01-.274-.14l-1.731-1.41-6.535-5.12a.724.724 0 01.624-.356h16.17zm-8.979 7.75l-.55-.43-7.363 4.254a.724.724 0 00.72.656h16.172a.724.724 0 00.721-.656l-7.364-4.254-.55.43a1.449 1.449 0 01-1.786 0zM7.94 12.407l6.52 5.107-6.52 3.766v-8.873zm17.62 0v8.873l-6.518-3.766 6.518-5.107z"
        fill="#4EE486"
      />
    </Svg>
  );
}
