import * as React from "react"
import Svg, { Path } from "react-native-svg"
const BackSVG = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      stroke="#555F74"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.4}
      d="m28 32-8-8 8-8"
    />
  </Svg>
)
export default BackSVG
