import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      fill="#555F74"
      d="M32.505 33.495a.7.7 0 0 0 .99-.99l-.99.99Zm-6-6 6 6 .99-.99-6-6-.99.99ZM28.3 22a6.3 6.3 0 0 1-6.3 6.3v1.4a7.7 7.7 0 0 0 7.7-7.7h-1.4ZM22 28.3a6.3 6.3 0 0 1-6.3-6.3h-1.4a7.7 7.7 0 0 0 7.7 7.7v-1.4ZM15.7 22a6.3 6.3 0 0 1 6.3-6.3v-1.4a7.7 7.7 0 0 0-7.7 7.7h1.4Zm6.3-6.3a6.3 6.3 0 0 1 6.3 6.3h1.4a7.7 7.7 0 0 0-7.7-7.7v1.4Z"
    />
  </Svg>
)
export default SvgComponent
