import * as React from 'react'
import Svg, { SvgProps, G, Path } from 'react-native-svg'
import { memo } from 'react'

const SvgMinusSquare = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <Path
        d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm-3 10H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2z"
        data-name="minus-square"
      />
    </G>
  </Svg>
)

export default memo(SvgMinusSquare)
