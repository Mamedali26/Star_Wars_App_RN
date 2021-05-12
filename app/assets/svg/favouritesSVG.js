import * as React from "react"
import Svg, { Path } from "react-native-svg"

function FavouritesSVG({ color, width, height }) {
  return (
    <Svg
      x="0px"
      y="0px"
      viewBox="0 0 16 16"
      xmlSpace="preserve"
      enableBackground="new 0 0 16 16"
      fill={color}
      width={width}
      height={height}
    >
      <Path d="M8.612 2.347L8 2.997l-.612-.65c-1.69-1.795-4.43-1.795-6.12 0-1.69 1.795-1.69 4.706 0 6.502l.612.65L8 16l6.12-6.502.612-.65c1.69-1.795 1.69-4.706 0-6.502-1.69-1.795-4.43-1.795-6.12.001z" />
    </Svg>
  )
}

export default FavouritesSVG;
