import * as React from "react"
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg"
const InfoIcon1 = (props) => (
<>
    <Path
      fill="url(#a)"
      stroke="url(#b)"
      d="M13.823 22.823A.25.25 0 0 1 14 22.75h4a.25.25 0 1 1 0 .5h-4a.25.25 0 0 1-.177-.427Z"
    />
    <Path
      fill="url(#c)"
      fillRule="evenodd"
      d="M19.714 5.029a2.804 2.804 0 0 1 2.253.669 2.852 2.852 0 0 1 .976 2.156v1.43c.62.33 1.14.826 1.503 1.432a3.92 3.92 0 0 1 .554 2.01V22.79c0 1.032-.406 2.34-1.13 3.07A3.84 3.84 0 0 1 21.143 27H10.857a3.84 3.84 0 0 1-2.727-1.14A3.911 3.911 0 0 1 7 23.107V8.501c0-.94.685-1.739 1.609-1.872l11.104-1.6h.001ZM8.873 10.39h-.33v12.716c0 .62.244 1.214.678 1.652a2.303 2.303 0 0 0 1.636.684h10.286c.614 0 1.202-.246 1.636-.684a2.346 2.346 0 0 0 .678-1.652v-10.38c0-.618-.242-1.21-.674-1.648a2.303 2.303 0 0 0-1.63-.688H8.873ZM21.4 8.834H8.869a.329.329 0 0 1-.327-.312.335.335 0 0 1 .285-.351l11.105-1.6a1.274 1.274 0 0 1 1.024.304 1.296 1.296 0 0 1 .444.98v.98Z"
      clipRule="evenodd"
    />
    <Path
      stroke="url(#d)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13 16.77 16 20l4-7"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={13.375}
        x2={14.246}
        y1={22.167}
        y2={24.991}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#E7F6FF" stopOpacity={0.5} />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={13.375}
        x2={14.246}
        y1={22.167}
        y2={24.991}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#E7F6FF" stopOpacity={0.5} />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={7.409}
        x2={28.953}
        y1={3.778}
        y2={19.369}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#E7F6FF" stopOpacity={0.5} />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={13.159}
        x2={20.321}
        y1={12.611}
        y2={18.946}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#E7F6FF" stopOpacity={0.5} />
      </LinearGradient>
    </Defs>
  </>
)
export default InfoIcon1
