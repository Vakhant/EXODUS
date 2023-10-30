import * as React from "react"
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg"
const LikedSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill={props.chsn?"#5379F6":'#666'}
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
    />
    <Path
      fill="url(#a)"
      fillRule="evenodd"
      d="M17.5 11.3A3.3 3.3 0 0 0 14.2 8a3.28 3.28 0 0 0-2.2.856A3.28 3.28 0 0 0 9.8 8a3.3 3.3 0 0 0-3.3 3.3c0 .932.389 1.77 1.01 2.37l3.299 3.306a1.685 1.685 0 0 0 2.381 0l3.299-3.306A3.281 3.281 0 0 0 17.5 11.3Z"
      clipRule="evenodd"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={2.455}
        x2={22.918}
        y1={0.889}
        y2={18.989}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#E7F6FF" stopOpacity={0.5} />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default LikedSvg
