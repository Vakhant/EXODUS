import * as React from "react"
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg"
const InfoIcon12 = (props) => (
<>
    <Path
      fill="url(#a)"
      stroke="url(#b)"
      d="m14.44 12.414-.007.006-.007.006-2 2a.25.25 0 0 1-.353 0l-.992-.992a.25.25 0 0 1 .353-.352l.462.462.354.353.354-.353 1.47-1.47.006-.007.006-.006a.25.25 0 1 1 .353.353Zm-3.366 6.512-.007-.006-.006-.006a.25.25 0 1 1 .353-.353l.006.006.006.007.47.47.354.353.354-.353 1.47-1.47a.25.25 0 0 1 .352.352l-2 2a.25.25 0 0 1-.353 0l-1-1ZM17 13.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 1 1 0 .5h-3.5a.25.25 0 0 1-.25-.25Zm.073 5.323a.25.25 0 0 1 .177-.073h3.5a.25.25 0 1 1 0 .5h-3.5a.25.25 0 0 1-.177-.427ZM8.305 8.305A2.75 2.75 0 0 1 10.25 7.5h11.5a2.75 2.75 0 0 1 2.75 2.75v11.5a2.75 2.75 0 0 1-2.75 2.75h-11.5a2.75 2.75 0 0 1-2.75-2.75v-11.5c0-.73.29-1.429.805-1.945ZM10.25 8A2.25 2.25 0 0 0 8 10.25v11.5A2.25 2.25 0 0 0 10.25 24h11.5A2.25 2.25 0 0 0 24 21.75v-11.5A2.25 2.25 0 0 0 21.75 8h-11.5Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={7.409}
        x2={25.826}
        y1={6}
        y2={22.291}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#E7F6FF" stopOpacity={0.5} />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={7.409}
        x2={25.826}
        y1={6}
        y2={22.291}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#E7F6FF" stopOpacity={0.5} />
      </LinearGradient>
    </Defs>
  </>
)
export default InfoIcon12
