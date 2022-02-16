import * as React from 'react'
import Svg, { SvgProps, G, Path } from 'react-native-svg'
import { memo } from 'react'

const SvgClock = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <Path
        d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4 11h-4a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v3h3a1 1 0 0 1 0 2z"
        data-name="clock"
      />
    </G>
  </Svg>
)

export default memo(SvgClock)
