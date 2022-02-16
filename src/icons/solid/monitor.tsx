import * as React from 'react'
import Svg, { SvgProps, G, Path } from 'react-native-svg'
import { memo } from 'react'

const SvgMonitor = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" {...props}>
    <G data-name="Layer 2">
      <G data-name="monitor">
        <Path d="M19 3H5a3 3 0 0 0-3 3v5h20V6a3 3 0 0 0-3-3zM2 14a3 3 0 0 0 3 3h6v2H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2h-4v-2h6a3 3 0 0 0 3-3v-1H2z" />
      </G>
    </G>
  </Svg>
)

export default memo(SvgMonitor)
