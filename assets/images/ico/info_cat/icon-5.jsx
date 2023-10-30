import * as React from "react"
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg"
const InfoIcon5 = (props) => (
<>
    <Path
      fill="url(#a)"
      stroke="url(#b)"
      d="M17.467 17.269c.248 0 .491.104.674.296.185.193.292.46.292.743v6.654l-.966-7.693Zm0 0h-2.933m1.598-10.718 10.13 8.282a.352.352 0 0 1 .119.36l-.026.1a.152.152 0 0 1-.243.08l-.995-.814-.817-.668v10.57c0 .283-.108.55-.292.742a.936.936 0 0 1-.676.297H8.668a.936.936 0 0 1-.676-.297 1.08 1.08 0 0 1-.292-.742V13.884l-.817.668-1 .818a.15.15 0 0 1-.238-.079l-.026-.104a.354.354 0 0 1 .119-.36L15.854 6.55a.219.219 0 0 1 .14-.051.22.22 0 0 1 .138.051Zm1.335 18.41h.5v-7.153h-3.934v7.154h3.434Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={5.5}
        x2={26.11}
        y1={4.889}
        y2={24.942}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#E7F6FF" stopOpacity={0.5} />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={5.5}
        x2={26.11}
        y1={4.889}
        y2={24.942}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#E7F6FF" stopOpacity={0.5} />
      </LinearGradient>
    </Defs>
  </>
)
export default InfoIcon5
