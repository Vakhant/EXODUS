import * as React from "react"
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg"
const InfoIcon4 = (props) => (
<>
    <Path
      stroke="url(#a)"
      strokeLinecap="round"
      strokeWidth={1.4}
      d="M6.077 25h19.845M10 15.69v5.172m6-5.172v5.172m6-5.172v5.172M6.078 12.051h19.845c.961 0-7.306-3.936-9.432-4.941a1.151 1.151 0 0 0-.982 0c-2.126 1.005-10.393 4.94-9.431 4.94Z"
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
export default InfoIcon4
