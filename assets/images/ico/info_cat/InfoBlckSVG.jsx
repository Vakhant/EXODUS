import * as React from "react"
import Svg, { Rect } from "react-native-svg"
import InfoIcon from "./icon"
import InfoIcon1 from "./icon-1"
import InfoIcon2 from "./icon-2"
import InfoIcon3 from "./icon-3"
import InfoIcon4 from "./icon-4"
import InfoIcon5 from "./icon-5"
import InfoIcon6 from "./icon-6"
import InfoIcon7 from "./icon-7"
import InfoIcon8 from "./icon-8"
import InfoIcon9 from "./icon-9"
import InfoIcon10 from "./icon-10"
import InfoIcon11 from "./icon-11"
import InfoIcon12 from "./icon-12"
import InfoIcon13 from "./icon-13"
import InfoIcon14 from "./icon-14"
import InfoIcon15 from "./icon-15"
import InfoIcon16 from "./icon-16"
import InfoIcon17 from "./icon-17"
import InfoIcon18 from "./icon-18"
import InfoIcon19 from "./icon-19"
import InfoIcon20 from "./icon-20"


function InfoBlockSVG ({sbkey=''}) {

    let innerIcon = <></>

    switch (sbkey) {
      case "t-kd": innerIcon = <InfoIcon/>; break;
      case "t-vr": innerIcon = <InfoIcon1/>; break;
      case "t-g": innerIcon = <InfoIcon2/>; break;
      case "l-iv": innerIcon = <InfoIcon3/>; break;
      case "l-VNJ": innerIcon = <InfoIcon4/>; break;
      case "f-os": innerIcon = <InfoIcon5/>; break;
      case "f-ov": innerIcon = <InfoIcon6/>; break;
      case "f-t": innerIcon = <InfoIcon7/>; break;
      case "n-oi": innerIcon = <InfoIcon8/>; break;
      case "m-oi": innerIcon = <InfoIcon9/>; break;
      case "m-ms": innerIcon = <InfoIcon10/>; break;
      case "o-d": innerIcon = <InfoIcon11/>; break;
      case "o-sh": innerIcon = <InfoIcon12/>; break;
      case "o-ku": innerIcon = <InfoIcon13/>; break;
      case "o-ks": innerIcon = <InfoIcon14/>; break;
      case "i-o": innerIcon = <InfoIcon15/>; break;
      case "i-p": innerIcon = <InfoIcon16/>; break;
      case "t-ot": innerIcon = <InfoIcon17/>; break;
      case "t-la": innerIcon = <InfoIcon18/>; break;
      case "j-pp": innerIcon = <InfoIcon19/>; break;
      case "j-r": innerIcon = <InfoIcon20/>; break;
      default: break;
    }


    return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      fill="none"
    >
    <Rect width={32} height={32} fill="#5379F6" rx={16} />
      {innerIcon}
    </Svg>
)}
export default InfoBlockSVG
