import * as React from "react"
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg"
const InfoIcon = (props) => (
<>
    <Rect
      width={20.7}
      height={18.7}
      x={5.65}
      y={6.65}
      stroke="url(#a)"
      strokeWidth={1.3}
      rx={2.35}
    />
    <Path
      stroke="url(#b)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.3}
      d="M18.476 17.186v-.02a2.476 2.476 0 1 0-4.951 0v.02A2.478 2.478 0 0 0 14.348 22c.635 0 1.214-.24 1.652-.633a2.476 2.476 0 1 0 2.475-4.181Z"
    />
    <Path
      stroke="url(#c)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.3}
      d="M19.476 11.651c0 .912-.602 1.651-1.343 1.651-.742 0-1.343-.739-1.343-1.65 0-.913.601-1.652 1.343-1.652.741 0 1.343.74 1.343 1.651Z"
    />
    <Path
      stroke="url(#d)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.3}
      d="M15.21 11.651c0 .912-.601 1.651-1.343 1.651-.741 0-1.343-.739-1.343-1.65 0-.913.602-1.652 1.343-1.652.742 0 1.343.74 1.343 1.651Z"
    />
    <Path
      stroke="url(#e)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.3}
      d="M22.5 15.034c0 .912-.601 1.651-1.343 1.651-.741 0-1.342-.74-1.342-1.651 0-.912.6-1.651 1.342-1.651.742 0 1.343.74 1.343 1.651Z"
    />
    <Path
      stroke="url(#f)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.3}
      d="M12.185 15.034c0 .912-.6 1.651-1.342 1.651-.742 0-1.343-.74-1.343-1.651 0-.912.601-1.651 1.343-1.651.741 0 1.342.74 1.342 1.651Z"
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
        x1={9.795}
        x2={22.155}
        y1={9.333}
        y2={21.177}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#E7F6FF" stopOpacity={0.5} />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={9.795}
        x2={22.155}
        y1={9.333}
        y2={21.177}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#E7F6FF" stopOpacity={0.5} />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={9.795}
        x2={22.155}
        y1={9.333}
        y2={21.177}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#E7F6FF" stopOpacity={0.5} />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={9.795}
        x2={22.155}
        y1={9.333}
        y2={21.177}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#E7F6FF" stopOpacity={0.5} />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={9.795}
        x2={22.155}
        y1={9.333}
        y2={21.177}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#E7F6FF" stopOpacity={0.5} />
      </LinearGradient>
    </Defs>
  </>
)
export default InfoIcon
