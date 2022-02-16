import * as React from 'react'
import Svg, { SvgProps, G, Path, Circle } from 'react-native-svg'
import { memo } from 'react'

const SvgSmartphoneOutline = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <G data-name="smartphone">
        <Path d="M17 2H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm1 17a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1z" />
        <Circle cx={12} cy={16.5} r={1.5} />
        <Path d="M14.5 6h-5a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2z" />
      </G>
    </G>
  </Svg>
)

export default memo(SvgSmartphoneOutline)
