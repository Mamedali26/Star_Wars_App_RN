import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HomeSVG({ color }) {
  return (
    <Svg
      viewBox="0 0 50 50"
      enableBackground="new 0 0 50 50"
      width={40}
      height={40}
      fill={color}
    >
      <Path d="M33 4v5.586l-8-8L1.293 25.293l1.414 1.414L4 25.414V49h42V25.414l1.293 1.293 1.414-1.414L42 18.586V4h-9zm2 2h5v10.586l-5-5V6zM20 47V31h10v16H20zm24 0H32V29H18v18H6V23.414l19-19 19 19V47z" />
    </Svg>
  )
}

export default HomeSVG;