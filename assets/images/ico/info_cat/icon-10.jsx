import * as React from "react"
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg"
const InfoIcon10 = (props) => (
<>
    <Path
      stroke="url(#a)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.4}
      d="M16 11.5c.714-2.96 3.412-4.472 9.286-4.5a.682.682 0 0 1 .506.219.778.778 0 0 1 .208.531v13.5a.77.77 0 0 1-.21.53.697.697 0 0 1-.504.22c-5.715 0-7.922 1.21-9.286 3m0-13.5c-.714-2.96-3.412-4.472-9.286-4.5a.682.682 0 0 0-.506.219A.75.75 0 0 0 6 7.75v13.41c0 .463.273.84.714.84 5.715 0 7.93 1.219 9.286 3m0-13.5V25"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={6.455}
        x2={25.008}
        y1={6}
        y2={24.234}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#E7F6FF" stopOpacity={0.5} />
      </LinearGradient>
    </Defs>
  </>
)
export default InfoIcon10
