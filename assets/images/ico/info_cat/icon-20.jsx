import * as React from "react"
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg"
const InfoIcon20 = (props) => (
<>
    <Path
      stroke="url(#a)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M23.45 14.5c-.166 0-.726.005-.883.014l-3.187.08a.093.093 0 0 1-.083-.042l-6.364-7.385A.437.437 0 0 0 12.606 7h-1.32l3.585 7.547a.105.105 0 0 1-.01.108.113.113 0 0 1-.043.038.12.12 0 0 1-.058.01l-5.976.085a.411.411 0 0 1-.324-.145l-1.817-2.11c-.148-.182-.424-.28-.664-.28h-.926c-.063 0-.054.056-.037.113l.975 3.348a.732.732 0 0 1 0 .558l-.976 3.337c-.029.092-.025.141.087.141h.88c.4 0 .454-.05.659-.295l1.851-2.142a.419.419 0 0 1 .324-.145l5.926.126a.132.132 0 0 1 .108.057.123.123 0 0 1 .012.118L11.286 25h1.308a.46.46 0 0 0 .327-.166l6.376-7.38c.02-.029.098-.043.132-.043l3.138.08c.162.009.717.014.884.014 2.174 0 3.549-.57 3.549-1.505 0-.934-1.37-1.5-3.55-1.5Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={5.5}
        x2={24}
        y1={6}
        y2={26}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#E7F6FF" stopOpacity={0.5} />
      </LinearGradient>
    </Defs>
  </>
)
export default InfoIcon20
