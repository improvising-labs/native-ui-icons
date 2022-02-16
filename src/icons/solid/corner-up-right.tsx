import * as React from 'react'
import Svg, { SvgProps, G, Path } from 'react-native-svg'
import { memo } from 'react'

const SvgCornerUpRight = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <Path
        d="m19.78 10.38-4-5a1 1 0 0 0-1.56 1.24l2.7 3.38H8a3 3 0 0 0-3 3v5a1 1 0 0 0 2 0v-5a1 1 0 0 1 1-1h8.92l-2.7 3.38a1 1 0 0 0 .16 1.4A1 1 0 0 0 15 17a1 1 0 0 0 .78-.38l4-5a1 1 0 0 0 0-1.24z"
        data-name="corner-up-right"
      />
    </G>
  </Svg>
)

export default memo(SvgCornerUpRight)
