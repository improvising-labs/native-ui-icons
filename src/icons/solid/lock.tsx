import * as React from 'react'
import Svg, { SvgProps, G, Circle, Path } from 'react-native-svg'
import { memo } from 'react'

const SvgLock = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <G data-name="lock">
        <Circle cx={12} cy={15} r={1} />
        <Path d="M17 8h-1V6.11a4 4 0 1 0-8 0V8H7a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3zm-7-1.89A2.06 2.06 0 0 1 12 4a2.06 2.06 0 0 1 2 2.11V8h-4zM12 18a3 3 0 1 1 3-3 3 3 0 0 1-3 3z" />
      </G>
    </G>
  </Svg>
)

export default memo(SvgLock)
