import * as React from "react"
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg"
const InfoIcon8 = (props) => (
<>
    <Path
      stroke="url(#a)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.4}
      d="M16 26c5.523 0 10-4.477 10-10S21.523 6 16 6m0 20c-5.523 0-10-4.477-10-10S10.477 6 16 6m0 20V6M8.462 22.57a7.691 7.691 0 0 0 0-13.14m15.076 0a7.692 7.692 0 0 0 0 13.14"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={6.455}
        x2={26.918}
        y1={4.889}
        y2={22.989}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#E7F6FF" stopOpacity={0.5} />
      </LinearGradient>
    </Defs>
  </>
)
export default InfoIcon8
