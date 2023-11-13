import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      stroke="#555F74"
      strokeLinecap="round"
      strokeWidth={1.4}
      d="m19 29 10-10m-10 0 10 10"
    />
  </Svg>
)
export default SvgComponent
