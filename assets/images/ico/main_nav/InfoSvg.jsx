import * as React from "react"
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg"
const InfoSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill={props.chsn?"#5379F6":'#666'}
      d="M12 2C6.477 2 2 6.477 2 12a9.95 9.95 0 0 0 1.043 4.427l-1.005 4.019a1.25 1.25 0 0 0 1.516 1.516l4.019-1.005A9.95 9.95 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Z"
    />
    <Path fill="url(#a)" d="M11 17v-5a1 1 0 0 1 2 0v5a1 1 0 0 1-2 0Z" />
    <Path fill="url(#b)" d="M12 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
    <Defs>
      <LinearGradient
        id="a"
        x1={11.046}
        x2={14.474}
        y1={10.611}
        y2={11.478}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#E7F6FF" stopOpacity={0.5} />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={10.568}
        x2={13.638}
        y1={5.833}
        y2={8.548}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#E7F6FF" stopOpacity={0.5} />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default InfoSvg
