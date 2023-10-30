import * as React from "react"
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg"
const InfoIcon2 = (props) => (
<>
    <Path
      fill="url(#a)"
      d="M20.65 8.213a.722.722 0 0 0-1.024 0 .73.73 0 0 0 0 1.029l2.902 2.914H7.724c-.4 0-.724.325-.724.727 0 .402.324.727.724.727h16.552a.73.73 0 0 0 .512-1.242L20.65 8.214Z"
    />
    <Path
      fill="url(#b)"
      d="M11.35 23.787a.722.722 0 0 0 1.024 0 .73.73 0 0 0 0-1.028l-2.902-2.915h14.804c.4 0 .724-.326.724-.727a.726.726 0 0 0-.724-.727H7.724a.73.73 0 0 0-.512 1.241l4.138 4.156Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={7.409}
        x2={23.903}
        y1={7.111}
        y2={23.524}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#E7F6FF" stopOpacity={0.5} />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={7.409}
        x2={23.903}
        y1={7.111}
        y2={23.524}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#E7F6FF" stopOpacity={0.5} />
      </LinearGradient>
    </Defs>
  </>
)
export default InfoIcon2
