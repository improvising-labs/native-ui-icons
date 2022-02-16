import * as React from 'react'
import Svg, { SvgProps, G, Path } from 'react-native-svg'
import { memo } from 'react'

const SvgCornerRightUpOutline = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <Path
        d="m18.62 8.22-5-4a1 1 0 0 0-1.24 0l-5 4a1 1 0 0 0 1.24 1.56L12 7.08V16a1 1 0 0 1-1 1H6a1 1 0 0 0 0 2h5a3 3 0 0 0 3-3V7.08l3.38 2.7A1 1 0 0 0 18 10a1 1 0 0 0 .78-.38 1 1 0 0 0-.16-1.4z"
        data-name="corner-right-up"
      />
    </G>
  </Svg>
)

export default memo(SvgCornerRightUpOutline)
