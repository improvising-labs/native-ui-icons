import * as React from 'react'
import Svg, { SvgProps, G, Path } from 'react-native-svg'
import { memo } from 'react'

const SvgCornerLeftUp = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <Path
        d="M18 17h-5a1 1 0 0 1-1-1V7.08l3.38 2.7A1 1 0 0 0 16 10a1 1 0 0 0 .78-.38 1 1 0 0 0-.16-1.4l-5-4a1 1 0 0 0-1.24 0l-5 4a1 1 0 0 0 1.24 1.56L10 7.08V16a3 3 0 0 0 3 3h5a1 1 0 0 0 0-2z"
        data-name="corner-left-up"
      />
    </G>
  </Svg>
)

export default memo(SvgCornerLeftUp)
