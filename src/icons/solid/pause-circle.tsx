import * as React from 'react'
import Svg, { SvgProps, G, Path } from 'react-native-svg'
import { memo } from 'react'

const SvgPauseCircle = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <Path
        d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-2 13a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0zm6 0a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0z"
        data-name="pause-circle"
      />
    </G>
  </Svg>
)

export default memo(SvgPauseCircle)
