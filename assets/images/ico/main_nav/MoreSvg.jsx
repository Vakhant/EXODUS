import * as React from "react"
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg"
const MoreSvg = (props) => (
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
    <Path fill="url(#a)" d="M8 9h8a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2Z" />
    <Path fill="url(#b)" d="M16 11H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2Z" />
    <Path fill="url(#c)" d="M16 15H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2Z" />
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
      <LinearGradient
        id="b"
        x1={2.455}
        x2={22.918}
        y1={0.889}
        y2={18.989}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#E7F6FF" stopOpacity={0.5} />
      </LinearGradient>
      <LinearGradient
        id="c"
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
export default MoreSvg
